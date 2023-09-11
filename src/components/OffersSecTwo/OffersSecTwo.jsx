import OfferBoxTwo from "../OfferBoxTwo/OfferBoxTwo"
import FatBob from "../../../public/fat-bob-114.png"
import RoadKing from "../../../public/road-king-special.png"
import RoadGlide from "../../../public/cvo.jpg"
import "./OffersSecTwo.css"

function OffersSecTwo() {
    return (
        <section className="offers-sec-two">
            <h1>Ofertas em destaque</h1>
            <div className="offers-two">
                <OfferBoxTwo
                    image={RoadGlide}
                    alt="Modelo CVO Road Glide Limited"
                    motorcycle="CVO™ Road Glide™ Limited"
                    description="A partir de R$ 216.872"
                />
                <OfferBoxTwo
                    image={FatBob}
                    alt="Modelo Fat Bob 114"
                    motorcycle="Fat Bob ® 114"
                    description="A partir de R$ 82.900"
                    link="/fat-bob-114"
                />
                <OfferBoxTwo
                    image={RoadKing}
                    alt="Modelo Road King Special"
                    motorcycle="Road King ® Special"
                    description="A partir de R$ 126.400"
                />
            </div>
        </section>
    )
}

export default OffersSecTwo