import Image from "next/image"
import { AiOutlinePlayCircle } from 'react-icons/ai'
import ModalPlay from "./components/ModalPlay/page"

export default function Home() {

  

  return (
    <main>
      <section className="w-full flex mt-28 max_1024:flex-col, max_1024:flex-col-reverse max_1024:items-center max_1024:gap-2">
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

      <section className="w-full flex items-center justify-center mt-8">
        <div className="w-[50%] flex justify-center flex-col">
          <div className="w-full flex items-center justify-center">
          <Image 
          className="w-[50%] sm:w-full"
          src="/netflix-logo.png"
          width={500}
          height={200}
          />
          </div>

          <h2 className="text-white font-bold text-3xl text-center mb-2">One Piece e a Netflix</h2>
          <p className="text-white font-semibold text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Obcaecati aperiam reprehenderit animi illo facilis. 
            Sit eum quod corrupti quas? Provident architecto excepturi voluptates autem fugiat. 
            Ab ipsum sapiente reprehenderit quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Obcaecati aperiam reprehenderit animi illo facilis. 
            Sit eum quod corrupti quas? Provident architecto excepturi voluptates autem fugiat. 
            Ab ipsum sapiente reprehenderit quam!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Obcaecati aperiam reprehenderit animi illo facilis. 
            Sit eum quod corrupti quas? Provident architecto excepturi voluptates autem fugiat. 
            Ab ipsum sapiente reprehenderit quam! Ab ipsum sapiente reprehenderit quam!
            Obcaecati aperiam reprehenderit Ab ipsum sapiente reprehenderit quam!
            Obcaecati aperiam reprehenderit animi illo facilis. 
            Sit eum quod corrupti quas? Provident architecto excepturi voluptates autem fugiat. 
            Ab ipsum sapiente reprehenderit quam!
          </p>
        </div>

      </section>
    </main>
  )
}
