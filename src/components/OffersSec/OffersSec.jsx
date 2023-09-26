import OfferBox from "../OfferBox/OfferBox"
import LowRider from "../../../public/low-rider-s.png"
import Sportster from "../../../public/sportster.png"
import RoadKing from "../../../public/road-king-special.png"
import FatBob from "../../../public/fat-bob-114.png"
import "./OffersSec.css"

function OfferSec() {
    return (
        <section className="offers-sec">
            <h1>Motos em destaque</h1>
            <div className="offers">
                <OfferBox
                    motorcycle="Low Rider ® S"
                    image={LowRider}
                    alt="Modelo Low Rider S"
                    link="/low-rider-s"
                />
                <OfferBox 
                    motorcycle="Sportster™ S 2023"
                    image={Sportster}
                    alt="Sportster S 2023"
                    link="/sportster-s"
                />
                <OfferBox 
                    motorcycle="Road King ® Special"
                    image={RoadKing}
                    alt="Road King Special"
                    link="/road-king-special"
                />
                <OfferBox 
                    motorcycle="Fat Bob ® 114"
                    image={FatBob}
                    alt="Fat Bob"
                    link="/fat-bob-114"
                />
            </div>
        </section>
    )
}

export default OfferSec