import {ChooseTime} from "./ChooseTime";
import React, { useState, useEffect } from "react";
import {Timer} from "./Timer";
import {ChooseBreakTime} from "./ChooseBreakTime";
import {View} from "react-native";
export function Test(){
    const [childData, setChildData] = useState("");
    const [breakData, setBreakData] = useState("");
    console.log("childData" , childData)
    console.log("breakData" , breakData)
    return(
        <View>
            <Timer data={childData} breakdata={breakData} />
            <ChooseTime passChildData={setChildData} />
            <ChooseBreakTime passBreakData={setBreakData} />
        </View>
    )
}
