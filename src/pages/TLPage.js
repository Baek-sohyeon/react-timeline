import React, {useEffect, useState} from 'react';
import {Write} from '../components/timeline/Write';
import {TimeLine} from "../components/timeline/TimeLine";


export function getInfo() {
    return {
        name:'백소현',
        phone: '010-4813-8534'
    }
}

export function TLPage(props){
    const [feeds, setFeeds] = useState([]);


    useEffect(() => {
        const server = async () => {
            setFeeds(await readFeeds());
        }
        server();
    },[]);


async function createFeed(name, body){
    const result = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'post',
        headers:{
            'Content-Type':'application/json',
        },
        body: JSON.stringify({
            content: body,
            owner: name
        }),
    });
    console.log(await result.json());
}



async function readFeeds(name, body){
    const feedResult = await fetch('http://ec2-52-78-131-251.ap-northeast-2.compute.amazonaws.com/feed/',{
        method: 'get',
    });
    return await feedResult.json();
}



    return <>
        <Write
            readFeeds={readFeeds}
            setFeeds ={setFeeds}
            writeFunc={createFeed}

        />
        <TimeLine
            feeds = {feeds}
        />
    </>;
}