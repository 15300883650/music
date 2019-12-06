import {SONG_LIST} from '../api'
export default (state,action)=>{
    state =state || {dataSongList:[]};
    switch (action.type) {
        case 'TOPL':
            return {
                dataSongList:action.dataSongList
            }
        default:
          return state;
    }
}

export const getSONG_LIST=(id)=>(dispatch)=>{
    //ajax 取得数据
    fetch(SONG_LIST + '/' + id).then((data)=>data.json()).then(res=>{
        console.log(res);
        // console.log(123);
         //dispatch将数据回传至仓库(上面)
    dispatch({type:'TOPL',dataSongList:res.data})
    })
   
}