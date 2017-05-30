import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>
          App
        </Text>
        <Image
          source={{uri: 'https://media.giphy.com/media/zdIGTIdD1mi4/giphy.gif'}}
          style={{width:200, height: 100}}
        />
      </View>
    )
  }
}

export default App
