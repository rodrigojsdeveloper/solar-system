import { PlanetContext } from "../../contexts/planets.context";
import { ScrollView } from "react-native";
import { useContext } from "react";
import { styles } from "./style";
import { Link } from "../Link";

const Navigation = () => {
  const { planets } = useContext(PlanetContext);

  return (
    <ScrollView
      horizontal={true}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      {planets
        .filter((planet) => planet.isPlanet == true)
        .map((planet) => (
          <Link name={planet.englishName} key={planet.name} />
        ))}
    </ScrollView>
  );
};

export { Navigation };
