import './index.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
      <div className='header'>

      <header>
       
     <Link to={'/'}> <img src= '/assets/images/Conecte-Logo.png' alt='Conecta Logo' about='Imagem da logo do site Conecta' /> </Link> 
      
      </header>

      <nav>

      <ul>
       <li>  <button>   <Link to={'/'}> Serviços do governo </Link> </button>  </li>
       <li>  <button>   <Link to={'/'}> Saúde </Link>  </button>   </li> 
       <li>  <button>   <Link to={'/'}> Transporte   </Link> </button>  </li> 
      </ul>

      </nav> 

      <div id='divisor'/>

      </div>
      
    
   
  );
}

export default Header;
