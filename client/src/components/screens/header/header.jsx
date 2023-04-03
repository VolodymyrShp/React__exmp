import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__top}>
        <div className={styles.top__info}>
          <div className={styles.top__text}>
            <p>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </p>
            <button href="" className="shop__btn">
              ShopNow
            </button>
          </div>
          <div className={styles.header__lang}>
            <select name="language" id="language__dropdown">
              <option value="English">English</option>
              <option value="Ukrainian">Ukrainian</option>
            </select>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.header__inner}>
          <div className={styles.menu}>
            <p className={styles.logo}>Exclusive</p>
            <nav>
              <ul className={styles.list}>
                <li className={styles.list__item}>
                  <Link to="/" className={styles.list__link}>
                    Home
                  </Link>
                </li>
                <li className={styles.list__item}>
                  <a href="" className={styles.list__link}>
                    Contact
                  </a>
                </li>
                <li className={styles.list__item}>
                  <a href="" className={styles.list__link}>
                    About
                  </a>
                </li>
                <li className={styles.list__item}>
                  <Link to='/signup' href="" className={styles.list__link}>
                    Sign Up
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className={styles.header__search}>
            <div className={styles.search__field}>
              <input type="search" placeholder="What are you looking for?" />
              <button type="submit">
                <img src="Component 2.svg" alt="" />
              </button>
            </div>
            <div className={styles.search__icon}>
              <img src="wishlist.svg" alt="" />
              <img src="cart.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
