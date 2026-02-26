import './index.scss';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';


function Header2() {

    const MIN_FONT = 14;
    const MAX_FONT = 22;
  
    const alternarFonte = (valor) => {
    const html = document.documentElement;
    const tamanhoAtual = parseFloat(getComputedStyle(html).fontSize);
  
    const novoTamanho = valor + tamanhoAtual;
  
    if (novoTamanho >= MIN_FONT && novoTamanho <= MAX_FONT){
      html.style.fontSize = `${novoTamanho}px`;
      localStorage.setItem("fontSize", novoTamanho);
    }
  };
  
  useEffect(() => {
    const fonteSalva = localStorage.getItem("fontSize");
  
    if(fonteSalva){
      document.documentElement.style.fontSize = `${fonteSalva}px`;
    }
  
  }, []);
  
  return (
      <div className='header'>

      <header>
       
     <Link to={'/'}> <img id='logo' src= '/assets/images/Conecte-Logo.png' alt='Conecta Logo' about='Imagem da logo do site Conecta' /> </Link> 
      <div className='acessibilidade'> 
      <button aria-label='Diminuir tamanho da fonte' onClick={() => alternarFonte(-1)}>
        A-
      </button>
      <button aria-label='Aumentar tamanho da fonte' onClick={() => alternarFonte(1)}>
        A+
      </button>
     </div>
      
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
