import React from "react";
import {Feed} from './Feed';

export const TimeLine = (props) => {
    return props.feeds.map(feed => <Feed name={feed.owner} body={feed.content} />)

}
