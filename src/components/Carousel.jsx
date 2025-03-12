import Carouselitem from "./CarouselItem";
import Indicator from "./Indicator";
import Buttons from './Buttons';
import imageslist from "./imageslist.js";

export default function Carousel(){

 return <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
  
   <div class="carousel-indicators">

   {/* Looping through the imagelist array to create indicators for each image */}

       { imageslist.map((image, index)=>{
        if(index === 0) {
               return <Indicator class="active" indexValue={index} imageValue={index++} />
       } else {
               return <Indicator indexValue={index} imageValue={index++} />
        }
      })
      }

</div>

    <div class="carousel-inner">

{/* Mapping through the array to create CarouselItem for each image in imageslist array */}

 {  imageslist.map((image,index )=>{
   if(index === 0) {
    return <Carouselitem imgsrc={image} class="active"/>
   } else {
    return <Carouselitem imgsrc={image} />
   }
 })
 }
    </div>
       
       <Buttons />
    
  </div>
  
}