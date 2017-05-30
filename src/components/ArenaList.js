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
    width: 518/3,
    height: 539/3
  },
  container: {
    display: 'flex',
    padding: 10,
    marginTop: 50,
    marginBottom: 30,
    flexWrap: 'wrap',
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'column',
    margin: 5,
    borderRadius: 8,
    borderStyle: 'solid',
    borderWidth: 0,
    alignItems: 'center'

  },
  cardDesc: {
    fontSize: 15,
    padding: 10
  }
}

class ArenaList extends React.Component {

  render() {
    return (
      <View style={{flex: 1}} >
        <ScrollView >
          <View style={styles.container}>
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
          </View>
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
