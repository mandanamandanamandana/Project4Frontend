import { useLoaderData, Form } from "react-router-dom";
import Post from "../components/Post";
import classes from './Index.module.css';

const Index = (props) => {
  const todos = useLoaderData();

  return (
  < div>
    <div className={classes.inputCard}>
        <h2 className={classes.title}>Create a TV Show</h2>
        <Form 
          className={classes.formCard}
          action="/create" 
          method="post" >
            <span className={classes.inputCards}>
            <input type="text" name="subject" placeholder="Show Title"/>
            <input type="text" name="details" placeholder="Genre"/>
            </span>
            <div className={classes.addBtnContainer}>
            <button className={classes.addButton}>
              Create New Show
              </button>
            </div>
        </Form>
    </div>
    {todos.map((post) => <Post key={post.id} post={post} />)}
  </div>);
};

export default Index;