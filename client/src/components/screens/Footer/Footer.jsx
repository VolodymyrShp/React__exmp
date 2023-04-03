import './Footer.css';

function Footer() {
    return(
        <footer>
            <div className="footer-content-wrapper">
                <div className="footer-content content-left">
                    <h2 className="content-title bigger-title">Exclusive</h2>
                    <h2 className="content-title">Subscribe</h2>
                    <p>Get 10% of your firts order</p>
                    <form action="#">
                        <input type="email" id="send-email" name="send-email" placeholder='Enter your email'/>
                        <input type="image" src="/Vector.svg" alt="Submit" />
                    </form>

                </div>
                <div className="footer-content">
                    <h2 className="content-title">Support</h2>
                    <p className="support">111 Bijoy sarani, Dhaka,<br/> DH 1515, Bangladesh.</p>
                    <p className="support">exclusive@gmail.com</p>
                    <p className="support"> +88015-88888-9999</p>
                </div>
                <div className="footer-content">
                    <h2 className="content-title">Account</h2>
                    <ul>
                        <li><a href="#">My Account</a></li>
                        <li><a href="#">Login / Register</a></li>
                        <li><a href="#">Cart</a></li>
                        <li><a href="#">Wishlist</a></li>
                        <li><a href="#">Shop</a></li>
                    </ul>
                </div>
                <div className="footer-content">
                    <h2 className="content-title">Quick Link</h2>
                    <ul>
                        <li><a href="#">Privacy Policy</a></li>
                        <li><a href="#">Terms Of Use</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-content download">
                    <h2 className="content-title">Download App</h2>
                    <p>Save $3 with App New User Only</p>
                    <div className="links-container">
                        <div className="QC">
                            <img src="/Qrcode.png" alt="QR Code" />
                        </div>
                        <div className="markets">
                            <img src="/GooglePlay.png" className="google-link" alt="Google Play" />
                            <img src="/AppStore.png" alt="App Store" /> 
                        </div>
                    </div>
                    <div className="social-networks">
                            <ul>
                                <li><a href="#"><img src="/facebook.svg" alt="Facebook" /></a></li>
                                <li><a href="#"><img src="/twitter.svg" alt="Twitter" /></a></li>
                                <li><a href="#"><img src="/instagram.svg" alt="Instagramm" /></a></li>
                                <li><a href="#"><img src="/linkedin.svg" alt="Linkedin" /></a></li>
                            </ul>
                    </div>
                </div>
            </div> 
            <div className="copyright">
                <p>&#xA9; Copyright Rimel 2022. All right reserved</p>
            </div>
        </footer>
    )
}

export default Footer;