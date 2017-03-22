(function() {
    var app = angular.module('app', []);
    app.controller('HomeCtrl', function() {
        this.name = 'Henry Lee';
        this.title = 'Software Engineer at Robin Powered'

        this.links = [{
            text: 'Github',
            location: 'https://github.com/Henry-L'
        }, {
            text: 'Resume',
            location: 'assets/files/HenryLee_Resume_111616.pdf'
        }]
    });
})();
