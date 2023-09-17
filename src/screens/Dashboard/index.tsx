import { Header } from "../../components/Header";
import { View, Image } from "react-native";
import { styles } from "./style";

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={{
          uri: "https://images-assets.nasa.gov/image/0202795/0202795~orig.jpg",
          
        }}
      />
    </View>
  );
};

export { Dashboard };
