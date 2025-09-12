// import { useState } from "react";
// import css from './ResurseItem.module.css'

// export default function ResurseItem({ item, onSave }) {
//   const [isEditing, setIsEditing] = useState(false);
//   const [form, setForm] = useState({
//     resurseName: item.resurseName,
//     category: item.category,
//     resurse: item.resurse,
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSave(item._id, form);
//     setIsEditing(false);
//   };

//   return (
//     <div className={css.list}>

//       {isEditing ? (
//         <form onSubmit={handleSubmit} className="flex flex-col gap-2">
//           <input
//             type="text"
//             name="resurseName"
//             value={form.resurseName}
//             onChange={handleChange}
//             placeholder="Название ресурса"
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//             placeholder="Категория"
//             className="border p-2 rounded"
//           />
//           <input
//             type="text"
//             name="resurse"
//             value={form.resurse}
//             onChange={handleChange}
//             placeholder="Описание/ссылка"
//             className="border p-2 rounded"
//           />

//           <div className="flex gap-2">
//             <button
//               type="submit"
//               className="px-3 py-1 bg-green-500 text-white rounded"
//             >
//               Сохранить
//             </button>
//             <button
//               type="button"
//               onClick={() => setIsEditing(false)}
//               className="px-3 py-1 bg-gray-400 text-white rounded"
//             >
//               Отмена
//             </button>
//           </div>
//         </form>
//       ) : (
//         <div className="flex justify-between items-center">
//           <div>
//             <p>
//               <b>{item.resurseName}</b> ({item.category})
//             </p>
//             <p>{item.resurse}</p>
//           </div>
//           <button
//             onClick={() => setIsEditing(true)}
//             className="px-3 py-1 bg-blue-500 text-white rounded"
//           >
//             Редактировать
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }
