var landing = document.querySelector("#landing > img").src;
// console.log(landing);
 var img_all = document.querySelectorAll("#mini_landing > ul > li > img");
 //console.log(img_all);
 var tum_liste = [];
 for(var i =0; i<img_all.length; i++ ){
       tum_liste[i] = img_all[i].src;
     //  console.log(img_all[i].src);
    //   console.log(tum_liste);
 }



 var vars =0;  
 function degistir(){ 
       if(vars < tum_liste.length){
             document.querySelector("#landing > img").src = tum_liste[vars];
             var prog =0;
             var opa =0;
             function progress_artir(){
                   if(prog<101){
                         document.querySelector("#timer > progress").value = prog;
                         document.querySelector("#landing > img").style.opacity = opa;
                   }
                   prog++;
                   if(opa<1){opa = opa + 0.01;}
                   
             }
             setInterval(progress_artir,5);
             vars ++ ;
       }else{ vars = 0 ; }    
 }