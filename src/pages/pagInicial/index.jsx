import './index.scss';
import Header from '../../components/header';

function Inicial() {
  return (
    <div className="principal">
      <Header/>

      <section id='secao1'>

      <img id='fundo' src='/assets/images/park-ao-lado-da-cidade-ao-amanhecer.jpg' alt='imagem fundo secao 1'/>
      <img id='img1' src='/assets/images/img-sec1.png' alt='imagem secao 1' about='imagem de dois idosos felizes com celular'/>

      <div id='texto1'>
        <h2>  Precisa de ajuda para navegar na internet? </h2>
        <h2>  A Conecte vai te ajudar! </h2>
        <h2>  Continue abaixo </h2>

      </div>
      
      </section>

    </div>
  );
}

export default Inicial;
