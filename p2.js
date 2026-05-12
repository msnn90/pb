var table = [document.getElementById("table1"), document.getElementById("table2"), document.getElementById("table3"), document.getElementById("table4")];
var k = 1;
var state = { count: 0 };
var state2 = { count: 0 };
const formcheck = document.getElementById("name");
var pokelist = new Array();
var timeclear;
var result1 = document.getElementById("result1");
var result2 = document.getElementById("result2");

const pokedex = [
  "husigidane",
  "husigisou",
  "husigibana",
  "hitokage",
  "riza-do",
  "riza-don",
  "zenigame",
  "kame-ru",
  "kamekkusu",
  "kyatapi-",
  "toranseru",
  "batahuri-",
  "bi-doru",
  "koku-n",
  "supia-",
  "poppo",
  "pizyon",
  "pizyotto",
  "koratta",
  "ratta",
  "onisuzume",
  "onidoriru",
  "a-bo",
  "a-bokku",
  "pikatyuu",
  "raityuu",
  "sando",
  "sandopan",
  "nidoranmesu",
  "nidori-na",
  "nidokuin",
  "nidoranosu",
  "nidori-no",
  "nidokingu",
  "pippi",
  "pikusi-",
  "rokon",
  "kyuukon",
  "purin",
  "pukurin",
  "zubatto",
  "gorubatto",
  "nazonokusa",
  "kusaihana",
  "rahuresia",
  "parasu",
  "parasekuto",
  "konpan",
  "morufon",
  "dhiguda",
  "dagutorio",
  "nya-su",
  "perusian",
  "kodakku",
  "gorudakku",
  "manki-",
  "okorizaru",
  "ga-dhi",
  "uindhi",
  "nyoromo",
  "nyorozo",
  "nyorobon",
  "ke-syi",
  "yungera-",
  "hu-dhin",
  "wanriki-",
  "go-riki-",
  "kairiki-",
  "madatubomi",
  "utudon",
  "utubotto",
  "menokurage",
  "dokukurage",
  "isitubute",
  "goro-n",
  "goro-nya",
  "poni-ta",
  "gyaroppu",
  "yadon",
  "yadoran",
  "koiru",
  "reakoiru",
  "kamonegi",
  "do-do-",
  "do-dorio",
  "pauwau",
  "zyugon",
  "betobeta-",
  "betobeton",
  "sheruda-",
  "parushen",
  "go-su",
  "go-suto",
  "genga-",
  "iwa-ku",
  "suri-pu",
  "suri-pa-",
  "kurabu",
  "kingura-",
  "biriridama",
  "marumain",
  "tamatama",
  "nassi-",
  "karakara",
  "garagara",
  "sawamura-",
  "ebiwara-",
  "beroringa",
  "doga-su",
  "matadogasu",
  "saiho-n",
  "saidon",
  "rakki-",
  "monzyara",
  "garu-ra",
  "tattu-",
  "si-dora",
  "tosakinto",
  "azumaou",
  "hitodeman",
  "suta-mi-",
  "bariya-do",
  "sutoraiku",
  "ru-zyura",
  "erebu-",
  "bu-ba-",
  "kairosu",
  "kentarosu",
  "koikingu",
  "gyaradosu",
  "rapurasu",
  "metamon",
  "i-bui",
  "syawa-zu",
  "sanda-su",
  "bu-suta-",
  "porigon",
  "omunaito",
  "omusuta-",
  "kabuto",
  "kabutopusu",
  "putera",
  "kabigon",
  "huri-za-",
  "sanda-",
  "faiya-",
  "miniryuu",
  "hakuryu-",
  "kairyu-",
  "myuutu-",
  "myuu",
  "tikori-ta",
  "beiri-hu",
  "meganiumu",
  "hinoarasi",
  "magumarasi",
  "bakuhu-n",
  "waninoko",
  "arigeitu",
  "o-dairu",
  "otati",
  "ootati",
  "ho-ho-",
  "yorunozuku",
  "redhiba",
  "redhian",
  "itomaru",
  "ariadosu",
  "kurobatto",
  "tyonti-",
  "ranta-n",
  "pityu-",
  "pyi",
  "pupurin",
  "togepi-",
  "togetikku",
  "neithi",
  "neithio",
  "meri-pu",
  "mokoko",
  "denryuu",
  "kireihana",
  "mariru",
  "mariruri",
  "usokki-",
  "nyorotono",
  "hanekko",
  "popokko",
  "watakko",
  "eipamu",
  "himanattu",
  "kimawari",
  "yanyanma",
  "upa-",
  "nuo-",
  "e-fi",
  "burakki-",
  "yamikarasu",
  "yadokingu",
  "muuma",
  "anno-n",
  "so-nansu",
  "kirinriki",
  "kunugidama",
  "foretosu",
  "nokotti",
  "guraiga-",
  "hagane-ru",
  "buru-",
  "guranburu",
  "hari-sen",
  "hassamu",
  "tubotubo",
  "herakurosu",
  "nyu-ra",
  "himeguma",
  "ringuma",
  "magumaggu",
  "magukarugo",
  "urimu-",
  "inomu-",
  "sani-go",
  "teppouo",
  "okutan",
  "deriba-do",
  "mantain",
  "ea-mudo",
  "derubiru",
  "heruga-",
  "kingudora",
  "gomazou",
  "donfan",
  "porigon2",
  "odosisi",
  "do-buru",
  "baruki-",
  "kapoera-",
  "mutyu-ru",
  "erekiddo",
  "bubyi",
  "mirutanku",
  "hapinasu",
  "raikou",
  "entei",
  "suikun",
  "yo-girasu",
  "sanagirasu",
  "bangirasu",
  "rugia",
  "houou",
  "serebyi",
  "kimori",
  "zyuputoru",
  "zyukain",
  "atyamo",
  "wakasyamo",
  "basya-mo",
  "mizugorou",
  "numakuro-",
  "ragura-zi",
  "potiena",
  "guraena",
  "ziguzaguma",
  "massuguma",
  "kemusso",
  "karasarisu",
  "agehanto",
  "mayurudo",
  "dokukeiru",
  "hasubo-",
  "hasuburero",
  "runpappa",
  "tanebo-",
  "konohana",
  "da-tengu",
  "subame",
  "oosubame",
  "kyamome",
  "perixtupa-",
  "rarutosu",
  "kiruria",
  "sa-naito",
  "ametama",
  "amemo-su",
  "kinokoko",
  "kinogassa",
  "namakero",
  "yarukimono",
  "kekkingu",
  "tutinin",
  "tekkanin",
  "nukenin",
  "gonyonyo",
  "dogo-mu",
  "bakuongu",
  "makunosita",
  "hariteyama",
  "ruriri",
  "nozupasu",
  "eneko",
  "enekororo",
  "yamirami",
  "kuti-to",
  "kokodora",
  "kodora",
  "bosugodora",
  "asanan",
  "tya-remu",
  "rakurai",
  "raiboruto",
  "purasuru",
  "mainan",
  "barubi-to",
  "irumi-ze",
  "rozeria",
  "gokurin",
  "maruno-mu",
  "kibania",
  "samehada-",
  "hoeruko",
  "hoeruo-",
  "donmeru",
  "baku-da",
  "ko-tasu",
  "banebu-",
  "bu-piggu",
  "patti-ru",
  "nakkura-",
  "bibura-ba",
  "huraigon",
  "sabonea",
  "nokutasu",
  "tirutto",
  "tirutarisu",
  "zangu-su",
  "habune-ku",
  "runato-n",
  "sorurokku",
  "dozyotti",
  "namazun",
  "heigani",
  "sizariga-",
  "yaziron",
  "nendo-ru",
  "riri-ra",
  "yureidoru",
  "anopusu",
  "a-marudo",
  "hinbasu",
  "mirokarosu",
  "powarun",
  "kakureon",
  "kagebouzu",
  "zyupetta",
  "yomawaru",
  "samayo-ru",
  "toropiusu",
  "tiri-n",
  "abusoru",
  "so-nano",
  "yukiwarasi",
  "onigo-ri",
  "tamazarasi",
  "todogura-",
  "todozeruga",
  "pa-ruru",
  "hante-ru",
  "sakurabisu",
  "zi-ransu",
  "rabukasu",
  "tatubei",
  "komoru-",
  "bo-manda",
  "danbaru",
  "metangu",
  "metagurosu",
  "rezirokku",
  "reziaisu",
  "rezisutiru",
  "rathiasu",
  "rathiosu",
  "kaio-ga",
  "gura-don",
  "rekkuuza",
  "zira-ti",
  "deokisisu",
];

