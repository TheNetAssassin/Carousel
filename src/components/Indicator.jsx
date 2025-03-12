
export default function Indicator(props){
    return <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={props.indexValue} class={props.class} aria-current="true" aria-label={"Slide " + props.imageValue}></button>
}