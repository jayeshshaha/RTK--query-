import { useState } from "react";
import PostCard from "./Components/PostCard";
import { useGetPostsQuery, useNewPostsMutation } from "./redux/api"

const App = () => {
  
  const { isLoading,isError,isSuccess,data,error } =   useGetPostsQuery("");
  console.log(isLoading,isError,isSuccess,data,error );

    const [newPost] = useNewPostsMutation();

  const [title, settitle] = useState<string>('');
  const [views, setviews] = useState<number>(0);

  function handleSubmit(e:React.FormEvent):void{
       e.preventDefault();
       const post:Post = {
        id:String(Math.random() * 1000),
        title,
        views
       }
       newPost(post);
       settitle('')
       setviews(0);
  }
     
  return (
    <div>
      <h1>My app</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title"  value={title} onChange={(e)=> settitle(e.target.value)}/>
        <input type="number" placeholder="body"  value={views} onChange={(e)=> setviews(Number(e.target.value))}/>
        <button type="submit">Add</button>
      </form>
      {
        isLoading ? <h1>Loading.....</h1> :(
        data?.map(i => (
          <PostCard post={i} key={i.id}/>
         ))
      )}
    </div>
  )
}

export default App


//! json-server --watch ./src/assets/db.json        
