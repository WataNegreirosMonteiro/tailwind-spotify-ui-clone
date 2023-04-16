import { Home as Hm, Search, Library, ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <nav className="space-y-5 mt-10">
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100" >
              <Hm /> Home
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100">
              <Search /> Search
            </a>
            <a href="" className="flex items-center gap-3 text-sm font-semibold text-zinc-300 hover:text-zinc-100">
              <Library /> Your Library
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
        <main className="flex-1 p-6">
          <div className="flex items-center gap-4">
            <button className="rounded-full bg-black/40 hover:bg-black/30 p-3">
              <ChevronLeft />
            </button>
            <button className="rounded-full bg-black/40 hover:bg-black/30 p-3">
              <ChevronRight />
            </button>
          </div>

          <h1 className="font-bold text-3xl mt-10"> Good Afternoon</h1>
        
          <div className="grid grid-cols-3 gap-4 mt-4">
            <a href="" className="group bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center gap-4">
              <img src="https://cdns-images.dzcdn.net/images/cover/cc5a009092776bda408530f5660f51cd/264x264.jpg" alt="album ..." width={104} height={80}/>
              <strong>Black Sabbath</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="group bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center gap-4">
              <img src="https://cdns-images.dzcdn.net/images/cover/cc5a009092776bda408530f5660f51cd/264x264.jpg" alt="album ..." width={104} height={80}/>
              <strong>Black Sabbath</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="group bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center gap-4">
              <img src="https://cdns-images.dzcdn.net/images/cover/cc5a009092776bda408530f5660f51cd/264x264.jpg" alt="album ..." width={104} height={80}/>
              <strong>Black Sabbath</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
            <a href="" className="group bg-white/5 hover:bg-white/10 transition-colors rounded overflow-hidden flex items-center gap-4">
              <img src="https://cdns-images.dzcdn.net/images/cover/cc5a009092776bda408530f5660f51cd/264x264.jpg" alt="album ..." width={104} height={80}/>
              <strong>Black Sabbath</strong>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-400 text-black ml-auto mr-8 invisible group-hover:visible">
                <Play />
              </button>
            </a>
          </div>
          <h2 className="font-bold text-2xl mt-10"> Made for Wata Negreiros Monteiro</h2>
          <div className="grid grid-cols-5 gap-4 mt-4">
            <a href="" className="flex flex-col gap-2 bg-white/5 hover:bg-white/10 p-3 rounded-md">
              <img src="https://cdns-images.dzcdn.net/images/cover/cc5a009092776bda408530f5660f51cd/264x264.jpg" alt="album ..." className="w-full" width={104} height={80}/>
              <strong className="font-semibold">Daily Mix 1</strong>
              <span className="text-sm text-zinc-500">Zezé Dicamargio</span>
            </a>
          </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 p-6">
        footer
      </footer>
    </div>
  )
}
