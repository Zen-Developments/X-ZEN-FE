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
          text: 'Portfolio',
          link: '/portfolio',
        },
        {
          id: 3,
          text: 'Contact',
          link: '/contact',
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
        {isMenuOpen
          ? <i onClick={ this.toggleMenu } className="fas fa-minus-square" />
          : <i onClick={ this.toggleMenu } className="fas fa-bars" />
        }

        <div className="menu-items title">
          {menuItems.map((item) => (
            <Link
            to={item.link}
            key={ item.id }
            className={isMenuOpen
              ? 'menu-link'
              : 'menu-link menu-hidden'
            }>
              { item.text }
            </Link>
          ))}
        </div>
      </div>
    )
  }
};

export default Menu;
