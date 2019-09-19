import React from 'react';


const Forms = ({props}) => (
  <div>
    <div className="tabs">
      <div className="tab-link tabs-link-selected" data-tab="1">Tab 1</div>
      <div className="tab-link" data-tab="2">Tab 2</div>
      <div className="tab-link" data-tab="3">Tab 3</div>
      <div className="tab-link" data-tab="4">Tab 4</div>
    </div>

    <div className="tab-items">
      <div class="tabs-item tabs-item-selected" data-tab="1">
        <h1>Title 1</h1>
      </div>

      <div class="tabs-item" data-tab="2">
        <h1>Title 2</h1>
      </div>

      <div class="tabs-item" data-tab="3">
        <h1>Title 3</h1>
      </div>

      <div class="tabs-item" data-tab="4">
        <h1>Title 4</h1>
      </div>
    </div>
  </div>
);

export default Forms;
