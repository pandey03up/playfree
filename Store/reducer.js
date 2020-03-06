const playList = {
    list : [],
    value : ""
}

const reducer = (List = playList,action) =>{
    if(action.type === 'INSERT'){
        return{
            ...List,
            value : action.value
        }
    }
    if(action.type === 'EXECUTE' && List.value !== "" && List.value.includes("https://www.youtube.com/watch?v=")){
        return{
            ...List,
            list : [...List.list,List.value.replace("https://www.youtube.com/watch?v=","")]
        }
    }
    return List;
}

export default reducer;