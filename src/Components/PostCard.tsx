
// interface Post{
//     id:string,
//     title:string,
//     views:number,
// }

const PostCard = ({post}:{post:Post}) => {
  return (
    <div>
        <h4>{post.title}</h4>
        <p>{post.views}</p>
    </div>
  )
}

export default PostCard