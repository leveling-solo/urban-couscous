import firstImage from "../images/main-part2-07.jpeg"




//  css for computer  responsive 
import "../Computer-Responsive-css/part4.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/part4.css"


//  css for mobile-responsive 
import "../Mobile-responsive/MobilePart4.css"

// animation for count Number 
import CountingAnimation from "../animationScript/mainAnimation/main-part4/countAnimation"

export default function Part4() {
 return(

      <div className="part4-container">
      <div className="part4-imageContainer">
      <img src={firstImage} alt="nature_image"/>
      </div>
      <h1>DoinG The RighT ThingS</h1>
      <p>
      
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui quidem aliquam placeat adipisci nihil. Odit incidunt, neque aut, perspiciatis a natus impedit adipisci consequatur iste, voluptatum suscipit vel blanditiis nulla ad. Reiciendis et, omnis tempore, corporis aliquam iusto incidunt repellendus alias iure sit necessitatibus, a hic beatae? Voluptatum, perferendis facere.
      </p>
     
      <CountingAnimation/>
      </div>
 )
}