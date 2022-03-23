// Cye basınca ekranı kemizleyen kod
function clears(){
    var form = document.forms["form_al"];
    form["kuldeger"].value = Number(0);
    document.getElementById("gecmisdeger").innerHTML = "|";
    return true;
}

// key paddan gelen değeri yazdıran kod
function yazdir(keypad){
    var key = keypad;
        key = Number(key);
        console.log(typeof key);
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
        suan_ki_deger = Number(suan_ki_deger);
        console.log(typeof key);

    if(key != 0){
        //eğer key sıfır değilse yaz
        suan_ki_deger = String(suan_ki_deger);
        key = String(key);
        if(suan_ki_deger == "0"){
            form["kuldeger"].value =  key;
        }else{
            form["kuldeger"].value = suan_ki_deger + key;
        }
        console.log(keypad + " sıfır harici tusa basıldı");
    }else{
        //eğer gelen değer sıfır ise mevcut değer kontrolü
        console.log("gelen değer sıfır");
        var sıfırbaslama = String(suan_ki_deger).startsWith("0");
        if(sıfırbaslama == true){
            //sıfır ile başlıyor ise birşey yapma
            console.log("gelen değer sıfır ve sıfır ile başlıyor");
            form["kuldeger"].value = Number(0);
            console.log(sıfırbaslama);
        }else{
            console.log("gelen değer sıfır ve sıfır ile başlamıyor");
            suan_ki_deger = String(suan_ki_deger);
            key = String(key);
            form["kuldeger"].value = suan_ki_deger + key;
        }
    }
    return true;
}

// toplama fonksiyonumuz
function topla(){
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
    document.getElementById("gecmisdeger").innerHTML = suan_ki_deger;
    document.getElementById("islemdeger").innerHTML = "+";
    form["kuldeger"].value =0;
}
function cikarma(){
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
    document.getElementById("gecmisdeger").innerHTML = suan_ki_deger;
    document.getElementById("islemdeger").innerHTML = "-";
    form["kuldeger"].value =0;
}
function carpma(){
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
    document.getElementById("gecmisdeger").innerHTML = suan_ki_deger;
    document.getElementById("islemdeger").innerHTML = "*";
    form["kuldeger"].value =0;
}
function bolme(){
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
    document.getElementById("gecmisdeger").innerHTML = suan_ki_deger;
    document.getElementById("islemdeger").innerHTML = "/";
    form["kuldeger"].value =0;
}
function karekok(){
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
    var sonuc =Math.sqrt(suan_ki_deger);
    form["kuldeger"].value = sonuc;

}
function karealma(){
    var form = document.forms["form_al"];
    var suan_ki_deger = form["kuldeger"].value;
    suan_ki_deger = suan_ki_deger * suan_ki_deger;
    form["kuldeger"].value = suan_ki_deger;
}
function piyazdir(){
    var sayi = Math.PI; 
    sayi = Number(String(sayi).substr(0,10));
    document.forms["form_al"]["kuldeger"].value =sayi;
}
function esayisi(){
    var sayi = Math.E; 
    sayi = Number(String(sayi).substr(0,10));
    document.forms["form_al"]["kuldeger"].value =sayi;
}

function esittir(){
        var deger1 = document.getElementById("gecmisdeger").innerHTML;
        deger1 = Number(deger1);
        var islem =  document.getElementById("islemdeger").innerHTML;
        var form = document.forms["form_al"];
        var suan_value = form["kuldeger"].value;
        suan_value =Number(suan_value);

        if(islem == "+"){
            var nexus = form["kuldeger"].value = deger1 + suan_value;
            console.log("toplama tamamlandı :" + nexus);
            document.getElementById("gecmisdeger").innerHTML = "|";
        }else if(islem == "-"){
            var nexus = form["kuldeger"].value = deger1 - suan_value;
            console.log("cıkarma tamamlandı :" + nexus);
            document.getElementById("gecmisdeger").innerHTML = "|";
        }else if(islem == "*"){
            var nexus = form["kuldeger"].value = deger1 * suan_value;
            console.log("cıkarma tamamlandı :" + nexus);
            document.getElementById("gecmisdeger").innerHTML = "|";
        }else if(islem == "/"){
            var nexus = form["kuldeger"].value = deger1 / suan_value;
            console.log("cıkarma tamamlandı :" + nexus);
            document.getElementById("gecmisdeger").innerHTML = "|";
        }

}
