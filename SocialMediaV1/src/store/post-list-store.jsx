import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const PostListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type === "ADD_POST"){
    newPostList = [action.payload, ...currPostList]
  }
  return newPostList;
};



const PostListProvider = ({ children }) => {
  const [postlist, dispatchPostList] = useReducer(
    PostListReducer,
    DEFAULT_POST_LIST
  );

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  const addPost = (userId, postBody, postTitle, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userID: userId,
        tags: tags,
      },
    });
  };

  return (
    <PostList.Provider
      value={{ postlist: postlist, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going To Mumbai",
    body: "Hey friends, going to mumbai for a trip. Peace Out.",
    reactions: 5,
    userID: "user-9",
    tags: ["#vacation", "#Mumbai", "#Holiday"],
  },
  {
    id: "2",
    title: "Pass ho gaye bhaiyon!!",
    body: "Finally got a degree from IIIT CHUNA.",
    reactions: 16,
    userID: "user-12",
    tags: ["#Convocation", "#IIITU", "#BTech"],
  },
  {
    id: "3",
    title: "Naukri lag gayi!!",
    body: "Finally got a job.",
    reactions: 116,
    userID: "user-19",
    tags: ["#Job", "#Placement", "#Myntra"],
  },
];

export default PostListProvider;
