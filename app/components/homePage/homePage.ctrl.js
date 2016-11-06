(function(){
    'use strict';

    angular.module('creativeAgency').controller('homePage', ['$scope', function ($scope) {
        $scope.title = 'Home Page';


        $scope.projectsData = {
            rowOne :
            [
                {
                    photoName : 'img-portfolio-1-1',
                    photographerName : 'Brave man'
                },
                {
                    photoName : 'img-portfolio-1-2',
                    photographerName : 'Spider man'
                },
                {
                    photoName : 'img-portfolio-1-3',
                    photographerName : 'Iron man'
                }
            ],
            rowTwo :
            [
                {
                    photoName : 'img-portfolio-2-1',
                    photographerName : 'Super man'
                },
                {
                    photoName : 'img-portfolio-2-2',
                    photographerName : 'Iron man'
                },
                {
                    photoName : 'img-portfolio-2-3',
                    photographerName : 'Iron man'
                }
            ],
            rowTree :
            [
                {
                    photoName : 'img-portfolio-3-1',
                    photographerName : 'Bat man'
                },
                {
                    photoName : 'img-portfolio-3-2',
                    photographerName : 'Iron man'
                },
                {
                    photoName : 'img-portfolio-3-3',
                    photographerName : 'Bat man'
                }
            ]
        };




        $(document).ready(function() {

            /*Slider*/

            $('#gallery2').flexslider({
                animation: "fade",
                directionNav: false,
                controlNav: false,
                keyboardNav: true,
                slideToStart: 0,
                animationLoop: true,
                pauseOnHover: false,
                slideshowSpeed: 4000
            });

            /*Form*/

            $(".input-all input").focus(function(){
                $(this).next("span").addClass("active");
            });
            $(".input-all input").blur(function(){
                if($(this).val() === ""){
                    $(this).next("span").removeClass("active");
                }
            });

        });

    }])

})();
