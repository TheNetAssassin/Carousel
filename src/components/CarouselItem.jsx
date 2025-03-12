
export default function Carouselitem(props){
    return  <div className={"carousel-item " + props.class} data-bs-interval="3000">
    <img src={props.imgsrc} class="d-block w-100" alt="..." />
  </div>
}