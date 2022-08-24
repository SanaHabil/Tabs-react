import React, { useState } from 'react';
import './App.css';

import Tabs from './components/Tabs'
import View from './components/View'

const tabsArray =[
  {
  tabname:"Tab1",
  content:"This is Tab1 showing here."
  },
  {
    tabname:"Tab2",
    content:"This is Tab2 showing here."
    },
    {
      tabname:"Tab3",
      content:"This is Tab3 showing here."
      }
];


function App() {
  const [tabs,setTabs] = useState(tabsArray);

  const [currentTabIdx, setCurrentTabIdx] = useState(0);

  return (
    <div className="App">
      
      <Tabs tabs={tabs} setTabs={setTabs} currentTabIdx={currentTabIdx} setCurrentTabIdx={setCurrentTabIdx} />
      <View tabs={tabs} currentTabIdx ={currentTabIdx} />
    </div>
  );
}

export default App;