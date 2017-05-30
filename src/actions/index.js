import {
  FETCH_DATA,
  FETCH_DATA_ARENA
} from './constants'

export const fetchData = (cards) => {
  return {
    type: FETCH_DATA,
    cards
  }
}

export const actionFetchData = () => {

  return(dispatch) => {
    console.log('actionFetchData');
    fetch('http://www.clashapi.xyz/api/cards')
    .then( res => res.json() )
    .then (res => {
      console.log('actionFetchData')
      console.log(res)
      dispatch(fetchData(res))
    })
  }
}

export const fetchDataArena = (arenas) => {
  return {
    type: FETCH_DATA_ARENA,
    arenas
  }
}

export const actionFetchDataArenas = () => {

  return(dispatch) => {
    console.log('actionFetchDataArenas');
    fetch('http://www.clashapi.xyz/api/arenas')
    .then( res => res.json() )
    .then (res => {
      console.log('actionFetchDataArenas')
      console.log(res)
      dispatch(fetchDataArena(res))
    })
  }
}
