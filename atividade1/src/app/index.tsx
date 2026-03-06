import { View, Text, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState } from "react";

export default function Home() {
  // 1. USESTATE CRIADO PARA O NOME
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handlerWelcomeName = () => {
    if (!name.trim()) {
      setError("Preencha o campo nome.");
      return;
    }
    setError(null);
    router.push(`/welcome/${name}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Boas Vindas</Text>

      <TextInput
        placeholder="Digite seu nome"
        style={styles.input}
        value={name} // 2. VINCULADO AO ESTADO NAME
        onChangeText={setName}
      />

      {/* 3. MENSAGEM DE ERRO DINÂMICA */}
      {error && <Text style={styles.errorMessage}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handlerWelcomeName}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 30,
    marginBottom: 40,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#007AFF",
    borderRadius: 5,
    width: 300,
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    width: 300,
    height: 40,
    padding: 3,
    borderRadius: 8,
    borderColor: "gray",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  errorMessage: {
    color: "red",
    alignSelf: "center",
    marginTop: 5,
  },
});