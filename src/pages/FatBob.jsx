import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Banner from "../../public/fat-bob-desktop.jpg"
import BannerMotorcycle from "../components/BannerMotorcycle/BannerMotorcycle"
import BikeBannerSec from "../components/BikeBannerSec/BikeBannerSec"


function FatBob() {
    return(
        <>
            <Header />
            <BikeBannerSec image={Banner} />
            <Footer />
        </>
    )
}

export default FatBob