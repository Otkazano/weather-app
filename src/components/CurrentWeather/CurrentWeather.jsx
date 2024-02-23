import WeatherIcon from '../WeatherIcon/WeatherIcon'

export default function CurrentWeather ({ weatherData }) {

  return (
    <>
      <WeatherIcon
        data={
          weatherData.currentConditions
            ? weatherData.currentConditions.icon
            : ''
        }
      />
    </>
  )
}
