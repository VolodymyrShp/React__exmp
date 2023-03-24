import styles from './Home.module.css'

function App() {
  return (
    <div>
      <header >
        <div className={styles.header__top}>
          <div>
            <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>
            <a href="">ShopNow</a>
          </div>
          <div>
            <select name="language" id="language__dropdown">
              <option value="English">English</option>
              <option value="Ukranian">Ukranian</option>
            </select>
          </div>
        </div>
        <div>
          <div>
            <p>Exclusive</p>
            <div>
              <a href="">Home</a><a href="">Contact</a><a href="">About</a><a href="">Sign Up</a>
            </div>
          </div>
          <div>
            <input type="search" />
            <div>
              <img src="wishlist.svg" alt="" />
              <img src="cart.svg" alt="" />
              <img src="user.svg" alt="" />
            </div>
          </div>
        </div>
      </header>
      <section>
        <div>
          <a href="">Woman’s Fashion</a>
          <a href="">Men’s Fashion</a>
          <a href="">Electronics</a>
          <a href="">Home & Lifestyle</a>
          <a href="">Medicine</a>
          <a href="">Sports & Outdoor</a>
          <a href="">Baby’s & Toys</a>
          <a href="">Groceries & Pets</a>
          <a href="">Health & Beauty</a>
        </div>
        <div>
          {/* Slider Placeholder */}
        </div>
      </section>
    </div>
  )
}

export default App
