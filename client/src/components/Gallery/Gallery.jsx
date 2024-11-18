import React from 'react'
import { MiniCard } from '../MiniCard/MiniCard'

export const Gallery = ({dataHarryPotter}) => {

 

  return (
    <div className='d-flex gap-5 flex-wrap justify-content-center pt-5 px-5'>
      {dataHarryPotter?.map(e=>{
        return(
          <MiniCard key={e.id} data={e}/>
        )
      })}

    </div>
  )
}
