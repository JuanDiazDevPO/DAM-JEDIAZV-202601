import { StyleSheet } from "react-native";
import { colors } from "../../../Themes/colors";
import { space } from "../../../Themes/space";

export const StylesCountScreen = StyleSheet.create({
    labelText:{
        color: colors.white,
        fontSize: space.xs

    },
    button: {
        backgroundColor: colors.black,
        borderRadius: space.xs,
        padding: space.xs

    }

});