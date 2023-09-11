import { Link } from "react-router-dom"
import "./OfferBox.css"

function OfferBox(props) {
    return (
        <div className="offer">
            <Link to={props.link}><img src={props.image} alt={props.alt} /></Link>
            <h2>{props.motorcycle}</h2>
            <button>Cotação</button>
            <div className="spans">
                <span>Test Ride</span>
                <hr />
                <span><Link to={props.link}>Detalhes</Link></span>
            </div>
        </div>
    )
}

export default OfferBox