import React from 'react';
import Menu from './Menu.js';
import KeyMenu from './KeyMenu.js';


class Navigation extends React.Component {
 /*Function enables and disables dropdown on click*/

  render() {
    return (
      <div className='navbar'>
        <Menu />

        <div className='logo'>
          <i class="fas fa-home"></i>
        </div>

        <KeyMenu />
      </div>
    );
  }
};

export default Navigation;
