import {RECOMMEND} from '../api'
export default (state,action)=>{
    state =state || {radioList:[],slider:[]};
    switch (action.type) {
        case 'INIT':
            return {radioList:action.radioList,slider:action.slider}
        default:
          return state;
    }
}

export const getRecommend=()=>(dispatch)=>{
    //ajax 取得数据
    fetch(RECOMMEND).then((data)=>data.json()).then(res=>{
        // console.log(res);
         //dispatch将数据回传至仓库(上面)
    dispatch({type:'INIT',radioList:res.data.radioList,slider:res.data.slider})
    })
   
}