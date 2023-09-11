import BannerSec from "../components/BannerSec/BannerSec"
import Header from "../components/Header/Header"
import OfferSec from "../components/OffersSec/OffersSec"
import OffersSecTwo from "../components/OffersSecTwo/OffersSecTwo"
import ServicesSec from "../components/ServicesSec/ServicesSec"
import Footer from '../components/Footer/Footer'
import Banner from "../../public/banner-ofertas.png"
import "../styles/Home.css"

function Home() {
    return(
        <>
            <Header />
            <BannerSec img={Banner} />
            <OfferSec />
            <ServicesSec />
            <OffersSecTwo />
            <Footer />
        </>
    )
}

export default Home