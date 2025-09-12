"use client";

import { useEffect, useState } from "react";
import css from "./Resources.module.css";
import {
  getAllResurses,
  changeResurse,
  delResurseId,
} from "@/lib/api/apiResurse";
import { Toaster, toast } from "react-hot-toast";

interface Resurse {
  _id: string;
  resurseName?: string;
  category?: string;
  resurse?: string;
}

export default function Resources() {
  const [resurses, setResurses] = useState<Resurse[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [editFields, setEditFields] = useState({
    resurseName: "",
    category: "",
    resurse: "",
  });

  const fetchResurses = async () => {
    try {
      setLoading(true);
      const res = await getAllResurses();
      const items = res?.data?.data ?? res?.data ?? res;
      setResurses(items);
    } catch (err: any) {
      toast.error(err?.message || "Error download");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResurses();
  }, []);

  const handleStartEdit = (item: Resurse) => {
    setEditingId(item._id);
    setEditFields({
      resurseName: "",
      category: "",
      resurse: "",
    });
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setEditFields({ resurseName: "", category: "", resurse: "" });
  };

  const handleChangeField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditFields((s) => ({ ...s, [name]: value }));
  };

  const handleSubmitEdit = async (id: string, item: Resurse) => {
    const payload: any = {};
    if (editFields.resurseName.trim())
      payload.resurseName = editFields.resurseName.trim();
    if (editFields.category.trim())
      payload.category = editFields.category.trim();
    if (editFields.resurse.trim()) payload.resurse = editFields.resurse.trim();

    if (Object.keys(payload).length === 0) {
      toast("Нечего обновлять (оставьте поля пустыми чтобы не менять).");
      setEditingId(null);
      return;
    }

    try {
      await changeResurse(payload, id);
      toast.success("Ресурс обновлён");
      setEditingId(null);
      fetchResurses();
    } catch (err: any) {
      toast.error(err?.message || "Ошибка обновления");
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Удалить ресурс?")) return;
    try {
      await delResurseId(id);
      toast.success("Ресурс удалён");
      fetchResurses();
    } catch (err: any) {
      toast.error(err?.message || "Ошибка удаления");
    }
  };

  return (
    <>
      <section className={css.covers}>
        <div className={css.filter}>
          <h2>Quick access</h2>
        </div>

        <div className={css.list}>
          <h2>All Files</h2>

          {loading ? (
            <p>Загрузка...</p>
          ) : resurses.length === 0 ? (
            <p>Нет ресурсов</p>
          ) : (
            <table className={css.table}>
              <thead>
                <tr>
                  <th>Resurse Name</th>
                  <th>Category</th>
                  <th>Resurse</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {resurses.map((item) => (
                  <tr key={item._id}>
                    {editingId === item._id ? (
                      <>
                        <td>
                          <input
                            name="resurseName"
                            placeholder={item.resurseName ?? "resurseName"}
                            value={editFields.resurseName}
                            onChange={handleChangeField}
                            className={css.input}
                          />
                        </td>
                        <td>
                          <input
                            name="category"
                            placeholder={item.category ?? "category"}
                            value={editFields.category}
                            onChange={handleChangeField}
                            className={css.input}
                          />
                        </td>
                        <td>
                          <textarea
                            name="resurse"
                            placeholder={item.resurse ?? "resurse"}
                            value={editFields.resurse}
                            onChange={handleChangeField}
                            className={css.textarea}
                            rows={3}
                          />
                        </td>
                        <td colSpan={2}>
                          <div className={css.controls}>
                            <button
                              onClick={() => handleSubmitEdit(item._id, item)}
                            >
                              💾 Сохранить
                            </button>
                            <button onClick={handleCancelEdit}>
                              ✖ Отмена
                            </button>
                          </div>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{item.resurseName || "Без названия"}</td>
                        <td>{item.category || "—"}</td>
                        <td>{item.resurse || "—"}</td>
                        <td>
                          <button onClick={() => handleStartEdit(item)}>
                            ✏️ Изменить
                          </button>
                        </td>
                        <td>
                          <button onClick={() => handleDelete(item._id)}>
                            🗑 Удалить
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </section>

      <Toaster />
    </>
  );
}
