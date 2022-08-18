import React, {useEffect, useState} from "react";
import PostList from "../components/post-list";
import MyButton from "../components/UI/button/MyButton";
import "../styles/app.css"
import PostForm from "../components/post-form";
import PostFilter from "../components/post-filter";
import Modal from "../components/UI/modal/modal";
import {usePosts} from "../hooks/usePosts";
import PostService from "../API/post-service";
import Loader from "../components/UI/loader/loader";
import {useFetching} from "../hooks/useFetching";
import {getPageCount} from "../utils/pages";
import Pagination from "../components/UI/pagination/Pagination";

function Posts() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: "", query: ""})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPage] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);



    const [fetchPost, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers["x-total-count"]
        setTotalPage(getPageCount(totalCount, limit));
    })

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter((postIn) => postIn.id !== post.id))
    }

    const changePage = (pageNum) => {
        setPage(pageNum);
    }

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    useEffect(() => {
        fetchPost();
    }, [page]);

    return (
        <div className="App">
            <MyButton style={{marginTop: 10}} onClick={() => setModal(true)}>
                добавить поле
            </MyButton>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin: "15px 0"}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            {postError &&
                <h1>error $ {postError}</h1>}
            {isPostLoading
                ? <div style={{display: "flex", justifyContent: "center", marginTop: 50}}><Loader/></div>
                : <PostList posts={sortedAndSearchedPosts} title={"список постиков"} remove={removePost}/>
            }

            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />


        </div>
    );
}

export default Posts;
