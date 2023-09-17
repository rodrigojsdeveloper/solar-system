import { IDescription } from "../../interfaces";
import { Text, View } from "react-native";
import { styles } from "./style";

const Description = ({ title, description }: IDescription) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title} Planet</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

export { Description };
