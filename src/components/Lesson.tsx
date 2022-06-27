import {CheckCircle, Lock} from 'phosphor-react'
import { useState } from 'react'
import {isPast, format} from 'date-fns'
import { Link, useParams } from 'react-router-dom'
import classNames from 'classnames'

interface LessonProps {
  title: string;
  slug: string;
  availableAt: Date;
  type: 'live' | 'class';
  isSidebarOpen: boolean;
  setIsSidebarOpen: (v: boolean) => void;
}

export function Lesson({title,slug,availableAt,type, setIsSidebarOpen}: LessonProps) {
  const availableDateFormatted = format(availableAt, "EEEE' • ' d MMMM' • 'k':'mm")
  const [isLessonAvailable, setIsLessonAvailable] = useState(isPast(availableAt))
  const data = useParams<{slug: string}>()

  const isActiveLesson = slug === data.slug
  
  return (
    <Link
     to={`/event/lesson/${slug}`}
     className="group"
     onClick={() => {setIsSidebarOpen(false)}}
     >
      <span className="text-gray-300 ">
        {availableDateFormatted}
      </span>

    

      <div className={classNames('rounded border border-gray-500 p-4 group-hover:border-green-500 transition-colors',{
        'bg-green-500': isActiveLesson
      })}>
        <header className="flex items-center justify-between ">
       {isLessonAvailable ? (
          <span className={classNames("text-sm font-medium flex items-center gap-1",{
            'text-white': isActiveLesson,
            'text-blue-500': !isActiveLesson
          })}>
          <CheckCircle size={20}/>
          Content released
        </span>
       ) : (
        <span className="text-sm text-orange-500 font-medium flex items-center gap-1 ">
        <Lock size={20}/>
        Coming soon
      </span>
       )}
        <span className={classNames("text-xs rounded px-2 py-[2px] border text-white font-bold", {
          'border-white': isActiveLesson,
          'border-green-300': !isActiveLesson
        })}>
          {type === 'live' ? 'LIVE' : 'CLASS'}
        </span>
        </header>



        <strong className={classNames('mt-5 block', {
          'text-white': isActiveLesson,
          'text-gray-200': !isActiveLesson
        })}>
          {title}
        </strong>
      </div>
    </Link>
  )
}