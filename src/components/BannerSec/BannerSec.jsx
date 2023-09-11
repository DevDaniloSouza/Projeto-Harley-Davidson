import "./BannerSec.css"

function BannerSec(props) {
    return (
        <section className="banner-sec">
            <img src={props.img} alt="Banner" />
        </section>
    )
}

export default BannerSec