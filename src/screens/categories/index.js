import React from "react";
import { FlatList } from "react-native";
import { CategoryItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { styles } from "./styles";
import { selectCategory } from "../../store/actions";

const Categories = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const categories = useSelector((state) => state.category.categories);

    const onSelected = (item) => {
        dispatch(selectCategory(item.id))
        navigation.navigate('Products', { name: item.title });
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