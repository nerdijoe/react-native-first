import {
  FETCH_DATA_ARENA
} from '../actions/constants'

const initialState = {
  data: [
    {
      "_id":"58d176be6d804500104b1315",
      "idName":"training-camp",
      "number":0,
      "name":"Training Camp",
      "victoryGold":0,
      "minTrophies":0,
      "order":0,
      "__v":0,
      "leagues":[],
      "cardUnlocks":
        ["58d176a56d804500104b1248","58d176a56d804500104b124c","58d176a56d804500104b124d","58d176a56d804500104b124e","58d176a56d804500104b124f","58d176a56d804500104b1252","58d176a56d804500104b1253","58d176a56d804500104b1255","58d176a56d804500104b1257","58d176a56d804500104b1258","58d176a56d804500104b125b","58d176a56d804500104b125d"],
      "chests":[],
      "clan": {"donate":{"common":0,"rare":0},
      "request":  {"common":0,"rare":0}}
    },
    {"_id":"58d176be6d804500104b1317","idName":"goblin-stadium","number":1,"name":"Goblin Stadium","victoryGold":5,"minTrophies":0,"order":1,"__v":0,"leagues":[],"cardUnlocks":["58d176a56d804500104b1249","58d176a56d804500104b124a","58d176a56d804500104b124b","58d176a56d804500104b1251","58d176a56d804500104b1256","58d176a56d804500104b1259"],"chests":["58d176a56d804500104b128a","58d176a56d804500104b128e","58d176a56d804500104b1292","58d176a56d804500104b1293","58d176a56d804500104b1294","58d176a56d804500104b1296","58d176a56d804500104b1297","58d176a56d804500104b1298","58d176a56d804500104b129c"],"clan":{"donate":{"common":1,"rare":1},"request":{"common":10,"rare":1}}},
    {"_id":"58d176bf6d804500104b131a","idName":"bone-pit","number":2,"name":"Bone Pit","victoryGold":7,"minTrophies":400,"order":2,"__v":0,"leagues":[],"cardUnlocks":["58d176a56d804500104b1250","58d176a56d804500104b1254","58d176a56d804500104b125a","58d176a56d804500104b125c","58d176a56d804500104b125e","58d176a56d804500104b1262"],"chests":["58d176a56d804500104b1299","58d176a56d804500104b129a","58d176a56d804500104b129b","58d176a56d804500104b129d","58d176a56d804500104b129e","58d176a56d804500104b129f","58d176a66d804500104b12a0","58d176a66d804500104b12a8","58d176a66d804500104b12a9"],"clan":{"donate":{"common":2,"rare":1},"request":{"common":10,"rare":1}}},
    {"_id":"58d176be6d804500104b1318","idName":"barbarian-bowl","number":3,"name":"Barbarian Bowl","victoryGold":9,"minTrophies":800,"order":3,"__v":0,"leagues":[],"cardUnlocks":["58d176a56d804500104b125f","58d176a56d804500104b1260","58d176a56d804500104b1261","58d176a56d804500104b1263","58d176a56d804500104b1264","58d176a56d804500104b1266"],"chests":["58d176a66d804500104b12a1","58d176a66d804500104b12a2","58d176a66d804500104b12a3","58d176a66d804500104b12a4","58d176a66d804500104b12a5","58d176a66d804500104b12a6","58d176a66d804500104b12a7","58d176a66d804500104b12ab","58d176a66d804500104b12b0"],"clan":{"donate":{"common":2,"rare":1},"request":{"common":10,"rare":1}}},
  ]
}

const arenaReducer = (state=initialState, action) => {
  switch(action.type) {
    case FETCH_DATA_ARENA: {
      return {...state, data: action.arenas}
    }
    default: return state
  }
}


export default arenaReducer
