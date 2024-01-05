import firstImage from "../images/main-part5.01.jpeg"

//  css for computer  responsive 
import "../Computer-Responsive-css/part5.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/part5.css"

// css for Tab-lanscape mode  responsive
import "../Tab-Responsive-LanscapeMode-css/Landscapepart5.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobilePart5.css"


export default function Part5() {
  return (

    <div className="part5-container">
      <div className="part5-imageContainer">
        <img src={firstImage} alt="nature_image" />
      </div>

  <div className="part5-box">      
      <div className="part5-text-Container">
        <h1>Hiking with The Norwegian Trekking Assocation</h1>
        <p>
          Norway  is an inredible place to explore , with the untamed mythical landscapes, mountains ,valleys , adn fjords. Before you enter the outdoors , get familiar with the nine simple of the Norwegian mountians code to help you stay safe .
        </p>

        <button>READ MORE</button>
      </div>
      <div className="part5-list-container">
        <ul>
          <li>Plan your trip and inform others about the route you have selected</li>
          <li>Adapt the planned routes according to ability and conditions.</li>
          <li>Pay attention to the weather and the avalanche warnings</li>
          <li>
            Be prepared  for bad weather and frost , even on short trips.
          </li>
          <li>
            Bring the necessary equipment so you can help yourself and others. 
          </li>
          <li>
            Choose safe routes. Recognize avalanche terrain and unsafe ice . 
          </li>
          <li>use a map and a compass. Always know where you are </li>
        </ul>
      </div>
      </div>
    </div>
  )
}