import Image from "next/image"

export default function CardEpisodes() {
    return(
        <section className="w-96 bg-red-600 rounded-md shadow-shadowCard">
            <div className="w-full bg-blue-700 p-2 rounded-t-md">
                <h2 className="text-center text-white font-semibold">Titulo Episodio</h2>
            </div>
            <Image
            className="w-full bg-cover"
            src="/post-op.jpg"
            width={300}
            height={300}
            />
            <div className="w-full p-2">
                <p className="text-white text-lg font-semibold text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est expedita autem ullam exercitationem qui quibusdam deleniti, itaque incidunt debitis, sit totam sequi velit sint ea, id beatae adipisci voluptatibus!
                </p>
            </div>
        </section>
    )
}