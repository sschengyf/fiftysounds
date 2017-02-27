export function hasPermission() {
    return new Promise((resolve, reject) => {
        if (!window.plugins || !window.plugins.speechRecognition) {
            reject('Plugin speechRecognition is unavailalbe');
        }

        window.plugins.speechRecognition.hasPermission(authorized => {
            resolve(authorized);
        }, error => {
            reject(error);
        });
    });
}

export function requestPermission() {
    return new Promise((resolve, reject) => {
        if (!window.plugins || !window.plugins.speechRecognition) {
            reject('Plugin speechRecognition is unavailalbe');
        }

        window.plugins.speechRecognition.requestPermission(res => {
            resolve(res);
        }, fail => {
            reject(fail);
        });
    });
}

export function startListening() {
    return new Promise((resolve, reject) => {
        if (!window.plugins || !window.plugins.speechRecognition) {
            reject('Plugin speechRecognition is unavailalbe');
        }

        window.plugins.speechRecognition.startListening(result => {
            resolve(result);
        }, error => {
            reject(error);
        }, {
            language: 'ja-JP'
        });
    });
}

export function stopListening() {
    return new Promise((resolve, reject) => {
        if (!window.plugins || !window.plugins.speechRecognition) {
            reject('Plugin speechRecognition is unavailalbe');
        }

        window.plugins.speechRecognition.stopListening(response => {
            resolve(response);
        }, error => {
            reject(error);
        });
    });
}