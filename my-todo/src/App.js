import React, { Component } from 'react';
import './App.css';
import Header from './conponents/header/header';
import Main from './conponents/main/main';

class App extends Component {
  constructor(){
    super();
    this.state = {
      inputArr:[]
    }
  }
  updateDate(newdata){
    if(!newdata || newdata.trim() === '')return;
    let arr = this.state.inputArr;
    arr.push({
      name:newdata,
      type:false
    });
    this.setState({inputArr:arr});
  }
  deteteDate(deleteDate){
    let {inputArr} = this.state;
    this.setState({
      inputArr:inputArr.filter((e)=> e !== deleteDate)
    })
  }
  changeType(changeVal){
    let {inputArr} = this.state;
    inputArr.forEach((e,i) => {
      if(e === changeVal){
        e.type = !e.type;
      }
    });
    this.setState({
      inputArr:inputArr
    })
  }
  render() {
    return (
      <div className="todoapp">
        <Header updateDate={this.updateDate.bind(this)}></Header>
        <Main list={this.state.inputArr} deleteDate={this.deteteDate.bind(this)} changeType={this.changeType.bind(this)}></Main>
      </div>
    );
  }
}

export default App;