//table[0].style.display="none";
//table[1].style.display="none";
//for (var l = 0; l < table.length; l++){
for (var i = 0; i < 20; i++) {
  var tr = document.createElement("tr");
  tr.align = "center";
  for (var j = 0; j < 20; j++) {
    if (k > 386) {
      break;
    }

    var td = document.createElement("td");

    td.name = pokedex[k - 1];
    td.id = "a" + k;
    //console.log(td.id);
    td.onclick = clicked1;
    td.oncontextmenu = rightclicked1;
    td.style.backgroundColor = "white";
    //td.style.opacity = colorfilter;


    // 以下の３行で img要素を td に追加
    var img = new Image();

    img.id = "imagea" + k;
    img.name = pokedex[k - 1];

    img.addEventListener("load", function () {

      var orgw = this.naturalWidth;
      var orgh = this.naturalHeight;
      if (orgw > 44) {
        if (orgh > orgw) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else if (orgh > 34) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else {
          this.width = 44;
          this.height = orgh * (this.width / orgw);
        }
      }
      else if (orgh > 34) {
        //if(orgw > orgh){
        //this.width=44;
        //this.height=orgh * (this.width / orgw);

        // }
        // else{
        this.height = 34;
        this.width = orgw * (this.height / orgh);
      }

    });

    img.src = "pic/image" + k + ".png";

    img.onclick = clicked1;
    img.oncontextmenu = rightclicked1;
    //img.style.opacity=colorfilter(img);

    pokelist.push(k);
    // console.log(pokelist[k-1]);

    k++;
    td.appendChild(img);
    tr.appendChild(td);
  }
  table[0].appendChild(tr);
}
k = 1;

