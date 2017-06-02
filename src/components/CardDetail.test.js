import React from 'react'
import renderer from 'react-test-renderer'

import CardDetail from './CardDetail'

describe('CardDetail', () => {
  let card = {
    "_id":"58d176a56d804500104b1248",
    "idName":"arrows",
    "rarity":"Common",
    "type":"Spell",
    "name":"Arrows",
    "description":"Arrows pepper a large area, damaging everyone hit. Reduced damage to Crown Towers.",
    "arena":0,
    "elixirCost":3,
    "order":1,
    "__v":0
  }

  it('renders without crashing', ()=> {
    const tree = renderer.create(<CardDetail card={card}/>)
    expect(tree).toMatchSnapshot()
  })
})
