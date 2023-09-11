import "./ServiceBox.css"

function ServiceBox(props) {
    return (
        <div 
            className="service-link"
            style={{backgroundImage: "url(" + props.image + ")", backgroundSize: "cover"}}
        >
            <h2>{props.servType}</h2>
            <p>{props.servDescription}</p>
        </div>
    )
}

export default ServiceBox