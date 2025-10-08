import React from 'react'
import './PlatformPerks.css'

const PlatformPerks = () => {
  return (
    <div>
        <div className='webflow-tour-section'>
            <div className='webflow-tour-texts'>
                <h1 className='webflow-tour-h1'>Webflow in action</h1>
                <p className='webflow-tour-p'> In this demo video, you'll learn how to build, <br />
                manage, and optimize websites that convert.</p>
                <button className='webflow-tour-button'>Explore the product tour → </button>
            </div>
           
        </div>

        <div className='demo-section'>
            <div className='demo-section-texts'>
                <h1 className='demo-section-h1'>Get a Demo</h1>
                <p className='demo-section-p'> Discover what's possible with Webflow Enterprise.</p>

                <div className='demo-section-buttons'>
                    <button className='talk-to-button'>Talk to sales </button>
                    <button className='watch-demo-button'>Watch demo video </button>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default PlatformPerks