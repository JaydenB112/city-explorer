import 'bootstrap/dist/css/bootstrap.min.css';
function Weather(props) {

    return (
        <>
            <h3>{props.forecastData.map((element) => {
                return (
                    <>
                    <p>{element.description}</p>
                    <p>{element.date}</p>
                    </>
                    
                )
            })}</h3>

        </>
    )

}
export default Weather;