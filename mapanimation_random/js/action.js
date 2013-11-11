
$(document).ready(function(){
		
		var d= 0;
		$('#circleDiv > div').each(function(id) {
			//var id = this.id;
			
		$(this).delay(d).fadeIn(500);
		d += 200;
		
		

	})
		setInterval(mapanimation(),9000)	
		
		function mapanimation(){
			$("#mapDiv").animate({
			opacity:0.4	
			},9000,function(){
				$('#mapDiv').css('opacity','1')
				$('#mapDiv').fadeIn("slow");
			})		
}
})

  
