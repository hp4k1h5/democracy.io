var HeadingController = function($scope, $location) {

	$scope.$on('$routeChangeSuccess', function(event, newLoc, oldLoc){
		
		if($location.path() === "/"){
			$scope.pageName = "home";
		} else {
			$scope.pageName = $location.path();
		}

		if( $scope.pageName.charAt( 0 ) === '/' ){
    		$scope.pageName = $scope.pageName.slice( 1 );
    	}

		var wrapper = document.querySelector('#wrapper');

		wrapper.dataset.pagename = $scope.pageName;

	});

};

module.exports = HeadingController;