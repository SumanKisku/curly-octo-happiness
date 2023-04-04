import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

export default function App() {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data));
  }, []);

  return (
    <div className="App bg-gray-950">
      <ul className="flex flex-wrap justify-center gap-2 pt-5">
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/item/:${post.id}`}>
              <div className="p-2 text-white border rounded-2xl max-w-[300px]">
                <img className="mb-2 rounded-2xl" src={`https://picsum.photos/300?random=${post.id}`} alt="" />
                <h3>User ID: {post.userId}</h3>
                <h2>Title: {post.title.split(" ").slice(0,3).join(" ")}...</h2>
                <p>Body: {post.body.split(" ").slice(0, 7).join(" ")} <div>Read More...</div></p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

// export default App
