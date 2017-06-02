import React from 'react'
import renderer from 'react-test-renderer'

import Footer from './Footer'


describe ('Footer', () => {
  it('render without crashing', () => {
    const tree = renderer.create(<Footer />)

    expect(tree).toMatchSnapshot()
  })
})
