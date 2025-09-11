"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addNote, removeNote, editNote } from "@/store/notesSlice";
import styles from "@/app/calendar/calendar.module.css";

export default function CalendarWithNotes() {
  const dispatch = useDispatch();
  const events = useSelector((state: RootState) => state.notes.events);

  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [note, setNote] = useState("");
  const [openAdd, setOpenAdd] = useState(false);

  const [selectedEvent, setSelectedEvent] = useState<{
    title: string;
    date: string;
  } | null>(null);
  const [openDelete, setOpenDelete] = useState(false);

  const [openEdit, setOpenEdit] = useState(false);
  const [editValue, setEditValue] = useState("");

  const handleDateClick = (info: any) => {
    setSelectedDate(info.dateStr);
    setNote("");
    setOpenAdd(true);
  };

  const handleSave = () => {
    if (selectedDate && note.trim()) {
      dispatch(addNote({ title: note, date: selectedDate }));
    }
    setOpenAdd(false);
  };

  const handleEventClick = (info: any) => {
    const event = { title: info.event.title, date: info.event.startStr };
    setSelectedEvent(event);
    setOpenDelete(true);
  };

  const handleEventDoubleClick = (info: any) => {
    const event = { title: info.event.title, date: info.event.startStr };
    setSelectedEvent(event);
    setEditValue(event.title);
    setOpenEdit(true);
  };

  const handleDelete = () => {
    if (selectedEvent) {
      dispatch(removeNote(selectedEvent));
    }
    setOpenDelete(false);
  };

  const handleEdit = () => {
    if (selectedEvent && editValue.trim()) {
      dispatch(
        editNote({
          old: selectedEvent,
          updated: { ...selectedEvent, title: editValue },
        })
      );
    }
    setOpenEdit(false);
  };

  return (
    <div className="p-4 w-full">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        eventClick={handleEventClick}
        eventDidMount={(info) => {
          info.el.addEventListener("dblclick", () =>
            handleEventDoubleClick(info)
          );
        }}
        events={events}
        height="auto"
      />

      {/* Модалка додавання */}
      {openAdd && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Додати нотатку {selectedDate}</h2>

            <label htmlFor="note" className={styles.modalLabel}>
              Текст нотатки
            </label>
            <textarea
              id="note"
              name="note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className={styles.noteInput}
              placeholder="Введи нотатку..."
            />

            <div className={styles.modalActions}>
              <button
                className={styles.buttonOutline}
                onClick={() => setOpenAdd(false)}
              >
                Скасувати
              </button>
              <button className={styles.buttonPrimary} onClick={handleSave}>
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка видалення */}
      {openDelete && selectedEvent && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Видалити нотатку?</h2>
            <p>
              "{selectedEvent.title}" ({selectedEvent.date})
            </p>
            <div className={styles.modalActions}>
              <button
                className={styles.buttonOutline}
                onClick={() => setOpenDelete(false)}
              >
                Скасувати
              </button>
              <button className={styles.buttonPrimary} onClick={handleDelete}>
                Видалити
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка редагування */}
      {openEdit && selectedEvent && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <h2 className={styles.modalTitle}>Редагувати нотатку</h2>

            <label htmlFor="editNote" className={styles.modalLabel}>
              Текст нотатки
            </label>
            <textarea
              id="editNote"
              name="editNote"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className={styles.noteInput}
              placeholder="Зміни текст..."
            />

            <div className={styles.modalActions}>
              <button
                className={styles.buttonOutline}
                onClick={() => setOpenEdit(false)}
              >
                Скасувати
              </button>
              <button className={styles.buttonPrimary} onClick={handleEdit}>
                Зберегти
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
