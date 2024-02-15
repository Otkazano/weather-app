import AboutProject from '@/components/AboutProject/AboutProject'
import Button from '@/components/Button/Button'
import MainAnimation from '@/components/MainAnimation/MainAnimation'

export default function Home () {
  return (
    <main className='flex flex-col grow'>
      <MainAnimation />
      <AboutProject />
      <Button link={'/search'} text={'Скорее начать!'} />
    </main>
  )
}
