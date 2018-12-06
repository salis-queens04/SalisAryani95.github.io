var p = MindFusion.Scheduling;

// create a new instance of the calendar
calendar = new p.Calendar(document.getElementById("calendar"));
// set the view to SingleMonth
calendar.currentView = p.CalendarView.SingleMonth;
settings = calendar.monthSettings;
calendar.theme = "blue";

// render the calendar control
calendar.render();

document.getElementById("rangeSettings").style.display = "none";
document.getElementById("singleSettings").style.display = "inline";

document.getElementById("view").value = calendar.currentView;
document.getElementById("view").onchange = function () {
	calendar.currentView = +document.getElementById("view").value;
	document.getElementById("view").value = calendar.currentView;
	settings = (calendar.currentView == p.CalendarView.MonthRange) ? calendar.monthRangeSettings : calendar.monthSettings;
	document.getElementById("rangeSettings").style.display = (calendar.currentView == p.CalendarView.MonthRange) ? "inline" : "none";
}

document.getElementById("headerStyle").value = settings.headerStyle;
document.getElementById("headerStyle").onchange = function () {
	settings.headerStyle = +document.getElementById("headerStyle").value;
	document.getElementById("headerStyle").value = settings.headerStyle;
}


	calendar.monthRangeSettings.numberOfMonths = +document.getElementById("numberOfMonths").value || 4;

    calendar.monthRangeSettings.monthsPerRow = +document.getElementById("monthsPerRow").value || 2;
	
    calendar.monthRangeSettings.visibleRows = +document.getElementById("visibleRows").value || 2;
    calendar.monthSettings.weekHeaderStyle = +document.getElementById("weekHeaderStyle").checked;

	calendar.monthSettings.dayNamesHeaderStyle = +document.getElementById("dayNamesHeaderStyle").checked;

	calendar.monthSettings.showPaddingDays = document.getElementById("showPaddingDays").checked;



