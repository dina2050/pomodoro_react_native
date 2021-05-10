import React, {useState} from "react";
import {TextInput, View, Button} from "react-native";
import {styles} from "../../App";
import {Timer} from "./Timer";

export function  secondsToMinsAndHours(d) {
    d = Number(d);
    const m = Math.floor(d % 3600 / 60);
    return m;
}

export function ChooseTime(props) {

    const [quantitySec, setQuantitySec] = useState('00')
    const [quantityMin, setQuantityMin] = useState('00')
    const [quantityH, setQuantityH] = useState('00')
    const [state, setState] = useState({data:null})
    const handleSubmit = (evt) => {
        evt.preventDefault();
        /* const form = evt.currentTarget;
         if (form.checkValidity() === false) {
             evt.stopPropagation();
         }*/
        var data = getTime()
        setState({data: data});
        props.passChildData(data);
    }


    function getTime(){

        var seconds = quantityH * 60 * 60 + quantityMin * 60 + quantitySec;

        return seconds
    }

    const onCheckSecondsLimit = (value) => {
        const parsedQty = Number(value)
        if (isNaN(parsedQty)) {
            setQuantitySec(0) //setter for state
            console.log(parsedQty)
        } else if (parsedQty > 59) {
            var minutes = secondsToMinsAndHours(parsedQty)
            setQuantitySec(parsedQty-( minutes * 60))
            setQuantityMin(minutes)
        } else {
            setQuantitySec(parsedQty)
        }
    }

    const onCheckMinutesLimit = (value) => {
        const parsedQty = Number(value)
        if (isNaN(parsedQty)) {
            setQuantityMin(0) //setter for state
        } else if (parsedQty > 59) {
            var hours = secondsToMinsAndHours(parsedQty)
            console.log(hours)
            setQuantityMin(parsedQty-( hours * 60))
            setQuantityH(hours)
        } else {
            setQuantityMin(parsedQty)
        }
    }

    const onCheckHoursLimit = (value) => {
        const parsedQty = Number(value)
        if (isNaN(parsedQty)) {
            setQuantityH(0) //setter for state
            console.log(parsedQty)
        } else if (parsedQty > 59) {
            setQuantityH(0)
        } else {
            setQuantityH(parsedQty)
        }
    }
        return(
            <View style={styles.row}>
                <TextInput style={styles.input}
                           value={quantityH.toString()}
                           name={quantityH}
                           onChangeText={onCheckHoursLimit} />

                <TextInput style={styles.input}
                           value={quantityMin.toString()}
                           name={quantityMin}
                           onChangeText={onCheckMinutesLimit} />

                <TextInput style={styles.input}
                           value={quantitySec.toString()}
                           name={quantitySec}
                           onChangeText={onCheckSecondsLimit} />
               <Button  title="SetWorkTime" type="submit"   value="Submit" onPress={handleSubmit}>
                   SetWorkTime
                </Button>
                {/*<Timer data={state.data} />*/}
            </View>
        )

}

