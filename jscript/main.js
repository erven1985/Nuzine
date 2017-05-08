var projects = [{
                name: "Handcraft",
                category: "Bar/Restaurant",
                projectAdress1: '367 Third Ave',
                projectAdress2: 'New York, NY 10016',
                engineeringServices: 'Space plan, lighting design, custom fixtures, furniture design, all finishes.',
                sqFootage: "2,134 SF",
                status: 'Complete',
                images: ["projects/handcraft/bar.jpg", "projects/handcraft/Tables.jpg"]
                },{
                name: "AWS",
                category: "Corporate office and retail showroom",
                projectAdress1: '172 Empire Blvd',
                projectAdress2: 'Brooklyn, NY 11225',
                engineeringServices: 'Space planning, lighting design, all finishes, custom millwork design, all furniture, manage project for Owner.',
                sqFootage: "8,000 SF",
                status: 'Complete',
                images: ["projects/AWS/DSC03450.JPG", "projects/AWS/DSC03434.JPG", "projects/AWS/DSC03437.JPG", "projects/AWS/DSC03445.JPG"]
                }, {
                name: "Best Western",
                category: "Hotel",
                projectAdress1: '112-26 Roosevelt Ave',
                projectAdress2: 'Corona, NY 11368',
                engineeringServices: '100 linear feet of custom floral installation',
                sqFootage: "n/a",
                status: 'Complete',
                images: ["projects/bw/bestwestern.JPG"]
                }, {
                name: "Ivanka Trump Store",
                category: "Retail jewelry and life style store",
                projectAdress1: '109 Mercer St.',
                projectAdress2: 'New York, NY 10012',
                engineeringServices: 'Space plan, lighting design, custom fixtures & drapery, all finishes, manage project for Owner.',
                sqFootage: "Bi-level storefront",
                status: 'Complete',
                images: ["projects/ivanka/ivanka.jpg", "projects/ivanka/ivanka1.jpg", "projects/ivanka/ivanka2.jpg"]
                }, {
                name: "HL Gross & Bros",
                category: " Retail Jewelry store",
                projectAdress1: '850 Franklin Ave',
                projectAdress2: 'Garden City, NY 11530',
                engineeringServices: 'Custom millwork design, all finishes, coordinate lighting designer & architect.',
                sqFootage: "5,150 SF",
                status: 'Complete',
                images: ["projects/HLGross&Bros/P1060785.JPG", "projects/HLGross&Bros/P1060786.JPG", "projects/HLGross&Bros/P1060811.JPG"]
                }, {
                name: " 850 Elevators",
                category: "10 passenger elevator cabs",
                projectAdress1: '850 Third Ave',
                projectAdress2: 'New York, NY 10022',
                engineeringServices: 'Presentation, Design finishes & Lighting, Managed General Contractor bid process for Owner.',
                sqFootage: "n/a",
                status: 'Complete',
                images: ["projects/elevator/elevator.jpg"]
                }];



