import React from 'react';


const Tab1 = ({ match }) => {
  const form = forms.find(({id}) => id === match.params.tabId)
  return (
    <div>
      <h1>Some Form</h1>
    </div>
  )
};

export default Tab1;