for (var i = 0; i < 20; i++) {
  var tr = document.createElement("tr");
  tr.align = "center";
  for (var j = 0; j < 20; j++) {
    if (k > 386) {
      break;
    }
    var td = document.createElement("td");

    td.name = pokedex[k - 1];
    td.id = "b" + k;
    //console.log(td.id);
    td.onclick = clicked2;
    td.oncontextmenu = rightclicked2;
    td.style.backgroundColor = "white";


    // 以下の３行で img要素を td に追加
    var img = new Image();
    //img.height=20;
    //img.width=35;

    img.id = "imageb" + k;

    img.addEventListener("load", function () {
      var orgw = this.naturalWidth;
      var orgh = this.naturalHeight;
      if (orgw > 44) {
        if (orgh > orgw) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else if (orgh > 34) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else {
          this.width = 44;
          this.height = orgh * (this.width / orgw);
        }
      }
      else if (orgh > 34) {
        //if(orgw > orgh){
        //this.width=44;
        //this.height=orgh * (this.width / orgw);

        // }
        // else{
        this.height = 34;
        this.width = orgw * (this.height / orgh);
      }

    });

    img.src = "pic/image" + k + ".png";

    img.onclick = clicked2;
    img.oncontextmenu = rightclicked2;
    //img.style.opacity=colorfilter(img);
    k++;
    td.appendChild(img);
    tr.appendChild(td);
  }
  table[1].appendChild(tr);
}
k = 1;

for (var i = 0; i < 20; i++) {
  var tr = document.createElement("tr");
  tr.align = "center";
  for (var j = 0; j < 20; j++) {
    if (k > 386) {
      break;
    }
    var td = document.createElement("td");

    td.name = pokedex[k - 1];
    td.id = "c" + k;
    //console.log(td.id);
    td.onclick = clicked2;
    td.oncontextmenu = rightclicked2;
    td.style.backgroundColor = "white";


    // 以下の３行で img要素を td に追加
    var img = new Image();
    //img.height=20;
    //img.width=35;

    img.id = "imagec" + k;

    img.addEventListener("load", function () {
      var orgw = this.naturalWidth;
      var orgh = this.naturalHeight;
      if (orgw > 44) {
        if (orgh > orgw) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else if (orgh > 34) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else {
          this.width = 44;
          this.height = orgh * (this.width / orgw);
        }
      }
      else if (orgh > 34) {
        //if(orgw > orgh){
        //this.width=44;
        //this.height=orgh * (this.width / orgw);

        // }
        // else{
        this.height = 34;
        this.width = orgw * (this.height / orgh);
      }

    });

    img.src = "pic/image" + k + ".png";

    img.onclick = clicked2;
    img.oncontextmenu = rightclicked2;
    //img.style.opacity=colorfilter(img);
    k++;
    td.appendChild(img);
    tr.appendChild(td);
  }
  table[2].appendChild(tr);
}
k = 1;

