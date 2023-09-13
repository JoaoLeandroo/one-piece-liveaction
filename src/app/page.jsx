import Image from "next/image"

export default function Home() {
  return (
    <main>
      <section className="w-full flex mt-28">
        <div className="w-[50%] flex items-center justify-center flex-col">
          <h1 className="text-white text-3xl font-semibold text-center">One Piece <br /> <span className="text-6xl">LiveAction</span></h1>
          
          <p className="text-white mt-3 text-lg font-semibold">Confira o trailer oficial</p>
          <button>PLAY</button>
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
      <section>

      </section>
    </main>
  )
}
