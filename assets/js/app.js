$(document).ready(function(){
     $.ajax({
        url: 'https://reqres.in/api/users?page=1',
        contentType: "application/json",
        dataType: 'json',
        success: function(e){
            const  userlist = $("#userlist");
            $.each(e.data, function(index,data){
                userlist.append(`<div class="col-sm">
                <img src="${data.avatar}" alt="" class="rounded-circle mx-auto d-block">
                <div>
                <p class="text-center inline-block">${data.first_name} ${data.last_name}</p></div></div>`);
            });
        },

        error: function(){
            console.log("data not found");
            
        }
    })
      
});
 
 
 

$(document).ready(function(){
    for(let i = 0; i < 4; i++) {
        $('<div class="carousel-item"><a href="#"><img src="assets/img/banner.png" class="d-block w-100"><a></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }

    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel').carousel();
});





$(document).ready(function() {
    let toggleSearch = $("form span");
  
    let showInput = false;
  
    toggleSearch.on("click", function() {
      if (showInput) {
        $("form input[type='search']").animate(
          {
            left: "-40px",
            width: "0px"
          },
          200,
          function() {
            $("form span").css({
              "border-radius": "5px",
              "background-color":"#fff"
            });
          }
        );
      } else {
        $("form span").css({
          "border-radius": "0px 0 0 0px",
          "color": "white",
          "background-color": "#333"
        });
        $("form input[type='search']").animate(
          {
            left: 0,
            width: "120px"
          },
          200,
          function(){
            $("form input[type='search']").focus();
          }
        );
      }
      showInput = !showInput;
    });
  });
  