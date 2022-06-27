import { DefaultUi, Player, Youtube } from "@vime/react";
import { CaretRight, DiscordLogo, FileArrowDown, Lightning } from "phosphor-react";

import '@vime/core/themes/default.css'
import { useGetLessonBySlugQuery } from "../generated";



interface VideoProps {
  lessonSlug: string;
  isSidebarOpen: boolean;
}




export function Video({lessonSlug,isSidebarOpen}: VideoProps) {
  const { data } = useGetLessonBySlugQuery({
    variables: {
      slug: lessonSlug
    }
  })

  console.log(data)


  if(!data || !data.lesson) return (<div className="flex flex-1 justify-center items-center">
    <p>Carregando...</p>
    </div>)
  return (
    <div className={`flex-1 ${isSidebarOpen ? 'hidden' : 'block'} xl:block` }>
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId={data.lesson.videoId}/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className="p-8 max-w-[1100px] mx-auto">
        <div className="flex items-start gap-16 flex-col md:flex-row">
          <div className="flex-1">
          <h1 className="text-2xl font-bold">
            {data.lesson.title}
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            {data.lesson.description}
          </p>

          {data.lesson.teacher && (
            <div className="flex items-center gap-4 mt-6">
            <img 
            className="h-16 w-16 rounded-full border-2 border-blue-500"
            src={data.lesson.teacher.avatarURL} 
            alt="" />
            <div>
              <strong className="font-bold text-2xl block">
                {data.lesson.teacher.name}
                </strong>
              <span className="text-gray-200 text-sm block">
                {data.lesson.teacher.bio}
                </span>
            </div>
          </div>
          )}
          </div>
          <div className="flex flex-col gap-4">
            <a href="#" className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-green-700 transition-colors">
              <DiscordLogo size={24}/>
              Discord Community
            </a>
            <a href="#" className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
              <Lightning size={24}/>
              Try the challenge
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-20 ">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors">
          <div className="bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40}/>
          </div>
          <div className="py-6 leading-relaxed">
          <strong className="text-2xl">Supplementary material</strong>
          <p className="text-sm text-gray-200 mt-2">
            Access the supplementary material to speed up your development
          </p>
          </div>
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24}/>
          </div>
          </a>
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-strech gap-6 hover:bg-gray-600 transition-colors">
          <div className="bg-green-700 h-full p-6 flex items-center">
            <FileArrowDown size={40}/>
          </div>
          <div className="py-6 leading-relaxed">
          <strong className="text-2xl">Exclusive wallpapers</strong>
          <p className="text-sm text-gray-200 mt-2">
            Download the exclusives wallpapers of Ignite Lab and customize your PC
          </p>
          </div>
          <div className="h-full p-6 flex items-center">
            <CaretRight size={24}/>
          </div>
          </a>
        </div>
      </div>
    </div>
  )
}