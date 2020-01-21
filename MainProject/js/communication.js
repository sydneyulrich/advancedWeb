$(document).ready(function(){

  /*replaces images on rollover */
  $("#happy").on({
    mouseenter: function(){
  $(this).attr('src','../images/happyWithArrows.png');
},
  mouseleave: function(){
  $(this).attr('src', '../images/happy.png');
}
});

$("#play").on({
  mouseenter: function(){
$(this).attr('src','../images/playBowWithArrows.png');
},
mouseleave: function(){
$(this).attr('src', '../images/playBow.png');
}
});

$("#alert").on({
  mouseenter: function(){
$(this).attr('src','../images/alertWithArrows.png');
},
mouseleave: function(){
$(this).attr('src', '../images/alert.png');
}
});

$("#anxious").on({
  mouseenter: function(){
$(this).attr('src','../images/anxiousWithArrows.png');
},
mouseleave: function(){
$(this).attr('src', '../images/anxious.png');
}
});

$("#aggressive").on({
  mouseenter: function(){
$(this).attr('src','../images/aggressiveWithArrows.png');
},
mouseleave: function(){
$(this).attr('src', '../images/aggressive.png');
}
});

$("#energetic").on({
  mouseenter: function(){
$(this).attr('src','../images/energeticWithArrows.png');
},
mouseleave: function(){
$(this).attr('src', '../images/energetic.png');
}
});

});
