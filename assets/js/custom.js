// JavaScript Document

// jQUERY MOBILE CONFIGURATIONS
// http://jquerymobile.com/test/docs/api/globalconfig.html
// ---------------------------------------------------------------------------------
//$(document).bind("mobileinit", function(){
$(document).ready(function () {
	MBP.startupImage(); // Show startup image. If you want to disable delete this line
});


// SLIDE OPEN MENU PLUGIN
// https://github.com/aldomatic/FB-Style-Page-Slide-Menu
// ---------------------------------------------------------------------------------
	$(function(){
		var menuStatus;
		
		
		 //Show menu
		$("a.showMenu").click(function(){
			if(menuStatus != true){				
			$(".ui-page-active").animate({
				marginLeft: "165px",
			  }, 0, function(){menuStatus = true});
			  return false;
			  } else {
				$(".ui-page-active").animate({
				marginLeft: "0px",
			  }, 0, function(){menuStatus = false});
				return false;
			  }
		});
		
		
		// Delete Code below for stop swipe left & right function.
		
			// Swipe left function for menu. If you want you can disable swipe left funtion delete code below.
			$('#menu, .pages').live("swipeleft", function(){
				if (menuStatus){	
				$(".ui-page-active").animate({
					marginLeft: "0px",
				  }, 0, function(){menuStatus = false});
				  }
			});
			// Swipe left end
			
			
			// Swipe right function for menu. If you want you can disable swipe right funtion delete code below.
			$('.pages').live("swiperight", function(){
				if (!menuStatus){	
				$(".ui-page-active").animate({
					marginLeft: "165px",
				  }, 0, function(){menuStatus = true});
				  }
			});
			// Swipe right end
			
		//End Delete Code
		
		
		$('div[data-role="page"]').live('pagebeforeshow',function(event, ui){
			menuStatus = false;
			$(".pages").css("margin-left","0");
		});
		
		// Menu behaviour
		$("#menu li a").click(function(){
			var p = $(this).parent();
			if($(p).hasClass('active')){
				$("#menu li").removeClass('active');
			} else {
				$("#menu li").removeClass('active');
				$(p).addClass('active');
			}
		});

});	


