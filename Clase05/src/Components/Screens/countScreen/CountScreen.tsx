import React from "react";
import { Pressable, Text } from "react-native";
import { StylesCountScreen } from "./CountScreen.style";

type countScreenProps = {
    label: string;
    OnPress: (value: number) => void;
}

export const CountScreen: React.FC<countScreenProps> = ({
    label, OnPress
    }) =>
     {

    return ( 
        <Pressable style={StylesCountScreen.button}>
            <Text style={StylesCountScreen.labelText}>
                {label}
            </Text>
        </Pressable>
    ) 
};

export default CountScreen; 