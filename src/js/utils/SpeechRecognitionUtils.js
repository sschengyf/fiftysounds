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
            console.log('Auth success');
            resolve(res);
        }, err => {
            console.log('Auth fail');
            reject(err);
        });
    });
}

export function startListening() {
    return new Promise((resolve, reject) => {
        if (!window.plugins || !window.plugins.speechRecognition) {
            reject('Plugin speechRecognition is unavailalbe');
        }

        window.plugins.speechRecognition.startListening(...responses => {
            console.log('Record Successfully: ', responses);
            resolve(...responses);
        }, ...errors => {
            console.log('Rcord failed: ', errors);
            reject(...errors);
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

        window.plugins.speechRecognition.stopListening(function(...res) {
            console.log('Recognize Successfully: ', res);
            resove(...res);
        }, function(...err) {
            console.log('Recognize failed: ', err);
            reject(...err)
        });
    });
}