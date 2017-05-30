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
    width: 212/2,
    height: 263/2
  }
}

class CardList extends React.Component {

  render() {
    return (
      <View>
        <Text>CardList</Text>
        <ScrollView>
        {this.props.cards.map( card => {
          return (
            <TouchableOpacity key={card._id}>
              <Image
                style={styles.cardImage}
                source={{uri: `http://www.clashapi.xyz/images/cards/${card.idName}.png`}}
              />
              <Text>{card.idName}</Text>
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
