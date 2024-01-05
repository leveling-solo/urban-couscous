import firstImage from "../images/main-part6.01.jpeg"
import secondImage from "../images/main-part6.02.jpeg"
import sunset from "../images/sunset.webp"


//  css for computer  responsive 
import "../Computer-Responsive-css/part6.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/part6.css"

// css for Tab-lanscape mode  responsive
import "../Tab-Responsive-LanscapeMode-css/Landscapepart6.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobilePart6.css"


export default function Part6() {
  return (

   <div className="part6-container">
      <div className="part6-image-container">
        <img src={firstImage} alt="nature_image"/>
        <div className="part6-text-container">
          <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, atque unde. Autem illum iure eligendi dolore nisi quam accusamus eveniet! Ipsa vitae ut dolorem tenetur, architecto atque recusandae quas voluptas explicabo eaque quos praesentium similique ea at? A nobis provident dolore porro. Harum sequi facilis quam explicabo enim quasi quisquam.
          </p>
          <h4>Bertie Norton</h4>
        </div>
      </div>
      <div className="part6-image-container">
        <div className="part6-text-container part6-text">
          <p className="p">
            
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam, atque unde. Autem illum iure eligendi dolore nisi quam accusamus eveniet! Ipsa vitae ut dolorem tenetur, architecto atque recusandae quas voluptas explicabo eaque quos praesentium similique ea at? A nobis provident dolore porro. Harum sequi facilis quam explicabo enim quasi quisquam.
          </p>
          <h4 className="h">Franky Kinney</h4>
        </div>
        <img src={secondImage} alt="nature_image" id="man"/>
        </div>
        <img src={sunset} alt="sunset_image"/>
   </div>
  )
}