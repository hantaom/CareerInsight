// var PythonShell = require('python-shell');

// function runPythonScript (keyword) {
// 	var options = {
// 		args: ['--field ' + '"'+keyword+ '"']
// 	};

	// PythonShell.run('parsedata.py', function (err, data) {
	// 	if (err) throw err;
	// 		alert(data);
	// });
//  } 

function postData(input) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8888",
        //data: { param: input },
        success : function(text)
         {
             alert(text);
         }
    });

}

function callbackFunc(response) {
    // do something with the response
	alert(response.toString());
    console.log(response);
}


document.getElementById("submitButton").addEventListener("click", function(){
	postData('parsedata.py --keyword Legislator')
});
