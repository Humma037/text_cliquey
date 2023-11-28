import React from 'react';
import {
    ScrollView,
    View,
    TouchableOpacity,
    TextInput
} from 'react-native';
import { Text } from 'react-native-paper';
import styles from './Style';
import { useNavigation } from '@react-navigation/native';
import SearchBarWithIcons from '../../assets/components/search_bar/CustomSearchBar';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import CategoriesDesign from '../../assets/components/CategoriesDesign';

const Downloads = () => {
    const navigation = useNavigation();

    const handleSearch = (text) => {
        console.log('Search:', text);
    };

    const handleIcon2Press = () => {
        navigation.navigate('Favourites');
    };

    return (
        <View Style={styles.container}>
            <View style={styles.sub_container}>
                <TouchableOpacity onPress={handleIcon2Press}>
                    <FontAwesome name="angle-left" size={30} style={styles.bars_Icon} />
                </TouchableOpacity>
                <View style={styles.searchbar_style}>
                    <TextInput
                        style={styles.search_Input}
                        placeholder="Search"
                        placeholderTextColor='#A6A6A6'
                        // onChangeText={(text) => onSearch(text)}
                    />
                </View>
            </View>
            <ScrollView>
                {/* Scrollable content section */}
                <View style={styles.catgories_style}>
                    <View style={styles.heading_second}>
                        <Text style={styles.heading_all_design}>Downloads</Text>
                    </View>

                    {/* Row 1 */}
                    <View style={styles.catgories_image_container}>
                        <View style={styles.catgories_image_sub_container}>
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

                        {/* Row 2 */}
                        <View style={styles.catgories_image_sub_container}>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_four.png')} title="Mehndi Designs" />
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Design')}>
                                <View style={styles.catgories_margin}>
                                    <CategoriesDesign backgroundImage={require('../../assets/Images/Rectangle_two.png')} title="Hair Style" />
                                </View>
                            </TouchableOpacity>
                        </View>

                        {/* Row 3 */}
                        <View style={styles.catgories_image_sub_container}>
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
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default Downloads;
