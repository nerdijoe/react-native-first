import React from 'react'
import renderer from 'react-test-renderer'

import ArenaDetail from './ArenaDetail'

describe('ArenaDetail', () => {
  let arena = {
    '_id': '58d176be6d804500104b1315',
    'idName': 'training-camp',
    'number': 0,
    'name': 'Training Camp',
    'victoryGold': 0,
    'minTrophies': 0,
    'order': 0,
    '__v': 0,
    'leagues': [],
    'cardUnlocks':
      ['58d176a56d804500104b1248', '58d176a56d804500104b124c', '58d176a56d804500104b124d', '58d176a56d804500104b124e', '58d176a56d804500104b124f', '58d176a56d804500104b1252', '58d176a56d804500104b1253', '58d176a56d804500104b1255', '58d176a56d804500104b1257', '58d176a56d804500104b1258', '58d176a56d804500104b125b', '58d176a56d804500104b125d'],
    'chests': [],
    'clan': {'donate':
      {'common': 0, 'rare': 0},
      'request': {'common': 0, 'rare': 0}
    }
  }

  it('renders without crashing', () => {
    const tree = renderer.create(<ArenaDetail arena={arena}/>)
    expect(tree).toMatchSnapshot()
  })
})
