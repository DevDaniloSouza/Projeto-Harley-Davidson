import "./BikeBannerSec.css"

function BikeBannerSec(props) {
    return (
        <section className="bike-banner" style={{backgroundImage:"url(" + props.image + ")"}}>
            <h1 className="motorcycle">{props.bike}</h1>
        </section>
    )
}

export default BikeBannerSec