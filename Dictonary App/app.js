let searchInput = document.getElementById("searchinput");
let searchbtn = document.getElementById("searchbtn");

const getData = async (searchvalue) => {
  let data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchvalue}`
  );
  let jsonData = await data.json();

  document.querySelector(".text").innerHTML = "";
  let div = document.createElement("div");
  div.classList.add("detail");
  div.innerHTML = `<h2>Word:${jsonData[0].word}</h2>
        <p>${jsonData[0].meanings[0].partOfSpeech}</p>
        <p><b>Meaning:</b><span>${jsonData[0].meanings[0].definitions[0].definition}</span></p>
        <p><b>Example:</b><span>${jsonData[0].meanings[0].definitions[0].example}</span></p>
        <p><b>Synonym:</b><span>${jsonData[0].meanings[0].synonyms}</span></p>
         <p><b>Antonym:</b><span>${jsonData[0].meanings[0].antonyms}</span></p>
        <a href=${jsonData[0].sourceUrls[0]} target ="_blank">Read More</a>
`;
  document.querySelector(".text").appendChild(div);
  console.log(jsonData);
  console.log(jsonData[0].word);
  console.log(jsonData[0].meanings[0].definitions[0].definition);
};
searchbtn.addEventListener("click", function () {
  let searchvalue = searchInput.value;
  if (searchvalue == "") {
    alert("first enter word");
  } else {
    getData(searchvalue);
  }
});
getData();
