import styles from './Home.module.css'

function App() {
  return (
    <div>
      <header >
        <div className='header__top'>
          <div className='header__top-info'>
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
        <div className='header'>
          <div className='header__menu'>
            <p>Exclusive</p>
            <div>
              <a href="">Home</a><a href="">Contact</a><a href="">About</a><a href="">Sign Up</a>
            </div>
          </div>
          <div className='header__search'>
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
      <section>
        <div>
          <div>
            <p>Today</p>
            <h2>Flesh Sale</h2>
            {/* Timer Placeholder */}
          </div>
          <div>
            <button>Left arr</button>
            <button>Rigth arr</button>
          </div>
        </div>
        <div>
          <div>
            {/* Flesh sale item card func */}
          </div>
          <div>
            <button>
              View all product
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>Categories</p>
            <h2>Browse By Categories</h2>
          </div>
          <div>
            <button>Left</button>
            <button>Rigth</button>
          </div>
        </div>
        <div>
          <div><img src="Category-CellPhone.svg" alt="" /> <a>Phone</a></div>
          <div><img src="Category-Computer.svg" alt="" /> <a>Comuters</a></div>
          <div><img src="Category-SmartWatch.svg" alt="" /> <a>SmartWatch</a></div>
          <div><img src="Category-Camera.svg" alt="" /> <a>Camera</a></div>
          <div><img src="Category-Headphone.svg" alt="" /> <a>HeadPhones</a></div>
          <div><img src="Category-Gamepad.svg" alt="" /> <a>Gaming</a></div>
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>This Month</p>
            <h2>Best Selling Products</h2>
          </div>
          <button>View All</button>
        </div>
        <div>
          {/* Best selling products card func*/}
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>Categories</p>
            <h2>Enhance Your <span>Music Experience</span> </h2>
          </div>
          <div>
            {/* Timer placeholder*/}
            <button>Buy Now</button>
          </div>
        </div>
        <div>
          <img src="Frame 694.svg" alt="" />
        </div>
      </section>
      <section>
        <div>
          <div>
            <p>Our Products</p>
            <h2>Explore Our Product</h2>
          </div>
          <div>
            <button>Left arr</button>
            <button>Rigth arr</button>
          </div>
        </div>
        <div>
          <div>
            {/* Our Product card func */}
          </div>
          <div>
            <button>
              View all product
            </button>
          </div>
        </div>
      </section>
      <section>
        <div>
          <p>Featured</p>
          <h2>New arrival</h2>
        </div>
        <div>
          {/* New product card*/}
        </div>
        <div>
          <div><img src="Frame 701.svg" alt="" /></div>
          <div><img src="Frame 702.svg" alt="" /></div>
          <div><img src="Frame 704.svg" alt="" /></div>
        </div>
      </section>
      <footer>
        <div>
          <div>
            <h3>Exclusive</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div>
              <input type="search" placeholder='Enter your email' />
            </div>
          </div>
          <div>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</p>
            <p>exclusive@gmail.com</p>
            <p>+88015-88888-9999</p>
          </div>
          <div>
            <h3>Account</h3>
            <p>My Account</p>
            <p>Login / Register</p>
            <p>Cart</p>
            <p>Wishlist</p>
            <p>Shop</p>
          </div>
          <div>
            <h3>Quick Link</h3>
            <p>Privacy Policy</p>
            <p>Terms Of Use</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div>
            <h3>Download App</h3>
            <div>
              <p>Save $3 with App New User Only</p>
              <img src="Frame 719.svg" alt="" />
            </div>
            <div>
              <img src="Icon-Facebook.svg" alt="" />
              <img src="Icon-Twitter.svg" alt="" />
              <img src="icon-instagram.svg" alt="" />
              <img src="Icon-Linkedin.svg" alt="" />
            </div>
          </div>
        </div>
        <div>
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    </div>
  )
}

export default App
