import { useState } from "react";
import { useParams } from "react-router";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";



export function Event() {
  const {slug} = useParams<{slug: string}>()

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  console.log(isSidebarOpen)
  return (
    <div className="flex flex-col min-h-screen ">
    <Header 
    setIsSidebarOpen={setIsSidebarOpen}
    isSidebarOpen={isSidebarOpen}
    />
    <main className="flex flex-1">
    {slug
      ? <Video isSidebarOpen={isSidebarOpen} lessonSlug={slug}/>
      : <div className="flex-1"></div>}
    <Sidebar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen}/>
    </main>
    </div>
    
  )
}