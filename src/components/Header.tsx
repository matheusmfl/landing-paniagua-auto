import Image from 'next/image'
import logo from '../../public/logoPaniagua.png'

export function Header() {
  return (
    <header className="pt-10 px-24 pb-5 flex items-center justify-center bg-[#00263F] lg:border-none border-b-2 border-white">
      <div className="h-10 w-40 flex items-end lg:h-10">
        <Image src={logo} alt="LogoMarca da empresa" />
      </div>
    </header>
  )
}
