import "./BikeSpecSec.css"

function BikeSpecSec() {
    return(
        <section className="spec-sec">
            <h1>Especificações</h1>
            <div>
                <details>
                    <summary>Dimenções</summary>
                    <ul>
                        <li>Comprimento <span>2.340 mm</span></li>
                        <li>Altura do assento <span>710 mm</span></li>
                        <li>Distância mínima do chão <span>120 mm</span></li>
                        <li>Ângulo de inclinação <span>28°</span></li>
                        <li>Trail <span></span>132 mm</li>
                        <li>Distância entre eixos <span>1.615 mm</span></li>
                        <li>PNEUS, ESPECIFICAÇÃO FRONTAL</li>
                        <li>PNEUS, ESPECIFICAÇÃO TRASEIRA</li>
                    </ul>
                </details>
            </div>
        </section>
    )
}

export default BikeSpecSec