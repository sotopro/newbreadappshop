import React from "react";
import { FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { useSelector } from "react-redux";
import { styles } from "./styles";

const Categories = ({ navigation, route }) => {
    const categories = useSelector((state) => state.category.categories)
    const onSelected = (item) => {
        navigation.navigate('Products', { name: item.title, categoryId: item.id });
    }
    const renderItem = ({ item }) => <CategoryItem item={item} onSelected={onSelected} />
    return (
        <FlatList 
            data={categories}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            style={styles.containerList}
        />
    )
};

export default Categories;