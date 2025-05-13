import { useContext, useRef } from "react";
import { PostList } from "../store/Post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const UserIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = UserIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(/[ ,]+/);

    UserIdElement.current.value = "";
    postTitleElement.current.value = "";
    postBodyElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, postBody, postTitle, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={postTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          rows={4}
          type="text"
          ref={postBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="UserId" className="form-label">
          Enter your User Id here.
        </label>
        <input
          type="text"
          ref={UserIdElement}
          className="form-control"
          id="UserId"
          placeholder="Your User Id"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reaction" className="form-label">
          Number of Reactions
        </label>
        <input
          type="text"
          ref={reactionsElement}
          className="form-control"
          id="reaction"
          placeholder="How many peopole reacted to this post."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags:
        </label>
        <input
          type="text"
          ref={tagsElement}
          className="form-control"
          id="tags"
          placeholder="Please enter tags using space."
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};

export default CreatePost;
