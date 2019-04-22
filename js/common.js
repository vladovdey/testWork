$(".add").on("click", function () { 
	$('.counter').val( function(i, oldval) {
		return ++oldval;
	});
 });

 $(".del").on("click",function(){
	 console.log($(this)); 
	$('.counter').val( function(i, oldval) {
		if(oldval>0){
			return --oldval;
		}
		else{
			return oldval;
		}
	});
 });

 $("#main-form").on("submit", function (e) {
	if (valid() == false){
		event.preventDefault();
	}
 });

 function valid(){
	var length_firstName = $("#first_name").val().length,
		length_secondName = $("#second_name").val().length,
		length_email = $("#email").val().length;
	
	var countStep = 1;

	 if(length_firstName<5 || length_secondName<5 || length_email<5){
		 console.log("err");
		return false;
	 }else{
		
		switch (countStep) {
			case 1:
			$("#first_step").removeClass("change");
			$("#sec_step").addClass("change");
			countStep++;
			console.log(countStep);
				break;
			case 2:
			$("#sec_step").removeClass("change");
			$("#third_step").addClass("change");
			countStep++;
				break;
			case 3:
			$("#third_step").removeClass("change");
			countStep++;
				break;
		
			default:
				break;
		}
		 
		 return true;
	 }
 }