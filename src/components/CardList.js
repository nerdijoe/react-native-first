import React from 'react'
import { connect } from 'react-redux'

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
    width: 212/3,
    height: 263/3
  },
  container: {
    display: 'flex',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row',
    margin: 5,
    borderRadius: 8,
    borderStyle: 'solid'
  },
  cardDesc: {
    fontSize: 30,
    padding: 10
  }
}

class CardList extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
        {this.props.cards.map( card => {
          return (
            <TouchableOpacity key={card._id} style={styles.card}>
              <Image
                style={styles.cardImage}
                source={{uri: `http://www.clashapi.xyz/images/cards/${card.idName}.png`}}
              />
              <Text style={styles.cardDesc}>{card.idName}</Text>
            </TouchableOpacity>
          )
        })}
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
