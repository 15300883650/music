import React from 'react';
import './index.css'
import { connect } from 'react-redux'
import { getSONG_LIST } from '../../store/songList.redux'
@connect((state) => ({
    data: state.songList.dataSongList
}), {
    getSONG_LIST
})
class SongList extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getSONG_LIST(this.props.match.params.id);
    }
    render() {
        const { data } = this.props;
        if (!data || !data.topInfo) {
            return (<div></div>)
        }
        return (
            <div className="songList">
                <div className="songListBox">
                    <div className="loging"></div>
                    <div className="headbox headbox2">
                        <p className="p1">
                            <img src="//y.gtimg.cn/mediastyle/mod/mobile/img/logo_ch.ssongg?max_age=2592000" alt="" />
                        </p>
                        <p className="p2">
                            <span>戳我查看</span>
                        </p>
                    </div>
                    <div className="songInfoBox">
                        <div className="songInfo">
                            <p className="song_pic">
                                <img src="http://y.gtimg.cn/music/photo_new/T003R300x300M0000045KoP13U9rU1.jpg" />
                            </p>
                            <h2 className="song_title">{data.topInfo.listName}</h2>
                            <h3 className="song_number">{data.topInfo.listName} 第170天</h3>
                            <h3 className="song_time">更新时间: {data.updateTime}</h3>
                            <span className="iconfont icon-you song_play" style={{position:'static'}}></span>
                        </div>
                        <div className="songList">
                            <p className="songList_num">
                                排行榜
<span>共{data.totalSongNum}首</span>
                            </p>
                            <ul>
                                {
                                    data.songList && data.songList.map((song, index) => {
                                        return <li key={song.songId}>
                                            <p className="songlist_index songlist_num3">{index + 1}</p>
                                            <div className="songlist_name">
                                                <p className="song_name">{song.songName}</p>
                                                <p className="singer_name">
                                                    {
                                                        song.singer.map((s, i) => {
                                                            return <span key={s.singerMid}>
                                                                {s.singerName}
                                                            </span>
                                                        })
                                                    }
                                                </p>
                                            </div>
                                            <p className="iconfont icon-download songList_xiazai"></p>
                                        </li>
                                    })
                                }

                            </ul>
                        </div>
                    </div>
                </div >
            </div >
        )
    }
}
export default SongList;