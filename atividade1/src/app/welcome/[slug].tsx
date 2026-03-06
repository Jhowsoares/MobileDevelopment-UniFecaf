import { useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  /* O useLocalSearchParams recupera os parâmetros passados pela URL */
  const { slug } = useLocalSearchParams<{ slug: string }>();

  return (
    <View style={styles.container}>
      <Text style={styles.textOne}>
        Olá, seja muito bem vindo ao React Native Expo!
      </Text>
      
      {/* Exibindo o nome do usuário recuperado do parâmetro */}
      <Text style={styles.textTwo}>Parabéns, {slug}!</Text>
      
      <Text style={styles.textThree}>Você concluiu o primeiro teste.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  textOne: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 10,
  },
  textTwo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 10,
  },
  textThree: {
    fontSize: 16,
    color: "#666",
  },
});