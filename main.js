function identify_sound() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/KdiocsuXC/model.json",ModelLoaded);
}

function ModelLoaded() {
    classifier.classify(gotresults);
}

function gotresults(error,results) {
    if (error) {
        console.error ("Error");
    }
}