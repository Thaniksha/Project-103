Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera")

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='snap_shot' src='"+data_uri+"'>"
    });
}
    console.log("ml5 version="+ml5.version);
 classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/y1kR7Sqfj/model.json",modelLoaded);
function modelLoaded(){
    console.log("model has been loaded");
}   
function check(){
    img=document.getElementById('snap_shot');
    classifier.classify(img,gotResult);
}
 function gotResult(error,result){
    if(error){
        console.log(error);
    }else{
        console.log(result);
        document.getElementById("object_name").innerHTML=result[0].label;
        percentage=result[0].confidence*100;
        document.getElementById("object_accuracy").innerHTML=percentage.toFixed(2) +" %";
    }
     
 }
