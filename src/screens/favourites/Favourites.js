import React from 'react';
import { ScrollView, View, TouchableOpacity, ImageBackground } from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Styles';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import MainStyles from '../../assets/styles/MainStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoriesDesign from '../../assets/components/CategoriesDesign';

const Favourites = () => {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('Search:', text);
    };

    const handleIcon1Press = () => {
        navigation.navigate('Explore');
    };

    const handleIcon2Press = () => {
        navigation.navigate('Favourites');
    };


    return (
        <View style={styles.container}>
            <View style={MainStyles.Direction_Horizental}>
                <TouchableOpacity onPress={handleIcon2Press}>
                    <FontAwesome name="angle-left" size={35} style={styles.bars_Icon} />
                </TouchableOpacity>
                <View style={styles.searchbar_style}>
                    <SearchBarWithIcons
                        onSearch={handleSearch}
                        onIcon1Press={handleIcon1Press}
                        onIcon2Press={handleIcon2Press}
                    />
                </View>
            </View>
            <ScrollView style={styles.catgories_style}>
                <View style={styles.heading_second}>
                    <Text style={MainStyles.heading_second}>All Designs</Text>
                </View>
                <View style={[MainStyles.Direction_Horizental,]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_one.png')} title="Mehndi Designs" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[MainStyles.Direction_Horizental,]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Group_three.png')} title="Mehndi Designs" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_four.png')} title="Mehndi Designs" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[MainStyles.Direction_Horizental,]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Group_five.png')} title="Mehndi Designs" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Group_three.png')} title="Mehndi Designs" />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={[MainStyles.Direction_Horizental,]}>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_one.png')} title="Mehndi Designs" />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                        <View style={styles.catgories_margin}>
                            <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};



export default Favourites;
