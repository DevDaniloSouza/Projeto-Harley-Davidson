import ServiceBox from "../ServiceBox/ServiceBox"
import manutenção from '../../styles/images/manutenção.jpg'
import testRide from "../../styles/images/test-ride.jpg"
import peças from "../../styles/images/peças.jpg"
import vestuário from "../../styles/images/vestuário.jpg"
import "./ServicesSec.css"

function ServicesSec() {
    return (
        <section className="services-sec">
            <h1>Destaques e serviços</h1>
            <div className="services-links">
                <ServiceBox
                    servType="Manutenção"
                    servDescription="Confie em quem mais entende de Harley-Davidson para cuidar da sua."
                    image={manutenção}
                />
                <ServiceBox 
                    servType="Test Ride"
                    servDescription="Agende conosco o seu Test Ride e sinta o poder Harley-Davidson."
                    image={testRide}
                />
                <ServiceBox 
                    servType="Peças"
                    servDescription="Peças e acessórios originais para você."
                    image={peças}
                />
                <ServiceBox 
                    servType="Vestuário"
                    servDescription="Conheça a linha de vestuário da Casa Harley-Davidson"
                    image={vestuário}
                />
            </div>
        </section>
    )
}

export default ServicesSec