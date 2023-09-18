import { Header } from "../../components/Header";
import { View, Image } from "react-native";
import { useContext } from "react";
import { styles } from "./style";
import { Description } from "../../components/Description";
import { PlanetContext } from "../../contexts/planets.context";

const Dashboard = () => {
  const { planets } = useContext(PlanetContext);

  const findPlanet = planets.filter((planet) => planet.isPlanet == true).find((planet) => planet.englishName == "Earth");;

  console.log(findPlanet);

  return (
    <View style={styles.container}>
      <Header />
      <Image
        source={{
          uri: "https://images-assets.nasa.gov/image/0202795/0202795~orig.jpg",
        }}
      />
      <Description title={findPlanet?.englishName} />
    </View>
  );
};

export { Dashboard };
