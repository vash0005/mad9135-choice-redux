const fetchPosts = (posts) => {
    return {
        type: "FETCH_POSTS",
        payload: posts
    }
}

export default fetchPosts