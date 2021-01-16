function matrix1(i){
    var m1 = i.value;

    for(n=0;n<m1;n++){
        for(m=0;m<m1;m++){
            if(n == m){
                document.write("<input></input>");
            } else {
                document.write("<input></input>");
            }
        }
        document.write("<br />");
    }
    document.getElementById("matrix1");
}

function matrix2(l){
    var m2 = l.value;

    for(a=0;a<m2;a++){
        for(b=0;b<m2;b++){
            if(a == b){
                document.write("<input></input>");
            } else {
                document.write("<input></input>");
            }
        }
        document.write("<br />");
        document.getElementById("matrix2");
    }
}

function matrix1(){
    var m2 = "matrix1";

    for(f=0; f<m2; f++){
        for(g=0; g<m2; g++){
            if(a == b){
                document.write(1);
            } else{
                document.write(0);
            }
        }
    }   
}