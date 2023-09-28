
//import { Outlet } from 'react-router-dom'
import HeaderHome from "../../ui/components/home/Header/Header"
import ContainerHome from "../../ui/components/home/ContainerHome/ContainerHome"
import './styleHome.css'


function Home() {
 
  return (
    <div className="App">
      {/* SVG */}
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="526" height="143" viewBox="0 0 526 143" fill="none">
            <path d="M0 0H384.5H505.022C524.437 0 532.465 24.8788 516.712 36.2276L373.737 139.228C370.332 141.68 366.242 143 362.046 143H20C8.9543 143 0 134.046 0 123V0Z" fill="url(#paint0_linear_304_18278)"/>
            <defs>
                <linearGradient id="paint0_linear_304_18278" x1="4.07956e-07" y1="71" x2="567" y2="71" gradientUnits="userSpaceOnUse">
                <stop stopColor="#C98FEC"/>
                <stop offset="1" stopColor="#A89BFF"/>
                </linearGradient>
            </defs>
          </svg>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="540" height="157" viewBox="0 0 540 157" fill="none">
            <path d="M0 0H393.994H519.886C539.218 0 547.301 24.7018 531.71 36.1305L372.779 152.63C369.349 155.145 365.207 156.5 360.955 156.5H20C8.95431 156.5 0 147.546 0 136.5V0Z" fill="url(#paint0_linear_304_18282)" fillOpacity="0.4"/>
            <defs>
            <linearGradient id="paint0_linear_304_18282" x1="3.00973e-07" y1="71" x2="581" y2="71" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C98FEC"/>
            <stop offset="1" stopColor="#A89BFF"/>
            </linearGradient>
            </defs>
          </svg>
      {/* SVG */}
      <HeaderHome></HeaderHome>

      <ContainerHome></ContainerHome>

    </div> 
  )
}

export default Home
