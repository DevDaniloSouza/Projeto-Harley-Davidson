import "./BikeBannerSec.css"

function BikeBannerSec(props) {
    return (
        <section className="bike-banner" style={{backgroundImage:"url(" + props.imagem + ")"}}>
            <h1 className="motorcycle">Fat Bob 114™</h1>
        </section>
    )
}

export default BikeBannerSec