const axios = require('axios');


/*
function to get comments of a specific post by it's id
parameters:  
id: the id of the post
*/
async function get_comments_by_postID(id) {
    try {
        let response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        //console.log(response.data);
        return response.data;
    }
    catch (error) {
        console.log("error");
        return error;
    }

}

/*
function to get comments of a specific user by it's id.
parameters:  
id: the id of the user
*/
async function get_comments_by_UserID(id) {
    try {
        const comments = [];
        //get all posts of the specific user
        const response = await axios.get('https://jsonplaceholder.typicode.com/users/' + id + '/posts');
        const posts = response.data;
        //console.log(posts);
        //get all the comment of every post from the posts list and append them to te comments list
        for (var i = 0; i < posts.length; i++) {
            const response2 = await get_comments_by_postID(posts[i].id);
            //console.log(response2);
            comments.push(response2);
        }
        return comments;
    }
    catch (error) {
        console.log("error");
        return error;
    }

}

// export functions
exports.get_comments_by_UserID = get_comments_by_UserID;
exports.get_comments_by_postID = get_comments_by_postID;
