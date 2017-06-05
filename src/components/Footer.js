import React from 'react'
import {
  View,
  Text
} from 'react-native'

const styles = {
  myFooter: {
    display: 'flex',
    // backgroundColor: '#F6F6F6',
    margin: 5,
    padding: 3,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  footerText: {
    fontSize: 7

  }
}

class Footer extends React.Component {
  render () {
    return (
      <View style={styles.myFooter}>
        <Text style={styles.footerText}>© 2017, クラロワ大好きです。</Text>
      </View>
    )
  }
}

export default Footer
