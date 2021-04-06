oldredditredirect.js application/javascript
(function() 
{
    if( /(^|\.)old.reddit\.com$/.test(document.location.hostname) === true ) { return; }
        document.location = document.URL.replace('www.reddit.com','old.reddit.com');
})();
