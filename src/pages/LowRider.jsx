import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../../public/low-rider-banner.jpg"
import LowRiderImg from "../../public/low-rider-presentation.webp"
import Bike01 from "../../public/low-rider-hl01.webp"
import Bike02 from "../../public/low-rider-hl02.webp"
import BikeBannerSec from "../components/BikeBannerSec/BikeBannerSec";
import BikePresentation from "../components/BikePresentation/BikePresentation";
import BikeHighlights from "../components/Bikehighlights/BikeHighlights";

function LowRider() {
    return(
        <>
            <Header />
            <BikeBannerSec image={Banner} bike="Low Rider ® S" />
            <BikePresentation 
                motorcycle="Low Rider ® S"
                text="Liberte seu espírito aventureiro com a Low Rider S: potência pura e estilo inigualável, uma lenda sobre duas rodas."
                image={LowRiderImg}
            />
            <BikeHighlights
                image01={Bike01}
                title01="GARFO DIANTEIRO INVERTIDO"
                text01="O design invertido reforça a dianteira para responder melhor à pilotagem. Além disso, a tecnologia interna de cartucho único é ágil e mantém a roda dianteira firme para aprimorar o desempenho da frenagem e da dirigibilidade."

                image02={Bike02}
                title02="ÂNGULO DE INCLINAÇÃO REDUZIDO"
                text02="O ângulo de inclinação do quadro do modelo Low Rider™ S foi reduzido de 30 para 28 graus em comparação com o modelo Low Rider™ padrão, resultando em uma dirigibilidade mais responsiva."
            />
            <Footer />
        </>
    )
}

export default LowRider