import "./BikePresentation.css"

function BikePresentation(props) {
    return(
        <section className="presentation-sec">
            <div className="presentation">
                <h1>{props.motorcycle}</h1>
                <p>{props.text}</p>
                <div className="buttons">
                    <button className="btn-present">Peça a sua</button>
                    <button className="btn-present">Test Ride</button>
                </div>
            </div>
            <img src={props.image} alt="Motocicleta" />
        </section>
    )
}

export default BikePresentation