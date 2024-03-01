export default function BurgerMenuButton ({ onClick, isOpen, hidden }) {
  function handleClick () {
    onClick()
  }
  return (
    <button
      onClick={handleClick}
      className={`flex flex-col justify-center items-center absolute right-0 px-4 py-7 z-10 opacity-70 hover:opacity-100 ${
        hidden ? 'hidden' : ''
      }`}
      title='управление бурег меню'
    >
      <span
        className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
              isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
            }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm my-0.5 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
      ></span>
      <span
        className={`bg-white block transition-all duration-300 ease-out 
            h-0.5 w-6 rounded-sm ${
              isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
            }`}
      ></span>
    </button>
  )
}
