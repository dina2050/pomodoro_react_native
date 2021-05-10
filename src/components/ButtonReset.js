import React from "react";
import {TextInput, View, Button} from "react-native";
export class ButtonReset extends React.Component{
    handleButtonReset(){
        return this.props.resetTimer()
    }
    render() {
        return(
            <Button title="Reset" onPress={this.handleButtonReset.bind(this)}>Reset</Button>
        )
    }
}
