import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const myApi = createApi({
    reducerPath:"myApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000/"
    }),
    tagTypes:["Posts"],
    endpoints:(builder) => ({
            getPosts:builder.query<Post[],string>({query: ()=> "posts",providesTags:["Posts"]}),
            newPosts:builder.mutation<Post,Post>({query:(post)=>({
                url:"posts",
                method:"POST",
                body:post
            }),
            invalidatesTags:["Posts"]
        })
        })
    })

    // tags types basicaly helps use to update data
    // invalidatesTags:["Posts"] so we this tag name we telling that posts  with tagType has changed


 export const { useGetPostsQuery, useNewPostsMutation } = myApi;



