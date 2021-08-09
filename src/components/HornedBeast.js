import React from 'react';
class HornedBeast extends React.Component{
constructor(props){
super(props);
this.state={

    numberOfvote:0
}

}

addToVote = ()=>{
this.setState({

    numberOfvote:this.state.numberOfvote+1
})


}


    render (){
    
    return (
    
<div >
     <h2>{this.props.title} </h2>
     <p>{this.props.horns}</p>
     <img src={this.props.imgeUrl}  alt="hornedBeast" title="hornedBeast" />
     <button onClick={this.addToVote} >Vote</button>
     <p>Number of votes={this.state.numberOfvote}</p>
     <p>{this.props.description}</p>
     <p>{this.props.keyword}</p>



     </div>
   )
    
    }
}

export default HornedBeast;