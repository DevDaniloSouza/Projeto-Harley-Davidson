import "./BannerMotorcycle.css"

function BannerMotorcycle(props) {
    return(
        <section className="banner-motorcycle" style={{backgroundImage: "url(" + props.image + ")"}}></section>
    )
}

export default BannerMotorcycle