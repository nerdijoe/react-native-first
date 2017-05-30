import {
  FETCH_DATA
} from '../actions/constants'

const initialState = {
  data: [
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
    {"_id":"58d176a56d804500104b124e","idName":"bomber","rarity":"Common","type":"Troop","name":"Bomber","description":"Small, lightly protected skeleton that throws bombs. Deals area damage that can wipe out a swarm of enemies.","arena":0,"elixirCost":3,"order":2,"__v":0},{"_id":"58d176a56d804500104b125b","idName":"archers","rarity":"Common","type":"Troop","name":"Archers","description":"A pair of unarmored ranged attackers. They'll help you take down ground and air units, but you're on your own with hair coloring advice.","arena":0,"elixirCost":3,"order":3,"__v":0},{"_id":"58d176a56d804500104b125d","idName":"knight","rarity":"Common","type":"Troop","name":"Knight","description":"A tough melee fighter. The Barbarian's handsome, cultured cousin. Rumor has it that he was knighted based on the sheer awesomeness of his mustache alone.","arena":0,"elixirCost":3,"order":4,"__v":0},{"_id":"58d176a56d804500104b1257","idName":"fireball","rarity":"Rare","type":"Spell","name":"Fireball","description":"Annnnnd... Fireball. Incinerates a small area, dealing high damage. Reduced damage to Crown Towers.","arena":0,"elixirCost":4,"order":5,"__v":0},{"_id":"58d176a56d804500104b1253","idName":"mini-pekka","rarity":"Rare","type":"Troop","name":"Mini P.E.K.K.A.","description":"The Arena is a certified butterfly-free zone. No distractions for P.E.K.K.A., only destruction.","arena":0,"elixirCost":4,"order":6,"__v":0},{"_id":"58d176a56d804500104b1252","idName":"musketeer","rarity":"Rare","type":"Troop","name":"Musketeer","description":"Don't be fooled by her delicately coiffed hair, the Musketeer is a mean shot with her trusty boomstick.","arena":0,"elixirCost":4,"order":7,"__v":0},{"_id":"58d176a56d804500104b124c","idName":"giant","rarity":"Rare","type":"Troop","name":"Giant","description":"Slow but durable, only attacks buildings. A real one-man wrecking crew!","arena":0,"elixirCost":5,"order":8,"__v":0},{"_id":"58d176a56d804500104b124d","idName":"prince","rarity":"Epic","type":"Troop","name":"Prince","description":"Don't let the little pony fool you. Once the Prince gets a running start, you WILL be trampled. Deals double damage once he gets charging.","arena":0,"elixirCost":5,"order":9,"__v":0},{"_id":"58d176a56d804500104b1258","idName":"baby-dragon","rarity":"Epic","type":"Troop","name":"Baby Dragon","description":"Flying troop that deals area damage. Baby dragons hatch cute, hungry and ready for barbeque.","arena":0,"elixirCost":4,"order":10,"__v":0},{"_id":"58d176a56d804500104b124f","idName":"skeleton-army","rarity":"Epic","type":"Troop","name":"Skeleton Army","description":"Summons an army of Skeletons. Meet Larry and his friends Harry, Gerry, Terry, Mary, etc.","arena":0,"elixirCost":3,"order":11,"__v":0}
  ]
}

const cardReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_DATA: {
      return {...state, data: action.cards}
    }
    default: return state
  }
}


export default cardReducer
