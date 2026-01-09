import './index.scss'
import { Link } from 'react-router-dom';
import React from 'react';

const CardComponent = ({ imgSrc, title}) => {

return(

    <Link to={{Link}}>   <div id='card' style={{ backgroundColor: '#ACEFFF',
                  borderRadius: '10px'
     }}>

     <img 
          src= {imgSrc}
          alt='conteúdo do card'/>

        <p style={{ margin: 0, font: '600 1.6vw Inter', textDecoration: 'none'}}> {title} </p>

    </div>  </Link> 
   
      )
}

export default CardComponent;