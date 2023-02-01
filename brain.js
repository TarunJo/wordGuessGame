let wordList = [
    {
        word: "python",
        hint: "programming language"
    },
    {
        word: "guitar",
        hint: "a musical instrument"
    },
    {
        word: "aim",
        hint: "a purpose or intention"
    },
    {
        word: "venus",
        hint: "planet of our solar system"
    },
    {
        word: "gold",
        hint: "a yellow precious metal"
    },
    {
        word: "ebay",
        hint: "online shopping site"
    },
    {
        word: "golang",
        hint: "programming language"
    },
    {
        word: "coding",
        hint: "related to programming"
    },
    {
        word: "matrix",
        hint: "science fiction movie"
    },
    {
        word: "bugs",
        hint: "related to programming"
    },
    {
        word: "avatar",
        hint: "epic science fiction film"
    },
    {
        word: "gif",
        hint: "a file format for image"
    },
    {
        word: "mental",
        hint: "related to the mind"
    },
    {
        word: "map",
        hint: "diagram represent of an area"
    },
    {
        word: "island",
        hint: "land surrounded by water"
    },
    {
        word: "hockey",
        hint: "a famous outdoor game"
    },
    {
        word: "chess",
        hint: "related to a indoor game"
    },
    {
        word: "viber",
        hint: "a social media app"
    },
    {

        word: "github",
        hint: "code hosting platform"
    },
    {
        word: "png",
        hint: "a image file format"
    },
    {
        word: "silver",
        hint: "precious greyish-white metal"
    },
    {
        word: "mobile",
        hint: "an electronic device"
    },
    {
        word: "gpu",
        hint: "computer component"
    },
    {
        word: "java",
        hint: "programming language"
    },
    {
        word: "google",
        hint: "famous search engine"
    },
    {
        word: "venice",
        hint: "famous city of waters"
    },
    {
        word: "excel",
        hint: "microsoft product for windows"
    },
    {
        word: "mysql",
        hint: "a relational database system"
    },
    {

        word: "nepal",
        hint: "developing country name"
    },
    {
        word: "flute",
        hint: "a musical instrument"
    },
    {
        word: "crypto",
        hint: "related to cryptocurrency"
    },
    {
        word: "tesla",
        hint: "unit of magnetic flux density"
    },
    {
        word: "mars",
        hint: "planet of our solar system"
    },
    {
        word: "proxy",
        hint: "related to server application"
    },
    {
        word: "email",
        hint: "related to exchanging message"
    },
    {
        word: "html",
        hint: "markup language for the web"
    },
    {
        word: "air",
        hint: "related to a gas"
    },
    {
        word: "idea",
        hint: "a thought or suggestion"
    },
    {

        word: "server",
        hint: "related to computer or system"
    },
    {
        word: "svg",
        hint: "a vector image format"
    },
    {
        word: "jpeg",
        hint: "a image file format"
    },
    {
        word: "search",
        hint: "act to find something"
    },
    {
        word: "key",
        hint: "small piece of metal"
    },
    {
        word: "egypt",
        hint: "a country name"
    },
    {
        word: "joker",
        hint: "psychological thriller film"
    },
    {
        word: "dubai",
        hint: "developed country name"
    },
    {
        word: "photo",
        hint: "representation of person or scene"
    },
    {
        word: "nile",
        hint: "largest river in the world"
    },
    {

        word: "rain",
        hint: "related to a water"
    },
];

var chances = 8;
var hidden="", phrase="",last="";

function generate() {
    const list = document.getElementById("letters");
    document.getElementsByClassName("letter")[hidden.length-1<0?0:hidden.length-1].value="";
    // console.log(list.children.length);
    chances=8;
    while(list.children.length>1)
        list.removeChild(list.firstChild);

    var num=Math.floor(Math.random() * wordList.length);
    hidden = wordList[num].word;
    phrase = wordList[num].hint;
    document.getElementById("hint").innerText = "Hint : " + phrase;
    document.getElementById("guess").innerText = "Remaining guesses: " + chances;
    document.getElementById("wrong").innerText = "Wrong letters: ";
    for(let i=1;i<hidden.length;i++)
    {
        var choices = document.getElementById("letters");
        var choiceTemplate = document.getElementsByClassName("letter")[0];
        var newChoice = choiceTemplate.cloneNode(true);
        var input = newChoice.getElementsByTagName("input");
        input.value = '';
        choices.appendChild(newChoice);
    }
}

function gameOver(){
    alert("you Lost!");
    for(let i=0;i<hidden.length;i++)
    {
        console.log(hidden[i]);
        (document.getElementsByClassName("letter")[i]).value=hidden[i];
    }
}

function start() {
    document.getElementById("guess").innerText = "Remaining guesses: " + chances;
    
    
    console.log(hidden);
    
    var arr = document.getElementsByClassName("letter");
    var gussed = "";
    if(last=="");
    for(let i=0;i<arr.length;i++) last+='-';
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].value != "") gussed += arr[i].value;
        else gussed+='-';
    }
    
    console.log(gussed);
    
    var flag=false;
    var wrongs="";
    for(let i = 0; i<hidden.length;i++)
    {
        // console.log(gussed[i]+" "+hidden[i]);
        if(gussed[i]!=last[i] && gussed[i]!=(hidden[i]))
        {
            flag=true;
            wrongs+=(" "+(gussed[i].toUpperCase()));
        }
    }
    
    last=gussed;
    if(flag)
    {
        chances-=(wrongs.length/2);
        document.getElementById("wrong").innerText+=wrongs;
    }
    flag=true;
    for(let i = 0; i<hidden.length;i++)
    {
        if(gussed[i]!=(hidden[i]))
        {
            flag=false;
            wrongs+=(" "+(gussed[i].toUpperCase()));
        }
    }
     if(flag){
        alert("You won!");
        generate();
    }
    
    document.getElementById("guess").innerText = "Remaining guesses: " + chances;
    if (chances <= 0) {
        gameOver();
        return;
    }
}

generate();