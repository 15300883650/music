import {TOP_LIST} from '../api'
export default (state,action)=>{
    state =state || {data:[]};
    switch (action.type) {
        case 'TOPL':
            return {
                data:action.data
            }
        default:
          return state;
    }
}

export const getTOP_LIST=()=>(dispatch)=>{
    //ajax 取得数据
    fetch(TOP_LIST).then((data)=>data.json()).then(res=>{
        console.log(res);
        console.log(123);
         //dispatch将数据回传至仓库(上面)
    dispatch({type:'TOPL',data:res.data})
    })
   
}