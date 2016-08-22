/**
 * Created by Mile on 04/03/2016.
 */
WPAngularStarter.controller('userProfileController', function ($scope, $rootScope, $state, notifications, serverURL, UserService, ListingService) {
    $scope.usersPerPage = 3;
    $scope.currentPage = 1;
    $scope.serverURL = serverURL;
    UserService.getUser($scope.userId).then(function (response) {
        $scope.user = response.data;
    });

    ListingService.queryByUserId($scope.userId).then(function (response) {
        $scope.listings = response.data;
    });

    $scope.editProfile = function () {

        if(($scope.user.username != '') && ($scope.profile_form.username.$valid) && ($scope.user.name != '') && ($scope.user.surname != '') && ($scope.user.email != '') && ($scope.profile_form.email.$valid) && ($scope.user.password != '')) {
            UserService.editUser($scope.user).then(function () {
                $rootScope.userName = $scope.user.username;
                $state.go('home');
                notifications.showWarning('Промените се зачувани.');

            });
        }
    }
});
