import AboutProject from '@/components/AboutProject/AboutProject'
import MainAnimation from '@/components/MainAnimation/MainAnimation'

export default function Home () {
  return (
    <>
      <main className='flex flex-col grow'>
        <MainAnimation />
        <AboutProject />
      </main>
    </>
  )
}
