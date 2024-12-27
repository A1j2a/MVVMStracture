import { NavigationProp } from "@react-navigation/native";
import { View } from "react-native";
import { Text } from "react-native-paper";
import AuthContainer from "src/shared/components/AuthContainer";


interface LoginProps {
    navigation: NavigationProp<any>
}

const Login: React.FC<LoginProps> = ({ navigation }) => {

    return (
        <AuthContainer>
            <View style={{ backgroundColor: "gray" }}>
                <Text>lkjl</Text>
            </View>
        </AuthContainer>
    );
};

export default Login;
