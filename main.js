var relations = [
    "Hana Alaali (aunt)",
    "Najah Alaali (aunt)",
    "Hani Alaali (Uncle)",
    "Jalal Alaali (Uncle)"
  ];
  
  var images = [
    "https://www.hajihassan.com/images/4.jpg",
    "https://www.hajihassan.com/images/9.jpg",
    "hhttps://www.hajihassan.com/images/7.jpg",
  "https://www.hajihassan.com/images/5.jpg"
  ];
  
  var i = 0;
  function nextslide() {
    
    if (i == 4)
    {
      i=0;
    }
      
    document.getElementById("membertext").innerHTML = reasons[i];
    document.getElementById("members").src = images[i];
    i++;
  }
  
  
  