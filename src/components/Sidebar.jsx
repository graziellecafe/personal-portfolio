import '../styles/components/sidebar.sass'

import Imagem from '../img/imagem-grazi.jpeg'

import InformationContainer from './InformationContainer'
import SocialNetworkContainer from './SocialNetworkContainer'

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Imagem} alt="Grazielle Café"/>
      <p className="title">Desenvolvedora Front-End Jr.</p>
      <SocialNetworkContainer/>
      <InformationContainer/>
      <p>informacoes de contato</p>
      <a href="" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar
