import React from "react";
import {ButtonStart} from "./ButtonStart";
import {ChooseTime} from "./ChooseTime";
import {ButtonStop} from "./ButtonStop";
import {ButtonReset} from "./ButtonReset";
import {styles} from "../../App";
import audioSRC from "../media/mixkit-positive-notification-951.wav"
import {Text, View} from "react-native";


export class Timer extends React.Component{
    render() {
        if(this.state.stateHasChanged === true){
           this.state.title="Pause"
        }
        else{
            this.state.title="Travail"
        }
        return(
            <View>
                <Text style={{textAlign:'center',fontWeight:'bold', marginBottom:15, fontSize:30,
                    color:this.state.title === 'Pause' ? "#ff0000":"#000000"}}>{this.state.title}</Text>
                <View style={styles.buttons}>
                <ButtonStart startTimer={this.startTimer}/>
                <ButtonStop stopTimer={this.stopTimer}/>
                <ButtonReset resetTimer={this.resetTimer}/>
                </View>
                <DisplayTime timeLeft ={this.state.timeLeft}/>
                {/*<audio id="end" preload="auto" src={audioSRC}></audio>*/}
            </View>

        )
    }

    constructor(props) {
        super(props);
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
        this.state = {
            timer:null,
            timeLeft:null,
            data:null,
            title:"Travail",
            stateHasChanged:false,
            paused:null,
            breaktimer:null,
            afterPauseTimeLeft:null,
            reset:false
        }
    }
    stopTimer(){
        this.setState({paused: true})
        clearInterval(this.state.timer)
    }

    resetTimer(){
        clearInterval( this.state.timer );
        return this.setState({paused: false, timeLeft:0})
    }

    startTimer () {
     this.startTimer.bind(this)
        this.setState({paused: false})
        clearInterval(this.state.timer)
         let timer = setInterval(()=>{
             this.setState({paused: false})
            var timeLeft = this.state.timeLeft - 1
                this.setState({
                     afterPauseTimeLeft:timeLeft
                 })
            if(this.state.timeLeft === 0){
                    let breaktimer = setInterval(()=>{
                        timeLeft = this.state.timeLeft - 1
                        this.setState({
                            afterPauseTimeLeft:timeLeft,
                            stateHasChanged:true
                        })
                        console.log("timeleft", timeLeft)
                        if(this.state.timeLeft === 0){
                            clearInterval(timer)
                            clearInterval(breaktimer)
                           this.setState({ stateHasChanged:false })
                        }
                    },1000)
            /*    if(this.state.paused === true){
                    console.log("afterPauseTimeLeft2", this.state.afterPauseTimeLeft)
                    return this.setState({ timeLeft:this.state.afterPauseTimeLeft, timer:timer, breaktimer:breaktimer})
                }*/

              return this.setState({
                    timeLeft:this.props.breakdata,
                    stateHasChanged:true,
                    timer:timer,
                    breaktimer:breaktimer
                })
            }
            this.setState({
                timeLeft:timeLeft,
                afterPauseTimeLeft:timeLeft
            })
        }, 1000)
        if(this.state.paused === true){
            console.log("afterPauseTimeLeft", this.state.afterPauseTimeLeft)
            console.log("clicked", this.state.stateHasChanged)
            return this.setState({ timeLeft:this.state.afterPauseTimeLeft, timer:timer, breaktimer:this.state.breaktimer})
        }

            return this.setState({ timeLeft:this.props.data, timer:timer, breaktimer:this.state.breaktimer })
    }

}
export class DisplayTime extends React.Component {
    secondsToHms(d) {
        d = Number(d);
        const h = Math.floor(d / 3600);
        const m = Math.floor(d % 3600 / 60);
        const s = Math.floor(d % 3600 % 60);

        const hDisplay = h >= 0 && h < 10 ? "0" + h + ":" : h >= 10 ? h + ":" : "";
        const mDisplay = m >= 0 && m < 10 ? "0" + m + ":" : m >= 10 ? m + ":" : "";
        const sDisplay = s >= 0 && s < 10 ? "0" + s : s >= 10 ? s : "";
        return hDisplay + mDisplay + sDisplay;
    }
    render() {
          /*      if(this.props.timeLeft === 0) {
                 var playPromise = document.getElementById("end").play()

                    if (playPromise !== undefined) {
                        playPromise.then(function() {
                            console.log("success")
                        }).catch(function(error) {
                            console.log("error")
                        });
                    }
                }*/
        return(
            <Text style={{textAlign:'center',fontWeight:'bold', marginBottom:15, fontSize:30,
                color:this.props.timeLeft <= 20 && this.props.timeLeft > 0 ? "#ff0000":"#000000"}}>
                {this.secondsToHms(this.props.timeLeft)}</Text>
        )
    }
}



