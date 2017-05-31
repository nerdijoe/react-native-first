import React from 'react'
import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { actionFetchData, actionFetchDataArenas } from './actions'
import FadeInView from './components/FadeInView'
import CardList from './components/CardList'
import CardListV2 from './components/CardListV2'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import ArenaList from './components/ArenaList'
import CardDetail from './components/CardDetail'
import ArenaDetail from './components/ArenaDetail'
import CamCam from './components/CamCam'

const styles = {
  barTitle: {
    backgroundColor: '#8EF6E4',

  }
}

class App extends React.Component {
  componentDidMount() {
    this.props.actionFetchData()
    this.props.actionFetchDataArenas()
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar
          backgroundColor="#F6F6F6"
          barStyle="dark-content"
        />
        <FadeInView style={{ width: '100%', height: '25%', backgroundColor: 'powderblue'}}>
            <Image
              source={{uri: 'http://descargarclashroyalegratis.net/wp-content/uploads/2016/04/clash-min.jpg'}}
              style={{width:1200/2.9, height: 630/2.9}}
            />
        </FadeInView>

        <Navbar />

        <Router>
           <Scene key="cards" component={CardList} title="Cards"  navigationBarStyle={styles.barTitle} />
           <Scene key="cards2" component={CardListV2} title="Cards with ListView" initial={true} navigationBarStyle={styles.barTitle} />
           <Scene key="arenas" component={ArenaList} title="Arenas" navigationBarStyle={styles.barTitle} />
           <Scene key="cdetail" component={CardDetail} title="Card Detail" navigationBarStyle={styles.barTitle} />
           <Scene key="adetail" component={ArenaDetail} title="Arena Detail" navigationBarStyle={styles.barTitle} />

           <Scene key="camcam" component={CamCam} title="CamCam" navigationBarStyle={styles.barTitle} />


       </Router>

        <Footer />
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actionFetchData: () => { dispatch(actionFetchData()) },
    actionFetchDataArenas: () => { dispatch(actionFetchDataArenas()) }
  }
}

const connectedApp = connect(null, mapDispatchToProps)(App)
export default connectedApp
