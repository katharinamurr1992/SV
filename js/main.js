// // Navbar auf jeder Seite behalten
//
// $('ul.navbar-nav li a').each((i, item) => {
//   if ($(item).attr('data-page')) {
//     $(item).on('click', (element) => {
//         $('#main-container').load($(element.target).attr('data-page')+'.html');
//     });
//   } else {
//     $('#main-container').load('tabstart.html');
//   }
// });
//
// Link für überleitung zu Lärm
// $(document).ready(function(){
//   $('#soundlink').click(function(){
//     $('#main-container').load('tabsound.html');
//   });
// });
//
// // Link für überleitung zu Luft
// $(document).ready(function(){
//   $('#airlink').click(function(){
//     $('#main-container').load('tabair.html');
//   });
// });
//
// // Link für überleitung zu Sicherheit
// $(document).ready(function(){
//   $('#securitylink').click(function(){
//     $('#main-container').load('security.html');
//   });
// });

function openTab(evt, tabId, buttonId) {
  var i, tabcontent, tabbuttons;
  console.log("BBBB");
  tabcontent = document.getElementsByClassName("tab");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tabbuttons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabbuttons.length; i++) {
    tabbuttons[i].classList.remove("active");
  }
  document.getElementById(tabId).style.display = "block";
  document.getElementById(buttonId).classList.add("active");
  fetchContent(tabId);
}

function fetchContent(tabId) {
  fetch(tabId + ".html")
      .then(response => response.text())
      .then(data => {
        document.getElementById(tabId).innerHTML = data;
      })
      .catch(error => {
        console.error('Error fetching tab content:', error);
      });
}

window.addEventListener('DOMContentLoaded', function() {
  fetchContent('tabstart');
});

//collapse navbar in smaller devices
$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});