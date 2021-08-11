/* eslint-disable react/jsx-pascal-case */
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

    numberOfvote :this.state.numberOfvote+1
})

};

gitTitle=()=>{

  this.props.gitTitle(this.props.title);

};


    render (){
    
    return (
    
     <>
     <Card style={{ width: '18rem' }}  >
  <Card.Img variant="top" onClick={this.gitTitle} src={this.props.imgeUrl} />
  <Card.Body  onClick={this.gitTitle} >
    <Card.Title onClick={this.gitTitle}  >{this.props.title} </Card.Title>
    <Card.Text>
      Vote through the button below :
      Num of Horns is {this.props.horns}
    </Card.Text>
  </ Card.Body>
  <Button variant="primary" onClick={this.addToVote} > Vote:</Button>
    <Card.Text>Number of votes={this.state.numberOfvote} ✔</Card.Text>

</Card>
</>
   )
    
    }
}

export default HornedBeast;
