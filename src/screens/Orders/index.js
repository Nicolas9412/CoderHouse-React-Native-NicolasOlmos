import { FlatList } from "react-native";
import { styles } from "./styles";
import { ORDERS } from "../../data/orders";
import { OrderItem } from "../../components";

const Orders = () => {
  const handleDelete = () => {
    console.log("Order deleted");
  };

  const renderItemOrder = ({ item }) => (
    <OrderItem item={item} onDelete={handleDelete} />
  );
  return (
    <FlatList
      data={ORDERS}
      keyExtractor={(item) => item.id}
      renderItem={renderItemOrder}
    />
  );
};

export default Orders;
