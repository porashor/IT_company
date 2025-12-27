import React from 'react'
import Banner from '../component/Banner'
import CountDetails from '../component/CountDetails'
import Support from '../component/Support'
import OurService from '../component/OurService'
import Speciality from '../component/Speciality'

const Home = () => {
  return (
    <div>
      <Banner/>
      <CountDetails/>
      <Support />
      <OurService/>
      <Speciality/>
    </div>
  )
}

export default Home
