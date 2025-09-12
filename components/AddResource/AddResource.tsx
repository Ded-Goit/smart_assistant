import { useState } from "react";
import { createResurse } from "@/lib/api/apiResurse";
import toast from "react-hot-toast";
import css from "./AddResource.module.css"
import { IoIosAddCircleOutline } from "react-icons/io";

interface ResurseListProps {
  fetchResurses: () => Promise<void>;
}

export default function AddResourse() {
  const [isAdding, setIsAdding] = useState(false);
  const [form, setForm] = useState({
    resurseName: "",
    category: "",
    resurse: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createResurse({
        resurseName: form.resurseName,
        category: form.category || "Favorite",
        resurse: form.resurse || "",
      });
      toast.success("Resource added");
      setIsAdding(false);
      setForm({ resurseName: "", category: "", resurse: "" });
      // fetchResurses();
    } catch (err: any) {
      toast.error(err?.message || "Error added");
    }
  };

  return (
    <div className={css.addtresurse}>
      {isAdding ? (
        <form onSubmit={handleSubmit} className={css.form}>
          <div className={css.fieldForm}>
            <input
              type="text"
              name="resurseName"
              value={form.resurseName}
              onChange={handleChange}
              placeholder="Resource'sname"
              className={css.field}
              required
            />
            <input
              type="text"
              name="category"
              value={form.category}
              onChange={handleChange}
              placeholder="Category"
              className={css.field}
            />
            <input
              type="text"
              name="resurse"
              value={form.resurse}
              onChange={handleChange}
              placeholder="additional info"
              className={css.field}
            />
          </div>
      
          <div className={css.btnPart}>
            <button type="submit" className={css.btnAdd}>
              Add
            </button>
            <button
              type="button"
              onClick={() => setIsAdding(false)}
              className={css.btnCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)} className={css.btn}>
          <IoIosAddCircleOutline className={css.btnIcon} size={20} />
          <p className={css.btnTxt}>Resourses</p>
        </button>
      )}
    </div>
  );
}
