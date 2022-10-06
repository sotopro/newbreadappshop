import React from "react";
import { View, FlatList, TouchableOpacity, Text} from "react-native";
import { styles } from "./styles";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../../components/cart-item";
import { removeFromCart } from "../../store/actions";

const Cart = ({navigation}) => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.cart.items);
    const total = useSelector(state => state.cart.total);
    
    const onDelete = (id) => {
        dispatch(removeFromCart(id))
    }

    const renderItem = ({item}) => <CartItem item={item} onDelete={onDelete} />

    return (
        <View style={styles.container}>
            <View style={styles.containerList}>
           <FlatList 
                data={items}
                renderItem={renderItem}
                style={styles.containerList}
                keyExtractor={item => item.id.toString()}
            />
            </View>
            <View style={styles.footer}>
                <TouchableOpacity 
                    style={styles.buttonConfirm}
                    onPress={() => null}
                >
                    <Text style={styles.textButtonConfirm}>Confirm</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.totalTitle}>Total: </Text>
                        <Text style={styles.total}>${total}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Cart;