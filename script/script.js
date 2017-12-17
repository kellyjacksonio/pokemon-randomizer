function getPokemon() {
    document.body.style.backgroundImage = 'url("https://i.ytimg.com/vi/AowYEKIESiY/maxresdefault.jpg")';
  }
  
  $(document).ready(function() {
    
    $("#get-pokemon").on("click", function(){
      $.getJSON("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", function(json) {
        //generate random number
        var number = Math.floor(Math.random() * json.pokemon.length + 1);
        //compile pokemon
        var name = json.pokemon[number].name;
        var pokeNumber = json.pokemon[number].num;
        var height = json.pokemon[number].height;
        var weight = json.pokemon[number].weight;
        var image = "<img id='poke-img' src = '" + json.pokemon[number].img + "'>";
        
        
        $('#get-name').html(name + " has the Pokedex number of " + pokeNumber + ". It weighs " + weight + " and is " + height + " tall.");
        $('#get-image').html(image);
      })
    })
  })
  
  function tweet() {
    var string = document.getElementById("get-name").innerHTML;
    var imageSrc = document.getElementById("poke-img").src;
    var tweet = 'https://twitter.com/intent/tweet?text=' + string + " " + imageSrc;
    window.open(tweet, "_blank");
  }
  
  
  