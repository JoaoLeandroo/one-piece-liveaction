import Image from "next/image"
import { AiOutlinePlayCircle } from 'react-icons/ai'
import ModalPlay from "./components/ModalPlay/page"

export default function Home() {

  

  return (
    <main>
      <section className="w-full flex mt-28 max_1024:flex-col-reverse max_1024:items-center max_1024:gap-2 max_1024:p-3">
        <div className="w-[50%] flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl font-semibold text-center">One Piece <br /> <span className="text-6xl">LiveAction</span></h1>
          
          <p className="text-white mt-3 text-lg font-semibold">Confira o trailer oficial</p>

          <ModalPlay button={<AiOutlinePlayCircle size={50} color="white"/>}/>
        </div>

        <div className="w-50%">
          <Image
          className="rounded-3xl"
          src="/banner.jpg"
          width={500}
          height={500}
          />
        </div>
      </section>

      <section className="mt-12 w-full flex flex-col items-center">
        <Image
        className="max_1024:w-[50%]"
        src="/logo-netflix.png"
        width={500}
        height={500}
        />

        <div className="mt-4 w-[70%] m-auto p-4 max_1024:w-[95%]">
          <p className="text-white font-semibold text-xl max_1024:text-center">
          One Piece é uma série live-action baseada no mangá de mesmo nome, criada por Eiichiro Oda. A série é produzida pela Netflix em parceria com a Shueisha, editora do mangá. <br /> <br />

          A primeira temporada da série, que estreou em agosto de 2023, adaptou o arco East Blue do mangá, que apresenta os principais personagens da série, incluindo Monkey D. Luffy, Nami, Zoro, Usopp e Sanji. <br /> <br />

          A série recebeu críticas positivas da crítica, que elogiou a fidelidade à obra original e a atuação do elenco. A Netflix já renovou a série para uma segunda temporada. One Piece é uma série live-action baseada no mangá de mesmo nome, criada por Eiichiro Oda. A série é produzida pela Netflix em parceria com a Shueisha, editora do mangá. <br /> <br />

          A primeira temporada da série, que estreou em agosto de 2023, adaptou o arco East Blue do mangá, que apresenta os principais personagens da série, incluindo Monkey D. Luffy, Nami, Zoro, Usopp e Sanji. <br /> <br />

          A série recebeu críticas positivas da crítica, que elogiou a fidelidade à obra original e a atuação do elenco. A Netflix já renovou a série para uma segunda temporada.
          </p>
        </div>
      </section>
    </main>
  )
}
