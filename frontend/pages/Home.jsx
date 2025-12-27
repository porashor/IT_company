import React from 'react'
import Banner from '../component/Banner'
import CountDetails from '../component/CountDetails'
import Support from '../component/Support'
import OurService from '../component/OurService'
import Speciality from '../component/Speciality'
import ClientArea from '../component/ClientArea'
import WorldWideClient from '../component/WorldWideClient'

const Home = () => {
  return (
    <div>
      <Banner/>
      <CountDetails/>
      <Support />
      <OurService/>
      <Speciality/>
      <ClientArea/>
      <WorldWideClient/>
    </div>
  )
}

export default Home
