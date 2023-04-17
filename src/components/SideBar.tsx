import { Home as Hm, Search, Library } from "lucide-react"

export function SideBar(){
    return (
        <aside className="w-72 bg-zinc-950 p-6">
            <div className="flex items-center gap-2">
                <a href=""><div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400"></div></a>
                <a href=""><div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400"></div></a>
                <a href=""><div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400"></div></a>
            </div>
            <nav className="space-y-5 mt-10">
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100" >
                    <Hm /> Home
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100">
                    <Search /> Search
                </a>
                <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100">
                <   Library /> Your Library
                </a>
            </nav>
            <hr className="mt-6 pt-6 border-t border-zinc-800"/>
            <nav className="flex flex-col gap-3">
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Top Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Funk Hits</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aulas</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pop Brasil</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Pagodeira</a>
                <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Trapperz Brasil</a>
            </nav>
        </aside>
    )
}