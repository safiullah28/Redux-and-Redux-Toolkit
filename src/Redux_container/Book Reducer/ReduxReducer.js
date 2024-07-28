import React from 'react'
import { buy_book } from '../Book Actions/Booktypes'
import Bookreducer from './BookReducer'

const purchasebooks=()=>{
    return {type:buy_book}
}

function ReduxReducer() {
    //Reducers
    // decides how the state of applications changes depending upon the actions sent to store
    //To change or update the state, we write Reducers
    // reducer(previousState,action) => newState
    // return us the updated state of application
    // previousState=> accepts previous state function
    // Actions => how this state will bee change and after changing the state , returns us the new State
    //
      return (
    <div>

    </div>
  )
}

export default ReduxReducer
