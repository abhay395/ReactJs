# ReduxToolKit

# steps for use Reduxtoolkite
## step 1 make store
make app folder and make file Store.js
import configureStore in this file and export this store  
store=configureStore({}) 
## step 2 make Slice
make feature folder and make file todoSlice.js and import createSlice
and make initialState =it wilbe {} and [] arry any one you choes
and then make slice(it's a big part of reducer and reducer is functinality) so first you make slice and it's do like this

`````
 todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={id:nanoid(), text:action.payload}
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todo)=>{todo.id!==action.payload})
        }
    }
})
``````
when we make a todoslice  we alwes make a name and give it a name make a reducer we maxime time use {} in reducer and alwas throw function in this reducer one slice take many reducer 

and in this function acsses of state and action state meanse intsital value or intial {} like and action give acess of id and text like property and it's give by action.paylod

and we export all fuction in this reducer with slice indevisvaly like this
```
 export const {addTodo,removeTodo}=todoSlice.actions
 export default todoSlice.reducer

```
todoSlice.action isliy rakha gya hai jab hame jarurate padegi hame iska use karge
and then import over reducer in store and give it to store  like this
because store ke pass ager reducer ke awarness nahi hogi to unki value hame change nahi  kar sakte hai 

```
import {configureStore} from '@reduxjs/toolkit'
import  todoReducer from '../feature/todo/todoSlice'
export const store=configureStore({
    reducer:todoReducer
})

```
## step 3 how sent data

when we want to sent a value to store we use useDispatch()
it use reducer to change value in store
like this
```
<!-- first you make a variable  -->
 const dispatch=useDispatch()
 <!-- second what you sent in store uski value daal do or kise reducer me daal rahe vo bhi batana -->
  dispatch(addTodo(input))

```
## step 4 how take data

when we want to take data in over componente we use useSelector ye hame state ka use karke value hame deta hai like this and we hold data in variable 
```
const todos=useSelector(state=>state.todos)
```
## step 5 and last step rape all componente in provider it's provider i am take from react-redux 
and it have a store property for like a value properti in contax api 
 it's do like this

 ```
 import { Provider } from 'react-redux'
 <Provider store={store} >
    <App />
  </Provider>
 ```