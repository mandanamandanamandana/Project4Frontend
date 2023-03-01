import { Link, useLoaderData, Form } from "react-router-dom";

const Show = (props) => {
  const post = useLoaderData();

  //styles
  const div = {
    textAlign: "center",
    border: "3px DarkCyan",
    width: "80%",
    margin: "30px auto",
  };

  return (
    <div style={div}>
      <h1>{post.subject}</h1>
      <h2>{post.details}</h2>
      <div>
        <h2>Update this TV Show</h2>
        <Form action={`/update/${post.id}`} method="post">
          <input
            type="text"
            name="subject"
            placeholder="subject"
            defaultValue={post.subject}
          />
          <input
            type="text"
            name="details"
            placeholder="details"
            defaultValue={post.details}
          />
          <button>Update</button>
        </Form>
        <Form action={`/delete/${post.id}`} method="post">
            <button>Delete</button>
        </Form>
      </div>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
};

export default Show;