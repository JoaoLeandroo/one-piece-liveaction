import Image from "next/image"
import Link from "next/link"

export const Header = () => {
    return(
        <header className="bg-header-color w-full h-[65px] flex items-center justify-around">
            <Link href={'/'}>
                <Image
                className="max_640:w-[80px]"
                src="/logo.webp"
                width={140}
                height={140}
                alt="Logo One Piece"
                title="Página Inicial"
                />
            </Link>

            <nav>
                <ul className="flex gap-3 font-medium">
                    <li>
                        <Link className="max_640:text-lg text-xl text-li-fixo transition-all duration-300 ease-in-out hover:text-white hover:underline underline-offset-8" href={'../pages/episodes'}>
                            Episodios
                        </Link>
                    </li>
                    <li>
                        <Link className="max_640:text-lg text-xl text-li-fixo transition-all duration-300 ease-in-out hover:text-white hover:underline underline-offset-8" href={'../pages/characters'}>
                            Personagens
                        </Link>
                    </li>
                    <li>
                        <Link className="max_640:text-lg text-xl text-li-fixo transition-all duration-300 ease-in-out hover:text-white hover:underline underline-offset-8" href={'../pages/anime'}>
                            Anime
                        </Link>
                    </li>
                </ul>
            </nav>            
        </header>
    )
}