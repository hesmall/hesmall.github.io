function openPage(pageName, elmnt, color, txtColor) {
  // Hide all elements with class="tabcontent" by default */
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // reset the background color of all tablinks/buttons
  tablinks = document.getElementsByClassName("tablink");
  tablinks[0].style.backgroundColor = "#f0f0f0";
  tablinks[1].style.backgroundColor = "#d2d2d2";
  tablinks[2].style.backgroundColor = "#aaaaaa";
  tablinks[3].style.backgroundColor = "#8c8c8c";

  //for (i = 0; i < tablinks.length; i++) {
  //  tablinks[i].style.backgroundColor = ;
  //}

  // Show the specific tab content
  page = document.getElementById(pageName);
  page.style.display = "block";
  //add borders to the page
  //page.style.borderTop= "thick solid #0000FF";
  // Add the specific color to the button used to open the tab content
  elmnt.style.backgroundColor = "#ffffff";

  //elmnt.style.color = txtColor;
}

// Get the element with id="defaultOpen" and click on it by default
document.getElementById("tab1").click();

function bloob() {
  background_im = "url(\"assets/blueberries.jpg\")"
  imgs = document.getElementsByTagName("img");
  backgroundImage = document.body.style.backgroundImage;
  if (backgroundImage == background_im) {
    document.body.style.backgroundImage = "none";
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.filter = "grayscale(100%)";
    }
  }
  else {
    document.body.style.backgroundImage = background_im;
    for (var i = 0; i < imgs.length; i++) {
      imgs[i].style.filter = "none";
    }
  }
}