import React from 'react'
import {
  View,
  Text
} from 'react-native'


const styles = {
  myFooter: {
    margin: 5,
    padding: 10,
    backgroundColor: '#9896F1'
  }
}

class ArenaList extends React.Component {

  render() {
    return (
      <View style={styles.myFooter}>
        <Text>ArenaList</Text>
      </View>
    )
  }
}

export default ArenaList
