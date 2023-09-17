import { useEffect, useState } from "react";
import { IPlanet } from "../../interfaces";
import { api } from "../../services/api";
import { View } from "react-native";
import { styles } from "./style";
import { Link } from "../Link";

const Navigation = () => {
  const [planets, setPlanets] = useState<Array<IPlanet>>([]);

  useEffect(() => {
    api
      .get("/bodies")
      .then((res) => setPlanets(res.data.bodies))
      .catch((error) => console.error(error));
  }, []);

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
