(function($){

$.fn.repos = function(options) {
           var defaults = {username:'MicheleDeF', count:3};
           var options = $.extend(defaults, options);
           var url = 'https://api.github.com/users/'+defaults.username+'/repos';
           function FuncName (element){
           //getJSON
            $.getJSON(url ,function(data){
           //each()   
            $.each( data ,function(chiave, valore){
            $(element).append("<div class='content'>"+
                               " <span class='octicon octicon-repo' id='icon_repos'></span>"+
                               "<ul>"+
                               "<li>"+
                               "<span class='name'>"+
                               "<a href='"+
                               valore.html_url+
                               "' target='_blank'>"+
                               valore.name+"</span>"+
                               "</a>"+
                               "</li>"+
                               "<li>"+
                               "<span class='description'>"+
                               valore.description+
                               "</span>"+
                                "</li>"+
                               "</ul>"+
                               "</div>"
                                );
                                }); //each()
                     
                $('div.content').eq((defaults.count)-1).nextAll().hide();
            
            
                                });//getJSON    
                                }; //FunName
          
           
           
           return this.each(function() {
            
           FuncName($(this));
           
            });
        
        
        
         
           
         
 };
 
 
})(jQuery);