for (var i = 0; i < 20; i++) {
  var tr = document.createElement("tr");
  tr.align = "center";
  for (var j = 0; j < 20; j++) {
    if (k > 386) {
      break;
    }
    var td = document.createElement("td");

    td.name = pokedex[k - 1];
    td.id = "d" + k;
    //console.log(td.id);
    td.onclick = clicked2;
    td.oncontextmenu = rightclicked2;
    td.style.backgroundColor = "white";


    // 以下の３行で img要素を td に追加
    var img = new Image();
    //img.height=20;
    //img.width=35;

    img.id = "imaged" + k;

    img.addEventListener("load", function () {
      var orgw = this.naturalWidth;
      var orgh = this.naturalHeight;
      if (orgw > 44) {
        if (orgh > orgw) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else if (orgh > 34) {
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }
        else {
          this.width = 44;
          this.height = orgh * (this.width / orgw);
        }
      }
      else if (orgh > 34) {
        //if(orgw > orgh){
        //this.width=44;
        //this.height=orgh * (this.width / orgw);

        // }
        // else{
        this.height = 34;
        this.width = orgw * (this.height / orgh);
      }

    });

    img.src = "pic/image" + k + ".png";

    img.onclick = clicked2;
    img.oncontextmenu = rightclicked2;
    //img.style.opacity=colorfilter(img);
    k++;
    td.appendChild(img);
    tr.appendChild(td);
  }
  table[3].appendChild(tr);
}
k = 1;


//function bsave(){
const filename = "poke.json";
var pokejson = JSON.stringify(pokelist);
// const link = document.createElement("a");
// link.href = "pokejson:text/plain," + encodeURIComponent(pokejson);
// a.download = filename;
// a.click();

// }

/*function download(content, fileName, contentType) {
  var a = document.createElement("a");
  var file = new Blob([content], { type: contentType });
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.click();
}
const savebutton = document.getElementById("save");
savebutton.addEventListener("click", () => {
  download(pokejson, filename, 'text/plain');
});
*/
/*const loadbutton = document.getElementById("load");
loadbutton.addEventListener("change", () => {
  if (!(loadbutton.value)) return; // ファイルが選択されない場合
  let file_list = loadbutton.files;
  if (!file_list) return; // ファイルリストが選択されない場合
  let file = file_list[0];
  if (!file) return; // ファイルが無い場合

  let file_reader = new FileReader();
  file_reader.readAsText(file);
  file_reader.onload = function () {
    pokelist = JSON.parse(file_reader.result);
    console.log(pokelist);
    pokejson = JSON.stringify(pokelist);
    pokelist.forEach(function (value) { console.log(value) });
   // localStorage.setItem('id_back', write_json);
   poketable();
   loadbutton.value="";

  }

  //location.reload(); }
  // const pokea = new Object();
  // pokea.src = "poke.json";
  // const obj = JSON.parse(pokea);
  // console.log(obj);
});*/

const rand = document.getElementById("rand");
rand.addEventListener("click", () => {
  var pokelen = pokelist.length;
  while (pokelen) {
    var s = Math.floor(Math.random() * pokelen);
    var t = pokelist[--pokelen];
    pokelist[pokelen] = pokelist[s];
    pokelist[s] = t;
  }
  //pokelist.forEach(function (value) { console.log(value) });
  pokejson = JSON.stringify(pokelist);
  poketable();
});

