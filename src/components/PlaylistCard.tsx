import { Play } from "lucide-react"

type Props = {
    title: string,
    url: string
}

export function PlaylistCard ( props: Props ){
    return (
        <a href="" className="group bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center gap-4">
            <img src={props.url} alt="album cover" width={104} height={80}/>
            <strong>{props.title}</strong>
            <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
            </button>
        </a>
    )
}