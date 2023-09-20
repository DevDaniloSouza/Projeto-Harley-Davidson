import "./BikeBannerSec.css"

function BikeBannerSec(props) {
    return (
        <section>
            <h1 className="motorcycle">Fat Bob 114™</h1>
            <img src={props.image} alt="Imagem Motocicleta" />
        </section>
    )
}

export default BikeBannerSec