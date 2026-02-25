import './index.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className='header'>

      <header>
       
     <Link to={'/'}> <img id='logo' src= '/assets/images/Conecte-Logo.png' alt='Conecta Logo' about='Imagem da logo do site Conecta' /> </Link> 
      
      </header>

      <nav>

      <ul>
       <li>  <button>   <Link to={'https://www.gov.br/pt-br/servicos'}> Serviços do governo </Link> </button>  </li>
       <li>  <button>   <Link to={'https://meususdigital.saude.gov.br/login'}> Saúde </Link>  </button>   </li> 
       <li>  <button>   <Link to={'https://www.sptrans.com.br/'}> Transporte   </Link> </button>  </li> 
      </ul>

      </nav> 

      <div id='divisor'/>

      </div>
      
    
   
  );
}

export default Header;
