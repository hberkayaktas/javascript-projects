
            function ekle(){
                  //console.log(form["gorev"].value);
                  var form = document.forms["todo"];
                  var eklenecek = form["gorev"].value;
                  var new_task = document.createElement("li");
                  var gorevsayisi= document.getElementsByTagName("li").length;
                  gorevsayisi++;
                  var inputu = `<input type="checkbox" name="${gorevsayisi}">  `;
                  var buttonu =`</span><button onclick="kaldir(${gorevsayisi})">X</button>`;
                  var spanDuzeni = `<span id="hizala">`;

                  new_task.innerHTML = spanDuzeni +inputu + eklenecek + buttonu;
                  document.getElementById("liste").appendChild(new_task);
            }
            function kaldir(ids){
                  var liste = document.getElementById("liste");
                  if(liste.hasChildNodes()){// hiç elemanı varmı sorgusu true false döner
                        document.querySelector(`#liste > li:nth-child(${ids})`).innerHTML ="";
                        document.querySelector(`#liste > li:nth-child(${ids})`).style.display = "none";
                  }   
            }