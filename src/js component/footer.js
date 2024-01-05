import firstImage from "../images/Header-Adventrue-logo.png"

//  css for computer  responsive 
import "../Computer-Responsive-css/footer.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/footer.css"

// css for Tab-lanscape mode  responsive
import "../Tab-Responsive-LanscapeMode-css/LandscapeFooter.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobileFooter.css"




export default function Footer() {
    return (
        <div className="footer">
        <div className="footer-box">
            <div className="contact-us">
                <p>Empire state Building</p>
                <p>350 5th Ave, New York , NY 10118</p>
                <p>1-333-333-993</p>
                <p>tricolordevil@gamil.com</p>
            </div>
            <div className="footer-logo">
                <img src={firstImage} alt="footer_image" />
            </div>
            <div className="subscribe">
                <h1>TAKE A HIKE</h1>
                <p>There is no need to wait until
                    you're have to find out what you'd like to do. FIlter your search and check out the offers below.
                </p>
                <button>SUBSCRIBE</button>
            </div>
            </div>
            <div className="footer-handle-list">
                <ul className="media-handle-list footer-media-list" >
                    <li><a href="#home"><i class="fa-brands fa-square-facebook"></i></a></li>
                    <li><a href="#home"><i class="fa-brands fa-twitter"></i></a></li>
                    <li><a href="#home"><i class="fa-brands fa-instagram"></i></a></li>
                    <li><a href="#home"><i class="fa-brands fa-pinterest"></i></a></li>
                </ul>
                <div className="copyright">
                    <p> all  ©️ copyRight are reserved by TricolorDeviL.com</p>
                </div>
            </div>
        </div>
         

    )
}