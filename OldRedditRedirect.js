oldredditredirect.js application/javascript
(function() 
{
    if(/(^|\.)old.reddit\.com$/.test(document.location.hostname)==FALSE)
        document.location = document.URL.replace('www.reddit.com','old.reddit.com');
})();
