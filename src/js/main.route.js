export default function routeConfig ($routeProvider, $locationProvider) {

    // $routeProvider
    // .when('/', {
    //     templateUrl: 'src/app/Components/HomeComponent/home.html',
    //     controller: 'HomeComponent',
    // });
    
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
       });

    }

routeConfig.$inject = ["$routeProvider", "$locationProvider"];