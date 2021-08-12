/* eslint-disable array-callback-return */

import React from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import hornsData from "./components/hornsData.json";
import SelectedBeast from "./components/SelectedBeast";






class App extends React.Component{


    
constructor(props) {
    super(props);
    this.state = {
      show: false,
      selectB:{}
    };
  }
gitTitle =title => {
    let objTitle = hornsData.find( item => {
      if (item.title === title) {
        return item;
      }
    });
    this.setState({
        selectB: objTitle,
      show: true,
    });
  };
      handleClose = () => {
        this.setState({
            selectB: {},
          show: false,
        });
      };

render (){

return (
<div>


<Header/>
<SelectedBeast show={this.state.show} handleClose={this.handleClose} selectBeast={this.state.selectB}  />
<Main gitTitle={this.gitTitle}/>

<Footer/> 

</div>
)

}

}

export default App;
