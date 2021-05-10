import React from "react";
import {TextInput, View, Button} from "react-native";
export class ButtonStop extends React.Component{
    handleStopTimer(){
        return this.props.stopTimer()
    }
    render() {
        return(
            <Button title="Stop" onPress={this.handleStopTimer.bind(this)}>Stop</Button>
        )
    }
}
