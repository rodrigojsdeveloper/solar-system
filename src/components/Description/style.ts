import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 100,
    paddingHorizontal: 20,
  },
  content: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 15,
  },
  title: {
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 22,
    color: "#FFFFFF",
  },
  description: {
    width: "100%",
    maxWidth: 250,
    fontWeight: "400",
    fontSize: 12,
    color: "#FFFFFF",
  },
});

export { styles };
