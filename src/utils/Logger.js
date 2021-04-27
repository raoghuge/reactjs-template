const Logger = {
    env : PROCESS.env ? PROCESS.env :'development'; 
    warn: function(message) {
        if(env === 'development') {
            console.warn('WARNING',message);
        } else {
            console.log('Elastic Search Logging ', message);
        }
    },

    info: function(message) {
        if(env === 'development') {
            console.log('INFO ',message);
        } else {
            console.log('Elastic Search Logging ', message);
        }
    },

    error: function(message) {
        if(env === 'development') {
            console.error('ERROR ', message);
        } else {
            console.log('Elastic Search Logging ', message);
        }
    }
}