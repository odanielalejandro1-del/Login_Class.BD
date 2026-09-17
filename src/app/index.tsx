import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function app() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Daniel Ochoa</Text>
      <Link href="/about" style={style.button}>
        Go to About Us
      </Link>
    </View>
  );
}
const style = StyleSheet.create({
  button: {
    fontSize: 18,
    color: "#fff",
    backgroundColor: "#5c5959",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#7dc0c0",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
