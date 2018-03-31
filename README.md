# JQuery Repos #

**JQuery Repos** is a jquery plug-in to see the latest published on github repositories , using the system API ( Application Program Interface ) available to Github .
The official documentation of API GitHub is available at the following link:


[https://developer.github.com/v3/](https://developer.github.com/v3/ "developer github")

Before you start using the plug-in download octicons GitHub , or alternatively use the CND ( onticons.css ) , these are the links of the official documentation and the CND Code :

### Official Documentation
[https://octicons.github.com](https://octicons.github.com/ "official documentation")

### CDN Code
[https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.css](https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.css "CDN Code")

>##  HTML Code ##

    `<head>`
    `<script src="js/jquery-x.x.x.min.js" type="text/javascript"></script>`
    `<script src="js/jquery.repos.js" type="text/javascript"></script>`
    `<link rel="stylesheet" href="css/repos.css">`
    `<!--Octicons CND Code -->`
    `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.css">`
    `<body>`
    `<div class="repos"></div>`

----------

>## JavaScript Code  ##

    `$(document).ready(function(){`
    `$('div.repos').repos({ `
     `username:'MicheleDeF',`
     `count:4`
    `});`

----------
***username*** end ***count*** are respectively the username used to access Github and the number of repositories that you want to display.

----------

https:// github.com / MicheleDeF , MicheleDeF is the username to be included as a parameter in the plug-in repos.

----------
[http://micheledef.github.io/jquery.repos.js/](http://micheledef.github.io/jquery.repos.js/ "Pager Github")

<p data-height="268" data-theme-id="0" data-slug-hash="vKXKZr" data-default-tab="result" data-user="MicheleDeF" class='codepen'>See the Pen <a href='http://codepen.io/MicheleDeF/pen/vKXKZr/'>vKXKZr</a> by michele de falco (<a href='http://codepen.io/MicheleDeF'>@MicheleDeF</a>) on <a href='http://codepen.io'>CodePen</a>.</p>




