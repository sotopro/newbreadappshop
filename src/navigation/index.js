import React from "react";
import { useSelector } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";

import TabsNavigator from "./tabs";
import AuthNavigator from "./auth";

const AppNavigator = () => {
    const userId = useSelector(state => state.auth.userId);
    return (
        <NavigationContainer>
            { userId ? <TabsNavigator /> : <AuthNavigator /> }
        </NavigationContainer>
    )
}

export default AppNavigator;