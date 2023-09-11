import { Link } from "react-router-dom"
import "./OfferBoxTwo.css"

function OffersBoxTwo(props) {
    return (
        <div className="offer-two">
            <img src={props.image} alt={props.alt} />
            <h2>{props.motorcycle}</h2>
            <p>{props.description}</p>
            <button>Cotação aqui</button>
            <div className="spans">
                <span>Test Ride</span>
                <hr />
                <span><Link to={props.Link}>Detalhes</Link></span>
            </div>
        </div>
    )
}

export default OffersBoxTwo