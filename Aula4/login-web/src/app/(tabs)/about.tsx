import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Login() {
  //Imagem de perfil
  //Nome
  //Email
  const router = useRouter();
  return (
    <View>
      <Text>Sobre nós</Text>
      <Button title="Voltar ao login" onPress={() => router.replace("/")} />
      <Button title="Ir para o dashboard" onPress={() => router.replace("/dashboard")} />
    </View>
  );
}
