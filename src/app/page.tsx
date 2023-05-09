import {Navbar} from "@/components/layout/navbar/navbar";
import {Header} from "@/components/layout/header/header";
import {Preview} from "@/components/layout/preview/preview";

export default function Home() {
  return (
    <main className="flex h-screen w-screen flex-col">
        <Header/>
        <Navbar/>
        <Preview/>
    </main>
  )
}
