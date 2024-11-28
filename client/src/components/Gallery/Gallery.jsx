import React from 'react'
import { MiniCard } from '../MiniCard/MiniCard'

export const Gallery = ({items}) => {

 

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
