import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div  style={{zIndex:"1000"}}  className="fiveBlocks">
          <div className="requisites">
            <div className="logo">
              <svg
                width="34"
                height="75"
                viewBox="0 0 34 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.68 50.9C10.68 52.06 10.8 52.92 11.04 53.48C11.32 54 11.8 54.36 12.48 54.56C13.2 54.76 14.32 54.86 15.84 54.86H23.52C27.48 54.86 29.82 52.32 30.54 47.24C30.54 47.12 30.64 47.08 30.84 47.12C31.08 47.12 31.2 47.18 31.2 47.3C30.84 50.46 30.66 53.06 30.66 55.1C30.66 55.42 30.6 55.66 30.48 55.82C30.36 55.94 30.12 56 29.76 56H2.16C2.08 56 2.04 55.88 2.04 55.64C2.04 55.4 2.08 55.28 2.16 55.28C3.72 55.28 4.86 55.18 5.58 54.98C6.34 54.78 6.84 54.4 7.08 53.84C7.36 53.24 7.5 52.34 7.5 51.14V23.36C7.5 22.16 7.36 21.28 7.08 20.72C6.84 20.16 6.34 19.78 5.58 19.58C4.86 19.34 3.72 19.22 2.16 19.22C2.08 19.22 2.04 19.1 2.04 18.86C2.04 18.62 2.08 18.5 2.16 18.5L5.1 18.56C6.78 18.64 8.1 18.68 9.06 18.68C10.14 18.68 11.52 18.64 13.2 18.56L16.02 18.5C16.1 18.5 16.14 18.62 16.14 18.86C16.14 19.1 16.1 19.22 16.02 19.22C14.46 19.22 13.3 19.34 12.54 19.58C11.82 19.78 11.32 20.18 11.04 20.78C10.8 21.34 10.68 22.22 10.68 23.42V50.9Z"
                  fill="#8A8686"
                />
                <path
                  d="M30.55 35.25C30.55 35.35 30.45 35.4 30.25 35.4C30.0833 35.4 30 35.35 30 35.25C30 33.55 29.55 32.2 28.65 31.2C27.75 30.2 26.5667 29.7 25.1 29.7H21.65C20.4167 29.7 19.5 29.7833 18.9 29.95C18.3 30.1167 17.8833 30.4167 17.65 30.85C17.4167 31.2833 17.3 31.95 17.3 32.85V43.85H22.75C24.45 43.85 25.65 43.6 26.35 43.1C27.05 42.5667 27.4 41.6667 27.4 40.4C27.4 40.3333 27.5 40.3 27.7 40.3C27.9 40.3 28 40.3333 28 40.4L27.95 44.35C27.95 45.3167 27.9667 46.0333 28 46.5L28.05 48.85C28.05 48.9167 27.95 48.95 27.75 48.95C27.55 48.95 27.45 48.9167 27.45 48.85C27.45 47.35 27.0833 46.3 26.35 45.7C25.65 45.1 24.3833 44.8 22.55 44.8H17.3V55.75C17.3 56.8167 17.45 57.6 17.75 58.1C18.05 58.5667 18.6167 58.9 19.45 59.1C20.3167 59.3 21.6833 59.4 23.55 59.4C23.65 59.4 23.7 59.5 23.7 59.7C23.7 59.9 23.65 60 23.55 60C22.1833 60 21.1167 59.9833 20.35 59.95L16 59.9L12.7 59.95C12.1 59.9833 11.2667 60 10.2 60C10.1333 60 10.1 59.9 10.1 59.7C10.1 59.5 10.1333 59.4 10.2 59.4C11.5 59.4 12.45 59.3167 13.05 59.15C13.6833 58.9833 14.1 58.6667 14.3 58.2C14.5333 57.7 14.65 56.95 14.65 55.95V32.8C14.65 31.8 14.5333 31.0667 14.3 30.6C14.1 30.1333 13.6833 29.8167 13.05 29.65C12.45 29.45 11.5 29.35 10.2 29.35C10.1333 29.35 10.1 29.25 10.1 29.05C10.1 28.85 10.1333 28.75 10.2 28.75H30C30.3 28.75 30.45 28.9 30.45 29.2L30.55 35.25Z"
                  fill="white"
                />
              </svg>
            </div>
            <div className="title">
              <h1>РЕКВИЗИТЫ</h1>
            </div>
            <p className="pointer republic" style={{ width: "244px" }}>
              ООО «Ловефлове» 220035, Республика Беларусь, г. Минск, ул.
              Тимирязева д. 67, комн. 112 (пом.11) УНП 193263781, р/с
              BY55MTBK30120001093300096372 ЗАО «МТБанк», БИК MTBKBY22 220007, г.
              Минск, улица Толстого
            </p>
          </div>
          <div className="catalog">
            <div className="title">
              <h1>КАТАЛОГ</h1>
            </div>
            <div className="blockColumn">
              <p className="pointer">ПОПУЛЯРНОЕ</p>
              <p className="pointer">СУХОЦВЕТЫ</p>
              <p className="pointer">БУКЕТЫ РОЗ</p>
              <p className="pointer">КОМПОЗИЦИИ ИЗ ЦВЕТОВ</p>
              <p className="pointer">ИНДИВИДУАЛЬНЫЙ БУКЕТ</p>
              <p className="pointer">БУКЕТ НА ПРАЗДНИК</p>
              <p className="pointer">УПАКОВКА ПОДАРКОВ</p>
              <p className="pointer">ШАРЫ</p>
              <p className="pointer">ОТКРЫТКИ</p>
              <p className="pointer">КОНВЕРТЫ</p>
            </div>
          </div>
          <div className="flower">
            <div className="title">
              <h1>БУКЕТ</h1>
            </div>
            <div className="blockColumn">
              <p className="pointer">ДЛЯ ДЕВУШКИ</p>
              <p className="pointer">ДЛЯ МУЖЧИН</p>
              <p className="pointer">ДЛЯ ЖЕНЫ</p>
              <p className="pointer">ДЛЯ МАМЫ</p>
              <p className="pointer">ДЛЯ КОЛЛЕГИ</p>
              <p className="pointer">ДЛЯ НАЧАЛЬНИКА</p>
              <p className="pointer">ДЛЯ ДОЧКИ</p>
              <p className="pointer">ДЛЯ ДЕТЕЙ</p>
              <p className="pointer">ДЛЯ ЖЕНЩИНЫ</p>
            </div>
          </div>
          <div className="navigation">
            <div className="title">
              <div className="delPay">
                <h1>ДОСТАВКА И ОПЛАТА</h1>
              </div>
              <div className="about">
                <h1>О НАС</h1>
              </div>
              <div className="faq">
                <h1>FAQ</h1>
              </div>
              <div className="contact">
                <h1>КОНТАКТЫ</h1>
              </div>
              <div className="client">
                <Link to="/client">
                  <h1>ДЛЯ КОРПЕРАТИВНЫХ КЛИЕНТОВ</h1>
                </Link>
              </div>
            </div>
          </div>
          <div className="socialMedia">
            <div className="gmail">
              <div className="title">
                <h1>ZAKAZ@LOVERFLOWER.BY</h1>
              </div>
              <p className="mediaGrey">
                Доставка 24/7 по договоренности с оператором
              </p>
            </div>
            <div className="street">
              <div className="title">
                <h1>УЛ. ТИМИРЯЗЕВА 67</h1>
              </div>
              <p className="mediaGrey">10:00 ДО 21:00</p>
              <p className="mediaGrey">БЕЗ ВЫХОДНЫХ</p>
            </div>
            <div className="number">
              <div className="title">
                <h1>+375 (29) 113-69-69</h1>
              </div>
              <p className="mediaGrey">ПРИЕМ ЗВОНКА КРУГЛОСУТОЧНО</p>
            </div>
            <div className="mediaSocial">
              <div className="instagramIcon">
                <svg
                  width="32"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.9968 7.9983C9.79333 7.9983 7.99515 9.79651 7.99515 12C7.99515 14.2035 9.79333 16.0017 11.9968 16.0017C14.2002 16.0017 15.9984 14.2035 15.9984 12C15.9984 9.79651 14.2002 7.9983 11.9968 7.9983ZM23.9987 12C23.9987 10.3429 24.0137 8.70077 23.9206 7.04665C23.8275 5.12536 23.9687 2.83748 22.5638 1.43253C21.1559 0.0245791 18.8743 0.172008 16.953 0.0789456C15.2959 -0.0141173 13.6539 0.000892936 11.9998 0.000892936C10.3427 0.000892936 8.70061 -0.0141173 7.04652 0.0789456C5.12526 0.172008 2.83485 0.0275812 1.42992 1.43253C0.0219988 2.84048 0.172005 5.12536 0.0789442 7.04665C-0.014117 8.70377 0.000892919 10.3459 0.000892919 12C0.000892919 13.6541 -0.014117 15.2992 0.0789442 16.9533C0.172005 18.8746 0.0250008 21.1619 1.42992 22.5668C2.83785 23.9748 5.12526 23.828 7.04652 23.9211C8.70361 24.0141 10.3457 23.9991 11.9998 23.9991C13.6569 23.9991 15.2989 24.0141 16.953 23.9211C18.8743 23.828 21.1589 23.9718 22.5638 22.5668C23.9717 21.1589 23.8275 18.8746 23.9206 16.9533C24.0167 15.2992 23.9987 13.6571 23.9987 12ZM11.9968 18.1572C8.58954 18.1572 5.83973 15.4073 5.83973 12C5.83973 8.5927 8.58954 5.84284 11.9968 5.84284C15.404 5.84284 18.1538 8.5927 18.1538 12C18.1538 15.4073 15.404 18.1572 11.9968 18.1572ZM18.406 7.02864C17.6105 7.02864 16.968 6.38621 16.968 5.59067C16.968 4.79513 17.6105 4.1527 18.406 4.1527C19.2015 4.1527 19.8439 4.79513 19.8439 5.59067C19.8442 5.77957 19.8071 5.96667 19.735 6.14124C19.6628 6.31581 19.5569 6.47442 19.4233 6.608C19.2897 6.74157 19.1311 6.84748 18.9565 6.91967C18.782 6.99185 18.5949 7.02888 18.406 7.02864Z"
                    fill="#43FFD2"
                  />
                </svg>
              </div>
              <div className="whatsappIcon">
                <svg
                  width="32"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.988 5.45667C23.978 4.94182 23.9367 4.42804 23.8644 3.9182C23.7782 3.4647 23.6317 3.02477 23.4288 2.61013C22.9846 1.73325 22.2726 1.02074 21.396 0.576029C20.984 0.374074 20.547 0.227978 20.0964 0.141607C19.5827 0.0677825 19.0649 0.0257005 18.546 0.0156008C18.3264 0.00720037 18.042 0.00360021 17.91 0.00360021L6.0924 0C5.9604 0 5.676 0.00360017 5.4564 0.0120006C4.94157 0.021921 4.42781 0.0631995 3.918 0.135607C3.46452 0.221819 3.02462 0.368326 2.61 0.571229C1.73321 1.01549 1.02076 1.72756 0.576 2.60413C0.374108 3.01613 0.228022 3.4532 0.1416 3.90379C0.0674439 4.41752 0.0249637 4.93533 0.0144001 5.45427C0.0072001 5.67388 0.00240011 5.9583 0.00240011 6.0903L0 17.9085C0 18.0405 0.00359999 18.3249 0.012 18.5445C0.0219199 19.0594 0.0631963 19.5732 0.1356 20.083C0.221822 20.5365 0.368321 20.9764 0.5712 21.3911C1.01544 22.2679 1.72747 22.9804 2.604 23.4252C3.01599 23.627 3.45303 23.7731 3.9036 23.8596C4.41732 23.9334 4.9351 23.9755 5.454 23.9856C5.6736 23.994 5.958 23.9976 6.09 23.9976L17.9076 24C18.0396 24 18.324 23.9964 18.5436 23.988C19.0584 23.978 19.5722 23.9368 20.082 23.8644C20.5355 23.7781 20.9754 23.6316 21.39 23.4288C22.2672 22.9847 22.9801 22.2726 23.4252 21.3959C23.6271 20.9839 23.7732 20.5468 23.8596 20.0962C23.9338 19.5825 23.9763 19.0647 23.9868 18.5457C23.994 18.3261 23.9988 18.0417 23.9988 17.9097L24 6.0927C24 5.9607 23.9964 5.67628 23.988 5.45667ZM12.2604 20.3494H12.2568C10.8284 20.3491 9.42282 19.991 8.1684 19.3078L3.6324 20.497L4.8468 16.0652C3.90654 14.4335 3.53085 12.5372 3.77796 10.6702C4.02507 8.80323 4.88119 7.06995 6.21357 5.73908C7.54595 4.40822 9.28016 3.55412 11.1473 3.30922C13.0145 3.06432 14.9103 3.44229 16.5408 4.38453C18.1713 5.32678 19.4454 6.78065 20.1656 8.52074C20.8858 10.2608 21.0118 12.1899 20.5241 14.0089C20.0364 15.8279 18.9622 17.4352 17.4681 18.5816C15.9741 19.7279 14.1436 20.3493 12.2604 20.3494Z"
                    fill="#43FFD2"
                  />
                  <path
                    d="M12.2639 4.68089C10.9932 4.68052 9.7456 5.0206 8.65085 5.66576C7.5561 6.31093 6.65418 7.23762 6.03887 8.34946C5.42357 9.4613 5.11735 10.7177 5.15207 11.988C5.18679 13.2583 5.56117 14.4961 6.23629 15.5726L6.40549 15.8414L5.68669 18.4648L8.37829 17.7591L8.63749 17.9128C9.7332 18.5617 10.9832 18.9041 12.2567 18.904H12.2603C14.1465 18.9043 15.9555 18.1553 17.2894 16.8217C18.6234 15.4882 19.373 13.6793 19.3733 11.793C19.3736 9.90678 18.6246 8.09765 17.2911 6.76364C15.9576 5.42963 14.1489 4.68001 12.2627 4.67969L12.2639 4.68089ZM16.4447 14.8454C16.2874 15.1052 16.078 15.3296 15.8298 15.5045C15.5816 15.6794 15.2998 15.8011 15.0023 15.8618C14.5531 15.9389 14.0921 15.9101 13.6559 15.7778C13.2422 15.6489 12.8357 15.4983 12.4379 15.3266C10.9616 14.5857 9.70321 13.4737 8.78629 12.0997C8.2861 11.4636 7.98248 10.6953 7.91269 9.88915C7.90693 9.55639 7.97053 9.22608 8.09945 8.91925C8.22838 8.61243 8.41979 8.33583 8.66149 8.10706C8.73292 8.02557 8.82043 7.95973 8.91852 7.91368C9.01662 7.86762 9.12317 7.84235 9.23149 7.83945C9.37309 7.83945 9.51589 7.83945 9.64069 7.84665C9.77269 7.85265 9.94789 7.79624 10.1207 8.21387C10.3007 8.64109 10.7279 9.69354 10.7807 9.80034C10.8146 9.85634 10.834 9.9199 10.8371 9.98527C10.8403 10.0507 10.8271 10.1158 10.7987 10.1748C10.7449 10.3032 10.6729 10.4232 10.5851 10.5312C10.4771 10.656 10.3607 10.8096 10.2647 10.9056C10.1567 11.0124 10.0463 11.1276 10.1699 11.3412C10.4909 11.8909 10.8917 12.39 11.3591 12.8221C11.8663 13.273 12.4482 13.632 13.0787 13.8829C13.2923 13.991 13.4171 13.9718 13.5419 13.8289C13.6667 13.6861 14.0759 13.2049 14.2187 12.9913C14.3615 12.7777 14.5031 12.8137 14.6987 12.8845C14.8943 12.9553 15.9467 13.4725 16.1603 13.5805C16.3739 13.6885 16.5167 13.7401 16.5695 13.8289C16.628 14.1727 16.5846 14.526 16.4447 14.8454Z"
                    fill="#43FFD2"
                  />
                </svg>
              </div>
              <div className="viberIcon">
                <svg
                  width="32"
                  height="42"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.0092 24H3.99402C1.99212 24 1.46504 23.707 0.879123 23.1211C0.293201 22.5352 -0.00977489 22 0.000240665 20V4C0.000240665 2 0.293201 1.46484 0.879123 0.878906C1.46504 0.292969 1.99212 0 3.99402 0H20.0092C20.8373 0 22.0245 0.0124413 23.012 1C23.9996 1.98756 23.9996 3.17188 23.9996 4V20C24.013 22 23.7066 22.5352 23.1207 23.1211C22.5348 23.707 22.0111 24 20.0092 24ZM7.50003 9V6.75C7.50003 6.32812 7.37113 5.91406 7.11333 5.50781C6.85552 5.10156 6.57037 4.8125 6.25788 4.64062C5.94539 4.46875 5.70321 4.46094 5.53134 4.61719L3.82045 6.35156C3.35171 6.82031 3.08609 7.44922 3.02359 8.23828C2.9611 9.02734 3.08219 9.88672 3.38687 10.8164C3.69155 11.7461 4.17981 12.7305 4.85167 13.7695C5.52353 14.8086 6.32819 15.7969 7.26567 16.7344C8.20314 17.6719 9.19139 18.4766 10.2304 19.1484C11.2695 19.8203 12.2538 20.3125 13.1835 20.625C14.1131 20.9375 14.9725 21.0625 15.7615 21C16.5506 20.9375 17.1795 20.6719 17.6482 20.2031L19.3825 18.4688C19.5388 18.3125 19.531 18.0742 19.3591 17.7539C19.1872 17.4336 18.8982 17.1445 18.4919 16.8867C18.0857 16.6289 17.6716 16.5 17.2498 16.5H14.9998L13.4764 17.4375C12.7733 17.25 11.9062 16.7422 10.8749 15.9141C9.84372 15.0859 8.91406 14.1562 8.08595 13.125C7.25785 12.0938 6.75005 11.2266 6.56256 10.5234L7.50003 9ZM16.4529 12.75L17.9763 13.0078C17.8513 11.1328 17.1248 9.53125 15.7967 8.20312C14.4686 6.875 12.8749 6.14844 11.0156 6.02344L11.2499 7.54688C12.6093 7.71875 13.7733 8.28906 14.742 9.25781C15.7107 10.2266 16.281 11.3906 16.4529 12.75ZM11.5312 9.11719L11.8124 10.8047C12.4218 11.1016 12.8827 11.5625 13.1952 12.1875L14.8826 12.4688C14.6795 11.6406 14.2772 10.9258 13.6756 10.3242C13.0741 9.72266 12.3593 9.32031 11.5312 9.11719ZM10.5 3L10.7578 4.52344C12.3202 4.55469 13.7616 4.96484 15.0819 5.75391C16.4021 6.54297 17.4568 7.59766 18.2458 8.91797C19.0349 10.2383 19.445 11.6797 19.4763 13.2422L20.9997 13.5C20.9997 12.0781 20.7223 10.7188 20.1677 9.42188C19.613 8.125 18.8669 7.00781 17.9294 6.07031C16.992 5.13281 15.8748 4.38672 14.578 3.83203C13.2811 3.27734 11.9218 3 10.5 3Z"
                    fill="#43FFD2"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
