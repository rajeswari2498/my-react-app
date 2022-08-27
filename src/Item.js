import React,{useEffect, useState} from 'react';

function Item(){
    const[count,update]=useState(0);
    const[course,setCourse]=useState('react');
    useEffect(()=>{
        //api calls and update the state
    },[count])
    useEffect(()=>{
        //api calls and update the state
    },[course])
    return(
        <div>
            <h3>This is a item </h3>
            <button onClick={()=> update(count+1)}>click the item button</button>
            <h4>{count}</h4>
        </div>
    )
};

export default Item;