// import document;

// import fetch from "node-fetch";

// fetch("https://type.fit/api/quotes")
//   .then((response) => response.json())
//   .then((data) => console.log(data))



  async function me(rand){
    const x = await fetch('https://type.fit/api/quotes');
    const quote = await x.json();
    // const text = quote[rand].text;
    document.getElementById("my").innerHTML =  `"${quote[rand].text}"`;
    if(quote[rand].author == null){
      document.getElementById("my1").innerHTML =  'Author :Unkown';
    }
    else{
    document.getElementById("my1").innerHTML =  `Author :${quote[rand].author}`;
    }
  }
 
  var button = document.querySelector('button');
button.onclick = function() {
  const rand =Math.floor(Math.random() * 1643);
  me(rand);
}
