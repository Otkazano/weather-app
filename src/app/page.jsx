import AboutProject from '@/components/AboutProject/AboutProject'
import Button from '@/components/Button/Button'
import MainAnimation from '@/components/MainAnimation/MainAnimation'

export default function Home () {
  return (
    <main className='flex flex-col grow max-w-[1920px] mx-auto w-full overflow-x-hidden relative'>
      <MainAnimation />
      <AboutProject />
      <Button link={'/search'} text={'Скорее начать!'} />
    </main>
  )
}
