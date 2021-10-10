const { firebaseConfig } = require("firebase-functions/v1");

function getShiftTimeMap(shift_starting_time) {

    let str = shift_starting_time.split(";");

    let map_duration = new Map();
    for (let s of str) {
        let code = s.split("=")[0];
        let time = s.split("=")[1];
        map_duration.set(code, time);
    }

    return map_duration;

}


let str = "a=1236-5252:5656;b=4515151:52154154.4554151;c=51541:5151.5151'515;v:5151;5151.515,15'515/5151";

//getShiftTimeMap(str);


function getTimeStamp(Date, Time) {
    let year = parseInt(parseInt(Date) / 10000);
    let month = parseInt((parseInt(Date) - (year * 10000)) / 100);
    let day = parseInt((parseInt(Date) - parseInt((year * 100 + month) * 100)));


    let hours = parseInt(parseInt(Time) / 100);
    let minutes = parseInt(Time) - parseInt(hours * 100);

    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }
    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }



    return year + "-" + month + "-" + day + "T" + hours + ":" + minutes + ":00.000";

}

function day_increment_int(date, inctement) {

    var c = new Date();
    let starting_date = '' + date;
    // //console.log('year: ' + starting_date.substring(0, 4));
    // //console.log('month: ' + starting_date.substring(4, 6));
    // //console.log('date: ' + starting_date.substring(6, 8));

    c.setFullYear(starting_date.substring(0, 4));
    c.setMonth((starting_date.substring(4, 6) - 1));
    c.setDate(starting_date.substring(6, 8));




    var day = c.getDate() + inctement; // for looping 
    c.setDate(day);
    var next_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());

    return next_date;

}

function getEndingDateOfMonth(yearMonth) {

    let date = yearMonth ;
    console.log("date : ", date);
    
    let starting_date = '' + date;


    var firstDay = new Date();
    
    firstDay.setFullYear(starting_date.substring(0, 4));
    firstDay.setMonth((starting_date.substring(4, 6) - 1));
    firstDay.setDate(1);

    var lastDay = new Date();
    lastDay.setFullYear(starting_date.substring(0, 4));
    lastDay.setMonth((starting_date.substring(4, 6) ));
    lastDay.setDate(0);

    // var day = lastDay.getDate() -1; // for looping 
    // lastDay.setDate(day);

    console.log("ending Date : ", firstDay.toISOString());
    console.log("ending Date : ", lastDay.toISOString());


}


//console.log(getEndingDateOfMonth("202105"));


function getbse64(DataToBase64){
    let st = utf8_to_b64(DataToBase64);
    console.log(st);


    let ot = b64_to_utf8( st );

    console.log(ot);
}



function utf8_to_b64( str ) {
    return Buffer.from(str).toString('base64');
  }
  
  function b64_to_utf8( str ) {
    return Buffer.from(str, 'base64').toString();
  }

getbse64("DataToBase64");