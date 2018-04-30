export default class PostsService
{
    constructor($http)
    {
        this.$http = $http;
    }
    
    getAll() {
        return this.$http.get(`http://localhost:3000/posts`);
    }
    addPost(params) {
        return this.$http.post(`http://localhost:3000/posts`, params);
    }
}