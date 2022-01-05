import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.container}> 
      {/* <Text>Header</Text> */}

    <Text style={styles.title}>Quarantime</Text>
    <Text style={styles.subtitle}>Stay home. Stay safe</Text>
      
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  container: {
    paddingLeft: 22,
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    color: '#0F4C75'
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "400",
    color: '#000000'
  }

})
