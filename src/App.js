import "./App.css"

// import  components  in app components . 
import Header from "./js component/Header"
import Part1 from "./js component/main-part1"
import Part2 from "./js component/main-part2"
import Part3 from "./js component/main-part3"
import Part4 from "./js component/main-part4"
import Part5 from "./js component/main-part5"
import Part6 from "./js component/main-part6"
import Footer from "./js component/footer"

export default function App(){
  return(
        <div className="conatiner">
      <Header/>
      <main>
        <Part1/>
        <Part2/>
        <Part3/>
        <Part4/>
        <Part5/>
        <Part6/>
      </main>
      <Footer/>
        </div>
  )
}