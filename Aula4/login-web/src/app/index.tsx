import { useRouter } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, Text, Button, TextInput, TouchableOpacity } from "react-native";

export default function Login() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const router = useRouter();

  const handleLogin = () => {
    console.log(email)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput style={styles.input}
        placeholder="Digite o seu email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity style={styles.button} onPress={() => router.replace("/(tabs)/dashboard")}>
          <Text>Entrar no sistema</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 30,
    gap: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    width: 'auto',
    height: 'auto',
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 20,
  },
  login: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  input: {

  }

   
});
