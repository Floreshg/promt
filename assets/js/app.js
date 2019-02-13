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
                <p class="text-center inline-block usrlist">${data.first_name} ${data.last_name}</p></div></div>`);
            });
        },

        error: function(){
            console.log("data not found");
            
        }
    })
      
});
 
 
 
/*
$(document).ready(function(){
    for(let i = 0; i < 4; i++) {
        $('<div class="carousel-item"><a href="#"><img src="assets/img/banner.png" class="d-block w-100"><a></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }

    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel').carousel();
});


*/


$(document).ready(function(){
    for(let i = 1 ; i <= 4 ; i++) {
        $('<div class="carousel-item"><img src="assets/img/'+i+'.jpg" class="d-block w-100"></div>').appendTo('.carousel-inner');
        $('<li data-target="#carousel" data-slide-to="'+i+'"></li>').appendTo('.carousel-indicators')
    }
    $('.carousel-item').first().addClass('active');
    $('.carousel-indicators > li').first().addClass('active');
    $('#carousel').carousel();
});