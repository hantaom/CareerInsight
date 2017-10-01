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
        type: "POST",
        url: "/reverse_pca.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    // do something with the response
    console.log(response);
}


document.getElementById("submitButton").addEventListener("click", function(){
		System.Diagnostics.Process.Start("python.exe", "../dataParser/parsedata.py --keyword Legislator");
		alert('hi')
});
