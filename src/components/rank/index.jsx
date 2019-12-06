import React from 'react';
import './index.css'
import { connect } from 'react-redux'
import { getTOP_LIST } from '../../store/rank.redux'
@connect((state) => ({
    data: state.rank.data
}), {
    getTOP_LIST
})
class Rank extends React.Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        this.props.getTOP_LIST();
    }
    render() {
        return (
            <div className="rank">
                <ul>

                    {
                        this.props.data && this.props.data.map((v, i) => {
                            return <a href={'/#/songList/' + v.id} key={v.id}><li>
                                <p className="ph_img">
                                    <img src={v.picUrl} />
                                    <span className="iconfont icon-erji">{v.listenCount}</span>
                                </p>
                                <div className="ph_song_list">
                                    {
                                        v.songList.map((m, i) => {
                                            return (
                                                <div key={i}>
                                                    <span className="iconfont icon-you"></span>
                                                    <h2>{m.number}</h2>
                                                    <p key="song.number">
                                                        <span>{m.songName}</span> -{m.singerName}
                                                    </p>
                                                </div>

                                            )
                                        })
                                    }

                                </div>
                            </li></a>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default Rank;