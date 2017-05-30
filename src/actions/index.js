import {
  FETCH_DATA,
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
