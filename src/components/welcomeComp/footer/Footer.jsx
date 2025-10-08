import React from 'react'
import './Footer.css'
// import weblogo from '../../../assets/webflow-logo.svg'
import biglogo from '../../../assets/Mark_Logo_Blue.svg'

const Footer = () => {
  return (
    <div className='footer-container'>

        <div className='footer-sections-container'>

            <div className='product-footer-section'>
                <h2 className='footer-container-h2'>Product</h2>
                <ul className='footer-container-ul'>
                    <li>Platform</li>
                    <li>Design</li>
                    <li>Edit mode</li>
                    <li>Interactions</li>
                    <li>GSAP</li>
                    <li>Page building</li>
                    <li>Shared Libraries </li>
                    <li>CMS</li>
                    <li>Hosting</li>
                    <li>Localization</li>
                    <li>Security</li>
                    <li>Ecommerce</li>
                    <li>Analyze</li>
                    <li>Optimize</li>
                    <li>SEO</li>
                    <li>Webflow Cloud </li>
                    <li>DevLink</li>
                    <li>Figma to Webflow</li>
                    <li>Accessibility</li>
                    <li>AI</li>
                </ul>
            </div>

            <div className='solutions-footer-section'> 
                <div>
                    <h2 className='footer-container-h2'>Solutions</h2>
                    <ul className='footer-container-ul'   >
                        <li>Enterprise</li>
                        <li>Startups</li>
                        <li>Global alliances</li>
                        <li>Agencies</li>
                        <li>Freelancers</li>
                        <li>Classrooms</li>
                    </ul>
                </div>

                <div className='resources-section'>
                    <h2 className='footer-container-h2'>Resources </h2>
                    <ul className='footer-container-ul' id='resources'>
                        <li>University</li>
                        <li>Blog</li>
                        <li>Customer stories</li>
                        <li>Webinars and ebooks </li>
                        <li>Apps</li>
                        <li>Libraries </li>
                        <li>Templates</li>
                        <li>Developers</li>
                        <li>Made in Webflow </li>
                        <li>Glossary </li>
                        <li>Livestreams </li>
                        <li>The Webflow Way </li>
                    </ul>
                </div>
                
            </div>


            <div className='commpany-footer-section'> 
                <h2 className='footer-container-h2'>Company </h2>
                    <ul className='footer-container-ul' id='company'>
                        <li>About</li>
                        <li>Careers</li>
                        <li>Press</li>
                        <li>Webflow Ventures </li>
                        <li>Webflow Shop</li>
                        <li>Terms of Service </li>
                        <li>Privacy policy </li>
                        <li>Cookie policy</li>
                        <li>Accessibility statement </li>
                    </ul>
            </div>


            <div className='community-footer-section'> 
                <div>
                    <h2 className='footer-container-h2'>Community</h2>
                    <ul className='footer-container-ul' id='community'>
                        <li>Discover the community </li>
                        <li>Partner with Webflow </li>
                        <li>Certified Partners </li>
                        <li>Become a template designer</li>
                        <li>Become an affiliate </li>
                        <li>Become a Global Leader</li>
                        <li>Find a meetup near you</li>
                    </ul>
                </div>

                <div className='get-help-section'>
                    <h2 className='footer-container-h2'>Get help </h2>
                    <ul className='footer-container-ul'>
                        <li>Support</li>
                        <li>Pricing</li>
                        <li>Status</li>
                        <li>Forum</li>
                        <li>Wishlist</li>
                    </ul>
                </div>
            </div>
        </div>

        

        <div className='copy-logo-sections'>
            <div className='copyright-sections'>
                        <p className='copyright-sections-p'> &copy; 2025 Webflow, Inc. All rights reserved</p>
                        <ul className='social-media-icons'>
                            {/* <li><img className='logo-icon' src={weblogo} alt="" /></li> */}
                            <li><i class="bi bi-youtube"></i></li>
                            <li><i class="bi bi-twitter-x"></i></li>
                            <li><i class="bi bi-facebook"></i></li>
                            <li><i class="bi bi-linkedin"></i></li>
                            <li><i class="bi bi-instagram"></i></li>
                            <li><i class="bi bi-tiktok"></i></li>
                        </ul>
            </div>

            <img className='biglogo' src={biglogo} alt="" />
        </div>
        
    </div>
  )
}

export default Footer