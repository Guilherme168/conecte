import './index.scss';
import Header from '../../components/header';
import CardComponent from '../../components/cardComponent';
import { Link } from 'react-router-dom';


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
      <div id='separador'/> 

      <section id='secao2'>

        <h1> Principais serviços </h1>
        <h3> Aqui você encontra os serviços mais importantes, e o melhor de tudo: de forma segura e confiável! </h3>
        
      <div id='servicos' style={{ backgroundColor: '#87CCDB', padding: '35px', boxShadow: '0 1px 0 0 #000' }}>

       <CardComponent imgSrc = '/assets/images/card-saude.jpg' id= 'saude' title = 'Saúde'/>
       <CardComponent imgSrc = '/assets/images/serv-gov.png' id= 'governo' title = 'Serviços governamentais'/>
       <CardComponent imgSrc = '/assets/images/transporte.jpg' id= 'transporte' title = 'Transporte'/>

      </div>

      <div id='msg'>  

      <h4> Selecione o serviço que deseja e pronto, você será levado para o site oficial do serviço escolhido, sem golpe, nem nada. Legal, né? </h4>

      </div>

      </section>

      <section id='secao3'>

      <h1 style={{font: '700 3vw Inter', margin: 0}}> Teste nosso Navegador Simplificado! </h1>
      <hr style={{ height: '7px', width: '45vw', backgroundColor: '#5C708D', alignSelf: 'start', margin: 0, outline: 'none' }}/>
      <h3> Mantenha-se seguro e protegido enquanto usa a internet com o nosso novo Navegador. </h3>
      <h3> Lá, você estará totalmente seguro e ainda poderá contar com uma lista de sites que pode acessar sem medo. </h3>

      <div id='redirecionador'>

      <Link to={'/'}> <h3 style={{ font: '700 2vw Inter', color: '#2A5B7E', marginLeft: '10vw' }}> Acesse o Navegador clicando aqui! </h3> </Link> 
      <img src='/assets/images/img-redirecionamento.jpg' alt='imagem redirecionamento' about='um senhor feliz utilizando seu celular'/>

      </div>

      </section>

      <footer style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#444444', padding: '30px'}}> 
        <Link to={'/'}> <h2> Teste nosso Navegador </h2>  </Link>
        <Link to={'/'}> <h2> Serviços </h2>  </Link>
        <Link to={'/'}> <h2> Voltar ao início </h2>  </Link>
      </footer>

    </div>
  );
}

export default Inicial;
