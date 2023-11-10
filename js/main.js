// Navbar auf jeder Seite behalten

$('ul.navbar-nav li a').each((i, item) => {
  if ($(item).attr('data-page')) {
    $(item).on('click', (element) => {
        $('#main-container').load($(element.target).attr('data-page')+'.html');
    });
  } else {
    $('#main-container').load('start.html');
  }
});

// Link für überleitung zu Lärm
$(document).ready(function(){
  $('#soundlink').click(function(){
    $('#main-container').load('sound.html');
  });
});

// Link für überleitung zu Luft
$(document).ready(function(){
  $('#airlink').click(function(){
    $('#main-container').load('air.html');
  });
});

// Link für überleitung zu Sicherheit
$(document).ready(function(){
  $('#securitylink').click(function(){
    $('#main-container').load('security.html');
  });
});
