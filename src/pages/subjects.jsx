// const subjects =[{code:"CMSC100"},{code:"CMSC23"}];
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Subject(){
    const [subjects, setSubjects] = useState([]);
    const [greeting, setGreeting] = useState("");
    useEffect(()=> {
        fetch('http://localhost:3001/get-subjects').then(response => response.json()).then(body=>{setSubjects(body)});

        fetch('http://localhost:3001/greet-by-post',{
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({name:'UZZIEL'})
        }).then(response=>response.text()).then(body=>{
            setGreeting(body)
        })
    },[]);

    return(
        <>
        <h1>{greeting}</h1>
        <ol>{
            subjects.map((subject,index)=> <li key={index}><Link to={`/subjects/${subject.code}`}>{subject.code}</Link></li>)
        }</ol>
        
        </>
    );
}