import React from 'react';
import { Link } from 'react-router-dom';


class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      menuItems: [
        {
          id: 1,
          text: 'Home',
          link: '/',
        },
        {
          id: 2,
          text: 'About Me',
          link: '/about',
        },
        {
          id: 3,
          text: 'Projects',
          link: '/projects',
        },
      ]
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  render() {
    const {isMenuOpen, menuItems} = this.state
    return (
      <div className='menu'>
        {isMenuOpen && <div id='item-drop' className='menu-items'>
          {menuItems.map((item) => (
            <Link to={item.link} key={ item.id } className='menu-link'>{ item.text }</Link>
          ))}
        </div>}

        {isMenuOpen
          ? <i onClick={ this.toggleMenu } className="fas fa-minus-square" />
          : <i onClick={ this.toggleMenu } className="fas fa-bars" />
        }
      </div>
    )
  }
};

export default Menu;
