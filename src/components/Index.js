import React from 'react'
import Footer from './Footer'
import Benefits from './Landing/Benefits'
import Maintenance from './Landing/Maintenance'
import HomeBg from './Landing/HomeBg'
import JoinUs from './Landing/JoinUs'

export default function Index() {
  return (
    <div className="font-roboto">
        <div className="garage-blue-bg">
          <HomeBg />
        </div>
        <JoinUs />
        <Maintenance />
        <Benefits />
        <Footer />
    </div>
  )
}
