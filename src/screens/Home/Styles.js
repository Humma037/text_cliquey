
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        alignItems: 'center',
    },
    sub_container: {
        width: 360,
        margin: 20
    },
    bars_Icon: {
        color: colors.BLACK,
        marginLeft: 35,
        marginTop: 22
    },
    searchbar_style: {
        margin: 5
    },
    SearchbarSecond: {
        position: 'absolute',
        right: 10
    },
    sub: {
        marginTop: 15,
        marginBottom:100
    }

});

export default styles;
