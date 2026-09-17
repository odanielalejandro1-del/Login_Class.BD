import { StyleSheet, Text, View } from "react-native";

export default function app() {
  return (
    <View style={style.container}>
      <Text style={style.Text}>ASISTENCIA DE DOCENTES DE LA UNICARIBE</Text>
    </View>
  );
}
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#12c1c9",
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
