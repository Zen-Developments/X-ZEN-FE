import React from 'react';



class KeyMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isKeyMenuOpen: false,
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isKeyMenuOpen: !prevState.isKeyMenuOpen
    }));
  }

  render() {
    const {isKeyMenuOpen} = this.state;
    return (
      <div className='KeyMenu'>
        {isKeyMenuOpen
          ? <i onClick={ this.toggleMenu } className="far fa-window-close"></i>
          : <i onClick={ this.toggleMenu } className="fas fa-key"></i>
        }

        <div className="menu-items">
          <h1 className={isKeyMenuOpen ? 'menu-link' : 'menu-link menu-hidden'}>COMING SOON!</h1>
        </div>
      </div>
    )
  }
};

export default KeyMenu;
