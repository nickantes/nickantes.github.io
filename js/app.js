/**
 * AngularJS app configuration
 * Routes, controllers, and ProjectsService for portfolio SPA.
 * Depends on: ngApp (main.js), ngRoute, yaru22.md
 */
(function () {
  'use strict';

  var app = angular.module('ngApp');

  app.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.when('/', {
      templateUrl: 'templates/home.html',
      controller: 'HomeController'
    });
    var projectSlugs = ['bloc-jams', 'elia-cafe', 'sales-pipeline'];
    projectSlugs.forEach(function (slug) {
      $routeProvider.when('/projects/' + slug, {
        templateUrl: 'templates/project-' + slug + '.html',
        controller: 'ProjectController',
        resolve: {
          project: ['ProjectsService', function (ProjectsService) {
            return ProjectsService.getBySlug(slug);
          }]
        }
      });
    });
    $routeProvider.otherwise({ redirectTo: '/' });
  }]);

  app.controller('HomeController', ['$scope', 'ProjectsService', function ($scope, ProjectsService) {
    $scope.skills = [
      'Web Design', 'SEO Optimization', 'Business Process Automation',
      'System Architecture', 'UI/UX', 'Sales Tracking Systems',
      'Frontend Development', 'Data Routing'
    ];
    $scope.projects = ProjectsService.getAll();
  }]);

  app.controller('ProjectController', ['$scope', 'project', function ($scope, project) {
    $scope.project = project;
  }]);

  app.factory('ProjectsService', [function () {
    var projects = {
      'bloc-jams': {
        title: 'Bloc Jams',
        slug: 'bloc-jams',
        description: 'Music playing app designed to play multiple audio files on command, styled after the popular Spotify music playing web app.',
        tags: ['JavaScript', 'jQuery', 'DOM', 'Audio'],
        externalUrl: null,
        isPrivate: false,
        hasDetailPage: true
      },
      'elia-cafe': {
        title: 'Elia Cafe Web Build & SEO',
        slug: 'elia-cafe',
        description: 'Designed, built, and launched a highly responsive, modern web platform for Elia Cafe, focusing heavily on SEO optimization and driving local user conversion.',
        tags: ['Web Design', 'SEO', 'UI/UX'],
        externalUrl: 'https://elia-cafe.com',
        isPrivate: false,
        hasDetailPage: true
      },
      'sales-pipeline': {
        title: 'Automated Sales & Stocking Pipeline',
        slug: 'sales-pipeline',
        description: 'Engineered a semi-automated routing system for sales teams. It distributes new product stocking requests to relevant category managers, complete with tracking for key date thresholds and automated sales tracking.',
        tags: ['Automation', 'Systems Architecture', 'Data Tracking'],
        externalUrl: null,
        isPrivate: true,
        hasDetailPage: true
      }
    };

    return {
      getAll: function () {
        return [
          projects['elia-cafe'],
          projects['bloc-jams'],
          projects['sales-pipeline']
        ];
      },
      getBySlug: function (slug) {
        return projects[slug] || null;
      }
    };
  }]);
})();
