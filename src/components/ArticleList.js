import React from "react";
import Article from "./Article";

function ArtilceList({blogPosts}) {
    const mappedBlogs = blogPosts.map(post => <Article title={post.title} date={post.date} preview={post.preview} minutes={post.minutes}/>)
           
    // console.log(blogPosts)
    return ( 
        <main>
            {mappedBlogs}
        </main>
    )
}

export default ArtilceList;