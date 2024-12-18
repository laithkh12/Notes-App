import { useLoaderData, Link } from "react-router-dom";

import Modal from "../../components/Modal/Modal";
import classes from "./PostDetails.module.css";

function PostDetails() {
  const post = useLoaderData();

  if (!post) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find post</h1>
          <p>Unfortunately, the requested post could not be found.</p>
          <Link to=".." className={classes.btn}>
            Okay
          </Link>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.author}>{post.author}</p>
        <p className={classes.text}>{post.body}</p>
      </main>
    </Modal>
  );
}

export default PostDetails;

export async function loader({ params }) {
  if (!params.id) {
    console.error("Post ID is undefined");
    return null; // You might want to handle this scenario appropriately
  }
  const url = `http://localhost:8080/posts/${params.id}`;
  console.log("Fetching from URL:", url);
  const response = await fetch(url);
  const resData = await response.json();
  console.log("Response data:", resData);
  return resData.post;
}
