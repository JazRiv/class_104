var camara = document.getElementById("camara");
Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Webcam.attach("#camara")

function tomar_foto(){
    Webcam.snap(function (data_uri){
        document.getElementById("resultado").innerHTML = '<img id="foto" src="'+ data_uri + '">'
    })
}

var reconocimiento = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/eGS_UiQWj/model.json", modelo_listo);

function modelo_listo(){
    console.log("modelo cargado")
}

function identificar_imagen(){
    var imagen = document.getElementById("foto");
    reconocimiento.classify(imagen, resultado_obtenido)
}

function resultado_obtenido(error, resultado){
    if (!error){
        document.getElementById("objeto").innerHTML = "Objeto: "+ resultado[0].label;
        document.getElementById("precision").innerHTML = "Precision: "+ Math.round(resultado[0].confidence*100) + "%";
    }
}