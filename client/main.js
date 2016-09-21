Template.layout.onRendered(function(){

  if($.myApp==undefined){

      $.myApp = new Framework7({

      modalTitle: 'app',

      material: true,
      materialPageLoadDelay: 200,
      swipePanel: 'left',
      dynamicNavbar: true

    });
  }

  var mainView = $.myApp.addView('.view', {
    domCache: true
  });


  var $$ = Dom7;

  $$('.panel-left').on('opened', function () {
    // Do something when panel is opened
  });
  $$('.panel-left').on('close', function () {
    // Do something when panel is closed
  });

  $.mainView=mainView;


  $(".right-menu").on('click',function(){
    if($(".panel-left").hasClass('active')){
      $.myApp.closePanel();
    }
  })

})