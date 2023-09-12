import './styleLogin.css'
import costureiraLoginImagem from './images/costureiraLogin.svg'
import FormularioGlobal from '../../ui/components/login/FormularioLogin/FormularioLogin'

function Login() {
  return (
    <>
      {/* SVG Absolute */}
        <svg className='marcaTransparente' xmlns="http://www.w3.org/2000/svg" width="727" height="692" viewBox="0 0 727 692" fill="none">
            <path d="M727 692H20.9594C2.91064 692 -5.90466 669.98 7.15814 657.525L370.323 311.265L693.259 5.90485C706.01 -6.15277 727 2.88721 727 20.4369V692Z" fill="url(#paint0_linear_339_41063)" fillOpacity="0.4"/>
            <defs>
              <linearGradient id="paint0_linear_339_41063" x1="348.723" y1="-26" x2="348.723" y2="697.996" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A89BFF"/>
                <stop offset="1" stopColor="#C98FEC"/>
              </linearGradient>
            </defs>
        </svg>

        <svg className='marca' xmlns="http://www.w3.org/2000/svg" width="679" height="654" viewBox="0 0 679 654" fill="none">
            <path d="M680 654H20.8C2.77271 654 -6.05289 632.024 6.96692 619.555L343.779 297L646.144 6.52443C658.855 -5.68618 680 3.32192 680 20.9473V654Z" fill="url(#paint0_linear_339_41062)"/>
            <defs>
              <linearGradient id="paint0_linear_339_41062" x1="324.946" y1="-26.5" x2="324.946" y2="653.5" gradientUnits="userSpaceOnUse">
                <stop stopColor="#A89BFF"/>
                <stop offset="1" stopColor="#C98FEC"/>
              </linearGradient>
            </defs>
        </svg>
      {/* SVG Absolute */}

      <div className="containerLogin">

        <div className='containerLogin__formLogin containerLogin-displayFlex'>
            <FormularioGlobal></FormularioGlobal>
        </div>

        <div className='containerLogin__imageLogin containerLogin-displayFlex'>
          <img id="costureiraLoginImagem" src={costureiraLoginImagem} alt="Imagem de uma costureira fazendo login num app" />
        </div>

      </div>


    </>
  )
}

export default Login