import React, { FC } from 'react'
import { MiniCard } from '../MiniCard/MiniCard'
import { Character } from "../../Pages/HarryPotter/HarryPotter"


interface GalleryProps {
  items: Character[]
}

export const Gallery: FC <GalleryProps> = ({items}) => {

 

  return (
    <div className='d-flex gap-5 flex-wrap justify-content-center pt-5 px-5'>
      {items?.map(item=>{
        return(
          <MiniCard key={item.id} data={item}/>
        )
      })}

    </div>
  )
}
