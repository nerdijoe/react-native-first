import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  ToastAndroid
} from 'react-native'

import SpeechAndroid from 'react-native-android-voice';
import SpeechNotification from 'react-native-speech-notification';

const styles = {

  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: 40,
    marginBottom: 30,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center',


  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center'
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 10,
    fontWeight: 'bold',
    marginTop: 5
  },
  cardDesc: {
    fontSize: 20,
    padding: 10
  },
  descContainer: {

    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 1,
    margin: 10,
    padding: 10,

  },
  cardImage: {
    width: 212/2,
    height: 263/2,
    padding: 10,
    margin: 10,
  },
}

/*
"rarity":"Common",
"type":"Spell",
"name":"Arrows",
"description":"Arrows pepper a large area, damaging everyone hit. Reduced damage to Crown Towers.",
"arena":0,
"elixirCost":3,
*/

class CardDetail extends React.Component {
  constructor(props) {
    super(props)
    console.log(this.props)
  }

  startSpeaking () {
    // SpeechNotification.speak({
    //   message: 'all the small things true care truth brings',
    //   language: 'en-US'
    // })

    SpeechNotification.notify({
      title: 'Title',
      icon: 'icon', // {icon}.png/.jpg must be present in each corresponding android/app/src/main/res/drawable-*dpi/ folders
      message: 'work sucks i know',
      language: 'en-US'
    })

  }

  async _buttonClick () {
    try{
      // More Locales will be available upon release.
      var spokenText = await SpeechAndroid.startSpeech('Speak yo', SpeechAndroid.US);
      ToastAndroid.show(spokenText, ToastAndroid.LONG);
    }catch(error){
      switch(error){
        case SpeechAndroid.E_VOICE_CANCELLED:
          ToastAndroid.show("Voice Recognizer cancelled" , ToastAndroid.LONG);
          break;
        case SpeechAndroid.E_NO_MATCH:
          ToastAndroid.show("No match for what you said" , ToastAndroid.LONG);
          break;
        case SpeechAndroid.E_SERVER_ERROR:
          ToastAndroid.show("Google Server Error" , ToastAndroid.LONG);
          break;
        /*And more errors that will be documented on Docs upon release*/
      }
    }
  }

  render() {
    return (
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.card.name}</Text>

          <Image
            style={styles.cardImage}
            source={{uri: `http://www.clashapi.xyz/images/cards/${this.props.card.idName}.png`}}
          />
          <View style={styles.descContainer}>
            <Text style={styles.subtitle}>Description</Text>
            <Text>{this.props.card.description}</Text>

            <Text style={styles.subtitle}>Arena</Text>
            <Text>{this.props.card.arena}</Text>

            <Text style={styles.subtitle}>Rarity</Text>
            <Text>{this.props.card.rarity}</Text>

            <Text style={styles.subtitle}>Type</Text>
            <Text>{this.props.card.type}</Text>

            <Text style={styles.subtitle}>Elixir Cost</Text>
            <Text>{this.props.card.elixirCost}</Text>

          </View>
          <Button title="yo" onPress={this._buttonClick} />
          <Button title="sup" onPress={this.startSpeaking} />


        </View>
      </ScrollView>
    )
  }
}

export default CardDetail
