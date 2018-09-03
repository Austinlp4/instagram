import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

class App extends Component {
  constructor(){
    super();
    this.state = {
      posts: [],
      inputText: ''
    }
  }
    componentDidMount = () => {
      this.getData(dummyData);
    }

    getData = dummyData => {
      this.setState({
        posts: dummyData
      });
    }

    searchInput = event => {
      this.setState({
        inputText : event.target.value,
      });
    };
  
  render() {
    
    return (
      <div className="App">
        <SearchBar inputText={this.state.inputText} searchInput={this.searchInput}/>
        <PostContainer posts = {this.state.posts} />
      </div>
    );
  }
}
export default App;
