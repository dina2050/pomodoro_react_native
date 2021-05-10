import React from "react";
import {TextInput, View, Button} from "react-native";
export class ButtonStart extends React.Component{
    handleStartTimer(){
        return this.props.startTimer()
    }
    render() {
        return(
            <Button title="Start" onPress={this.handleStartTimer.bind(this)}>Start</Button>
        )
    }
}


