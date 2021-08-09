import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


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
    
     <>

     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={this.props.imgeUrl}/>
  <Card.Body>
    <Card.Title>{this.props.title} </Card.Title>
    <Card.Text>
      Vote through the button below :
    </Card.Text>
    <Button variant="primary" onClick={this.addToVote} > Go somewhere</Button>
    <p>Number of votes={this.state.numberOfvote}</p>
  </Card.Body>
</Card>
</>
   )
    
    }
}

export default HornedBeast;

{/* <h2>{this.props.title} </h2>
     <p>{this.props.horns}</p>
     <img src={this.props.imgeUrl}  alt="hornedBeast" title="hornedBeast" />
     <button onClick={this.addToVote} >Vote</button>
     <p>Number of votes={this.state.numberOfvote}</p>
     <p>{this.props.description}</p>
     <p>{this.props.keyword}</p> */}