function poketable() {
  for (n = 1; n < 21; n++) {
    table[0].deleteRow(-1);
    table[1].deleteRow(-1);
	 table[2].deleteRow(-1);
	  table[3].deleteRow(-1);
  }
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");
    tr.align = "center";
    for (var j = 0; j < 5; j++) {
      if (k > 26) {
        break;
      }

      td = document.createElement("td");

      td.name = pokedex[pokelist[k - 1]];
      td.id = "a" + k;
      //console.log(td.id);
      td.onclick = clicked1;
      td.oncontextmenu = rightclicked1;
      td.style.backgroundColor = "white";
      //td.style.opacity = colorfilter;


      // 以下の３行で img要素を td に追加
      img = new Image();

      img.id = "imagea" + pokelist[k-1];
      img.name = pokedex[pokelist[k - 1]-1];

      img.addEventListener("load", function () {

        var orgw = this.naturalWidth;
        var orgh = this.naturalHeight;
		this.height=50;
		this.width=50;
     /*   if (orgw > 44) {
          if (orgh > orgw) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else if (orgh > 34) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else {
            this.width = 44;
            this.height = orgh * (this.width / orgw);
          }
        }
        else if (orgh > 34) {
          //if(orgw > orgh){
          //this.width=44;
          //this.height=orgh * (this.width / orgw);

          // }
          // else{
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }*/

      });

      img.src = "pic/image" + pokelist[k - 1] + ".png";

      img.onclick = clicked1;
      img.oncontextmenu = rightclicked1;
      //img.style.opacity=colorfilter(img);

      //pokelist.push(k);
      // console.log(pokelist[k-1]);

      k++;
      td.appendChild(img);
      tr.appendChild(td);
    }
    table[0].appendChild(tr);
  }
  k = 1;

  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");
    tr.align = "center";
    for (var j = 0; j < 5; j++) {
      if (k > 26) {
        break;
      }
      td = document.createElement("td");

      td.name = pokedex[pokelist[k - 1]];
      td.id = "b" + k;
      //console.log(td.id);
      td.onclick = clicked2;
      td.oncontextmenu = rightclicked2;
      td.style.backgroundColor = "white";


      // 以下の３行で img要素を td に追加
      img = new Image();
      //img.height=20;
      //img.width=35;

      img.id = "imageb" + pokelist[k-1];

      img.addEventListener("load", function () {
        var orgw = this.naturalWidth;
        var orgh = this.naturalHeight;
		this.height=50;
		this.width=50;
        /*if (orgw > 44) {
          if (orgh > orgw) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else if (orgh > 34) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else {
            this.width = 44;
            this.height = orgh * (this.width / orgw);
          }
        }
        else if (orgh > 34) {
          //if(orgw > orgh){
          //this.width=44;
          //this.height=orgh * (this.width / orgw);

          // }
          // else{
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }*/

      });

      img.src = "pic/image" + pokelist[k - 1] + ".png";

      img.onclick = clicked2;
      img.oncontextmenu = rightclicked2;
      //img.style.opacity=colorfilter(img);
      k++;
      td.appendChild(img);
      tr.appendChild(td);
    }
    table[1].appendChild(tr);
  }
  k = 1;
  
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");
    tr.align = "center";
    for (var j = 0; j < 5; j++) {
      if (k > 26) {
        break;
      }
      td = document.createElement("td");

      td.name = pokedex[pokelist[k - 1]];
      td.id = "c" + k;
      //console.log(td.id);
      td.onclick = clicked2;
      td.oncontextmenu = rightclicked2;
      td.style.backgroundColor = "white";


      // 以下の３行で img要素を td に追加
      img = new Image();
      //img.height=20;
      //img.width=35;

      img.id = "imagec" + pokelist[k-1];

      img.addEventListener("load", function () {
        var orgw = this.naturalWidth;
        var orgh = this.naturalHeight;
		this.height=50;
		this.width=50;
        /*if (orgw > 44) {
          if (orgh > orgw) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else if (orgh > 34) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else {
            this.width = 44;
            this.height = orgh * (this.width / orgw);
          }
        }
        else if (orgh > 34) {
          //if(orgw > orgh){
          //this.width=44;
          //this.height=orgh * (this.width / orgw);

          // }
          // else{
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }*/

      });

      img.src = "pic/image" + pokelist[k - 1] + ".png";

      img.onclick = clicked2;
      img.oncontextmenu = rightclicked2;
      //img.style.opacity=colorfilter(img);
      k++;
      td.appendChild(img);
      tr.appendChild(td);
    }
    table[2].appendChild(tr);
  }
  k = 1;
  for (var i = 0; i < 5; i++) {
    var tr = document.createElement("tr");
    tr.align = "center";
    for (var j = 0; j < 5; j++) {
      if (k > 26) {
        break;
      }
      td = document.createElement("td");

      td.name = pokedex[pokelist[k - 1]];
      td.id = "d" + k;
      //console.log(td.id);
      td.onclick = clicked2;
      td.oncontextmenu = rightclicked2;
      td.style.backgroundColor = "white";


      // 以下の３行で img要素を td に追加
      img = new Image();
      //img.height=20;
      //img.width=35;

      img.id = "imaged" + pokelist[k-1];

      img.addEventListener("load", function () {
        var orgw = this.naturalWidth;
        var orgh = this.naturalHeight;
		this.height=50;
		this.width=50;
        /*if (orgw > 44) {
          if (orgh > orgw) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else if (orgh > 34) {
            this.height = 34;
            this.width = orgw * (this.height / orgh);
          }
          else {
            this.width = 44;
            this.height = orgh * (this.width / orgw);
          }
        }
        else if (orgh > 34) {
          //if(orgw > orgh){
          //this.width=44;
          //this.height=orgh * (this.width / orgw);

          // }
          // else{
          this.height = 34;
          this.width = orgw * (this.height / orgh);
        }*/

      });

      img.src = "pic/image" + pokelist[k - 1] + ".png";

      img.onclick = clicked2;
      img.oncontextmenu = rightclicked2;
      //img.style.opacity=colorfilter(img);
      k++;
      td.appendChild(img);
      tr.appendChild(td);
    }
    table[3].appendChild(tr);
  }
  k = 1;

}




