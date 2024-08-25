import { FlatList, View } from "react-native";
import ListImage from "./ListImage";

const HorizontalFlatList = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal={true}
      renderItem={({ item }) => (
        <ListImage
          source={{
            uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
          }}
        />
      )}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HorizontalFlatList;