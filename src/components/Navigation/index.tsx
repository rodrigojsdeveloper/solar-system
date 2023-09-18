import { PlanetContext } from "../../contexts/planets.context";
import { View } from "react-native";
import { useContext } from "react";
import { styles } from "./style";
import { Link } from "../Link";

const Navigation = () => {
  const { planets } = useContext(PlanetContext);

  return (
    <View style={styles.container}>
      {planets
        .filter((planet) => planet.isPlanet == true)
        .map((planet) => (
          <Link
            href={planet.name}
            name={planet.englishName}
            key={planet.name}
          />
        ))}
    </View>
  );
};

export { Navigation };
