"use strict";$(document).ready(function(){$.ajax({url:"https://reqres.in/api/users?page=1",contentType:"application/json",dataType:"json",success:function(a){var e=$("#userlist");$.each(a.data,function(a,s){e.append('<div class="col-sm">\n                <img src="'+s.avatar+'" alt="" class="rounded-circle mx-auto d-block">\n                <div>\n                <p class="text-center inline-block usrlist">'+s.first_name+" "+s.last_name+"</p></div></div>")})},error:function(){console.log("data not found")}})}),$(document).ready(function(){for(var a=1;a<=4;a++)$('<div class="carousel-item"><a href="#"><img src="assets/img/'+a+'.jpg" class="img-fluid"><a></div>').appendTo(".carousel-inner"),$('<li data-target="#carousel" data-slide-to="'+a+'"></li>').appendTo(".carousel-indicators");$(".carousel-item").first().addClass("active"),$(".carousel-indicators > li").first().addClass("active"),$("#carousel").carousel()});