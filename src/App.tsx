import PostCard from "./Components/PostCard";
import { useGetPostsQuery } from "./redux/api"

const App = () => {
     const { isLoading,isError,isSuccess,data,error } =   useGetPostsQuery("");
     console.log(isLoading,isError,isSuccess,data,error );
     
  return (
    <div>
      <h1>My app</h1>
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
