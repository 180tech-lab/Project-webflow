import React from 'react'
import './platformHero.css'

const platformHero = () => {
  return (
    <div className='platformhero-container'>

        <h1 className='platformhero-h1'>A platform that powers growth. <br /> A partner that supports it </h1>
        <p className='platformhero-p-text'>From implementation support to in-the-moment troubleshooting, we’re here to <br />
        help you build, scale, and optimize your digital experiences.</p>

        <div className='perks-sections'>

            <div className='perks-divs'>
                <i class="bi bi-watch perks-sections-icons"></i>
                <h5 className='perks-sections-h5'>24/7 tailored customer service</h5>
                <p className='perks-sections-p'>Get 24/7 support from a team that understands your <br />
                needs. Work through any problem with help from a real <br />
                person, at any time.</p>
            </div>

            <div className='perks-divs'>
                <i class="bi bi-person-raised-hand perks-sections-icons"></i>
                <h5 className='perks-sections-h5'>A dedicated customer success manager </h5>
                <p className='perks-sections-p'>Work with a dedicated customer success manager to meet <br />
                your business goals and maximize your investment in <br />
                Webflow Enterprise.</p>
            </div>

            <div className='perks-divs'>
                <i class="bi bi-gear perks-sections-icons"></i>
                <h5 className='perks-sections-h5'>Solutions architects</h5>
                <p className='perks-sections-p'>Consult with a solutions architect to streamline your <br />
                implementation and get guidance and expertise to scale <br />
                your use of Webflow Enterprise.</p>
            </div>
        </div>


        <div className='powerful-brand-sections'>
            <h1 className='powerful-brand-h1'> 300,000 powerful brands, <br /> powered by Webflow</h1>

            <div className='slide-sections'>

                <div className='first-slide'>
                    <div className='slides-text'>
                        <h2 className='slides-h2'>20%</h2>
                        <p className='slides-p1'>Increase in site-wide conversion</p>
                        <p className='slides-p2'> "With Webflow, we've significantly improved <br />
                        organic traffic, SEO, and coversions. From my <br />
                        perspective as CMO, that's a huge win because <br />
                        our brand is eaching more people"</p>
                        <p className='slides-p3'>Elizabeth Walton Egan</p>
                        <p className='slides-p4'>CMO </p>
                    </div>  
                </div>

                <div className='second-slide'>
                    <div className='slides-text'>
                        <h2 className='slides-h2'>$6M</h2>
                        <p className='slides-p1'>in cost savings annualy</p>
                        <p className='slides-p2'> "We're saving upwards of $6M a year with <br />
                        Webflow, and we've reinvested those savings in <br /> 
                        other areas like website optimization and <br />
                        Localization... that's been really powerful."</p>
                        <p className='slides-p3'>Malcolm Greene</p>
                        <p className='slides-p4'>Chief Information Officer </p>
                    </div>  
                </div>
                
            </div>


            <p className='talk-to-us-p'>Talk to us about how Webflow can unlock impact for your team </p>
        </div>


        <div className='future-section'>
            <h1 className='future-section-h1'>The future of the web is yours to build </h1>
            <p className='future-section-p'>Explore whitepapers, ebooks, and more about creating <br />
            web experiences that get results with Webflow.</p>


            <div className='webinar-slide-sections'>

                <div className='webinar-slides'>
                    <div className='webinar-texts'>
                    <h5 className='webinar-h5'>WEBINARS</h5>
                    <p className='webinar-p'> Webflow Wednesday's WXP demo</p>
                    <p className='webinar-button'>Watch webinar → </p>
                    </div>
                </div>

                <div className='webinar-slides'>
                    <div className='webinar-texts'>
                    <h5 className='webinar-h5'> WEBINARS </h5> 
                    <p className='webinar-p'> Dermalogica's formula for a scalable <br /> 
                    website testing program</p> 
                    <p className='webinar-button'>Watch webinar → </p> 
                    </div>
                </div>

                <div className='webinar-slides'>
                    <div className='webinar-texts'>
                    <h5 className='webinar-h5'>WEBINARS</h5>
                    <p className='webinar-p'> Searching for the answer : Best practices <br />
                    to win at Answer Engine optimization <br />(AEO) </p>
                    <p className='webinar-button'>Watch webinar → </p>
                    </div>
                </div>

            </div>
        </div>
        
    </div>
  )
}

export default platformHero



