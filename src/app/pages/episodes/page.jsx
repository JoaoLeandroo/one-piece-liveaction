import CardEpisodes from "@/app/components/CardEpisodes/CardEpisodes"

export default function Episodes() {
    return(
        <main className="min-h-screen max-w-[1024px] w-full m-auto p-8 flex flex-wrap justify-center gap-8 mt-5">
            <CardEpisodes tittleEp="1 - O amanhecer de uma aventura" description="Preso em um barco afundando, Luffy começa a jornada em busca do tesouro perdido do rei dos piratas. Só que, para isso, ele precisa de uma tripulação, um navio e um mapa."/>
            <CardEpisodes tittleEp="2 - O homem do chapéu de palha" description="Após conseguirem o mapa da Grand Line, Luffy, Nami e Zoro enfrentam um palhaço que não está para brincadeira. O novo cadete Koby é encurralado pelo Vice-Almirante Garp."/>
            <CardEpisodes tittleEp="3 - O contador de histórias" description="Em busca de um navio, o grupo chega à Vila Syrup e encontra o animado Usopp e sua amiga Kaya. Mas uma ameaça sinistra atrapalha os planos."/>
            <CardEpisodes tittleEp="4 - Os piratas estão vindo" description="Com os amigos em perigo e o plano de Klahador em ação, Usopp pede ajuda à Marinha. O clima esquenta em uma batalha na mansão de Kaya."/>
            <CardEpisodes tittleEp="5 - Venha comer no baratie!" description="O Bando do Chapéu de Palha enfrenta o primeiro adversário. Num restaurante flutuante, Luffy faz amizade com um cozinheiro, e Zoro se envolve em um duelo."/>
            <CardEpisodes tittleEp="6 - O chef e o faz-tudo" description="Sanji e o chef Zeff deixam as diferenças de lado para salvar Zoro, que está gravemente ferido. Um homem-peixe implacável causa problemas para a tripulação."/>
            <CardEpisodes tittleEp="7 - A garota com tatuagem de peixe-serra" description="Após fazer um acordo com um velho inimigo para encontrar Arlong, Luffy e seus amigos navegam até a Vila Cocoyashi e descobrem o passado misterioso de Nami."/>
            <CardEpisodes tittleEp="8 - O mais procurado do East blue" description="A tripulação dos chapéus de palha luta para derrotar Arlong e os homens-peixe de uma vez por todas. Após uma difícil reunião de família, Luffy fica mais perto do seu sonho."/>
        </main>
    )
}