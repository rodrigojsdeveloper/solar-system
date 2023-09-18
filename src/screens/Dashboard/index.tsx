import { PlanetContext } from "../../contexts/planets.context";
import { Description } from "../../components/Description";
import { useRoute } from "@react-navigation/native";
import { Header } from "../../components/Header";
import { View, Image } from "react-native";
import { useContext } from "react";
import { styles } from "./style";

const Dashboard = () => {
  const { planets } = useContext(PlanetContext);

  const route = useRoute();

  const { id } = route.params;

  const findPlanet = planets
    .filter((planet) => planet.isPlanet == true)
    .find((planet) => planet.englishName == id);

  console.log(id);

  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={{
          uri: "https://images-assets.nasa.gov/image/0202795/0202795~orig.jpg",
        }}
        style={{
          width: "100%",
          height: "100%",
          maxWidth: 350,
          maxHeight: 350,
          margin: "auto",
        }}
      />
      <Description title={findPlanet?.englishName} />
    </View>
  );
};

export { Dashboard };
