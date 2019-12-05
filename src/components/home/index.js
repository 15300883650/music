import React from 'react';
import './index.css'
import {NavLink,Route,Redirect} from 'react-router-dom'
import Recommend from '../recommend'
import Search from '../search'
import Rank from '../rank'
import { Switch } from 'antd-mobile';
export default class Home extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="index">
            {/* <!-- 头部 --> */}
            <div className="headbox headbox1">
              <p className="p1">
                <img src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.svg?max_age=2592000" alt="" />
              </p>
              <p className="p2">
                <span>下载APP</span>
              </p>
            </div>
            {/* <!-- 内容区域 --> */}
            <div className="conBox">
              {/* <!-- 导航区 --> */}
              <p className="nav">
                <NavLink to="recommend" activeClassName="select">推荐</NavLink>
                <NavLink to="rank" activeClassName="select">排行榜</NavLink>
                <NavLink to="search" activeClassName="select">搜索</NavLink>
              </p>
             {/* 子路由 */}
          <Switch>
           <Route path="/recommend" component={Recommend}></Route>
           <Route path="/rank" component={Rank}></Route>
           <Route path="/search" component={Search}></Route>
           <Redirect to="/recommend"></Redirect>
        </Switch>
            </div>
            {/* <!-- 尾部 --> */}
            <div className="bottom"><a href="https://y.qq.com/">安装QQ音乐，发现更多精彩</a></div>
          </div>
        )
    }
}