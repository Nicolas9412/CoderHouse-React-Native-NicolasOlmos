import { View, Text, ScrollView, Image, FlatList } from "react-native";
import MapView from "react-native-maps";
import { useSelector } from "react-redux";
import { MapPreview } from "../../components";
import { OrderDetailItem } from "../../components";

import { styles } from "./styles";

const PlaceDetail = ({ route }) => {
  const { orderId } = route.params;
  const orderSelected = useSelector((state) =>
    state.orders.list.find((order) => order.id === orderId)
  );

  const renderItemCart = ({ item }) => <OrderDetailItem item={item} />;
  console.log(orderSelected.items);
  return (
    <>
      <ScrollView style={styles.container}>
      <Text style={styles.title}>Detalle de compra</Text>
        <View style={styles.list}>
          
          <FlatList
            data={orderSelected.items}
            keyExtractor={(item) => item.id}
            renderItem={renderItemCart}
            nestedScrollEnabled
          />
        </View>
        <Text style={styles.title}>Comprobante</Text>
        <Image
          source={{ uri: orderSelected.place.image }}
          style={styles.image}
        />
    
        <Text style={styles.title}>Direccion de envio</Text>
        <View style={styles.location}>
          <View style={styles.addressContainer}>
            <Text style={styles.adress}>{orderSelected.place.address}</Text>
          </View>
          <MapPreview
            style={styles.map}
            location={{
              lat: orderSelected.place.coords.lat,
              lng: orderSelected.place.coords.lng,
            }}
          >
            <Text>La ubicación no está disponible</Text>
          </MapPreview>
        </View>
      </ScrollView>
    </>
  );
};

export default PlaceDetail;
