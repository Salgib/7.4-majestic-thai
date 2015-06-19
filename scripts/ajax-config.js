/*
 If the url is to Parse, add the Parse headers
*/

$.ajaxPrefilter(function(options, originalOptions, jqXHR){
  if(options.url.match(/api.parse.com/)){
    options.headers = options.headers || {};
    options.headers['X-Parse-Application-Id'] = 'BfF8J2CQKpAnBXw6r8RImT1uRoxHaDpt7Yez9dSj';
   options.headers['X-Parse-REST-API-Key'] = 'pfRmSxpNfiP12B1F7eBQfiXVdgF877sIfU03Hk3p';
  }
});
