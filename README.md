# JQuery Repos #

**JQuery Repos** is a jquery plug-in to see the latest published on github repositories , using the system API ( Application Program Interface ) available to Github .
The official documentation of API GitHub is available at the following link:


[https://developer.github.com/v3/](https://developer.github.com/v3/ "developer github")

Before starting to use the plug-in download ***octicons*** of github, that is, the package of icons , these links of official documentation and downloads:

[https://octicons.github.com/usage/](https://octicons.github.com/usage/ "official documentation")

[https://octicons.github.com/](https://octicons.github.com/ "download octicons")

>##  HTML Code ##

    <head>
    `<script src="js/jquery-x.x.x.min.js" type="text/javascript"></script>`
    `<script src="js/jquery.repos.js" type="text/javascript"></script>`
    `<link rel="stylesheet" href="css/repos.css">`
    `<!--Octicons-->`
    `<link rel="stylesheet" href="octicons/octicons.css">`
    `.........`
    `<body>`
    `<div class="repos"></div>`
    




----------

>## JavaScript Code  ##

    $(document).ready(function(){
    `$('div.repos').repos({ `
     `username:'MicheleDeF,`
     `count:4`
    `});`

----------
***username*** end ***count*** are respectively the username used to access Github and the number of repositories that you want to display.

----------

https:// github.com / MicheleDeF , MicheleDeF is the username to be included as a parameter in the plug-in repos.

----------
