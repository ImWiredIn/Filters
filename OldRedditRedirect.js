oldredditredirect.js application/javascript
(function() 
{
    if( /(^|\.)old.reddit\.com$/.test(document.location.hostname) === true ) { return; }
    if( /(^|\.)www.reddit\.com$/.test(document.location.hostname) === true ) 
    { 
        document.location = document.URL.replace('www.reddit.com','old.reddit.com');
        return; 
    }
    if( /(^|\.)amp.reddit\.com$/.test(document.location.hostname) === true ) 
    { 
        document.location = document.URL.replace('amp.reddit.com','old.reddit.com');
        return; 
    }
})();
