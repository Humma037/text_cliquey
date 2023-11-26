
import { StyleSheet } from 'react-native';
import colors from '../../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    pana_style: {
        alignItems: 'center',
        width: '100%',
        padding: '20%'
    },
    Text_container: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: '12%'
    },
    Text: {
        fontSize: 12,
        color: colors.themeGrey,
        textAlign: 'center',
        padding: 5
    },
    sub_container: {
        paddingVertical: '10%'
    },
    button_style: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15
    },
});

export default styles;