import { Text, FlatList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { PlaceItem } from "../../components";
import { styles } from "./styles";
import { useEffect } from "react";
import { loadAddress } from "../../store/actions";

const PlaceList = ({ navigation }) => {
  const places = useSelector((state) => state.place.places);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadAddress());
  }, [dispatch]);

  const renderItem = ({ item }) => (
    <PlaceItem
      {...item}
      onSelect={() => navigation.navigate("PlaceDetail", { placeId: item.id })}
    />
  );
  return (
    <>
      <Text>Mis Ubicaciones</Text>
      <FlatList
        style={styles.container}
        data={places}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
};

export default PlaceList;
