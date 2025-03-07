	//sample data
	var tabledata = [
		{id:1, name:"Oli Bob", age:"12", col:"red", dob:"12/08/2017"},
		{id:2, name:"Mary May", age:"1", col:"blue", dob:"14/05/1982"},
		{id:3, name:"Christine Lobowski", age:"42", col:"green", dob:"22/05/1982"},
		{id:4, name:"Brendon Philips", age:"125", col:"orange", dob:"01/08/1980"},
		{id:5, name:"Margret Marmajuke", age:"16", col:"yellow", dob:"31/01/1999"},
	];

	var table = new Tabulator("#example-table", {
		height:200, // set height of table to enable virtual DOM
		data:tabledata, //load initial data into table
		layout:"fitColumns", //fit columns to width of table (optional)
		columns:[ //Define Table Columns
			{title:"Name", field:"name", sorter:"string", width:150},
			{title:"Age", field:"age", sorter:"number", hozAlign:"left", formatter:"progress"},
			{title:"Favourite Color", field:"col", sorter:"string", sortable:false},
			{title:"Date Of Birth", field:"dob", sorter:"date", hozAlign:"center"},
		],
	    rowClick:function(e, row){ //trigger an alert message when the row is clicked
	    	alert("Row " + row.getIndex() + " Clicked!!!!");
	    },
	});