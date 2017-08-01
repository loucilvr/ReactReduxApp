/**
 * Created by LoucilRubio on 7/19/17.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBZ-vOKp3Uf_OO0F0fQHe7IquD1mQ-XpmA';

const App = function(){
    return <div>
            <SearchBar/>
            </div>;
}

ReactDOM.render(<App/>, document.querySelector('.container'));