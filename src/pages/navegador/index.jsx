import './index.scss';
import Header2 from '../../components/header2';
import { Link } from 'react-router-dom';


function Navegador() {
  return (
    <main id="main">
    <Header2/>
    
      <section className="secao secao--hero">
          <img src='/assets/images/img-seção1-navegador.jpg'/>

        <div className="secao__texto">
          <h2>Bem-vindo(a) ao nosso Navegador Simplificado!</h2>
          <p> Aqui você poderá navegar sem medo e acessar outros sites confiáveis. </p>
          <p> Legal, não é? Por que não dar uma olhada? </p>
        </div>
      </section>
      <div id='divisor' style={{  height: '2vh', backgroundColor: '#C9FDFF', padding: '0'}}/>

      <section className="secao">
        <h2>É relamente seguro e confiável aqui?</h2>

        <article className="secao__conteudo">
          <p>Com certeza!</p>

          <p>
            Nós reconhecemos que existem muitos perigos na internet, e que é
            difícil saber se algum site ou aplicativo é confiável.
          </p>

          <p>
            Foi por isso que criamos este ambiente, onde as pessoas podem se
            sentir realmente seguras e acolhidas!
          </p>

          <p>
            E como parte dessa experiência, oferecemos uma lista com alguns
            sites confiáveis que você pode navegar sem nenhuma preocupação.
            Confira a seguir!
          </p>
        </article>
      </section>

      <section className="secao" style={{backgroundColor: '#97C4D0'}}>
        <h2>Sites confiáveis e oficiais</h2>

        <div id="lista">

          <div className="categoria">
            <h3>Bancos</h3>

            <ul>
              <li>
                <strong>Banco do Brasil</strong>
                <strong> Site:<a href='https://www.bb.com.br/'> <span> https://www.bb.com.br/ </span></a> </strong>
              </li>

              <li>
                <strong>Bradesco</strong>
                <strong> Site: <a href='https://banco.bradesco/html/classic/index.shtm'> <span>https://banco.bradesco/html/classic/index.shtm</span> </a> </strong>
              </li>

              <li>
                <strong>Itaú</strong>
                <strong> Site: <a href='https://www.itau.com.br/'> <span> https://www.itau.com.br/ </span> </a> </strong>
              </li>

              <li>
                <strong>Banco BMG</strong>
                <strong> Site: <a href='https://www.bancobmg.com.br/'> <span> https://www.bancobmg.com.br/ </span> </a> </strong>
              </li>
            </ul>
          </div>

          <div className="categoria">
            <h3>Compras</h3>

            <ul>
              <li>
                <strong>Amazon</strong>
                <strong> Site: <a href='https://www.amazon.com.br/'> <span>https://www.amazon.com.br/</span> </a> </strong> 
              </li>

              <li>
                <strong>Mercado Livre</strong>
                <strong> Site: <a href='https://www.mercadolivre.com.br/'> <span>https://www.mercadolivre.com.br/</span> </a> </strong> 
              </li>

              <li>
                <strong>Americanas</strong>
                <strong> Site: <a href='https://www.americanas.com.br/'> <span>https://www.americanas.com.br/</span> </a> </strong> 
              </li>
            </ul>
          </div>

          <div className="categoria">
            <h3>Saúde e bem-estar</h3>

            <ul>
              <li>
                <strong>Drogasil</strong>
                <strong> Site: <a href='https://www.drogasil.com.br/'> <span>https://www.drogasil.com.br/</span> </a> </strong> 
              </li>

              <li>
                <strong>Droga Raia</strong>
                <strong> Site: <a href='https://www.drogaraia.com.br/'> <span>https://www.drogaraia.com.br/</span> </a> </strong> 
              </li>
            </ul>
          </div>

        </div>
      </section>

      <footer style={{ display: 'flex', justifyContent: 'space-around', backgroundColor: '#444444', padding: '30px'}}> 
        <Link to={'/'}> <h2> Página inicial </h2>  </Link>
        <a href={'#main'}> <h2> Voltar ao início </h2> </a>
      </footer>
    </main>
  );
}

export default Navegador;
