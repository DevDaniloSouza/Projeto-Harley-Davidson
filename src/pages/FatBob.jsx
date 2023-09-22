import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Banner from "../../public/fat-bob-desktop.jpg"
import BikeBannerSec from "../components/BikeBannerSec/BikeBannerSec"
import BikePresentation from "../components/BikePresentation/BikePresentation"
import FatBobImg from "../../public/fat-bob-parallax.jpg"
import BikeHighlights from "../components/Bikehighlights/BikeHighlights"
import Bike01 from "../../public/fat-bob-garfo.jpg"
import Bike02 from "../../public/fat-bob-led.webp"

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
                image01={Bike01}
                title01="TECNOLOGIA DE GARFO EM ESTILO DE CORRIDA"
                text01="Design do garfo dianteiro invertido em estilo de corrida e tecnologia de cartucho único, que melhora a resposta à pilotagem e o desempenho da frenagem e da dirigibilidade."

                image02={Bike02}
                title02="ILUMINAÇÃO DE LED"
                text02="O ousado design do farol dianteiro oferece visibilidade excelente à noite e, durante o dia, garante que todos os olhos estejam voltados para você."
            />
            <Footer />
        </>
    )
}

export default FatBob