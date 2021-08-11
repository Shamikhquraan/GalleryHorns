import React from "react";
import HornedBeast from "./HornedBeast";
import hornsData from "./hornsData.json";
import {Form,Button} from 'react-bootstrap/';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./Main.css";


class Main extends React.Component {

constructor(props){
super(props);
this.state={

  formDataRender:hornsData

}


}
dataFilterFunc = (e) => {
  if (e.target.value === 'allThing') {
    this.setState({
      formDataRender:hornsData

    });
  }
  else if (Number (e.target.value) === 1) {
    this.setState({
      formDataRender: hornsData.filter(horn => {
        return horn.horns === 1;
      })
    });
  }

  else if (Number (e.target.value) === 2) {
    this.setState({
      formDataRender: hornsData.filter(horn => {
        return horn.horns === 2;
      })
    });
  }

  else if (Number (e.target.value) === 3) {
    this.setState({
      formDataRender: hornsData.filter(horn => {
        return horn.horns === 3;
      })
    });
  }};

  render() {

    return (
      <div>
      <Form onSubmit={this.dataFilterFunc}>
      <Form.Label>Select n of the horns pictures: </Form.Label>

<Form.Select aria-label="Default select example" name='horNumber' onChange={this.dataFilterFunc} >
        <option value="allThing">all</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>

      </Form.Select>

      <Button variant="primary" type="submit">   Submit   </Button>
      </Form>

      

        {this.state.formDataRender.map((item) => {
          return (
            <HornedBeast key={Math.random()} title={item.title} imgeUrl={item.image_url} 
            description={item.description} horns={item.horns} keyword={item.keyword} gitTitle={this.props.gitTitle}/>
          );
          
        })}

      </div>
    )
  }
}

export default Main;
