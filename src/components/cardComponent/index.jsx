import './index.scss'

const CardComponent = ({ imgSrc, title, link}) => {

return(

    <a href= {link}>   <div id='card' style={{ backgroundColor: '#ACEFFF',
                  borderRadius: '10px'
     }}>

     <img 
          src= {imgSrc}
          alt='conteúdo do card'/>

        <p> {title} </p>

    </div>  </a> 
   
      )
}

export default CardComponent;