import React from 'react';
class HornedBeast extends React.Component{

    render (){
    
    return (
    
<div class='imgNew'>
     <h2>{this.props.title} </h2>

     <img src={this.props.imgeUrl} class='image' alt="hornedBeast" title="hornedBeast" />

     <p>{this.props.description}</p>
     



     </div>
   )
    
    }
}

export default HornedBeast;