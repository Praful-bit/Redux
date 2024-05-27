const redux = require ('redux')

const counterReducer =(state ={counter:0}, action)=>{
  
      if(action.type === 'increment'){
           return{
               counter: state.counter + 1
           }
      }
      if(action.type === 'decrement'){
        return{
            counter: state.counter - 1
        }
      }
    if(action.type === 'INCREMENTBY2'){
        return{
            counter: state.counter+2
        }
    }
    if(action.type === "DECREMENTBY2"){
        return{
            counter : state.counter-2
        }
    }
}

const store = redux.createStore(counterReducer)
// console.log(store.getState());
const counterSubscribe=()=>{
    const latestState = store.getState()
    console.log(latestState);
}

store.subscribe(counterSubscribe)
store.dispatch({type:"increment" })
store.dispatch ({type: 'decrement'})
store.dispatch({ type: 'INCREMENTBY2'})
store.dispatch({type:"DECREMENTBY2"})