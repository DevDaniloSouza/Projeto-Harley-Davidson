import "./BikeHighlights.css"

function BikeHighlights(props) {
    return(
        <section>
            <h1>Destaques</h1>
            <div>
                <img src={props.image01} alt="Motocicleta" />
                <div>
                    <h1>{props.title01}</h1>
                    <p>{props.text01}</p>
                    <button>Estou interessado!</button>
                </div>
            </div>
            <div>
                <div>
                    <h1>{props.title02}</h1>
                    <p>{props.text02}</p>
                    <button>Estou interessado!</button>
                </div>
                <img src={props.image02} alt="Motocicleta" />
            </div>
        </section>
    )
}

export default BikeHighlights