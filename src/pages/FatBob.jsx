import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Banner from "../../public/fat-bob-desktop.jpg"
import BikeBannerSec from "../components/BikeBannerSec/BikeBannerSec"
import BikePresentation from "../components/BikePresentation/BikePresentation"
import FatBobImg from "../../public/fat-bob-banner.jpg"
import BikeHighlights from "../components/Bikehighlights/BikeHighlights"

function FatBob() {
    return(
        <>
            <Header />
            <BikeBannerSec image={Banner} />
            <BikePresentation 
                motorcycle="Fat Bob ® 114"
                text="Desperte seu espírito de liberdade com a Fat Bob 114: potência e estilo em uma só máquina!"
                image={FatBobImg}
            />
            <BikeHighlights 
                image01
            />
            <Footer />
        </>
    )
}

export default FatBob