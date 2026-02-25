import './index.scss';
import { Link } from 'react-router-dom';

function Header2() {
  return (
      <div className='header'>

      <header>
       
     <Link to={'/'}> <img id='logo' src= '/assets/images/Conecte-Logo.png' alt='Conecta Logo' about='Imagem da logo do site Conecta' /> </Link> 
      
      </header>

      <nav>

      <ul>
       <li>  <button>   <Link to={'/'}> Voltar </Link> </button>  </li>
       <li>  <button>   <Link to={'/'}> Página inicial </Link>  </button>   </li> 
       <li>  <button>   <a href='#lista'> Lista de sites seguros  </a> </button>  </li> 
      </ul>

      </nav> 

      <div id='divisor'/>

      </div>
      
    
   
  );
}

export default Header2;
