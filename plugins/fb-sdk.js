class Facebook {
    constructor() {
        
    }

    init() {
        window.fbAsyncInit = () => {
            FB.init({
                appId: '716885319069930',
                cookie: true,
                xfbml: true,
                version: 'v7.0'
            });

            FB.AppEvents.logPageView();
        };

        (function(d, s, id) {
            let js, fjs = d.getElementsByTagName(s)[0];
    
            if (d.getElementById(id)) {return;}
            
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }
}

let fb = new Facebook();

fb.init();