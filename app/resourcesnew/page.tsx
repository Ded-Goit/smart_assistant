"use client";

import { motion } from "framer-motion";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Sidebar from "@/components/Sidebar/Sidebar";
import Logo from "@/components/Logo/logo";
import styles from "./resourcesnew.module.css";
import Image from "next/image";
import Link from "next/link";
import MobileHeader from "@/components/MobileHeader/MobileHeader";

export default function ResourcesnewPage() {
  return (
    <section className={styles.wrapper}>
      {/* Sidebar тільки на планшеті і вище */}
      <aside className={styles.sidebar}>
        <Sidebar />
      </aside>

      {/* Контентна частина */}
      <div className={styles.content}>
        <div className={styles.mobileheader}>
          <MobileHeader />
        </div>
        <div className={styles["container my"]}>
          <div className={styles.resources_a_search}>
            <h2 className={`${styles.profiletitle} h2`}>Resources</h2>
            <a href="#" className={`${styles.resources_a} h2`}>
              Resources
            </a>
            <div className={styles.resources_search}>
              <svg
                className={styles["resources_search-icon"]}
                width="18"
                height="18"
              >
                <use href="/icons/sprite2.svg#icon-Vector-8"></use>
              </svg>
              <input
                type="text"
                className="resources_search-input"
                placeholder="Search..."
              />
            </div>
          </div>
          {/* <!-- блок два початок --> */}
          <div className={styles.custom_block}>
            <p className={styles.text_left}>Quick Access</p>
            <div className={styles.right_group}>
              <button className={styles.add_button} aria-label="Add folder">
                <svg className={styles.custom_icon} width="18" height="18">
                  <use href="/icons/sprite2.svg#icon-plus"></use>
                </svg>
              </button>
              <p className={styles.text_right}>Add folder</p>
              <button className={styles.arrow_left}>
                <svg width="16" height="16">
                  <use href="/icons/sprite2.svg#icon-arrow-left"></use>
                </svg>
              </button>
              <button className={styles.arrow_right}>
                <svg width="16" height="16">
                  <use href="/icons/sprite2.svg#icon-arrow-right"></use>
                </svg>
              </button>
            </div>
          </div>
          {/* <!-- блок два кінець --> */}

          {/* <!-- фото частина початок --> */}
          <div className={styles.cards_wrapper}>
            <div className={styles.custom_card}>
              <div className={styles.background_block}></div>
              <div className={styles.photo_block}></div>
              <div className={styles.overlay_block}></div>

              {/* <!-- Основна іконка для мобільних --> */}
              <svg
                className={styles["main_icon mobile"]}
                width="70"
                height="35"
              >
                <use href="/icons/sprite2.svg#icon-Rectangle-4141"></use>
              </svg>

              {/* <!-- Основна іконка для десктопів --> */}
              <svg
                className={styles["main_icon desktop"]}
                width="221"
                height="144"
              >
                <use
                  className="use-d"
                  href="/icons/sprite2.svg#icon-Rectangle-4141-2"
                ></use>
              </svg>

              {/* <!-- Текст поверх іконки --> */}
              <span className={styles.icon_text}>Q&A</span>

              {/* <!-- Хрестик зі спрайту --> */}
              <svg className={styles.hover_button} width="13" height="13">
                <use className="use_2" href="/icons/sprite2.svg#icon-x-1"></use>
              </svg>
            </div>

            <div className={styles.custom_card}>
              <div className={styles.background_block}></div>
              <div className={styles.photo_block}></div>
              <div className={styles.overlay_block}></div>

              {/* <!-- Основна іконка для мобільних --> */}
              <svg
                className={styles["main_icon mobile"]}
                width="70"
                height="35"
              >
                <use href="/icons/sprite2.svg#icon-Rectangle-4141"></use>
              </svg>

              {/* <!-- Основна іконка для десктопів --> */}
              <svg
                className={styles["main_icon desktop"]}
                width="221"
                height="144"
              >
                <use
                  className="use-d"
                  href="/icons/sprite2.svg#icon-Rectangle-4141-2"
                ></use>
              </svg>

              {/* <!-- Текст поверх іконки --> */}
              <span className={styles.icon_text}>Design</span>

              {/* <!-- Хрестик зі спрайту --> */}
              <svg className={styles.hover_button} width="13" height="13">
                <use className="use_2" href="/icons/sprite2.svg#icon-x-1"></use>
              </svg>
            </div>

            <div className={styles.custom_card}>
              <div className={styles.background_block}></div>
              <div className={styles.photo_block}></div>
              <div className={styles.overlay_block}></div>

              {/* <!-- Основна іконка для мобільних --> */}
              <svg
                className={styles["main_icon mobile"]}
                width="70"
                height="35"
              >
                <use href="/icons/sprite2.svg#icon-Rectangle-4141"></use>
              </svg>

              {/* <!-- Основна іконка для десктопів --> */}
              <svg
                className={styles["main_icon desktop"]}
                width="221"
                height="144"
              >
                <use
                  className={styles["use-d"]}
                  href="/icons/sprite2.svg#icon-Rectangle-4141-2"
                ></use>
              </svg>

              {/* <!-- Текст поверх іконки --> */}
              <span className={styles.icon_text}>Developer</span>

              {/* <!-- Хрестик зі спрайту --> */}
              <svg className={styles.hover_button} width="13" height="13">
                <use
                  className={styles.use_2}
                  href="/icons/sprite2.svg#icon-x-1"
                ></use>
              </svg>
            </div>

            <div className={styles.custom_card}>
              <div className={styles.background_block}></div>
              <div className={styles.photo_block}></div>
              <div className={styles.overlay_block}></div>

              {/* <!-- Основна іконка для мобільних --> */}
              <svg
                className={styles["main_icon mobile"]}
                width="70"
                height="35"
              >
                <use href="/icons/sprite2.svg#icon-Rectangle-4141"></use>
              </svg>

              {/* <!-- Основна іконка для десктопів --> */}
              <svg
                className={styles["main_icon desktop"]}
                width="221"
                height="144"
              >
                <use
                  className="use-d"
                  href="/icons/sprite2.svg#icon-Rectangle-4141-2"
                ></use>
              </svg>

              {/* <!-- Текст поверх іконки --> */}
              <span className={styles.icon_text}>HTML</span>

              {/* <!-- Хрестик зі спрайту --> */}
              <svg className={styles.hover_button} width="13" height="13">
                <use
                  className={styles.use_2}
                  href="/icons/sprite2.svg#icon-x-1"
                ></use>
              </svg>
            </div>
          </div>

          {/* <!-- фото частина кінець --> */}
          {/* <!-- нижня частина початок --> */}
          <div className={styles.bar}>
            <h2 className={`${styles.bar_title} h2`}>All Files</h2>

            <button className={styles.bar_btn}>
              <svg className={styles.bar_icon} width="16" height="16">
                <use href="/icons/sprite2.svg#icon-plus"></use>
              </svg>
              Add resources
            </button>
          </div>

          {/* <!-- нижня частина кінець --> */}

          {/* <!-- таблиця початок --> */}
          <div className={styles.table_container}>
            <table className={styles["table-cnt"]}>
              <thead>
                <tr>
                  <th className={styles.table_container_th}>Name</th>
                  <th className={styles.table_container_th}>Link</th>
                  <th className={styles.table_container_th}>Date added</th>
                  <th className={styles.table_container_th}>Note</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.table_container_td}>Behance</td>
                  <td className={styles.table_container_td}>behance.net</td>
                  <td className={styles.table_container_td}>29.08.2025</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_padingr"]
                    }
                  >
                    Gallery of design projects
                  </td>
                  <td className={styles["table_container_td menu_cell"]}>⋮</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_svg"]
                    }
                  >
                    <svg
                      className={styles.social_icon_menu_td}
                      width="33"
                      height="31"
                    >
                      <use href="/icons/sprite2.svg#icon-Group-5"></use>
                    </svg>
                    <svg
                      className={styles["social_icon_menu-td_two"]}
                      width="24"
                      height="28"
                    >
                      <use href="/icons/sprite2.svg#icon-Vector-9"></use>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_container_td}>Dribbble</td>
                  <td className={styles.table_container_td}>dribbble.com</td>
                  <td className={styles.table_container_td}>29.08.2025</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_padingr"]
                    }
                  >
                    UI/UX inspiration
                  </td>
                  <td className={styles["table_container_td menu_cell"]}>⋮</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_svg"]
                    }
                  >
                    <svg
                      className={styles["social_icon_menu_td"]}
                      width="33"
                      height="31"
                    >
                      <use href="/icons/sprite2.svg#icon-Group-5"></use>
                    </svg>
                    <svg
                      className={styles["social_icon_menu-td_two"]}
                      width="24"
                      height="28"
                    >
                      <use href="/icons/sprite2.svg#icon-Vector-9"></use>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_container_td}>Flaticon</td>
                  <td className={styles.table_container_td}>flaticon.com</td>
                  <td className={styles.table_container_td}>29.08.2025</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_padingr"]
                    }
                  >
                    Free icons
                  </td>
                  <td className={styles["table_container_td menu_cell"]}>⋮</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_svg"]
                    }
                  >
                    <svg
                      className={styles["social_icon_menu_td"]}
                      width="33"
                      height="31"
                    >
                      <use href="/icons/sprite2.svg#icon-Group-5"></use>
                    </svg>
                    <svg
                      className={styles["social_icon_menu-td_two"]}
                      width="24"
                      height="28"
                    >
                      <use href="/icons/sprite2.svg#icon-Vector-9"></use>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className={styles.table_container_td}>Icons8</td>
                  <td className={styles.table_container_td}>icons8.com</td>
                  <td className={styles.table_container_td}>29.08.2025</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_padingr"]
                    }
                  >
                    Icons and illustrations
                  </td>
                  <td className={styles["table_container_td menu_cell"]}>⋮</td>
                  <td
                    className={
                      styles["table_container_td table_container_td_svg"]
                    }
                  >
                    <svg
                      className={styles["social_icon_menu_td"]}
                      width="33"
                      height="31"
                    >
                      <use href="/icons/sprite2.svg#icon-Group-5"></use>
                    </svg>
                    <svg
                      className={styles["social_icon_menu-td_two"]}
                      width="24"
                      height="28"
                    >
                      <use href="/icons/sprite2.svg#icon-Vector-9"></use>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          {/* <!-- таблиця кінець --> */}
        </div>
      </div>
    </section>
  );
}
