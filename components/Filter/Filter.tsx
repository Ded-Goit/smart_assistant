"use client";

import { useEffect, useState } from "react";
import { getAllResurses, changeResurse, delResurseId } from "@/lib/api/apiResurse";
import { CiSearch } from "react-icons/ci";
import { Toaster, toast } from "react-hot-toast";
import css from "./Filter.module.css";
import AddResourse from "../AddResource/AddResource";

interface Resurse {
  _id: string;
  resurseName?: string;
  category?: string;
  resurse?: string;
}

export default function Filter() {
  const [resurses, setResurses] = useState<Resurse[]>([]);
  const [filtered, setFiltered] = useState<Resurse[]>([]);
  const [filters, setFilters] = useState({ resurseName: "", category: "" });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editFields, setEditFields] = useState({
    resurseName: "",
    category: "",
    resurse: "",
  });

  // const fetchResurses = async () => {
  //   try {
  //     const response = await getAllResurses();
  //     const items = response.data?.data || [];
  //     setResurses(items);
  //     setFiltered(items);
  //   } catch (err) {
  //     console.error("Ошибка загрузки:", err);
  //   }
  // };

  // useEffect(() => {
  //   fetchResurses();
  // }, []);

  // useEffect(() => {
  //   let f = resurses;

  //   if (filters.resurseName) {
  //     f = f.filter((r) =>
  //       (r.resurseName || "")
  //         .toLowerCase()
  //         .includes(filters.resurseName.toLowerCase())
  //     );
  //   }

  //   if (filters.category) {
  //     f = f.filter((r) =>
  //       (r.category || "")
  //         .toLowerCase()
  //         .includes(filters.category.toLowerCase())
  //     );
  //   }

  //   setFiltered(f);
  // }, [filters, resurses]);

  // const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFilters((prev) => ({ ...prev, [name]: value }));
  // };

  const fetchResurses = async () => {
    try {
      const response = await getAllResurses();
      const items = response.data?.data || [];
      setResurses(items);
      setFiltered(items);
    } catch (err) {
      console.error("Ошибка загрузки:", err);
    }
  };

  useEffect(() => {
    fetchResurses();
  }, []);

  // Фильтрация
  useEffect(() => {
    let f = resurses;
    if (filters.resurseName) {
      f = f.filter((r) =>
        (r.resurseName || "")
          .toLowerCase()
          .includes(filters.resurseName.toLowerCase())
      );
    }
    if (filters.category) {
      f = f.filter((r) =>
        (r.category || "")
          .toLowerCase()
          .includes(filters.category.toLowerCase())
      );
    }
    setFiltered(f);
  }, [filters, resurses]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  // --- Редактирование ---
  const handleStartEdit = (item: Resurse) => {
    setEditingId(item._id);
    setEditFields({ resurseName: "", category: "", resurse: "" });
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
      toast("Нечего обновлять");
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

  // --- Удаление ---
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
    <div className={css.main}>
      <h2 className={css.title}>Resources</h2>
      <div className={css.filter}>
        <div className={css.fieldCover}>
          <input
            type="text"
            name="resurseName"
            value={filters.resurseName}
            onChange={handleFilterChange}
            placeholder="Name"
            className={css.fileld}
          />
          <CiSearch className={css.filterPic} size={17} />
        </div>
        <div className={css.fieldCover}>
          <input
            type="text"
            name="category"
            value={filters.category}
            onChange={handleFilterChange}
            placeholder="Category"
            className={css.fileld}
          />
          <CiSearch className={css.filterPic} size={17} />
        </div>
      </div>
      <div className={css.addFile}>
        <h2 className={css.title}>All Files</h2>
        <AddResourse />
      </div>

      <table className={css.table}>
        <thead>
          <tr className={css.tblColm}>
            <th className={css.columName}>Resurse Name</th>
            <th className={css.columName}>Category</th>
            <th className={css.columName}>Resurse</th>
            <th className={css.columNameBtn}>Edit</th>
            <th className={css.columNameBtn}>Delete</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((item) => (
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
                    <input
                      name="resurse"
                      placeholder={item.resurse ?? "resurse"}
                      value={editFields.resurse}
                      onChange={handleChangeField}
                      className={css.input}
                      rows={3}
                    />
                  </td>
                  <td colSpan={2}>
                    <div className={css.controls}>
                      <button onClick={() => handleSubmitEdit(item._id, item)}>
                        💾
                      </button>
                      <button onClick={handleCancelEdit}>✖ Cancel</button>
                    </div>
                  </td>
                </>
              ) : (
                <>
                  <td>{item.resurseName || "No name"}</td>
                  <td>{item.category || "—"}</td>
                  <td>{item.resurse || "—"}</td>
                  <td>
                    <button
                      onClick={() => handleStartEdit(item)}
                      className={css.btnTbl}
                    >
                      <svg className={css.icon} width="24" height="24">
                        <use href="/sprite.svg#icon-edit"></use>
                      </svg>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className={css.btnTbl}
                    >
                      <svg className={css.icon} width="24" height="24">
                        <use href="/sprite.svg#icon-del"></use>
                      </svg>
                    </button>
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>

      <Toaster />
    </div>
  );
}
