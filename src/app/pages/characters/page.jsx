import Image from "next/image"

export default function Characters() {
    return(
        <main className="w-full min-h-screen flex flex-col items-center mt-10">
        <Image
        className="rounded-lg max-w-[500px] w-[95%] mb-8"
        src="/atores.jpg"
        width={500}
        height={500}
        />
        <div className="max-w-[700px] w-[95%] text-white font-medium">
            <div>
                <h2 className="text-center text-lg font-semibold mb-1">Monkey D. Luffy</h2>
                <p className="max_640:text-center">Iñaki Godoy interpreta Monkey D. Luffy, o protagonista da série. Luffy é um jovem pirata que sonha em se tornar o Rei dos Piratas. Ele comeu a Gomu Gomu no Mi, uma Fruta do Diabo que lhe dá o poder de esticar seu corpo como borracha.</p>
            </div><br />
            <div>
                <h2 className="text-center text-lg font-semibold mb-1">Ronoa Zoro</h2>
                <p className="max_640:text-center">
                Mackenyu interpreta Roronoa Zoro, o primeiro membro da tripulação de Luffy. Zoro é um espadachim habilidoso que sonha em se tornar o maior espadachim do mundo.
                </p>
            </div><br />
            <div>
                <h2 className="text-center text-lg font-semibold mb-1">Nami</h2>
                <p className="max_640:text-center">
                Emily Rudd interpreta Nami, a navegadora da tripulação. Nami é uma ladra habilidosa que sonha em desenhar um mapa do mundo inteiro.
                </p>
            </div><br />
            <div>
                <h2 className="text-center text-lg font-semibold mb-1">Usopp</h2>
                <p className="max_640:text-center">
                Jacob Romero Gibson interpreta Usopp, o atirador da tripulação. Usopp é um mentiroso compulsivo que sonha em se tornar um grande guerreiro.
                </p>
            </div><br />
            <div>
                <h2 className="text-center text-lg font-semibold mb-1">Sanji</h2>
                <p className="max_640:text-center">
                Taz Skylar interpreta Sanji Vinsmoke, o cozinheiro da tripulação. Sanji é um cavalheiro gentil que sonha em encontrar o All Blue, um oceano lendário onde todas as criaturas marinhas vivem juntas.
                </p>
            </div>
        </div>
        </main>
    )
}