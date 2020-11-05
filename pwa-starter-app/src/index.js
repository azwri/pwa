if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js').then( registration => {
        console.log('Service Worker Registered');
        console.log(registration);
    }).catch(error => {
        console.log('Service Worker Failed!');
        console.log(error);
    })

} else {
    console.log('Your browser does not support the Service-Worker!')
};