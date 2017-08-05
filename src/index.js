/**
 * Created by LoucilRubio on 7/19/17.
 */
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
        this.state = {videos : []};
        YTSearch({key : API_KEY, term: 'lawf'}, videos => this.setState({ videos }));
        // YTSearch({key : API_KEY, term: 'lawf'}, videos => { console.log(videos)});
    }

     render() {
        return (
            <div>
                <SearchBar/>
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector('.container'));