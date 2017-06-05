import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView
} from 'react-native';

const styles = {

  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
    marginTop: 40,
    marginBottom: 30,
    flexDirection: 'column',
    flexWrap: 'nowrap',
    alignItems: 'center'
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
    padding: 10
  },
  cardImage: {
    width: 518 / 2,
    height: 539 / 2,
    padding: 10,
    margin: 10
  }
}

/*
"_id":"58d176be6d804500104b1315",
"idName":"training-camp",
"number":0,
"name":"Training Camp",
"victoryGold":0,
"minTrophies":0,
"order":0,
"__v":0,

*/

class ArenaDetail extends React.Component {
  constructor (props) {
    super(props)
    console.log(this.props)
  }

  render () {
    return (
      <ScrollView >
        <View style={styles.container}>
          <Text style={styles.title}>{this.props.arena.name}</Text>

          <Image
            style={styles.cardImage}
            source={{uri: `http://www.clashapi.xyz/images/arenas/${this.props.arena.idName}.png`}}
          />
          <View style={styles.descContainer}>
            <Text style={styles.subtitle}>Victory Gold</Text>
            <Text>{this.props.arena.victoryGold}</Text>

            <Text style={styles.subtitle}>Minimum Trophies</Text>
            <Text>{this.props.arena.minTrophies}</Text>

          </View>
        </View>
      </ScrollView>
    )
  }
}

export default ArenaDetail
