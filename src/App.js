import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

import FadeInView from './components/FadeInView'
import CardList from './components/CardList'

class App extends React.Component {
  render() {
    return (
      <View>
        <Text>
          App
        </Text>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>


        <FadeInView style={{width: 350, height: 150, backgroundColor: 'powderblue'}}>
            <Image
              source={{uri: 'https://media.giphy.com/media/zdIGTIdD1mi4/giphy.gif'}}
              style={{width:400, height: 150}}
            />
        </FadeInView>

        <CardList/>

      </View>
    )
  }
}

export default App
