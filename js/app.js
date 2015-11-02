



var website = angular.module('website', ['duScroll', 'ui.bootstrap']);


website.controller('websiteCtrl', function ($scope) {
	$scope.team = [
		{
			name: 'Mário Marques',
			task: 'leader',
			description: 'lorem ipsum',
			img: 'img/team/marioBW.png'
		},
		{
			name: 'Miguel Castro',
			task: 'consultant',
			description: 'lorem ipsum',
			img: 'img/team/miguel.png'
		},
		{
			name: 'Vítor Silva',
			task: 'consultant',
			description: 'lorem ipsum',
			img: 'img/team/vitorBW.png'
		},
		{
			name: 'Miguel Araújo',
			task: 'industrial buildings',
			description: 'lorem ipsum',
			img: 'img/team/miguelAraujoBW.jpg'
		},
		{
			name: 'Rui Barros',
			task: 'developer',
			description: 'lorem ipsum',
			img: 'img/team/ruiBW.png'
		},
	]

});