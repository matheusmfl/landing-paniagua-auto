import Image from 'next/image'
import logo from '../../public/logoPaniagua.png'

export function Header() {
  return (
    <header className="pt-10 px-24 pb-5 flex items-center justify-center bg-[#00263F] border-b-4 border-white">
      <div>
        <Image src={logo} alt="LogoMarca da empresa" />
      </div>
    </header>
  )
}
