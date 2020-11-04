const set_data=(data)=>{
    return(dispatch)=>{
        dispatch({type:"SET_DATA",data:data})
    }
  
}

export {
    set_data
}