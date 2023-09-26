import BikeBannerSec from "../components/BikeBannerSec/BikeBannerSec"
import BikePresentation from "../components/BikePresentation/BikePresentation"
import BikeHighlights from "../components/Bikehighlights/BikeHighlights"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Banner from "../../public/sportster-banner.webp"
import SportsterImg from "../../public/sportster-presentation.jpg"
import Bike01 from "../../public/sportster-hl01.webp"
import Bike02 from "../../public/sportster-hl02.webp" 

function Sportster() {
    return(
        <>
            <Header />
            <BikeBannerSec image={Banner} bike="Sportster™ S" />
            <BikePresentation 
                motorcycle="Sportster™ S 2023"
                text="Descubra o futuro da pilotagem com a nova Sportster 2023: potência, paixão e pura emoção na estrada!"
                image={SportsterImg}
            />
            <BikeHighlights 
                image01={Bike01}
                title01="CHASSI"
                text01="O Revolution Max 1250 é um componente estrutural do chassi da motocicleta, o que elimina o quadro tradicional, reduzindo significativamente o peso total e mantendo a dirigibilidade precisa. É desempenho que você consegue sentir, com o centro de gravidade baixo e o chassi super rígido."

                image02={Bike02}
                title02="ESCAPAMENTO ELEVADO"
                text02="Inspirados nos dias de glória da H-D nos circuitos de flat-track, os canos são feitos de aço inoxidável Série 304 resistentes à corrosão, desenvolvidos para desviar o calor do escapamento das pernas do motociclista e da cauda da motocicleta."
            />
            <Footer />
        </>   
    )
}

export default Sportster