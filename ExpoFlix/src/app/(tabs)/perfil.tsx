import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
//AQUI COMPLETE O CSS DA TELA. DEIXE MINIMAMENTE PARECIDO COM A IMAGEM.
export default function Perfil() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.perfil}>Perfil</Text>
      <View style={styles.perfilContainer}>
        <Image
          style={styles.avatar}
          resizeMode="cover"
          source={require("../../../assets/images/punpun.jpg")}
        />
        <Text style={styles.text}>Nome: Punpun</Text>
        <Text style={styles.text}>Email: boanoite.punpun@gmail.com</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.replace("/")}
        >
          <Text style={styles.btnTitle}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#19244B'
  },
  perfil: {
    color: "white",
    fontSize: 32,
    fontWeight: "600",
    marginBottom: 24,
  },
  perfilContainer: {

  },
  avatar: {

  },
  text: {
    color: "#fff",
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "500",
  },
  button: {
    backgroundColor: "#fff",
    width: 300,
    height: 40,
    marginTop: 30,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "#000",
    fontWeight: "400",
    fontSize: 16,
  }
});
