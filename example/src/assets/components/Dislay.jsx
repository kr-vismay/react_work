import React from 'react'

function Dislay({items}) {

  
  return (
    <>
    {items.map((val)=>(
      <h1>{val.data} and {val.emailadd}</h1>
    ))}
    </>
  )
}

export default Dislay