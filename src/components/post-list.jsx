import Post from "./post-item";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1 style={{textAlign: "center"}}>
                постов нету
            </h1>
        )
    }

    return (<div>
        <h1 style={{margin: 10, textAlign: "center"}}>{title}</h1>
        <TransitionGroup>

            {posts.map((post, index) =>
                <CSSTransition
                    key={post.id}
                    timeout={1000}
                    classNames="post"
                >
                    <Post number={index + 1} post={post}  remove={remove}/>
                </CSSTransition>
            )}

        </TransitionGroup>
    </div>)
}

export default PostList