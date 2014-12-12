# JQuery Repos #

**JQuery Repos** è un plug-in jquery per visualizzare le ultime repositories pubblicate su github, sfruttando il sistema API (Application Program Interface) disponibile per Github.
La documentazione ufficiale di API GitHub è disponibile al seguente link:


[https://developer.github.com/v3/](https://developer.github.com/v3/ "developer github")

Prima di inziare a utilizzare il plug-in scaricare ***octicons*** di github, cioè il pacchetto di icone, questi i link della documentazione ufficiale e del download:

[https://octicons.github.com/usage/](https://octicons.github.com/usage/ "official documentation")

[https://octicons.github.com/](https://octicons.github.com/ "download octicons")

>## Codice HTML ##
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

>## Codice JavaScript  ##

    $(document).ready(function(){
    `$('div.repos').repos({ `
     `username:'MicheleDeF,`
     `count:4`
    `});`

----------
***username*** e ***count*** sono rispettivamente l'username usato per accedere a Github e il numero di repositories che si vuole far visualizzare.

----------

*https://github.com/**MicheleDeF**, MicheleDeF è l'username da inserire come parametro nel plug-in repos.*

----------
