import SmallInfoCard from '../SmallInfoCard/SmallInfoCard'

export default function CardsList ({ weatherData }) {
  return (
    <section className='flex gap-8 px-16'>
      {weatherData.days ? (
        weatherData.days.map(day => {
          return <SmallInfoCard key={Math.random()} dayData={day} />
        })
      ) : (
        <></>
      )}
    </section>
  )
}
