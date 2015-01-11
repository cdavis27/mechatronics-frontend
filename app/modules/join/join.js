'use strict';

angular
.module('mechApp.join', [
	'ui.router',
	'oitozero.ngSweetAlert',
	'ImageCropper',
	'mechApp.models'
])
.config(['$stateProvider',
function ($stateProvider) {

	$stateProvider
	.state('app.join', {
		url: '/join',
		templateUrl: 'modules/join/join.html',
		controller: 'JoinCtrl'
	});

}])

.service('fileUploader', [function() {

	this.createForm = function(file) {
	    var fd = new FormData();
	    fd.append('image', file);

	    return fd;
	}
}])

.controller('JoinCtrl',
[	     '$scope', '$filter', 'FieldOfStudy', 'Skill', 'Member', 'SweetAlert', '$location', 'PictureModal', 'fileUploader',
function ($scope,   $filter,   FieldOfStudy,   Skill,   Member,   SweetAlert,   $location,   PictureModal,   fileUploader) {
	$scope.member = new Member();
	$scope.password = {};

	$scope.fieldOfStudies = FieldOfStudy.query();
	$scope.skills = Skill.query();

	$scope.showPictureModal = function() {
		PictureModal.show($scope.member).then(function(image) {
			$scope.member.profile_picture = image;
		});
	};

	// Email Error Text:
	var emailText = {
		required: 'Please enter a valid email address.',
		unique: 'Looks like this email is already being used!'
	};

	////// DELETE TO ENABLE PASSWORDS //////
	var tmpPassword = Math.random().toString().split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
	$scope.password.one = tmpPassword;
	$scope.password.two = tmpPassword;
	$scope.hidePasswords = true;
	///////////////////////////////////////

	$scope.submit = function(member, password) {
		var send = true;
		member.error = {};

		if (!member.first_name || !member.first_name.trim()) {
			send = false;
			member.error.first_name = true;
		}

		if (!member.last_name || !member.last_name.trim()) {
			send = false;
			member.error.last_name = true;
		}

		if (!isEmailValid(member.email)) {
			send = false;
			member.error.email = true;
			member.error.emailText = emailText.required;
		}

		if (!password.one || !password.one.trim() || password.one !== password.two) {
			send = false;
			password.error = true;
		}

		if (!member.grad_year) {
			send = false;
			member.error.grad_year = true;
		}

		if (!member.major) {
			send = false;
			member.error.major = true;
		}

		// Normalize skills
		var _skills = [];
		for (var skill in member.skills) {
			if (member.skills.hasOwnProperty(skill)) {
				if (member.skills[skill]) {
					_skills.push(skill);
				}
			}
		}
		member.skills = (_skills.length > 0) ? _skills : null;

		if (send) {
			// for some reason we need groups to be empty
			member.groups = null;


			console.log(member);

			member.createWithImage()
				.then(function(res) {
					SweetAlert.swal({
						title: 'Hooray!', 
						text: 'Welcome to the club, ' + member.first_name + '. Check your email for more information.',
						type: 'success',
					}, function() {
						$scope.$apply(function() {
							member = {};
							$location.url('/#');
						});
					});
					
				},
				function(data) {
					if (data.email && data.email[0] === 'This field must be unique.') {
						member.error.email = true;
						member.error.emailText = emailText.unique;
						SweetAlert.swal('Oh no!', 'The email address ' + member.email + ' has already been used, please enter another.', 'error')
					} else {
						SweetAlert.swal('Oops', 'Something went wrong, and it\'s not your fault. Try again later!', 'error');
					}
				});

		} else {
			SweetAlert.swal('Uh oh...', 'Looks like you forgot a required field!', 'error')
		}
	};

	var isEmailValid = function(email) {
		var validEmailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return validEmailRegex.test(email);
	};

	var getYears = function() {
		var date = new Date();
		var currentYear = date.getFullYear();
		var years = [];
		var YEARS_MAX = 5;

		for (var i=0; i<=YEARS_MAX; i++) {
			years.push(currentYear + i);
		}

		return years;
	}

	$scope.years = getYears();
}])