import { 
  Home as Hm, Search, Library, ChevronLeft, ChevronRight, Play, Shuffle, 
  SkipBack, SkipForward, Repeat, Mic2, LayoutList, Laptop2, Volume, Maximize2 
} from "lucide-react"

import { Footer } from "../components/Footer"
import { SideBar } from "../components/SideBar"
import { PlaylistCard } from "../components/PlaylistCard"
import { AlmbumCard } from "../components/AlbumCard"

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <SideBar />
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
            <PlaylistCard url="https://i.scdn.co/image/ab67706f0000000260b6ecd766a3868769797085" title = "This is Matruz Com Leite" />
            <PlaylistCard url="https://images.suamusica.com.br/ceHW5v4lWSWoEvf32IbbjUS4Ut0=/500x500/filters:format(webp)/47917586/3955181/cd_cover.jpeg" title = "Raíz" />
            <PlaylistCard url="https://www.tenhomaisdiscosqueamigos.com/wp-content/uploads/2022/08/capa-playlist-rock-classics.jpg" title = "Rock Classics" />
            <PlaylistCard url="https://i.scdn.co/image/ab67706f00000002d9fc0df3a88b082cc949aa67" title = "Aulas" />
            <PlaylistCard url="https://i.scdn.co/image/ab67616d0000b273175c5e58d396b45c4f637deb" title = "Chico Buarque" />
          </div>
          <h2 className="font-bold text-2xl mt-10"> Made for Wata Negreiros Monteiro</h2>
          <div className="grid grid-cols-7 gap-4 mt-4">
            <AlmbumCard title="Funk Hits" description="Os Bicos tão se perguntando..." url="https://i.scdn.co/image/ab67706f000000024bbe1cefc672da294a1479c2"/>
            <AlmbumCard title="Top Brasil" description="Kay Black e os maiores hits do país..." url="https://i.scdn.co/image/ab67706f00000002eb4d2bd679cd408bab2523de"/>
            <AlmbumCard title="Esquenta Sertanejo" description="Os melhores sertanejos em uma só playlist!..." url="https://i.scdn.co/image/ab67706f000000020756ad3cd75c8db02f3313a8"/>
            <AlmbumCard title="Hits da Internet" description="ta mas vcs viram que o troy seguiu..." url="https://i.scdn.co/image/ab67706f00000002229e033a14f9fd3f94377e24"/>
            <AlmbumCard title="Hot Hits Brasil" description="Os grandes Hits do Brasil estão aqui.." url="https://i.scdn.co/image/ab67706f00000002d718f0c1c77e9fd59dcacbdb"/>
            <AlmbumCard title="Sol e Churrasco" description="Tem Sertanejo! Tem Funk! Tem.." url="https://i.scdn.co/image/ab67706f00000002b774b71d2ca58fabac49af8e"/>
            <AlmbumCard title="Bora Arrochar" description="Queeeima paredão! Pra forrozeiro sofrer..." url="https://i.scdn.co/image/ab67706f000000029ddb6e3c827a45b3c47ffe8d"/>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
