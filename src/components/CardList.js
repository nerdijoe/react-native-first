import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'


const styles = {
  cardImage: {
    width: 212/4,
    height: 263/4
  },
  container: {
    display: 'flex',
    padding: 20,
    marginTop: 40,
    marginBottom: 10

  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center'
  },
  cardDesc: {
    fontSize: 20,
    padding: 10
  }
}

class CardList extends React.Component {
  onPressHandler(card) {
    console.log("onPressHandler card_id=" + card._id)
    Actions.cdetail({card: card})
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView >
          <View style={styles.container}>
            {this.props.cards.map( card => {
              return (
                <TouchableOpacity key={card._id} style={styles.card} onPress={() => {this.onPressHandler(card)}}>
                  <Image
                    style={styles.cardImage}
                    source={{uri: `http://www.clashapi.xyz/images/cards/${card.idName}.png`}}
                  />
                  <Text style={styles.cardDesc}>{card.name}</Text>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>
      </View>

    )

  }
}

const mapStateToProps = (state) => {
  return {
    cards: state.cardReducer.data
  }
}

const connectedCardList = connect(mapStateToProps, null)(CardList)
export default connectedCardList
