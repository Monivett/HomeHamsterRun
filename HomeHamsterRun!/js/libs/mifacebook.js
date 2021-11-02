//INCIALIZA EL SDK DE FACEBOOK
window.fbAsyncInit = function() {
  FB.init({
    appId      : '380614850336145', //ID DE LA APLICACIÓN pagina: https://developers.facebook.com/apps/380614850336145/settings/basic/
    xfbml      : true,
    version    : 'v2.9'
  });
  FB.AppEvents.logPageView();
};

(function(d, s, id){
   var js, fjs = d.getElementsByTagName(s)[0];
   if (d.getElementById(id)) {return;}
   js = d.createElement(s); js.id = id;
   js.src = "//connect.facebook.net/en_US/sdk.js";
   fjs.parentNode.insertBefore(js, fjs);
 }(document, 'script', 'facebook-jssdk')); 


function shareScore(score) {
  FB.ui({
    method: 'share',
    href: 'https://google.com',
    hashtag: '#HomeHamsterRun',
    quote: "Mi puntacion: " + score
  }, function(response){});
}
