import React from 'react'
import Example from './component/Example'
import Example2 from './component/Example2'
import Navbarrr from './component/Navbar'
import Slider from './component/Slider'

const NewHome = () => {
  return (
    <div>
        <Navbarrr />
        <Slider />
        <Example />
        <Example2 />
    </div>
  )
}

export default NewHome