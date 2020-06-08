import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Logo from "../images/logo.png";
import Plus from "../images/plus.png";
import Minus from "../images/minus.png";
import TimerScreen from "../pages/TimerScreen"


class Settings extends React.Component {

constructor(props) {
    super(props);
  this.state = {
    trainingTimeMinutes: '00', trainingTimeSeconds: '00',
    breakTimeMinutes: '00', breakTimeSeconds: 0,
    repetitions: 0,
  };
  this.setTrainingTimeMinutes = this.setTrainingTimeMinutes.bind(this);
  this.setTrainingTimeSeconds = this.setTrainingTimeSeconds.bind(this);
  this.setBreakTimeMinutes = this.setBreakTimeMinutes.bind(this);
  this.setBreakTimeSeconds= this.setBreakTimeSeconds.bind(this);
   this.setRepetitions = this.setRepetitions.bind(this);
  }


  setTrainingTimeMinutes(event) {
    this.setState({ trainingTimeMinutes: parseInt(event.target.value) })
  }
  
  setTrainingTimeSeconds(event) {
    this.setState({ trainingTimeSeconds: parseInt(event.target.value) })
  }
  
    setBreakTimeMinutes(event) {
    this.setState({ breakTimeMinutes: parseInt(event.target.value) })
  }
  
  setBreakTimeSeconds(event) {
    this.setState({ breakTimeSeconds: parseInt(event.target.value) })
  }

  setRepetitions (event) {
    this.setState({ repetitions: parseInt(event.target.value) })
  }



  render () {
  return (
    <div id="mainDiv" >


      
      <label id="trainingTimeLabel" > TRAINING TIME 
       </label>
      
            <button>
          <img
            className="logoImg"
            style={{
              width: "100%",
              opacity: "0.07",
                    position: "absolute",
                  zIndex: "1"
                          }}
            src={Logo}
            alt="berolina-stralau logo"
        />              </button>
      
        

    
      <div class="timerCells">

        <div>
        <button>
          <img
            className="minusImg"
            style={{
              width: "5%",
                            }}
            src={Minus}
            alt="minus symbol"
          />
          </button>
          </div>
>
     
    
        <div class="innerTimerCells">
      <input type="number" class="inputCell" value={this.state.trainingTimeMinutes} onChange={this.setTrainingTimeMinutes} /> 
      <div class="semicolon">:</div> 
      <input type="number" class="inputCell" value={this.state.trainingTimeSeconds} onChange={this.setTrainingTimeSeconds} /> 
        </div>
        
        <div>
          3
        </div>
        



        </div>
        
      

      <br/>
            


      <label> BREAK 
       </label>
                 
      <div class="timerCells">
        
<div>
          1
        </div>

         <div class="innerTimerCells">
      <input type="number" class="inputCell" value={this.state.breakTimeMinutes} onChange={this.setBreakTimeMinutes} /> 
         <div class="semicolon">:</div> 
      <input type="number" class="inputCell"  value={this.state.breakTimeSeconds} onChange={this.setBreakTimeSeconds} /> 
        </div>
        
<div>
          3
        </div>

      </div>

      <br />
     
      
      <label> REPETITIONS
       </label>
         
      <div class="timerCells">
        
        <div>
          1
        </div>

        <div class="innerTimerCells">
      <input type="number" class="inputCell" value={this.state.repetitions} onChange={this.setRepetitions}/> 
</div>
          
        <div>
          3
        </div>

      </div>
        
      <br />
         
      <div id="buttonDiv">
       
                             {/* // TO DO:
              // add link to Timer Screen and create a Timer Screen Page
              // pass data to it */}
          
          <Link to="/TimerScreen">GO</Link>
                 
        </div>
      
      <br />

  <hr/>
      
      <div id="footer">
      <p style={{'font-size': '20px'}}> <b>Interval Training Timer</b> </p>
        <p2 style={{ 'font-size': '10px' }}><i>for the Berolina-Stralau Teams</i></p2>

         

</div>

</div>

  );
}
}
export default Settings;
