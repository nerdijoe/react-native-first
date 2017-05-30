import React from 'react'
import {
  View,
  Text
} from 'react-native'


const styles = {
  myFooter: {
    margin: 5,
    padding: 5
  },
  footerText: {
    fontSize: 10
  }
}

class Footer extends React.Component {

  render() {
    return (
      <View style={styles.myFooter}>
        <Text style={styles.footerText}>Footer</Text>
      </View>
    )
  }
}

export default Footer
