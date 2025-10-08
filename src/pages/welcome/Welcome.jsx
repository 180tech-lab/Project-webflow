import React from 'react'
import NavBar from '../../components/welcomeComp/navBar/NavBar'
import HeroSection from '../../components/welcomeComp/heroSection/HeroSection'
import MarketingTeams from '../../components/welcomeComp/marketingTeam/MarketingTeam'

const Welcome = () => {
  return (
    <>
        <NavBar/>
        <HeroSection/>
        <MarketingTeams/>
    </>
  )
}

export default Welcome