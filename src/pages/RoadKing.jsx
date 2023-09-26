import BikeBannerSec from "../components/BikeBannerSec/BikeBannerSec";
import BikePresentation from "../components/BikePresentation/BikePresentation";
import BikeHighlights from "../components/Bikehighlights/BikeHighlights";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Banner from "../../public/road-king-banner.jpg"
import RoadKingImg from "../../public/road-king-presentation.webp"
import Bike01 from "../../public/road-king-hl01.webp"
import Bike02 from "../../public/road-king-hl02.webp"

function RoadKing() {
    return(
        <>
            <Header />
            <BikeBannerSec image={Banner} bike="Road King ® Special" />
            <BikePresentation
                motorcycle="Road King ® Special"
                text="Domine a estrada com a elegância imponente da Road King Special - onde estilo e potência se encontram para uma jornada inesquecível."
                image={RoadKingImg}
            />
            <BikeHighlights
                image01={Bike01}
                title01="GUIDÃO MINI APE"
                text01="Guidão Mini Ape com 23 cm de altura e 3 cm de largura para você se sentar em posição mais alta, sentir-se mais assertivo e pilotar de maneira mais agressiva."

                image02={Bike02}
                title02="ESTILO CUSTOMIZADO TOTALMENTE PRETO"
                text02="Uma máquina que é pura força bruta, totalmente preta de ponta a ponta e despojada ao máximo, desde as agressivas rodas Prodigy™, até os silenciadores cônicos."
            />
            <Footer />
        </>
    )
}

export default RoadKing