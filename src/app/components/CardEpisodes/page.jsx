import Image from "next/image"

export default function CardEpisodes(props) {
    return(
        <section className="w-96 max-h-[400px] bg-card-transparent rounded-md shadow-shadowCard">
            <div className="w-full p-2 rounded-t-md">
                <h2 className="text-center text-white font-semibold text-lg">{props.tittleEp}</h2>
            </div>
            <Image
            className="w-[95%] m-auto rounded-lg bg-cover"
            src="/post-op.jpg"
            width={300}
            height={300}
            />
            <div className="w-full p-2">
                <p className="text-white font-medium text-center">
                    {props.description}
                </p>
            </div>
        </section>
    )
}