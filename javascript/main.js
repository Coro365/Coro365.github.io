$(function(){
  $('#more').css('display','inline');
  $('#links2').css('display','none');
  $('#less').css('display','none');
  $('#more').click(function(){
    $('#more').css('display','none');
    $('#less').css('display','inline');
    $('#links2').show('blind', 'fast', 1000);
  });
  $('#less').click(function(){
    $('#less').css('display','none');
    $('#more').css('display','inline');
    $('#links2').hide('blind', 'fast', 1000);
  });
});
