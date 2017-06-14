import React, { Component } from 'react';
import Clock from './Clock';
import StopWatch from './StopWatch';
import './app.css';
import { Form, FormControl, Button} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      deadline: 'July 15, 2017',
      newDeadline: '',
      countDown: 20
    }
  }

  changeDeadline(){
      //console.log(this.state);
      this.setState({deadline: this.state.newDeadline})
  }
  changeCountDown(){
    this.setState({countDown:this.state.countDown})
  }

  render(){
    return (
      <div className="App">
        <div className="App-title">Countdown to {this.state.deadline}</div>
        <Clock deadline={this.state.deadline} />
        <Form inline>
          <FormControl
            className="Deadline-input"
            placeholder="new date"
            onChange={event=>this.setState({newDeadline:event.target.value})} />
          <Button onClick={()=>this.changeDeadline()}>Submit</Button>
        </Form>
        <div>
          <StopWatch countDown={this.state.countDown} />
          <Form inline>
            <FormControl
              className="stopwatch-input"
              placeholder="Enter a number"
              onChange={event=>this.setState({countDown:event.target.value})}
              />
            <Button onClick={()=>this.changeCountDown()}>Submit</Button>
          </Form>
        </div>
      </div>
    )
  }
}

export default App;
