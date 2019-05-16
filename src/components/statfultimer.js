import React, { Component } from 'react';
import './statfultimer.css'
class Statfultimer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hrs: 0,
            mins: 0,
            secs: 0,
            etat: "stop"
        }
    }
    timer = () => {
        setTimeout(() => {
            if (this.state.etat === "start") {
                if (this.state.secs === 60) {
                    this.setState({
                        mins: this.state.mins + 1,
                        secs: 0
                    })
                } else {
                    this.setState({
                        secs: this.state.secs + 1
                    })

                }
                if (this.state.mins === 60) {
                    this.setState({
                        hrs: this.state.hrs + 1,
                        mins: 0
                    })
                }
                this.timer()
            }
        }, 1000)
    }
    etat = () => {
        if (this.state.etat === "start") {
            this.setState({
                etat: "stop"
            })
        }
        else {
            this.setState({
                etat: "start"
            })
            this.timer()
        }
    }
    reset = () => {
        this.setState({
            hrs: 0,
            mins: 0,
            secs: 0,
            etat: "stop"
        })
    }
    render() {
        return (

             <div className='all'>
             <div style={{ zIndex: '2222' }} className='image'>
                 <img className='photo' src='https://financialtribune.com/sites/default/files/field/image/17january/11_mr_registry_170.png' />
             </div>
             <div className='time'>
                 <div >
                     <p>{this.state.hrs < 10 ? "0" + this.state.hrs : this.state.hrs}:</p>
                     <p className='timer'>Hour</p>
                     <button onClick={this.etat}>{this.state.etat === "start" ? "Stop" : "Start"}</button>
                 </div>
                 <div>
                     <p>{this.state.mins < 10 ? "0" + this.state.mins : this.state.mins}:</p>
                     <p className='timer'>Minute</p>
                 </div>
                 <div>
                     <p>{this.state.secs < 10 ? "0" + this.state.secs : this.state.secs}</p>
                     <p className='timer'>Second</p>
                     <button onClick={this.reset}>Reset</button>
                 </div>
             </div>
         </div>
        );
    }
}

export default Statfultimer;