
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface style {
    forgotPasswordView: ViewStyle;
    forgotPasswordText: TextStyle;
    text: TextStyle;
    line: ViewStyle;
    alignItems: ViewStyle;
}

const styles = StyleSheet.create<style>({
    forgotPasswordView: { alignSelf: 'flex-end' },
    forgotPasswordText: {
        textAlign: 'right',

    },
    text: {},
    line: {
        height: 0.5,
        marginTop: 30,
    },
    alignItems: { alignItems: 'center' },
});

export default styles;
