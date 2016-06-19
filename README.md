# JQuery Repos #

**JQuery Repos** is a jquery plug-in to see the latest published on github repositories , using the system API ( Application Program Interface ) available to Github .
The official documentation of API GitHub is available at the following link:


[https://developer.github.com/v3/](https://developer.github.com/v3/ "developer github")

Before starting to use the plug-in download ***octicons*** of github, that is, the package of icons , these links of official documentation and downloads:

### Official Documentation
[https://octicons.github.com](https://octicons.github.com/ "official documentation")

### CND Code
[https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.css](https://cdnjs.cloudflare.com/ajax/libs/octicons/3.5.0/octicons.css "CND Code")

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

<p data-height="265" data-theme-id="light" data-slug-hash="vKXKZr" data-default-tab="js,result" data-user="MicheleDeF" data-embed-version="2" data-preview="true" class="codepen">See the Pen <a href="http://codepen.io/MicheleDeF/pen/vKXKZr/">JQuery Repos</a> by michele de falco (<a href="http://codepen.io/MicheleDeF">@MicheleDeF</a>) on <a href="http://codepen.io">CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>


