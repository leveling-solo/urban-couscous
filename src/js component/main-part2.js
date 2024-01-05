import firstImage from "../images/main-part2-01.jpeg"
import secondImage from "../images/main-part2-02.jpeg"
import thirdImage from "../images/main-part2-03.jpeg"
import FourthImage from "../images/main-part2-04.jpeg"
import fifthImage from "../images/main-part2-05.jpeg"
import sixthImage from "../images/main-part2-06.jpeg"
import seventhImage from "../images/main-part2-07.jpeg"

//  css for computer  responsive 
import "../Computer-Responsive-css/part2.css"

//  css for Tab responsive 
import "../Tab-Responsive-css/part2.css"

// css for Tab-lanscape mode  responsive
import "../Tab-Responsive-LanscapeMode-css/Landscapepart2.css"

//  css for mobile-responsive 
import "../Mobile-responsive/MobilePart2.css"


export default function Part2() {
  return (
    <div className="part2-container">
      <div className="part2-box ">
        <img src={firstImage} alt="tour_image" className="firstimg"/>
        <div className="about-imgs" style={{
          bottom :"25rem"
        }}>
          <h3>Find your Path</h3>
          <p>
            Late spring in Norway :Rays of sunlight are finally showering the landscape , forcing the snow in the mountains to a slient retreat and waking the folowers after their winter sleep
          </p>
        </div>
        <img src={sixthImage} alt="tour_image" className="secondImg" />
      </div>
    
     <div className="small-Images-container">
      <img src={secondImage} alt="tour_image" />
      <img src={seventhImage} alt="tour_image" />

      <img src={fifthImage} alt="tour_image" />

</div>
<div className="big-image-container">
       <img src={thirdImage} alt="tour_image"/>
      <div className="part2-box  last-image">
        <img src={FourthImage} alt="tour_image" className="img "/>
        <div className="about-img  about-image-info">
          <h3>GO Hiking</h3>
          <p>
            Enter the start fo the hiking season , After a long winter people of all age groups and social backgrounds head outdoors and go trekking  in the mountains , along the coast , or  in the forest .
          </p>
        </div>
      </div>
</div>
    </div>
  )
}