import {  
    createContext,
    useContext,
    useEffect,
    useReducer,
    useState} from "react"

    const ReducerContext=createContext()

    export function ReducerProvider({children}){

        const [
            {
              sortBy,
              showIdealFor,
              showSize,
              showBrand,
              cart,
              saveLater
            },
            dispatch
        ]=useReducer(
            reducer,
            {
              sortBy:null,
              showIdealFor:[],
              showBrand:[],
              showSize:[],
              cart:[],
              saveLater:[]
            }
        )
        return(
            <ReducerContext.Provider value={{
                sortBy,
                showIdealFor,
                showSize,
                showBrand,
                cart,saveLater,
                dispatch}}
                >
             {children}
            </ReducerContext.Provider>    
        )
    }

  export function useReduce(){
      return useContext(ReducerContext)
  }  

  export function reducer(state,action){

    switch (action.type) {

        case "SORT":
            return {...state,sortBy:action.payload}
            
        case "FILTER_RESET":
          return{...state,             
            sortBy:null,
            showIdealFor:[],
            showBrand:[],
            showSize:[]}  

        case "IDEAL":
            if (state.showIdealFor.includes(action.payload)) {
                return {
                  ...state,
                  showIdealFor: state.showIdealFor.filter(
                    (item) => item !== action.payload
                  )
                };
              }
             else {
                return {
                  ...state,
                  showIdealFor: [...state.showIdealFor, action.payload]
                };
              }
        case "Brand":
            if (state.showBrand.includes(action.payload)) {
                return {
                  ...state,
                  showBrand: state.showBrand.filter(
                    (item) => item !== action.payload
                  )
                };
              } else {
                return {
                  ...state,
                  showBrand: [...state.showBrand, action.payload]
                };
              }      
        case "SIZE":
            if (state.showSize.includes(action.payload)) {
                return {
                  ...state,
                  showSize: state.showSize.filter(
                    (item) => item !== action.payload
                  )
                };
              } else {

                return {
                  ...state,
                  showSize: [...state.showSize,action.payload]
                };
              }

        case "ADD_TO_CART":
          return{
            ...state, cart:[...state.cart,action.payload]
          }
        case "INCREASE_IN_CART":
          return{
            ...state,cart:state.cart.map(item=>{
              if(item.id===action.payload.id){
                return {...item,qty:item.qty+1}
              }
              return item
            })
          }
        case "DECREASE_IN_CART":
          if(state.cart.find(item=>{return item.id===action.payload.id}).qty>1){
            return {
              ...state,cart:state.cart.map(item=>{
                if(item.id===action.payload.id){
                  return {...item,qty:item.qty-1}
                }
                return item
              })
            }
          }
          return {...state,cart:state.cart.filter(item=>item.id!==action.payload.id)}

        case "REMOVE_ITEMS":
          return {...state,cart:state.cart.filter(item=>item.id!==action.payload.id)}

        case "ADD_TO_SAVE":
          return{
            ...state, saveLater:[...state.saveLater,action.payload]
          }  
        case "REMOVE_FROM_SAVE":
            return{
              ...state, saveLater:state.saveLater.filter(item=>item.id!==action.payload.id)
            }    
        default:
            break;
    }
  }