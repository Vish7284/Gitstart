var fruitItems = document.getElementsByClassName("fruit");
      for (var i = 0; i < fruitItems.length; i++) {
        fruitItems[i].style.fontWeight = "bold";
      }
      if (fruitItems.length >= 3) {
        fruitItems[2].style.backgroundColor = "yellow";
      };