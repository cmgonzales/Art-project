
import propTypes from  'prop-types'
import React, { Component } from 'react';
import '../style/head.css'
import back from '../img/paint.jpg'


var backgroundimg = {
 backgroundImage: 'url(' + back + ')',
 backgroundRepeat: "no-repeat", 
 flex: "1",
 maxheight: "fill-available"
 

 
}



class headline extends Component{

    render(){
        return(
            <div className = "back" style = {backgroundimg}>
            

          </div>
        )
    }
}


headline.propTypes = {
    
    title: propTypes.string.isRequired,

    


}



export default headline
