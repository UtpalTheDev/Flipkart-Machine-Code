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
              showBrand
            },
            dispatch
        ]=useReducer(
            reducer,
            {
              sortBy:null,
              showIdealFor:[],
              showBrand:[],
              showSize:[]
            }
        )
        console.log("meeee",sortBy)
        return(
            <ReducerContext.Provider value={{
                sortBy,
                showIdealFor,
                showSize,
                showBrand,
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
        default:
            break;
    }
  }