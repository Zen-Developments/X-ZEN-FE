import React from 'react';
import { NavLink } from 'react-router-dom';


const Tabs = (props) => {
  return (
    <div className="Tabs">
      {props.config.map((tab) => (
        <NavLink
          activeClassName="tab-active"
          to={`/contact/${tab.id}`}
          key={ tab.id }
          className="tab"
        >
          {tab.text}
        </NavLink>
      ))}
    </div>
  )
};

export default Tabs;
