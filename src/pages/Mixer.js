import React from 'react'
import Chooser from '../components/Chooser'
import "../style/Mixer.css";

function Mixer() {
  return (<>
    <div>Mixer</div>
    <div className='chooser'>
    <Chooser/>
    </div>
    </>
  )
}

export default Mixer