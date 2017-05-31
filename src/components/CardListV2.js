import React from 'react'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ListView
} from 'react-native'


const styles = {
  cardImage: {
    width: 212/2,
    height: 263/2
  },
  container: {
    display: 'flex',
    padding: 20,
    marginTop: 40,
    marginBottom: 10,
    marginLeft: 20,
    flexDirection: 'column',
    flexWrap: 'wrap',
    // justifyContent: 'center',
    alignItems: 'flex-start',
    // borderWidth: 1,
    // borderStyle: 'solid',

  },
  card: {
    backgroundColor: 'white',
    margin: 3,
    borderRadius: 8,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    flexDirection: 'row',
    minWidth: '33.3333%'
  },
  cardDesc: {
    fontSize: 30,
    padding: 10
  }
}

class CardList extends React.Component {
  constructor(props) {
    super(props)

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(this.props.cards),
    };


  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps",nextProps.cards)
    if (nextProps.cards !== this.props.cards) {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRowsAndSections(nextProps.cards)
      })
    }
  }

  onPressHandler(card) {
    console.log("onPressHandler card_id=" + card._id)
    Actions.cdetail({card: card})
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <ListView
          contentContainerStyle={styles.container}
          dataSource={this.state.dataSource}
          renderRow={(rowData) =>
            <TouchableOpacity key={rowData._id} style={styles.card} onPress={() => {this.onPressHandler(rowData)}}>
              <Image
                style={styles.cardImage}
                source={{uri: `http://www.clashapi.xyz/images/cards/${rowData.idName}.png`}}
              />
              <Text style={styles.cardDesc}>{rowData.name}</Text>
            </TouchableOpacity>
          }

        />


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
