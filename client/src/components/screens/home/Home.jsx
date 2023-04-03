import React from 'react'
import styles from './Home.module.css'
import SignUp from '../Sign-up/Sign-up'
import Footer from '../Footer/Footer'

function App() {
  return (
    <div>
      <header className="header">
        <div className="header__top">
          <div className="header__top-info">
            <div className="header__top-text">
              <p>
                Summer Sale For All Swim Suits And Free Express Delivery - OFF
                50%!
              </p>
              <button href="" className="shop__btn">
                ShopNow
              </button>
            </div>
            <div className="header__top-lang">
              <select name="language" id="language__dropdown">
                <option value="English">English</option>
                <option value="Ukrainian">Ukrainian</option>
              </select>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="header__inner">
            <div className="menu">
              <p className="logo">Exclusive</p>
              <nav>
                <ul className="menu__list">
                  <li className="menu__list-item">
                    <a href="" className="menu__list-link">
                      Home
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a href="" className="menu__list-link">
                      Contact
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a href="" className="menu__list-link">
                      About
                    </a>
                  </li>
                  <li className="menu__list-item">
                    <a href="" className="menu__list-link">
                      Sign Up
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="header__search">
              <div className="search__field">
                <input type="search" placeholder="What are you looking for?" />
                <button type="submit">
                  <img src="Component 2.svg" alt="" />
                </button>
              </div>
              <div className="header__search-icon">
                <img src="wishlist.svg" alt="" />
                <img src="cart.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      <SignUp></SignUp>
      <Footer></Footer>
      <main className="main">
        <div className="container">
          <section className="categories__menu">
            <ul className="categories__list">
              <ul className="categories__item womanFashion">
                <a href="" className="categories__link">
                  Woman’s Fashion
                </a>
                <img src="DropDown.svg" className="arrow__right"></img>
              </ul>
              <ul className="categories__item manFashion">
                <a href="" className="categories__link">
                  Men’s Fashion
                </a>
                <img src="DropDown.svg" className="arrow__right"></img>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Electronics
                </a>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Home & Lifestyle
                </a>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Medicine
                </a>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Sports & Outdoor
                </a>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Baby’s & Toys
                </a>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Groceries & Pets
                </a>
              </ul>
              <ul className="categories__item">
                <a href="" className="categories__link">
                  Health & Beauty
                </a>
              </ul>
            </ul>
            <div className="top-widget__slider">{/* Slider Placeholder */}</div>
          </section>
          <section className="today">
            <div>
              <div className="section__header">
                <div className="section__header-text">
                  <p>Today's</p>
                  <h2>Flesh Sale</h2>
                </div>
                <div className="today__timer">
                  <div className="timer"></div>
                  {/* Timer Placeholder */}
                </div>
                <div className="slider__arrow">
                  <img className="left__arrow" src="Left Arrow.svg" alt="" />
                  <img className="right__arrow" src="Right Arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="item">
              <div className="item-card">{/* Flesh sale item card func */}</div>
              <div>
                <button>View all product</button>
              </div>
            </div>
          </section>
          <section className="categories">
            <div className="section__header">
              <div className="section__header-text">
                <p>Categories</p>
                <h2>Browse By Categories</h2>
              </div>
              <div className="slider__arrow">
                <img className="left__arrow" src="Left Arrow.svg" alt="" />
                <img className="right__arrow" src="Right Arrow.svg" alt="" />
              </div>
            </div>
            <ul className="categories__card">
              <li className="categories__card-item">
                <img src="Category-CellPhone.svg" alt="" />
                <a href="">Phone</a>
              </li>
              <li className="categories__card-item">
                <img src="Category-Computer.svg" alt="" />
                <a href="">Computers</a>
              </li>
              <li className="categories__card-item">
                <img src="Category-SmartWatch.svg" alt="" />
                <a href="">SmartWatch</a>
              </li>
              <li className="categories__card-item">
                <img src="Category-Camera.svg" alt="" />
                <a href="">Camera</a>
              </li>
              <li className="categories__card-item">
                <img src="Category-Headphone.svg" alt="" />
                <a href="">HeadPhones</a>
              </li>
              <li className="categories__card-item">
                <img src="Category-Gamepad.svg" alt="" />
                <a href="">Gaming</a>
              </li>
            </ul>
          </section>
          <section className="thisMonth">
            <div className="section__header">
              <div className="section__header-text">
                <p>This Month</p>
                <h2>Best Selling Products</h2>
              </div>
              <button>View All</button>
            </div>
            <div>
              <div className="item">
                <div className="item-card">
                  {/* Flesh sale item card func */}
                </div>
              </div>
            </div>
          </section>
          <section className="banner">
            <div className="banner__description">
              <div className="banner__header">
                <p>Categories</p>
                <h2>
                  Enhance Your <br />
                  Music Experience{" "}
                </h2>
              </div>
              <div>
                <div className="timer__bottom ">{/* Timer placeholder*/}</div>
                <button>Buy Now</button>
              </div>
            </div>
            <div className="banner__img">
              <img src="JBL.svg" alt="" />
            </div>
          </section>
          <section className="ourProducts">
            <div className="section__header">
              <div className="section__header-text">
                <p>Our Products</p>
                <h2>Explore Our Product</h2>
              </div>
              <div className="slider__arrow">
                <img className="left__arrow" src="Left Arrow.svg" alt="" />
                <img className="right__arrow" src="Right Arrow.svg" alt="" />
              </div>
            </div>
            <div>
              <div className="item">
                <div className="item-card">
                  {/* Flesh sale item card func */}
                </div>
                <div className="item-card">
                  {/* Flesh sale item card func */}
                </div>
                <div>
                  <button>View all product</button>
                </div>
              </div>
            </div>
          </section>
          <section className="featured">
            <div className="section__header">
              <div className="section__header-text">
                <p>Featured</p>
                <h2>New arrival</h2>
              </div>
            </div>
            <div className="featured__card">
              <div className="featured__card-item">
                <img src="PS5.svg" alt="" />
                <div className="card__item-text">
                  <h3>PlayStation 5</h3>
                  <p>Black and White version of the PS5 coming out on sale.</p>
                  <button className="shop__btn">Shop now</button>
                </div>
              </div>
              <div className="featured__card-item">
                <img src="woman hat.svg" alt="" />
                <div className="card__item-text">
                  <h3>Women’s Collections</h3>
                  <p>
                    Featured woman collections that <br /> give you another
                    vibe.
                  </p>
                  <button className="shop__btn">Shop now</button>
                </div>
              </div>
              <div className="featured__card-item">
                <img src="Echo.svg" alt="" />
                <div className="card__item-text">
                  <h3>Speakers</h3>
                  <p>Amazon wireless speakers</p>
                  <button className="shop__btn">Shop now</button>
                </div>
              </div>
              <div className="featured__card-item">
                <img src="gucci.svg" alt="" />
              </div>
            </div>
            <div className="services__list">
              <div className="services__list-item">
                <img src="Services.svg" alt="" />
                <h3>FREE AND FAST DELIVERY</h3>
                <p>Free delivery for all orders over $140</p>
              </div>
              <div className="services__list-item">
                <img src="Services(1).svg" alt="" />
                <h3>24/7 CUSTOMER SERVICE</h3>
                <p>Friendly 24/7 customer support</p>
              </div>
              <div className="services__list-item">
                <img src="Services(2).svg" alt="" />
                <h3>MONEY BACK GUARANTEE</h3>
                <p>We return money within 30 days</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="footer">
        <div>
          <div>
            <h3>Exclusive</h3>
            <p>Subscribe</p>
            <p>Get 10% off your first order</p>
            <div>
              <input type="search" placeholder="Enter your email" />
            </div>
          </div>
          <div>
            <h3>Support</h3>
            <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
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
        <div>© Copyright Rimel 2022. All right reserved</div>
      </footer>
*/}
    </div>
  );
}

export default App;
