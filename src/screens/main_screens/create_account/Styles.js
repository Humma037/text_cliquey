
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    sub_container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
    text_style: {
        color: colors.themeGrey,
        fontSize: 10,
        paddingHorizontal: '12%',
        textAlign: 'center',
        paddingVertical: 5
    },
    pana_style: {
        width: '100%',
        height: 300,
        margin: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button_style: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',    },

});

export default styles;
