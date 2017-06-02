import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import ArenaList from './ArenaList'
import store from '../store/manageStore'

describe('ArenaList', () => {

  it('renders without crashing', ()=> {
    const tree = renderer.create(<Provider store={store}><ArenaList /></Provider>)
    // const tree = renderer.create(<CardList cards={cards}/>)
    expect(tree).toMatchSnapshot()
  })
})
