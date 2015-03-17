function kansai(){
    var s = document.speech.speech_text.value;
    var result = s.replace( /んです/g , "ねやー" );
    var sampleNode=document.getElementById("show_speech");
    sampleNode.innerHTML=result;
}

function clearForm(){
    document.speech.speech_text.value = "";
}
    

 
