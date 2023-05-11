import Image from 'next/image'
import icon from '../../public/iconsSeguradoras00.png'
import icon1 from '../../public/iconsSeguradoras01.png'

export function Section2() {
  return (
    <section className="py-20 px-5 flex flex-col gap-24 bg-slate-100 items-center lg:max-h-80">
      <div>
        <h2 className="text-cyan-900 font-bold text-xl text-center lg:text-4xl">
          Confira algumas{' '}
          <span className="text-yellow-500 font-extrabold">seguradoras</span>{' '}
          que trabalhamos
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row lg:px-80 items-center justify-center">
        <div className="h-auto w-auto">
          <Image src={icon} alt="Icones seguradoras" />
        </div>
        <div className="h-auto w-auto">
          <Image src={icon1} alt="Icones de outras seguradoras" />
        </div>
      </div>
    </section>
  )
}
