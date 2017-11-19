     function initMap() {
        
        var uluru = {lat:  55.9154671, lng: 37.7126985};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru,
        });

        var marker = new google.maps.Marker({
          position: uluru,
          map: map,
          title:"Борисовка 20 А"
        });
      }
 $( "#accordion" ).accordion({active:false,collapsible:true,});
$(document).ready(function(){
      var btt = $("#arrow_cont");

      btt.on("click",function(e){
        $("html,body").animate({
            scrollTop:0
        },1000);
        e.preventDefault();
      });

      $("#logo").click(function(e){
           $("html,body").animate({
            scrollTop:0
        },1000);
        e.preventDefault();
      })


        $(".nav-link").click(function(e){
             e.preventDefault;
                var targetButton=$(this).attr('href');
                $("html,body").animate({
                        scrollTop: $(targetButton).offset().top-100
                }, 1000);
               
        })


   $(window).on("scroll",function(){
      var top = $(this).scrollTop();
      var height = $(this).height();

    //   console.log(top);
     //scroll on top button
      if(top>height){
          if(!btt.is(":visible")){
            btt.fadeIn();
          }
      }
      else{
          btt.fadeOut();
      }
      
   })
})


