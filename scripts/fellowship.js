console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';


function makeMiddleEarth() {
  $(body).append('<section></section');
  $('section').attr('id','middleEarth')

  for(var i = 0; i<lands.length; i++){
    $('section').append('<article></article');
  }
  $('article').append('<h1></h1>');
  
  for(var i = 0; i<lands.length; i++){
    $($('h1')[i]).text(lands[i])
  }
}

makeMiddleEarth();

function makeHobbits(){
  $('article').first().append('<ul></ul');
  for(var i =0; i<hobbits.length; i++){
    $('ul').append('<li></li>')
    $('li').attr('class', 'hobbit')
  }
  for(var i = 0; i < hobbits.length; i++){
    $($('li')[i]).text(hobbits[i])
  }
}
makeHobbits();

function keepItSecretKeepItSafe(){
  $('li:nth-child(1)').append('<div></div>')
  $('div:eq(1)').attr('class', 'magic-imbued-jewelry')
  $('div:eq(1)').attr('id', 'the-ring')
}
keepItSecretKeepItSafe();

function makeBuddies(){
$('article:eq(1)').append('<aside></aside>');
$('aside').append('<ul></ul');
for(var i = 0; i < buddies.length; i++){
  $('ul:eq(1)').append('<li></li>')
}
for(var i = 0; i < buddies.length; i++){
  $($('ul:eq(1)').children()[i]).text(buddies[i])
  $($('ul:eq(1)').children()[i]).attr('class', 'buddies')
}
}
makeBuddies();

function beautifulStranger(){
$('ul:eq(1) li:nth-child(4)').text('Aragorn')
}
beautifulStranger();

function leaveTheShire(){
  $('ul:eq(0)').appendTo('aside');
}
leaveTheShire();

function forgeTheFellowship() {
  $('article:eq(1)').append('<div></div')
  $('div:eq(2)').attr('id', 'the-fellowship')
  for(var i = 0; i < hobbits.length; i++){
    alert(hobbits[i]);
  }
  for(var i = 0; i < hobbits.length; i++){
    alert(hobbits[i]);
  }
  $(".hobbit").each(function() { 
    $('#the-fellowship').append(this);
  });
  $(".buddies").each(function() { 
    $('#the-fellowship').append(this);
  });
}
forgeTheFellowship();

function theBalrog(){
  $('li:nth-child(5)').text('Gandalf the White');
  $('li:nth-child(5)').css('background-color','white')
  $('li:nth-child(5)').css('border','solid 2px grey')
  $('li:nth-child(5)').css('display','inline-block')
}
theBalrog();

function hornOfGondor() {
  alert('The Horn of Gondor has been blown! Boromir has been killed by the Uruk-hai!')
  $('li:nth-child(9)').remove()
}
hornOfGondor();

function itsDangerousToGoAlone() {
  $('li:nth-child(1)').appendTo('article:eq(2)')
  $('li:nth-child(1)').appendTo('article:eq(2)')
  $('article:eq(2)').append('<div id="mount-doom"></div>')
}
itsDangerousToGoAlone();

function weWantsIt() {
  $('<div id="gollum"></div').appendTo('article:eq(2)')
  $('#the-ring').appendTo('#gollum')
  $('#gollum').appendTo('#mount-doom')
}
weWantsIt();

function thereAndBackAgain(){
$('#gollum').remove();
$('.hobbit').appendTo('article:eq(0)')


}
thereAndBackAgain();

$('.hobbit').css('list-style', 'none')
$('.buddies').css('list-style', 'none')

