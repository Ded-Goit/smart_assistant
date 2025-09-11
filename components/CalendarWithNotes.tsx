"use client";

import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { addNote, removeNote, editNote } from "@/store/notesSlice";
import { Button } from "@/components/Ui/button";

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
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              Додати нотатку {selectedDate}
            </h2>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4"
              placeholder="Введи нотатку..."
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpenAdd(false)}>
                Скасувати
              </Button>
              <Button onClick={handleSave}>Зберегти</Button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка видалення */}
      {openDelete && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Видалити нотатку?</h2>
            <p className="mb-4">
              "{selectedEvent.title}" ({selectedEvent.date})
            </p>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpenDelete(false)}>
                Скасувати
              </Button>
              <Button variant="destructive" onClick={handleDelete}>
                Видалити
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Модалка редагування */}
      {openEdit && selectedEvent && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Редагувати нотатку</h2>
            <textarea
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
              className="w-full border rounded-lg p-2 mb-4"
              placeholder="Зміни текст..."
            />
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setOpenEdit(false)}>
                Скасувати
              </Button>
              <Button onClick={handleEdit}>Зберегти</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
