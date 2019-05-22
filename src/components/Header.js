import React from 'react';

class Header extends React.Component {

    // preventing rerender of the component
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }
    render(){
        return(
            <div>
                <h1>Robofriends</h1>
            </div>
        )
    }
}

export default Header;