formcheck.addEventListener('input', () => {
  for (var m = 1; m < 26; m++) {
    var ta1 = document.getElementById("imagea" + pokelist[m-1]);
    var ta2 = document.getElementById("imageb" + pokelist[m-1]);
	var ta3 = document.getElementById("imagec" + pokelist[m-1]);
    var ta4 = document.getElementById("imaged" + pokelist[m-1]);
   // console.log(ta1.id);
    if (formcheck.value == "") {
      ta1.style.opacity = 1;
      ta2.style.opacity = 1;
	  ta3.style.opacity = 1;
      ta4.style.opacity = 1;
    }
    else {
      if (ta1.name.indexOf(formcheck.value) != 0) {
        ta1.style.opacity = 0.1;
        ta2.style.opacity = 0.1;
		ta3.style.opacity = 0.1;
        ta4.style.opacity = 0.1;
      }
      else {
        ta1.style.opacity = 1;
        ta2.style.opacity = 1;
		ta3.style.opacity = 1;
        ta4.style.opacity = 1;
      }
    }
  }
  if(!this.value) clearTimeout(timeclear);
  timeclear=setTimeout(() => {
    formcheck.value = "";
    for (var m = 1; m < 26; m++) {
      var ta1 = document.getElementById("imagea" + pokelist[m-1]);
      var ta2 = document.getElementById("imageb" + pokelist[m-1]);
	  var ta3 = document.getElementById("imagec" + pokelist[m-1]);
      var ta4 = document.getElementById("imaged" + pokelist[m-1]);
      ta1.style.opacity = 1;
      ta2.style.opacity = 1;
	  ta3.style.opacity = 1;
      ta4.style.opacity = 1;
    }

  }, 3000);

});

//}


function clicked1(td) {
  result1 = document.getElementById("result1");

  if (this.style.backgroundColor == "white") {
    this.style.backgroundColor = "black";
  }
  else if (this.style.backgroundColor == "black") {
    this.style.backgroundColor = "red";
  }
  else if (this.style.backgroundColor == "blue") {
    this.style.backgroundColor = "white";
  }
}

function rightclicked1(td) {
 result1 = document.getElementById("result1");
  if (this.style.backgroundColor == "white") {
    this.style.backgroundColor = "blue";
  }
  if (this.style.backgroundColor == "black") {
    this.style.backgroundColor = "white";
  }
  if (this.style.backgroundColor == "red") {
    this.style.backgroundColor = "black";
  }
  return false;
}

function clicked2(td) {
  result2 = document.getElementById("result2");

  if (this.style.backgroundColor == "white") {
    this.style.backgroundColor = "black";
  }
  else if (this.style.backgroundColor == "black") {
    this.style.backgroundColor = "red";
  }
  else if (this.style.backgroundColor == "blue") {
    this.style.backgroundColor = "white";
  }
}

function rightclicked2(td) {
  result2 = document.getElementById("result2");
  if (this.style.backgroundColor == "white") {
    this.style.backgroundColor = "blue";
  }
  if (this.style.backgroundColor == "black") {
    this.style.backgroundColor = "white";
  }
  if (this.style.backgroundColor == "red") {
    this.style.backgroundColor = "black";
  }
  return false;
}

//table[0].style.display="block";
//table[1].style.display="block";
