
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
    },
    sub_ontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '110%'
    },
    second_searchBar_container: {
        flexDirection: 'row',
        marginHorizontal:15
    },
    bars_Icon: {
        color: colors.BLACK,
        margin: 17
    },
    sub: {
        marginTop: 15,
        marginBottom: 100
    },
    scrollableContent:{
       marginBottom:'22%'
    }

});

export default styles;
