function getPhoneGapPath() {
    const path = window.location.pathname;
    return path.substring(0, path.lastIndexOf('/') + 1);
}

const baseUrl = getPhoneGapPath();

export function playAudio(fileName) {
    if (window.Media) {
        const media = new Media(`${baseUrl}/audio/${fileName}.m4a`, () => {
            console.log(`playAudio():Audio Success: ${fileName}.m4a`);
        }, (error) => {
            console.log(`playAudio():Audio Error: ${error}`);
        });
        media.play();
    }
}