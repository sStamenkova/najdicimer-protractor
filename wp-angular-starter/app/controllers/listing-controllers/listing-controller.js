/**
 * Created by milew on 23.2.2016.
 */

WPAngularStarter.controller('ListingController', function ($scope, $state, ListingService, notifications) {
    $scope.title = '';
    $scope.content = '';
    $scope.location = "";

    $scope.createListing = function () {
        if ($scope.title != '' && $scope.content != '') {
            ListingService.save($scope.title, $scope.content, $scope.myFile, $scope.userId, $scope.location).then(function (response) {
                $state.go('view-listing', {id: response.data.id});

                notifications.showSuccess({message: 'Огласот е креаиран!'});

            }, function () {
                notifications.showError('Настана грешка. Огласот не е креиран.');
            });
        }
    };

    $scope.autocompleteOptions = {
        componentRestrictions: { country: 'mk' },
        types: ['geocode']
    }
});