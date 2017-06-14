import React, { Component} from 'react';
import './app.css';

class StopWatch extends Component{
  constructor(props){
    super(props);
    this.state = {
      countDown: 0
    };
  }
  componentWillMount(){
    this.setState({countDown:this.props.countDown})
  }
  componentDidMount(){
    setInterval(()=>{
      let countDown = this.stopWatch(this.state.countDown);
      this.setState({countDown});
    }, 1000);
  }

stopWatch(countDown){
  return countDown <=0 ? 0 : countDown - 1;
}

  render(){
    return(
      <div>
        <div>{this.state.countDown} Seconds</div>
      </div>
    )
  }

}
export default StopWatch;
