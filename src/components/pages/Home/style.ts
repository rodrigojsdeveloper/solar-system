import { StyleSheet } from "react-native";

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

export { styles };
