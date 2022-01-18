import React from 'react'








import Card from '../../Card/Card';
const Dashboard = ({Array}) => {
    return (
        <div>
     { Array.map((ele,i) => <Card key={i} Array = {ele}> </Card>) }    
    
        </div>
    )
}

export default Dashboard
