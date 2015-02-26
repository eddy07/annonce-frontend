angular.module('starter.controllers', ['starter.services'])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('AddAnnonceCtrl', function($scope, $ionicModal, AddAnnonceService) {
// Form data for the login modal
  $scope.annonceData = {};

 
  $ionicModal.fromTemplateUrl('templates/addAnnonce.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });


  $scope.closeAnnonce = function() {
    $scope.modal.hide();
  };

 
  $scope.annonce = function() {
    $scope.modal.show();
  };

 
  $scope.doAddAnnonce = function() {
    console.log('Doing Adding annonce', $scope.annonceData);

    AddAnnonceService.addAnnonce($scope.annonceData)
    .success(function(data){
        console.log("success");
        $scope.closeAnnonce();
    })
    .error(function(error){
        console.log("Error");
    });
  };
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
