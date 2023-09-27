import "./BikeHighlights.css"

function BikeHighlights(props) {
    return(
        <section className="highlights-sec">
            <h1>Destaques</h1>
            <div className="highlight">
                <img src={props.image01} alt="Motocicleta" />
                <div className="content">
                    <h2>{props.title01}</h2>
                    <p>{props.text01}</p>
                    <button style={{width:"15rem"}}>Estou interessado!</button>
                </div>
            </div>
            <div className="highlight" id="invert">
                <div className="content">
                    <h2>{props.title02}</h2>
                    <p>{props.text02}</p>
                    <button style={{width:"15rem"}}>Estou interessado!</button>
                </div>
                <img src={props.image02} alt="Motocicleta" />
            </div>
        </section>
    )
}

export default BikeHighlights