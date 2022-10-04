import React, { useEffect} from "react";
import { View, Text, Button, FlatList } from "react-native";
import { ProductItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { products } from "../../constants/data";
import { styles } from "./styles";
import { filteredProducts, selectedProduct } from "../../store/actions";

const Products = ({ navigation }) => {
    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.selected);

    const productsFiltered = useSelector((state) => state.products.filteredProducts);

    useEffect(() => {
        dispatch(filteredProducts(selectedCategory.id))
    }, []);

    const onSelected = (item) => {
        dispatch(selectedProduct(item.id))
       navigation.navigate('Product', { name: item.title});
    };   
    const renderItem = ({ item }) => <ProductItem item={item} onSelected={onSelected} />

    return (
        <FlatList 
            data={productsFiltered}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
        />
    )
};

export default Products;