import { useState } from 'react'

function Item() {

    const [post, setPost] = useState(JSON.parse(localStorage.getItem("post")));
    
    return (
        <>
            {/* img */}
            <div className="p-4 text-white">
                <h3>Details Page for Post with ID:{post.id}</h3>
                <img className="mb-2 rounded-2xl" src={`https://picsum.photos/300?random=${post.id}`} alt="" />
                <h3>User ID: {post.userId}</h3>
                <h2>Title: {post.title}</h2>
                <p>Body: {post.body}</p>
            </div>
        </>
    )
}
export default Item;