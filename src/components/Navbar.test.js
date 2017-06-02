import React from 'react'
import renderer from 'react-test-renderer'

import Navbar from './Navbar'


describe ('Navbar', () => {
  it('render without crashing', () => {
    const tree = renderer.create(<Navbar />)

    expect(tree).toMatchSnapshot()
  })
})
