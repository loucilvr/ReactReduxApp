/**
 * Created by LoucilRubio on 7/19/17.
 */
import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";

const API_KEY = 'AIzaSyBZ-vOKp3Uf_OO0F0fQHe7IquD1mQ-XpmA';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            videos: [],
            selectedVideo: null
        };
        this.videoSearch('lawf');
    }

    videoSearch(term) {
        YTSearch({key: API_KEY, term: term}, videos => this.setState({
            videos: videos,
            selectedVideo: videos[0]
        }));
    }

    render()  {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList
                    onVideoSelect= {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));