import React from 'react'
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native'
import { Actions } from 'react-native-router-flux'

const styles = {
  navbar: {
    margin: 0,
    padding: 10,
    backgroundColor: '#EDB1F1',
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
}

class Navbar extends React.Component {

  onPressHandler = (key) => {
    console.log("onPress " + key)
    if(key === 'cards')
      Actions.cards()
    else
      Actions.arenas()
  }

  render() {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity active={true} onPress={() => {this.onPressHandler('cards')}}>
          <Text>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.onPressHandler('arenas')}}>
          <Text>Arenas</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Navbar
