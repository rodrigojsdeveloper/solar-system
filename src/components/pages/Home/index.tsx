import { ImageBackground, View, Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { styles } from "./style";

const Home = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("./assets/background.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Explore the Solar System</Text>
        <Text style={styles.subtitle}>
          Discover the main planets in the Solar System
        </Text>
      </View>

      <Svg style={styles.image} width={50} height={50} viewBox="0 0 24 24">
        <Path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m10 17l5-5l-5-5"
        />
      </Svg>
    </View>
  );
};

export { Home };
