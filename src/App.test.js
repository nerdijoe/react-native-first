import renderer from 'react-test-renderer'
import React from 'react'
import ReactDOM from 'react-dom'

import {
  View,
  Text,
  Image,
  StatusBar
} from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import { Provider, connect } from 'react-redux'


import mockCamera from './__mocks__/Camera';
jest.mock('react-native-camera', () => mockCamera);

import App from './App'
import CamCam from './components/CamCam'
import store from './store/manageStore'


describe('App', () => {
  // it('renders without crashing', () => {
  //   const div = document.createElement('div')
  //   reactDom.render(<App />, div)
  // })

  it('renders and match to snapshot', () => {
    const tree = renderer.create(<Provider store={store}><App/></Provider> )
    expect(tree).toMatchSnapshot()
  })
})
