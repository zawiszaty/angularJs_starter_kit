import angular from 'angular';
import angular_router from 'angular-route';
import MainRoute from './main.route';

import HomeController from './Controller/HomeController';

import postsService from './Service/PostsService';

let fakeJson= angular.module('fakeJson', [angular_router])
.controller('HomeController', HomeController)
.service('postsService', postsService)
.config(MainRoute);

export default fakeJson;


