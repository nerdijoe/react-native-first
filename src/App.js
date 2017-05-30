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
      <View style={{flex: 1}}>

        <FadeInView style={{ width: '100%', height: '33%', backgroundColor: 'powderblue'}}>
            <Image
              source={{uri: 'http://descargarclashroyalegratis.net/wp-content/uploads/2016/04/clash-min.jpg'}}
              style={{width:1200/2.9, height: 630/2.9}}
            />
        </FadeInView>

        <CardList/>

      </View>
    )
  }
}

export default App
