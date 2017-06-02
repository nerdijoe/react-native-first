import React from 'react'

import renderer from 'react-test-renderer'


import mockCamera from '../__mocks__/Camera';
jest.mock('react-native-camera', () => mockCamera);

import CamCam from './CamCam'


describe('CamCam', () => {
  it('render without crashing', () => {
    const tree = renderer.create(<CamCam />)
    expect(tree).toMatchSnapshot()
  });

});
