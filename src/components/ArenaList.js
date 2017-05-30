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
    width: 212/4,
    height: 263/4
  },
  container: {
    display: 'flex',
    padding: 20,
    marginTop: 40,
    marginBottom: 30

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

class ArenaList extends React.Component {

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView style={styles.container}>
        {this.props.arenas.map( arena => {
          return (
            <TouchableOpacity key={arena._id} style={styles.card}>
              <Image
                style={styles.cardImage}
                source={{uri: `http://www.clashapi.xyz/images/arenas/${arena.idName}.png`}}
              />
              <Text style={styles.cardDesc}>{arena.name}</Text>
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
    arenas: state.arenaReducer.data
  }
}

const connectedArenaList = connect(mapStateToProps, null)(ArenaList)
export default connectedArenaList
