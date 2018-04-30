export default class HomeController 
{
    constructor($scope, postsService)
    {
        this.$scope = $scope;

        this.$scope.getAllPosts = () => { postsService.getAll().then(response => {
            if(!$scope.$$phase) {
                $scope.$apply(() => {
                    this.$scope.posts = response.data
                })
            } else {
                this.$scope.posts = response.data
            }
        })}

        this.$scope.postParams = {
            id: '',
            title: '',
            author: ''      
        }

        this.$scope.addPost = () => {
            postsService.addPost(this.$scope.postParams).then(response => {
                this.$scope.getAllPosts
            })
        }

        this.$scope.getAllPosts();
    }
}