import StackNavigator from "./src/navigations/StackNavigator";
import { NavigationContainer } from "@react-navigation/native";

const App = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
};

export default App; 
