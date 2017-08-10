function getPhoneGapPath() {
    const path = window.location.pathname;
    return path.substring(0, path.lastIndexOf('/') + 1);
}

const baseUrl = getPhoneGapPath();

export function playAudio(fileName) {
    if (window.Media) {
        const media = new Media(`${baseUrl}/audio/${fileName}.mp3`, () => {
            console.log(`playAudio():Audio Success: ${fileName}.mp3`);
        }, (error) => {
            console.log(`playAudio():Audio Error: ${error}`);
        });
        media.play();
    }
}