import React from 'react'
import styles from './Home.module.css'
import SignUp from '../Sign-up/Sign-up'
import Footer from '../Footer/Footer'
import Header from '../header/header'

function App() {
  return (  
    <div>
      <Header/>
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
      <Footer/>
    </div>
  );
}

export default App;
