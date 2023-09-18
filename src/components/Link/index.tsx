import { useNavigation } from "@react-navigation/native";
import { ILink } from "../../interfaces";
import { styles } from "./style";

const Link = ({ name }: ILink) => {
  const navigation = useNavigation();

  return (
    <p
      style={styles.container}
      onClick={() => navigation.navigate("Home", { id: name })}
    >
      {name}
    </p>
  );
};

export { Link };
