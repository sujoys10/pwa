import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import { setSearchField, requestRobots } from '../action';
import Header from '../components/Header';

class App extends Component {
  
  componentDidMount(){
    console.log(this.props);
    this.props.getRobots();
  }


  render(){
    const {searchField, onSearchChange, robots, isPending } = this.props;
    const filteredRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase());
    })
    if(isPending){
      return(
        <h1>Loading</h1>
      )
    }else{
      return (
        <div className="App"> 
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  console.log(state)
  return{
    searchField: state.searchRobots.searchField,
    robots: state.getRobots.robots,
    isPending: state.getRobots.isPending,
    isFailed: state.getRobots.isFailed
  }
}

// dispatch the DOM changes to call an action. note mapStateToProps returns object, mapDispatchToProps returns function
// the function returns an object then uses connect to change the data from redecers.
const mapDispatchToProps = (dispatch) => {
  return{
    onSearchChange: event => dispatch(setSearchField(event.target.value)),
    getRobots: () => dispatch(requestRobots())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
