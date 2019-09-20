import React, { useState } from 'react';


const Forms = () => {
  const [activeTab, setActiveTab] = useState(null)

  const selectTab = tab => {
    console.log(tab);
    e.target.
  };

  return (
    <div className="Forms">
      <div className="tabs">
        <div data-tab="1" onClick={(e) => setActiveTab(e.target.dataset.tab)} className="tab-link link-selected">Tab 1 {}</div>
        <div data-tab="2" onClick={(e) => setActiveTab(e.target.dataset.tab)} className="tab-link">Tab 2</div>
        <div data-tab="3" onClick={(e) => setActiveTab(e.target.dataset.tab)} className="tab-link">Tab 3</div>
        <div data-tab="4" onClick={(e) => setActiveTab(e.target.dataset.tab)} className="tab-link">Tab 4</div>
      </div>

      <div className="forms-view">
        <div class="form form-selected" data-tab="1">
          <h1>Title 1</h1>
        </div>

        <div class="form" data-tab="2">
          <h1>Title 2</h1>
        </div>

        <div class="form" data-tab="3">
          <h1>Title 3</h1>
        </div>

        <div class="form" data-tab="4">
          <h1>Title 4</h1>
        </div>
      </div>
    </div>
  )
};

export default Forms;
