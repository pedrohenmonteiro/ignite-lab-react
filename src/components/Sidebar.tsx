import {useState} from 'react'
import { useGetLessonsQuery } from "../generated";
import { Lesson } from "./Lesson";

interface SidebarProps {
  setIsSidebarOpen: (v: boolean) => void;
  isSidebarOpen: boolean
}

export function Sidebar({isSidebarOpen, setIsSidebarOpen}: SidebarProps) {
  const {data} = useGetLessonsQuery()

  
  return (
    <aside className={`w-full xl:w-[348px] h-screen xl:h-auto overflow-y-scroll xl:overflow-hidden bg-gray-700 p-6 border-l static border-gray-600 ${isSidebarOpen ? 'block' : 'hidden'} xl:block` }>
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">Class schedule</span>
      <div className="flex flex-col gap-8">
      {data?.lessons.map(lesson => {
        return (
          <Lesson 
          key={lesson.id}
          title={lesson.title}
          slug={lesson.slug}
          availableAt={new Date(lesson.availableAt)}
          type={lesson.lessonType}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          />
        )
      })}
    </div>
    </aside>
    
  )
}