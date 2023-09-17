import { ImageBackground, View, Text, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { Path } from "react-native-svg";
import { styles } from "./style";

const Home = () => {
  const navigation = useNavigation();

  const onPressHandler = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/background.jpg")}
        resizeMode="cover"
        style={{ flex: 1 }}
      />

      <View style={styles.content}>
        <Text style={styles.title}>Explore the Solar System</Text>
        <Text style={styles.subtitle}>
          Discover the main planets in the Solar System
        </Text>
      </View>

      <Pressable onPress={onPressHandler}>
        <Svg style={styles.image} width={50} height={50} viewBox="0 0 24 24">
          <Path
            fill="none"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m10 17l5-5l-5-5"
          />
        </Svg>
      </Pressable>
    </View>
  );
};

export { Home };
