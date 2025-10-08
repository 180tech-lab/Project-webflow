import React from 'react'
import './MarketingTeam.css'

const MarketingTeams = () => {
  return (
    <div className='marketing-team-container'>
        <h1 className='the-platform-h1'> The platform for modern <br />
        marketing teams</h1>
        <p className='the-platform-p-text'> Webflow Enterprise gives marketing teams the flexibility, <br />
        security, and reliability they need to scale innovative web <br />
        experiences that drive growth in the age of AI.</p>


        <div className='marketing-sections'>

          <div className='marketing-sections-div'>
            <div className='marketing-images-1'></div>
            <h3 className='marketing-sections-h3' >Move quickly without sacrificing quality <br />or process</h3>
            <p className='marketing-sections-p'> Launch on-brand experiences fast. Webflow Enterprise <br />
            delivers the marketing speed you need with the precision <br />
            you demand. Built-in guardrails protect quality, while <br />
            structured processes ensure speed without added risk.</p>
          </div>


          <div className='marketing-sections-div'>
            <div className='marketing-images-2'></div>
            <h3 className='marketing-sections-h3' >Turn traffic into revenue </h3>
            <p className='marketing-sections-p'>Launch sophisticated web experiments seamlessly with <br />
            native, AI-powered optimization tools. Webflow Enterprise <br />
            helps ensure your digital experiences are both SEO/AEO- <br />
            friendly and optimized for conversion — so you can drive <br />
            real business results.</p>
          </div>


          <div className='marketing-sections-div'>
            <div className='marketing-images-3'></div>
            <h3 className='marketing-sections-h3'>Reduce overhead with a single source of truth</h3>
            <p className='marketing-sections-p'> Collaborate more effectively by uniting creative, marketing, <br />
            and dev teams in one platform. With Webflow Enterprise, <br />
            every team can move faster, together — making scalable <br />
            web experiences possible and reducing the total cost <br />
            of ownership</p>
          </div>
        </div>
    </div>
  )
}

export default MarketingTeams 