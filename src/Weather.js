import 'bootstrap/dist/css/bootstrap.min.css';
function Weather(props) {
    function WeatherDay({ date, description }) {
        return (
          <div>
            <h3>Date: {date}</h3>
            <p>Description: {description}</p>
          </div>
        );
      }
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