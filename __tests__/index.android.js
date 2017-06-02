import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux'

import mockCamera from '../src/__mocks__/Camera';
jest.mock('react-native-camera', () => mockCamera);

import Index from '../index.android.js';
import store from '../src/store/manageStore'

// mockCamera must be imported first then import this component
import CamCam from '../src/components/CamCam'


it('renders correctly', () => {
  const tree = renderer.create(
    <Provider store={store}><Index /></Provider>
  );
  expect(tree).toMatchSnapshot()
});
