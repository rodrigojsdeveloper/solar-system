import { ImageBackground, StyleSheet, View, Text, Image } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function App() {
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

      {/* <Image style={styles.image} source={require("./assets/arrowRight.svg")} /> */}
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
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  content: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  title: {
    width: "100%",
    maxWidth: 200,
    fontWeight: "600",
    fontSize: 32,
    lineHeight: 38,
    color: "#FFFFFF",
    paddingBottom: 12,
  },
  subtitle: {
    width: "100%",
    maxWidth: 240,
    fontWeight: "500",
    fontSize: 15,
    lineHeight: 18,
    color: "#FFFFFF",
  },
  image: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
});
