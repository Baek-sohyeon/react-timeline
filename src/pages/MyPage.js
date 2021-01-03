import React, {useEffect, useState} from 'react';
import {getInfo} from "./TLPage";

export function MyPage(props){
    const Info={
        name: getInfo().name,
        phone: getInfo().phone
    }

    return (
        <div>
            <h2>My</h2>
            <p>name : {Info.name}</p>
            <p>phone : {Info.phone}</p>
        </div>

    )
}