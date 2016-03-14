$(document).ready(function(){
    $("#serialize").click(function(){
	var date = new Date;
	date.setTime(date.getTime());

	var seconds = date.getSeconds();
	var minutes = date.getMinutes();
	var hour = date.getHours();

	var year = date.getFullYear();
	var month = date.getMonth() + 1; // beware: January = 0; February = 1, etc.
	var day = date.getDate();

	var dayOfWeek = date.getDay(); // Sunday = 0, Monday = 1, etc.
	var milliSeconds = date.getMilliseconds();

	var timestamp = month + "/" + day + "/" + year + " " +  hour + ":" + minutes + ":" + seconds;	

        var myobj = {Name:$("#Name").val(),Comment:$("#Comment").val(),Time:timestamp};
        jobj = JSON.stringify(myobj);
        $("#json").text(jobj);
	console.log(jobj);

	var url = "comment";
	$.ajax({
	  url:url,
	  type: "POST",
	  data: jobj,
	  contentType: "application/json; charset=utf-8",
	  success: function(data,textStatus) {
	      $("#done").html(textStatus);
	  }
	})
    });

	 $("#getThem").click(function() {
	      $.getJSON('comment', function(data) {
		console.log(data);
		var everything = "<ul>";
		for(var comment in data) {
		  com = data[comment];
		  everything += "<li>Name: " + com.Name + " -- Comment: " + com.Comment + "</li>" + " -- Timestamp: " + com.Time;
		}
		everything += "</ul>";
		$("#comments").html(everything);
	      })
	    })

});
