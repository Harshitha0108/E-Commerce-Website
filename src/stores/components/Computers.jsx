import React from 'react'

import { computerData } from '../data/computer'

const Computers = () => {
 const firstFiveImages=computerData.slice(0,5)
    

  return (
    <>
   <h2>Computers</h2>
    <div className= 'proSection'>
{
    firstFiveImages.map((item)=>
    {
     return(
     <div className='imgBox'>
      <img classname='proImage'src={item.image} alt="" />
    
    </div>
  )
})
}
</div>


</>

)
}

export default Computers