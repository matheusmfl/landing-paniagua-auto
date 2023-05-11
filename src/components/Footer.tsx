import Image from 'next/image'
import logo from '../../public/logoPaniagua.png'
import iconWpp from '../../public/socialIcons/Whatsapp.svg'
import iconPhone from '../../public/socialIcons/Telephone.svg'
import iconMail from '../../public/socialIcons/Email.svg'
import { AccordionPani } from './Accordeon'

export function Footer() {
  return (
    <footer className="bg-[#00263F] flex flex-col pt-20 px-10 text-white items-center text-center gap-6">
      <div className="h-10 w-40 flex items-end lg:h-10">
        <Image src={logo} alt="LogoMarca da empresa" />
      </div>

      <nav className="list-none flex flex-col gap-6">
        <ul className="flex flex-col lg:flex-row gap-2 items-center">
          <li className="flex gap-3 cursor-pointer">
            <Image src={iconWpp} alt="Icone Social" />
            <span>(81) 3224-3402</span>
          </li>
          <li className="flex gap-3 cursor-pointer">
            <Image src={iconPhone} alt="Icone Social" />
            <span>(81) 3224-3402</span>
          </li>
          <li className="flex gap-3 cursor-pointer">
            <Image src={iconMail} alt="Icone Social" />
            <span>contato@paniaguacorretora.com</span>
          </li>
        </ul>
        <span>© 2023 Paniagua - Corretora. Todos os direitos reservados</span>
      </nav>

      <AccordionPani />
    </footer>
  )
}
