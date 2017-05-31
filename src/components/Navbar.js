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
    else if(key === 'cards2')
      Actions.cards2()
    else if(key === 'camcam')
      Actions.camcam()
    else
      Actions.arenas()
  }

  render() {
    return (
      <View style={styles.navbar}>
        <TouchableOpacity active={true} onPress={() => {this.onPressHandler('cards')}}>
          <Text>カード</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.onPressHandler('cards2')}}>
          <Text>カード2</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.onPressHandler('arenas')}}>
          <Text>アリーナ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {this.onPressHandler('camcam')}}>
          <Text>カメラ</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Navbar
