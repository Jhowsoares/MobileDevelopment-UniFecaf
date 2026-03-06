import { useRouter } from "expo-router";
import { View, Text, Button } from "react-native";

//Titulo
//Criar um objeto - Arquivo separado.
//Dentro do objeto vai ter: titulo, descrição, imagem(filme), 
export default function Login() {
  const router = useRouter();
  return (
    <View>
      <Text>Dashboard</Text>
          <Button title="Voltar ao login" onPress={() => router.replace("/")} />
          <Button title="Ir para sobre" onPress={() => router.replace("/about")} />
          
    </View>
  );
}
