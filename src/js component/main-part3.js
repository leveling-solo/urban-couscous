import firstImage from "../images/main-part3.01.png"
import secondImage from "../images/main-part3.02.png"


//  css for computer  responsive 
import "../Computer-Responsive-css/part3.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/part3.css"

// css for Tab-lanscape mode  responsive

import "../Tab-Responsive-LanscapeMode-css/Landscapepart3.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobilePart3.css"


export default function Part3() {
  return (
    <div className="part3-container">
      <div className="part3-box">
        <h1>HIKING  IN FJORD NORWAY</h1>
        <p>
          The varied scenery , from popular marked trails and tourist attractionsto wild and untamed mythical landscapes, has earned Norway a well-deserved reputation as a major hiking destination in Europe . A few examples of classic (and challenging!) hiking routes are preikestolen , Troltunga , Galdhopiggen , Besseggen and Romsdalseggen .
        </p>
      </div>
      <div className="part3-box2">
        <div className="part3-image-box">
          <img src={firstImage} alt="nature_image" />

          <p>The iconic hikes are visited by pepole all over the world , and tend to be a bit crowded during weekends from mid-june to the end of july . However, if you hit the trails during weekdays you will probably meet fewer people</p>
          <div className="button-box">
          <button className="button">READ MORE</button>
          </div>
        </div>

        <div className="part3-image-box">
          <img src={secondImage} alt="nature_image" className="map" />
          <p>Or you can take the trip when the landscape get painted in red , yellow , and orange during late summer and autumn . At this time, you can enjoy the scenic surroundings practically undistrubed. </p>
         <div className="button-box" >
          <button>READ MORE</button>
         </div>
        </div>
      </div>
    </div>
  )
}