$(document).ready(function(){

// Document onload will run next functions
    
    var fsize = parseInt($(".navigation a").css("font-size")),
        navheight = $(".navigation").height(),
        padval = (navheight - fsize)/2 - 5,
        window_width = $(window).width(),
        clientcont = $("#centerblock").width(),
        padleft = (window_width - clientcont)/2,
        sliderWidth = $(".awSlider").width();

    $(".feed-image").css("width", sliderWidth)
    $('#centerblock').css('margin-right', padleft);
    $(".navigation").css('padding-top', padval + 'px');

    
    colEqual();
    aboutInfo();
    coverHeight();
        
    $("#meet_bttn").click(function() {
        $("#about").hide();
        $("#about-founder").show(); 
    });
    $("#meet_bttn2").click(function() {
        $("#about-founder").hide();
        $("#about").show(); 
        
    });

    if($(window).width() < 990) {
           
           
            $("#laura-info").removeClass("col-sm-3");
            $("#laura-info").addClass("col-sm-4");
            $("#laura-info2").removeClass("col-sm-3");
            $("#laura-info2").addClass("col-sm-4");
        }


    setTimeout(function() { 
        $("#about-founder").css({"display":"none", "z-index":1, "opacity":1, "position":"relative"})
    }, 100);

    aboutInfo();

    $("#load_more").click(function() {
        $("#load").append('<div class="container-fluid" id="test" style="height:800px">'+'<div class="row" style="height: 50%">'+'<div class="col-xs-10 col-xs-push-1 col-md-6 col-md-push-0 col-lg-6 col-lg-push-0 project-details" style="position:relative; height:100%;background-image: url(projects/handcraft/Tables.jpg); background-size: cover" data-number="0">'+'<img src="images/projects/design.jpg" class="img-responsive" style="position: absolute; top: 10px; left: 10px">'+
                '</div>'+'<div class="col-xs-10 col-xs-push-1 col-md-3 col-md-push-0 col-lg-3 col-lg-push-0 seventy project-details" style="position:relative; height:70%; background-image: url(projects/AWS/DSC03450.JPG); background-size: cover" id="mydiv1" data-number="1">'+'<img src="images/projects/manag_design.jpg" class="img-responsive" style="position: absolute; top: 10px; left: 10px">'+'</div>'+'<div class="col-xs-10 col-xs-push-1 col-md-3 col-md-push-0 col-lg-3 col-lg-push-0 seventy project-details" style="position:relative; height:70%; background-image: url(projects/bw/bestwestern.jpg); background-size: cover" data-number="2">'+'<img src="images/projects/design.jpg" class="img-responsive" style="position: absolute; top: 10px; left: 10px">'+'</div>'+'</div>'+'<div class="row" style="height: 50%" id="myrow1">'+'<div class="col-xs-10 col-xs-push-1 col-md-3 col-md-push-0 col-lg-3 col-lg-push-0 ninty project-details" style="position:relative; height:90%; background-image: url(projects/ivanka/ivanka.jpg); background-size: cover" data-number="3">'+'<img src="images/projects/manag_design.jpg" class="img-responsive" style="box-shadow: 2px 2px 5px black; margin-top: 10px;">'+'</div>'+'<div class="col-xs-10 col-xs-push-1 col-md-3 col-md-push-0 col-lg-3 col-lg-push-0 ninty project-details" style="position:relative; height:90%; background-image: url(projects/HLGross&Bros/P1060785.JPG); background-size: cover;" data-number="4">'+
                    '<img src="images/projects/design.jpg" class="img-responsive" style="box-shadow: 2px 2px 5px black; margin-top: 10px;">'+'</div>'+'<div class="col-xs-10 col-xs-push-1 col-md-6 col-md-push-0 col-lg-6 col-lg-push-0 project-details" style="position:relative; height:120%; background-image: url(projects/elevator/elevator.jpg); background-size: cover" id="last_div1" data-number="5">'+'<img src="images/projects/manag_design.jpg" class="img-responsive" style="position: absolute; top: 10px; left:10px">'+'</div>'+'</div>'+'</div>');
                    
                    var row_height = $("#myrow1").height(),
                        div_height = $("#mydiv1").height(),
                        diff = row_height - div_height,
                        h = $(window).height()*2.2;

                    $("#last_div1").css("margin-top", -diff);
                    $("#projects").css("height", h);
                    $("#load_more").remove();
    });



    $(".project-details").click(function() {
            
        var number = $(this).attr('data-number'),
            clicked = projects[number],
            bg = $(this).css('background-image');
            bg = bg.replace('url(','').replace(')','').replace(/\"/gi, ""),
            label = $(this).children().clone();
            
        $("#labelImage").html(label);
        $("#labelImage img").css("margin-left", "1.4%");
        $("#current-img").html('<img src="" id="myimage" class="img-responsive img-thumbnail"/>');
        $("#current-img img").attr('src', bg);

        $('#project-name').html(clicked.name.toUpperCase());
          $('#category').html("- " + clicked.category.toUpperCase() + " -");
          $('#project-address').html(clicked.projectAdress1 + '<br>' + clicked.projectAdress2);
          $('#engserv').html(clicked.engineeringServices);
          $('#footage').html(clicked.sqFootage);
          $('#status').html(clicked.status);
          for(i=0; i < clicked.images.length; i++) {
          $('.sld-wrap').append('<div class="sld-item">'+'<img src=' + clicked.images[i]+' class="img-thumbnail" style="border-radius:0px; box-shadow: 1px 1px 5px #666;" alt="" />' + '</div>');
      }

            $("#cover").fadeIn();
            htmSlider()
            $(".sld-wrap img").click(function() {
         const chosen = $(this)[0].src;
        $("#current-img img").attr("src", chosen);
    });
    });

    $(".close").click(function() {
        $("#current-img").children().remove();
        $(".sld-wrap").children().remove();
        $("#cover").fadeOut();
    });

    const height2 = $(window).height();
    $("#cover").css("min-height", height2);
    $("#services").css('min-height', height2*2)

    function htmSlider(){
        
    var slideWrap = jQuery('.sld-wrap'),
        nextLink = jQuery('.next-sld'),
        prevLink = jQuery('.prev-sld'),
        playLink = jQuery('.auto'),
        is_animate = false,
        slideWidth = jQuery('.sld-item').outerWidth(),
        scrollSlider = slideWrap.position().left - slideWidth;
      
    nextLink.click(function(){
     if(!slideWrap.is(':animated')) {
      slideWrap.animate({left: scrollSlider}, 500, function(){
       slideWrap
        .find('.sld-item:first')
        .appendTo(slideWrap)
        .parent()
        .css({'left': 0});
      });
     }
    });

    
    prevLink.click(function(){
     if(!slideWrap.is(':animated')) {
      slideWrap
       .css({'left': scrollSlider})
       .find('.sld-item:last')
       .prependTo(slideWrap)
       .parent()
       .animate({left: 0}, 500);
     }
    });

   }



    // window on resize will do next 
    $(window).on('resize', function() {
        
        colEqual();

    var firstblockheight = $("#one").height();
        $("#one-img").css("height", firstblockheight);
        $("#one-img").css("width", "100%");

    if($(window).width() < 768) {
     
        
        $("#laura-info").removeClass("col-sm-3");
        $("#laura-info").addClass("col-sm-4");
        $("#laura-info2").removeClass("col-sm-3");
        $("#laura-info2").addClass("col-sm-4");
    } 

    if($(window).width() > 1100) {
       
        
        $("#laura-info").removeClass("col-sm-4");
        $("#laura-info").addClass("col-sm-3");
        $("#laura-info2").removeClass("col-sm-4");
        $("#laura-info2").addClass("col-sm-3");
    }
        
    });


});

 
 $(document).ready(function(){
        

    var top = $(".navigation").css("margin-top"),

        navigationBottom = document.getElementById("navbar").getBoundingClientRect().bottom + window.pageYOffset;

    window.onscroll = function() {
      
      if (window.pageYOffset < navigationBottom) {
      
        $(".navigation").css("margin-top", top);
      
      } else if (window.pageYOffset > navigationBottom) {
      
        $(".navigation").css("margin-top", "0px");
      
      }
    };

        
    $(".nav-links").add('.page-scroll').click(function(e){
        
        e.preventDefault();
        
        var id = $(this).attr("href"),
            offset = $(id).offset();

        if(id == "#home") {
            
            $('html, body').animate({scrollTop: 0},500);
            $(".navigation").animate({marginTop: top}, 'normal');

        }else {

        $("html, body").animate({
        scrollTop: offset.top     
      }, 400);

        $(".navigation").animate({marginTop: "0px"}, 'normal');
      }

    }); 
    });

 

$(function() {
        var row_height = $("#myrow").height();
        var div_height = $("#mydiv").height();
        var diff = row_height - div_height;
        $("#last_div").css("margin-top", -diff);

        if($(window).width() < 990) {
        $("#last_div").css("margin-top", '0px');    
        $('.col-xs-10').css('height', '100%');
        $('.col-xs-10').css( 'margin-top', '10px');
    }
});

$(window).on('resize', function() {
        
        coverHeight();

    if($(window).width() < 990) {
        $("#last_div").css("margin-top", '0px');    
        $('.col-xs-10').css('height', '100%');
        $('.col-xs-10').css( 'margin-top', '10px');
    } else {
        var row_height = $("#myrow").height();
        var div_height = $("#mydiv").height();
        var diff = row_height - div_height;
        $('.col-xs-10').css( 'margin-top', '0px');
        $('.col-xs-10.seventy').css('height', '70%');
        $('.col-xs-10.ninty').css('height', '90%');
        $('#last_div').css('height', '120%');
        $("#last_div").css("margin-top", -diff);
    }
});

// Functions 
function colEqual() {
    var img_height = $("#imagegallery img").height();
    $("#home").css("height", img_height);
}

function aboutInfo() {
    var height1 = $("#laura-info2").height();
    $("#second_col").css("height", height1);
}

function coverHeight() {
    var main_height = $(window).height();
    $("#test").css("height", main_height);
}