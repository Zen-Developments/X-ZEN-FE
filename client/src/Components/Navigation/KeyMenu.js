import React from 'react';
import { Link } from 'react-router-dom';


class KeyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const {isMenuOpen} = this.state
    return (
      <div className='KeyMenu'>
        {isMenuOpen
          ? <i onClick={ this.toggleMenu } className="fas fa-times"></i>
          : <i onClick={ this.toggleMenu } className="fas fa-key"></i>
        }

        {isMenuOpen && <div id='item-drop' className='menu-items'>
          <div>
            <h1>COMING SOON!</h1>
          </div>
        </div>}
      </div>
    )
  }
};

export default KeyMenu;
