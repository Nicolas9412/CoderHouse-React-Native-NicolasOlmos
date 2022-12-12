import { FlatList } from "react-native";
import { styles } from "./styles";
import { OrderItem } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useCallback } from "react";
import { getOrders, deleteOrder } from "../../store/actions";
import { useFocusEffect } from "@react-navigation/native";

const Orders = () => {
  const orders = useSelector((state) => state.orders.list);
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getOrders());
    }, [dispatch])
  );

  const handleDelete = (id) => {
    dispatch(deleteOrder(id));
  };

  const renderItemOrder = ({ item }) => (
    <OrderItem item={item} onDelete={handleDelete} />
  );
  return (
    <FlatList
      data={orders}
      keyExtractor={(item) => item.id}
      renderItem={renderItemOrder}
    />
  );
};

export default Orders;
