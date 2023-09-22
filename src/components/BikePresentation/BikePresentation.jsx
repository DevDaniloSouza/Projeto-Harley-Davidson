import "./BikePresentation.css"

function BikePresentation(props) {
    return(
        <section className="presentation-sec">
            <div className="presentation">
                <h1>{props.motorcycle}</h1>
                <p>{props.text}</p>
                <div className="buttons">
                    <button style={{width:"12rem"}}>Peça a sua</button>
                    <button style={{width:"12rem"}}>Test Ride</button>
                </div>
            </div>
            <img src={props.image} alt="Motocicleta" />
        </section>
    )
}

export default BikePresentation