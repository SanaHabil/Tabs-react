import React from 'react'

const View = (props) => {
    const {tabs, currentTabIdx} = props;
return (
    <div className="viewstyle">
    { tabs[currentTabIdx].content }
    </div>
)
}
export default View