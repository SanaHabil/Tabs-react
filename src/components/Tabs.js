import React from 'react'

const Tabs = (props) => {
    const {tabs,currentTabIdx,setCurrentTabIdx} = props;
    
const clickHandler = (index)=>{
    
    setCurrentTabIdx(index);
    
} 

const styleTab =(index)=>{
    if (index === currentTabIdx){
        return "selected"
    } else {
        return "notSelected"
    }
}

return (
    <div className ="Tabs">
        {
        tabs.map((item,index) =>(
                    <div className={`tabsyle ${styleTab(index)}`} key={index} onClick={(e)=>clickHandler(index)} >
                        {item.tabname}
                    </div>
            ))
        }
    </div>
)
}

export default Tabs