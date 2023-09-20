import Image from "next/image"

export default function Anime() {
    return(
        <main className="w-full min-h-screen flex flex-col items-center mt-10">
            <Image
            className="rounded-lg max-w-[500px] w-[95%] mb-8"
            src="/one-piece-ani.jpg"
            width={600}
            height={400}
            />
            <p className="max-w-[700px] w-[95%] text-white font-medium max_640:text-center">
            "One Piece" é um popular anime e mangá criado por Eiichiro Oda que começou a ser serializado em 1999. A história segue Monkey D. Luffy, um jovem pirata com a habilidade de esticar seu corpo como resultado de comer a Fruta do Diabo Gomu Gomu. Determinado a se tornar o Rei dos Piratas e encontrar o lendário tesouro conhecido como o "One Piece", Luffy parte em uma jornada épica pelo Grande Mar conhecido como Grand Line.
            <br /> <br />
            A série é ambientada em um mundo vasto e cheio de ilhas, criaturas místicas e governantes poderosos. Luffy forma a Tripulação dos Chapéus de Palha, composta por personagens carismáticos, cada um com habilidades únicas. Juntos, eles enfrentam inúmeras aventuras, desafios e inimigos perigosos, incluindo a Marinha Mundial e os Yonko, os quatro piratas mais poderosos do mundo.
            <br /> <br />
            Além da busca pelo tesouro lendário, "One Piece" aborda temas de amizade, liberdade, justiça e o significado da verdadeira força. A história é repleta de reviravoltas emocionantes, momentos emocionantes e batalhas épicas. Com mais de 1000 capítulos de mangá e centenas de episódios de anime, "One Piece" continua a ser um fenômeno global, conquistando fãs de todas as idades e permanecendo como um dos mangás e animes mais populares de todos os tempos.
            </p>
        </main>
    )
}