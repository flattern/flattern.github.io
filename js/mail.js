$(document).ready(function() {

	$("#save1_form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
			$("#save1_form").trigger("reset");
		});
		return false;
	});
	
});