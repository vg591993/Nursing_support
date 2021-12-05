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

//getbse64("DataToBase64");

let shift_duration_map = 'N:720,D:360,E:360,DR:360,RB:360,DN:720,BS:510,GS:480,BL:510,TF:510,TA:510';
let shift_starting_time = '3=1800_Night;1=0600_Morning;2=1200_Afternoon;DR=0800_DR;RB=1400_RB;DN=2000_DN;BS=0900_BS;GS=0900_GS;BL=1000_BL;TF=1130_TF;TA=0800_TA';
let date_map = new Map();


let set = new Set();
set.add("3_J_N");
date_map.set("1", set);

set = new Set();
set.add("1_S_N");
date_map.set("2", set);

set = new Set();
set.add("1_J_N");
date_map.set("3", set);

set = new Set();
set.add("1_J_N");
date_map.set("4", set);

set = new Set();
set.add("Ykjffj_J_N");
set.add("X_J_N");

date_map.set("5", set);


function comapre(
    shift_duration_map, 
    shift_starting_time, 
    number_of_empty_slot, 
    seniority_level,  
    requerd_shift_id, 
    date_shift_map
    ){
    
    let shift = shift_starting_time.split(";");

    let shift_duration = shift_duration_map.split(",");

    let id_duration = new Map();
    let id_startingtime = new Map();

    for(let i  = 0; i < shift.length; i++){
        let id = shift[i].split("=")[0];
        let startin_time = shift[i].split("=")[1].split("_")[0];

        let hour =parseInt(startin_time.substr(0,2));
        let minuts = parseInt(startin_time.substr(2,4));

        console.log(hour+" : "+ minuts);

        id_startingtime.set(id, (hour*60+minuts));
    }

    for(let i  = 0; i < shift_duration.length; i++){
        let id = shift_duration[i].split(":")[0];
        let duration = parseInt(shift_duration[i].split(":")[1]);

        id_duration.set(id, duration);
    }

    let ending_minuts = new Map();

    if(  shift_duration.length == shift.length){
        for(let [id, starting_time]  of id_startingtime){
            
            let duration = 0
            if(id == '1'){
                 duration = id_duration.get('D');
                 ending_minuts.set('1', (duration+starting_time));
            }else if(id == '2'){
                 duration = id_duration.get('E');
                 ending_minuts.set('2', (duration+starting_time));
            }else if(id == '3'){
                 duration = id_duration.get('N');
                 ending_minuts.set('3', (duration+starting_time));
            }else{
                 duration = id_duration.get(id);
                 ending_minuts.set(id, (duration+starting_time));
            }

            
            
        }

    }
    

    console.log("id_startingtime: ",id_startingtime);
    console.log("ending_minuts: ",ending_minuts);
    console.log("id_duration: ",id_duration);


// ///////////////////////////////////////////////////////////////////////////////////////////
//     let overlapped_by_duration = new Map();

//     const req_starting_time = id_startingtime.get(requerd_shift_id);
//     const req_duration = id_duration.get(requerd_shift_id);
//     const req_ending_time = ending_minuts.get(requerd_shift_id);
    

//     id_duration.set("1", id_duration.get("D"));
//     id_duration.set("2", id_duration.get("E"));
//     id_duration.set("3", id_duration.get("N"));

    
//     id_duration.delete("D");
//     id_duration.delete("E");
//     id_duration.delete("N");

//     for([id, value] of id_startingtime){
        
//         if(value == req_starting_time){

//             if(req_ending_time >= ending_minuts.get(id)){
//                 overlapped_by_duration.set(id, id_duration.get(id));
//             }else{
//                 overlapped_by_duration.set(id, req_duration);
//             }
//         }else if(value < req_starting_time){

//              if(req_ending_time.get(id) > req_starting_time){
//                 overlapped_by_duration.set(id, (req_ending_time.get(id) - req_starting_time));
//              }

//         }else if (value > req_starting_time){

//             if(value < req_ending_time){
//                 overlapped_by_duration.set(id, ( req_ending_time - value ));
//              }
//         }

//     }

//     let shorted_overlapped_by_duration = shortMapByValue(overlapped_by_duration);
//     console.log("shorted_overlapped_by_duration : ",shorted_overlapped_by_duration);

// ////////////////////////////////////////////////////////////////////////////////////////////



    if(number_of_empty_slot > 0){

        let req_shift_strting_day_minute = id_startingtime.get(requerd_shift_id);
        let req_shift_ending_day_minute = ending_minuts.get(requerd_shift_id);

        let checked_shift = new Set();
        for(let [emp_id, set_value] of date_shift_map){
            for(let day_value of set_value){
                let id = day_value.split("_")[0];
                let seniority = day_value.split("_")[1];

                let strting_time_this_shift = id_startingtime.get(id);
                let ending_time_this_shift = id_startingtime.get(id);

                if((number_of_empty_slot <= 0) && (seniority == seniority_level)){

                    if(!checked_shift.has()){
                        if(req_shift_strting_day_minute >= strting_time_this_shift){
                            if(req_shift_ending_day_minute <= ending_time_this_shift){
                                checked_shift.add(emp_id+"_"+day_value);
                                number_of_empty_slot--;
                            }
                        }else{

                        }
                    }
                }
                
            }   
        }


    }


    return number_of_empty_slot;
}



function shortMapByValue(map) {

    map[Symbol.iterator] = function* () {
        yield* [...this.entries()].sort((a, b) => b[1] - a[1]);
    }

    // for (let [key, value] of map){
    //     //console.log(key + ' ' +value);
    // }

    ////console.log([...map]);
    ////console.log([...map.entries()]);

    return map;

}


let i = comapre(shift_duration_map, shift_starting_time, 2, "S","1",date_map);

console.log(i);