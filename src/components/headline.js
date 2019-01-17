
import propTypes from  'prop-types'
import React, { Component } from 'react';
import S3 from '../img/paint.jpg'

var backstyle = {
            backgroundImage: `url(${S3})`,
            backgroundSize: `cover`
          
            
   }


class headline extends Component{


    render(){
   
        return(
            <div style = {backstyle}>

          
            </div>
        )
    }
}


headline.propTypes = {
    
    title: propTypes.number.isRequired,
    


}



export default headline
