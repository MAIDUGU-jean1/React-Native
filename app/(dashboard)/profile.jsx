import { StyleSheet } from 'react-native'

import Spacer from "../../components/Spacer"
import ThemeText from "../../components/ThemeText"
import ThemeView from "../../components/ThemeView"

const Profile = () => {
  return (
    <ThemeView style={styles.container}>
        <Spacer/>
      <ThemeText title={true} style={[styles.heading, { color: 'red' }]}>
        Your Email
      </ThemeText>
      <Spacer />

      <ThemeText>Time to start reading some books...</ThemeText>
      <Spacer />

    </ThemeView>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    fontWeight: "bold",
    fontSize: 18,
    textAlign: "center",
  },
})