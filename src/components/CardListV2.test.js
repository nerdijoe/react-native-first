import React from 'react'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'

import ConnectedCardListV2, { CardList } from './CardListV2'
import store from '../store/manageStore'


describe('CardListV2 ListView', () => {
  let cards = [
    {
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
    },
    {"_id":"58d176a56d804500104b124e","idName":"bomber","rarity":"Common","type":"Troop","name":"Bomber","description":"Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies.","arena":0,"elixirCost":3,"order":2,"__v":0},
    {"_id":"58d176a56d804500104b125b","idName":"archers","rarity":"Common","type":"Troop","name":"Archers","description":"A pair of unarmored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice.","arena":0,"elixirCost":3,"order":3,"__v":0},
    {"_id":"58d176a56d804500104b125d","idName":"knight","rarity":"Common","type":"Troop","name":"Knight","description":"A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.","arena":0,"elixirCost":3,"order":4,"__v":0},
    {"_id":"58d176a56d804500104b1257","idName":"fireball","rarity":"Rare","type":"Spell","name":"Fireball","description":"Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.","arena":0,"elixirCost":4,"order":5,"__v":0},
    {"_id":"58d176a56d804500104b1253","idName":"mini-pekka","rarity":"Rare","type":"Troop","name":"Mini P.E.K.K.A.","description":"The Arena is a certified butterfly-free zone. No distractions for P.E.K.K.A., only destruction.","arena":0,"elixirCost":4,"order":6,"__v":0},
  ]

  it('renders without crashing', ()=> {
    // const tree = renderer.create(<Provider store={store}><ConnectedCardListV2/></Provider>)
    const tree = renderer.create(<CardList cards={cards}/>)
    expect(tree).toMatchSnapshot()
  })
})
