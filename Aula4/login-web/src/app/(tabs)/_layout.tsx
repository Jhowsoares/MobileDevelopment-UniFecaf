import { Tabs } from "expo-router";

export default function TableLayout() {
  return(
    <Tabs screenOptions={{headerShown:false}}>
      <Tabs.Screen name="dashboard" />
      <Tabs.Screen name="about" />
    </Tabs>
  )
 
}
