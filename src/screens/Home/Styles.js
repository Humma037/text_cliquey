
import { StyleSheet } from 'react-native';
import colors from '../../assets/theme/Color';

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor:colors.white
    },
    sub_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '103%',
        paddingHorizontal: 20
    },
    ProfileImage: {
        paddingVertical: 9
    },
    second_searchBar_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        width: '100%'
    },
    bars_Icon: {
        color: colors.BLACK,
        marginVertical: 22
    },
    sub: {
        marginTop: 15,
        marginBottom: 100
    },
    scrollableContent: {
        marginBottom: '23%'
    }

});

export default styles;
