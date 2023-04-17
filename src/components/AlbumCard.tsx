
type Props = {
    title: string,
    description: string,
    url: string
}

export function AlmbumCard( props: Props) {
    return (
        <a href="" className="flex flex-col gap-2 bg-white/5 hover:bg-white/10 p-3 rounded-md">
            <img src={props.url} alt="album cover" className="w-full" width={104} height={80}/>
            <strong className="font-semibold">{props.title}</strong>
            <strong className="text-base text-zinc-500">{props.description}</strong>
        </a>
    )
}