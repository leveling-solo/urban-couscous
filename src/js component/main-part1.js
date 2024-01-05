import firstImg from "../images/main-part1.01.png"
import secondImg from "../images/main-part1.02.png"

//  css for computer  responsive 
import "../Computer-Responsive-css/part1.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/part1.css"

// css for Tab-lanscape mode  responsive
import "../Tab-Responsive-LanscapeMode-css/LandscapePart1.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobilePart1.css"

export default function Part1() {
  return (
    <div className="part1-container">
      <div className="part1-box">
        <h2>ABOUT US</h2>
        <p>Go Hiking in Norway and discover why
          the local can't get enough of nature ,
          our most scenic landscapes are definitely best
          enjoyed on foot
        </p>
        <button>READ MORE</button>
      </div>
      <div className="image-container"><img src={firstImg} alt="Boy_image" /></div>

      <div className="image-container"><img src={secondImg} alt="swimmer_image" /></div>

    </div>
  )
}