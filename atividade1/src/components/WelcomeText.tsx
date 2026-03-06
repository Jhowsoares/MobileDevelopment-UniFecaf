import { Text } from "react-native";

type Props = {
  name: string;
};

export function WelcomeText({ name }: Props) {
  return <Text>Parabéns, {name}!</Text>;
}