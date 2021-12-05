
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



const functions = require("firebase-functions");
const admin = require("firebase-admin");


admin.initializeApp();





const E000_Constants = {
    day_shift: 'day_shift',
    evening_shift: 'evening_shift',
    night_shift: 'night_shift',

    leave: 'leave',
    undefined: 'undefined',

    night_off: 'night_off',
    week_off: 'week_off',
    COMPENSATORY_OFF: 'COMPENSATORY_OFF',
    PUBLIC_HOLIDAY: 'PUBLIC_HOLIDAY',
    EARN_LEAVE: 'EARN_LEAVE',
    CASUAL_LEAVE: 'CASUAL_LEAVE',
    SICK_LEAVE: 'SICK_LEAVE',

    attendance_present: 'attendance_present',
    attendance_absent: 'attendance_absent',
    attendance_notdefined: 'attendance_notdefined',

    mon: 'mon',
    tue: 'tue',
    wed: 'wed',
    thu: 'thu',
    fri: 'fri',
    sat: 'sat',
    sun: 'sun',

    s_nur: 's_nur',
    j_nur: 'j_nur',


    workingHourInNightShift: 'workingHourInNightShift',
    workingHourInDayShift: 'workingHourInDayShift',
    workingHourInEveningShift: 'workingHourInEveningShift',

    EditFlagMM: 'EditFlagMM',
    EditNotMon: 'EditNotMon',
    NewRowEdit: 'NewRowEdit',
    OldRowEdit: 'OldRowEdit',

    month_starting_priority: 'month_starting_priority',
    month_starting_working_hour: 'month_starting_working_hour',

    Even_conn: 'Even_conn',
    Odd_conn: 'Odd_conn',

    Supervisor: 'Supervisor',
    NormalUser: 'NormalUser',

    RosterShift: 'RosterShift',
    OnlyMorningOrEveningShiftedEmployee: 'OnlyMorningOrEveningShiftedEmployee',
    NormalShift: 'NormalShift',


    night_shift_in_priority: 'night_shift_in_priority',
    employee_leave_in_priority: 'employee_leave_in_priority'


}

function getIntValue(of_e_const) {
    switch (of_e_const) {

        case E000_Constants.day_shift: {
            return 1;
        }
        case E000_Constants.evening_shift: {
            return 2;
        }
        case E000_Constants.night_shift: {
            return 3;
        }
        case E000_Constants.leave: {
            return 4;
        }
        case E000_Constants.undefined: {
            return 2;
        }


        case E000_Constants.mon: {
            return 1;
        }
        case E000_Constants.tue: {
            return 2;
        }
        case E000_Constants.wed: {
            return 3;
        }
        case E000_Constants.thu: {
            return 4;
        }
        case E000_Constants.fri: {
            return 5;
        }
        case E000_Constants.sat: {
            return 6;
        }
        case E000_Constants.sun: {
            return 7;
        }

        case E000_Constants.s_nur: {
            return 1;
        }
        case E000_Constants.j_nur: {
            return 2;
        }

        case E000_Constants.workingHourInNightShift: {
            return 12;
        }
        case E000_Constants.workingHourInDayShift: {
            return 6;
        }
        case E000_Constants.workingHourInEveningShift: {
            return 6;
        }


        case E000_Constants.EditFlagMM: {
            return 0;
        }
        case E000_Constants.EditNotMon: {
            return 1;
        }
        case E000_Constants.NewRowEdit: {
            return 2;
        }
        case E000_Constants.OldRowEdit: {
            return 3;
        }

        case E000_Constants.month_starting_priority: {
            return 60;
        }
        case E000_Constants.month_starting_working_hour: {
            return 206;
        }

        case E000_Constants.Even_conn: {
            return 0;
        }
        case E000_Constants.Odd_conn: {
            return 1;
        }


    }
}

function getCode(of_e_const) {
    switch (of_e_const) {

        case E000_Constants.day_shift: {
            return 'D';
        }
        case E000_Constants.evening_shift: {
            return 'E';
        }
        case E000_Constants.night_shift: {
            return 'N';
        }
        case E000_Constants.leave: {
            return 'L';
        }
        case E000_Constants.undefined: {
            return 'X';
        }

        case E000_Constants.attendance_present: {
            return 'P';
        }
        case E000_Constants.attendance_notdefined: {
            return 'N';
        }
        case E000_Constants.attendance_absent: {
            return 'A';
        }

        case E000_Constants.night_off: {
            return 'NO';
        }
        case E000_Constants.week_off: {
            return 'WO';
        }
        case E000_Constants.COMPENSATORY_OFF: {
            return "CO";
        }
        case E000_Constants.PUBLIC_HOLIDAY: {
            return "PH";
        }
        case E000_Constants.EARN_LEAVE: {
            return "EL";
        }
        case E000_Constants.CASUAL_LEAVE: {
            return "CL";
        }
        case E000_Constants.SICK_LEAVE: {
            return "SL";
        }


        case E000_Constants.mon: {
            return 'mon';
        }
        case E000_Constants.tue: {
            return 'tue';
        }
        case E000_Constants.wed: {
            return 'wed';
        }
        case E000_Constants.thu: {
            return 'thu';
        }
        case E000_Constants.fri: {
            return 'fri';
        }
        case E000_Constants.sat: {
            return 'sat';
        }
        case E000_Constants.sun: {
            return 'sun';
        }

        case E000_Constants.s_nur: {
            return 'senior_nurse';
        }
        case E000_Constants.j_nur: {
            return 'junior_nurse';
        }
        case E000_Constants.m_nur: {
            return 'semi_senior_nurse';
        }

        case E000_Constants.workingHourInNightShift: {
            return '12';
        }
        case E000_Constants.workingHourInDayShift: {
            return '6';
        }
        case E000_Constants.workingHourInEveningShift: {
            return '6';
        }


        case E000_Constants.EditFlagMM: {
            return 'MM';
        }
        case E000_Constants.EditNotMon: {
            return 'NM';
        }
        case E000_Constants.NewRowEdit: {
            return 'NW';
        }
        case E000_Constants.OldRowEdit: {
            return 'OL';
        }

        case E000_Constants.month_starting_priority: {
            return '60';
        }
        case E000_Constants.month_starting_working_hour: {
            return '206';
        }

        case E000_Constants.Even_conn: {
            return 'even';
        }
        case E000_Constants.Odd_conn: {
            return 'odd';
        }

        case E000_Constants.Supervisor: {
            return 'S';
        }
        case E000_Constants.NormalUser: {
            return 'N';
        }


        case E000_Constants.RosterShift: {
            return 'R';
        }
        case E000_Constants.NormalShift: {
            return 'D';
        }
        case E000_Constants.OnlyMorningOrEveningShiftedEmployee: {
            return 'F';
        }

        case E000_Constants.night_shift_in_priority: {
            return "NPM";
        }

        case E000_Constants.employee_leave_in_priority: {
            return "ELPM";
        }



    }
}


const W000_Constants = {
    Present_in_same_day_shift: 'Present_in_same_day_shift',
    present_in_same_shift_in_yesteday: 'present_in_same_shift_in_yesteday',
    night_shift_requesr: 'night_shift_requesr',
    continue_max_day_inWeek: 'continue_max_day_inWeek',
    senior_in_junior_shift: 'senior_in_junior_shift',
    NotGetLeaveInPast4Days: 'NotGetLeaveInPast4Days',
    Leave_of_employee: 'Leave_of_employee',
    morning_shift_rejection_after_night_off: 'morning_shift_rejection_after_night_off',
    AdditionalWaightageOnRequestedEmployeeScore: "AdditionalWaightageOnRequestedEmployeeScore",
    more_than3_wo: "more_than3_wo"
}

function getWaight(Code) {
    switch (Code) {

        case W000_Constants.Present_in_same_day_shift: {
            //negative waightage
            return 2400;
        }
        case W000_Constants.present_in_same_shift_in_yesteday: {
            return 300;
        }
        case W000_Constants.night_shift_requesr: {
            return 60;
        }
        case W000_Constants.continue_max_day_inWeek: {
            //negative waightage
            return 6000;
        }

        case W000_Constants.senior_in_junior_shift: {
            //negative waightage
            return 12000;
        }

        case W000_Constants.morning_shift_rejection_after_night_off: {
            //negative waightage
            return 12000;
        }

        //

        case W000_Constants.NotGetLeaveInPast4Days: {
            //negative waightage
            return 12000;
        }
        //

        case W000_Constants.Leave_of_employee: {
            //negative waightage
            return 360;
        }
        //
        case W000_Constants.AdditionalWaightageOnRequestedEmployeeScore: {
            //positive waightage
            return 24000;
        }

        case W000_Constants.more_than3_wo: {
            //positive waightage
            return 80000;
        }


    }
}

const E001_Employee = {
    E001_Employee: 'E001_Employee',
    name: 'name',
    skills: 'skills',
    exp_year: 'exp_year',
    unit_id: 'unit_id',
    user_id: 'user_id',
    hospital_id: 'hospital_id',
    connected_Employee_id: 'connected_Employee_id',
    connection_type: 'connection_Type',
    connected_emp_hospital_id: "connected_emp_hospital_id",
    shift_type: 'shift_type',
    priority: 'priority',
    fixed_working_hour: 'fixed_working_hour',
    remaining_working_hour: 'remaining_working_hour',
    emp_type: 'emp_type',
    employee_morning_temp: 'employee_morning_temp',
    employee_evning_temp: 'employee_evning_temp',
    ID: 'ID',
    TimeStamp: 'TimeStamp',
    EditFlagRow: 'EditFlagRow'
}

const E002_Shift = {
    E002_Shift: 'E002_Shift',

    skill: 'skill',
    shift: 'shift',
    date: 'date',
    employee_id: 'employee_id',
    attendance: 'attendance',

    unit_id: 'unit_id',
    ID: 'ID', //  unit_id@year@month

    date_shift_skill: "date_shift_skill",
    year: "year",
    month: "month",

    TimeStamp: 'TimeStamp',
    EditFlagRow: 'EditFlagRow'
}


const E002_Roaster = {
    E002_Roaster: 'E002_Roaster',

    unit_id: 'unit_id',

    ID: 'ID', //  unit_id@yearMonth

    roster: "roster",// {date_shift : skill, date_shift : skill, date_shift : skill} //{Emp1={"date4":"[1_S_X]","date3":"[1_S_X]","date2":"[1_S_X]","date1":"[1_S_X, 2_S_X]"}, Emp3={"date4":"[1_S_X]","date3":"[1_S_X]","date2":"[1_S_X]","date1":"[1_S_X, 2_S_X]"}, Emp2={"date4":"[1_S_X]","date3":"[1_S_X]","date2":"[1_S_X]","date1":"[1_S_X, 2_S_X]"}}

    year: "year",
    month: "month",
    yearMonth: 'yearMonth',//YYYYMM
}

const E003_LeaveCalendar = {
    E003_LeaveCalendar: 'E003_LeaveCalendar',
    employee_id: 'employee_id',
    date: 'date',
    leave_type: 'leave_type',
    unit_id: 'unit_id',
    ID: 'ID',
    leave_db_id: 'leave_db_id',
    TimeStamp: 'TimeStamp',
    EditFlagRow: 'EditFlagRow'
}

const E003_LeaveOnCalendar = {
    E003_LeaveOnCalendar: 'E003_LeaveOnCalendar',
    unit_id: 'unit_id',
    ID: 'ID', //  unit_id@employee_id@year
    employee_id: "employee_id",
    leave_map: "leave_map",//  {date : leaveType_leaveDbID, date : leaveType_leaveDbID, date : leaveType_leaveDbID}

    year: "year"
}

const E004_EmployeRequests = {
    E004_EmployeRequests: 'E004_EmployeRequests',
    employee_id: 'employee_id',
    date: 'date',
    shift: 'shift',
    skills: 'skills',
    unit_id: 'unit_id',
    ID: 'ID',
    //shift_number = {1,2,3}
    dateShiftList: 'dateShiftList', // YYYYMMDD@{shift_number},20210501@1,20210502@3,20210501@1......


    TimeStamp: 'TimeStamp',
    EditFlagRow: 'EditFlagRow'
}

const E005_Unit = {
    E005_Unit: 'E005_Unit',
    name: 'name',
    shift_duration_map: 'shift_duration_map',
    shift_starting_time: 'shift_starting_time',

    hospitan_id: 'hospitan_id',
    supervisor_employee_id: 'supervisor_employee_id',

    day_shift: 'day_shift_starting',
    evning_shift: 'evning_shift_starting',
    night_shift: 'night_shift_starting',
    numberOfEmployees: 'numberOfEmployees',

    day_shift_employee: 'day_shift_employee',
    evening_shift_employee: 'evening_shift_employee',
    night_shift_employee: 'night_shift_employee',

    fixed_working_hour: 'fixed_working_hour',

    roster_rules: 'roster_rules',
    roaster_last_starting_date: 'roaster_last_starting_date',
    night_shift_mode: 'night_shift_mode',

    ID: 'ID',
    TimeStamp: 'TimeStamp',
    EditFlagRow: 'EditFlagRow'
}



const E008_LeaveDB = {
    E008_LeaveDB: 'E008_LeaveDB',
    starting_date: 'starting_date',
    ending_date: 'ending_date',
    leave_type: 'leave_type',
    leave_count: 'leave_count',

    employee_id: 'employee_id',
    unit_id: 'unit_id',
    leave_detail: 'leave_detail',

    ID: 'ID',// starting_date@ending_date@leave_type@unit_id
    TimeStamp: 'TimeStamp',
    EditFlagRow: 'EditFlagRow'

}



function getListOfEmployees(number_of_senior_employees, number_of_junior_emp, number_of_trainee, unit_id, number_of_senior_and_junior) {

    var list_of_emp = [];

    ////console.log("msp : "+getIntValue(E000_Constants.month_starting_priority));


    var emp_name = 'name:0';
    var skills = 'S';
    var exp_year = 20;
    var hospital_id = 'X';
    var user_id = 'X';
    var unit_type = unit_id;
    var shift_type = getCode(E000_Constants.NormalShift);
    var connected_Employee_id = 'X';
    var connection_type = 'N';
    var priority = getIntValue(E000_Constants.month_starting_priority);
    var fixed_working_hour = getIntValue(E000_Constants.month_starting_working_hour);
    var remaining_working_hour = 0;
    var ID = "0@" + unit_type;
    var TimeStamp = 'now()';
    var emp_type = getCode(E000_Constants.Supervisor);
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E001_Employee.name, emp_name);
    emp_object.set(E001_Employee.skills, skills);
    emp_object.set(E001_Employee.exp_year, exp_year);
    emp_object.set(E001_Employee.unit_id, unit_type);
    emp_object.set(E001_Employee.shift_type, shift_type);
    emp_object.set(E001_Employee.connection_type, connection_type);
    emp_object.set(E001_Employee.connected_Employee_id, connected_Employee_id);
    emp_object.set(E001_Employee.priority, priority);
    emp_object.set(E001_Employee.fixed_working_hour, fixed_working_hour);
    emp_object.set(E001_Employee.remaining_working_hour, remaining_working_hour);
    emp_object.set(E001_Employee.emp_type, emp_type);
    emp_object.set(E001_Employee.user_id, user_id);
    emp_object.set(E001_Employee.hospital_id, hospital_id);
    emp_object.set(E001_Employee.ID, ID);
    emp_object.set(E001_Employee.TimeStamp, TimeStamp);
    emp_object.set(E001_Employee.EditFlagRow, EditFlagRow);

    list_of_emp[0] = emp_object;

    ID = "1@" + unit_type;
    emp_object = new Map();
    emp_object.set(E001_Employee.name, "nam1:1");
    emp_object.set(E001_Employee.skills, skills);
    emp_object.set(E001_Employee.exp_year, exp_year);
    emp_object.set(E001_Employee.unit_id, unit_type);
    emp_object.set(E001_Employee.shift_type, shift_type);
    emp_object.set(E001_Employee.connection_type, connection_type);
    emp_object.set(E001_Employee.connected_Employee_id, connected_Employee_id);
    emp_object.set(E001_Employee.priority, priority);
    emp_object.set(E001_Employee.fixed_working_hour, fixed_working_hour);
    emp_object.set(E001_Employee.remaining_working_hour, remaining_working_hour);
    emp_object.set(E001_Employee.emp_type, emp_type);
    emp_object.set(E001_Employee.user_id, user_id);
    emp_object.set(E001_Employee.hospital_id, hospital_id);
    emp_object.set(E001_Employee.ID, ID);
    emp_object.set(E001_Employee.TimeStamp, TimeStamp);
    emp_object.set(E001_Employee.EditFlagRow, EditFlagRow);

    list_of_emp[1] = emp_object;


    for (var i = 2; i < number_of_senior_employees; i++) {
        ////console.log('employee: '+i);

        var emp_name = 'name:' + i;
        var skills = 'S';
        var exp_year = 20;
        var hospital_id = 'X';
        var user_id = 'X';
        var unit_type = unit_id;
        var shift_type = getCode(E000_Constants.RosterShift);
        var connected_Employee_id = 'X';
        var connection_type = 'N';
        var priority = getIntValue(E000_Constants.month_starting_priority);
        var fixed_working_hour = getIntValue(E000_Constants.month_starting_working_hour);
        var remaining_working_hour = 0;
        var ID = i + "@" + unit_type;
        var TimeStamp = 'now()';
        var emp_type = getCode(E000_Constants.NormalUser);
        var EditFlagRow = getCode(E000_Constants.NewRowEdit);


        var emp_object = new Map();
        emp_object.set(E001_Employee.name, emp_name);
        emp_object.set(E001_Employee.skills, skills);
        emp_object.set(E001_Employee.exp_year, exp_year);
        emp_object.set(E001_Employee.unit_id, unit_type);
        emp_object.set(E001_Employee.shift_type, shift_type);
        emp_object.set(E001_Employee.connection_type, connection_type);
        emp_object.set(E001_Employee.connected_Employee_id, connected_Employee_id);
        emp_object.set(E001_Employee.priority, priority);
        emp_object.set(E001_Employee.fixed_working_hour, fixed_working_hour);
        emp_object.set(E001_Employee.remaining_working_hour, remaining_working_hour);
        emp_object.set(E001_Employee.emp_type, emp_type);
        emp_object.set(E001_Employee.hospital_id, hospital_id);
        emp_object.set(E001_Employee.user_id, user_id);
        emp_object.set(E001_Employee.ID, ID);
        emp_object.set(E001_Employee.TimeStamp, TimeStamp);
        emp_object.set(E001_Employee.EditFlagRow, EditFlagRow);

        list_of_emp[i] = emp_object;
    }

    for (var i = number_of_senior_employees; i < (number_of_senior_employees + number_of_junior_emp); i++) {
        ////console.log('employee: '+i);

        var emp_name = 'name:' + i;
        var skills = 'J';
        var exp_year = 20;
        var hospital_id = 'X';
        var unit_type = unit_id;
        var shift_type = 'R';
        var user_id = 'X';
        var connected_Employee_id = 'X';
        var connection_type = 'N';
        var priority = getIntValue(E000_Constants.month_starting_priority);
        var fixed_working_hour = getIntValue(E000_Constants.month_starting_working_hour);
        var remaining_working_hour = 0;
        var ID = i + "@" + unit_type;
        var TimeStamp = 'now()';
        var emp_type = getCode(E000_Constants.NormalUser);
        var EditFlagRow = getCode(E000_Constants.NewRowEdit);


        var emp_object = new Map();
        emp_object.set(E001_Employee.name, emp_name);
        emp_object.set(E001_Employee.skills, skills);
        emp_object.set(E001_Employee.exp_year, exp_year);
        emp_object.set(E001_Employee.unit_id, unit_type);
        emp_object.set(E001_Employee.shift_type, shift_type);
        emp_object.set(E001_Employee.connection_type, connection_type);
        emp_object.set(E001_Employee.connected_Employee_id, connected_Employee_id);
        emp_object.set(E001_Employee.priority, priority);
        emp_object.set(E001_Employee.fixed_working_hour, fixed_working_hour);
        emp_object.set(E001_Employee.remaining_working_hour, remaining_working_hour);
        emp_object.set(E001_Employee.emp_type, emp_type);
        emp_object.set(E001_Employee.user_id, user_id);
        emp_object.set(E001_Employee.hospital_id, hospital_id);
        emp_object.set(E001_Employee.ID, ID);
        emp_object.set(E001_Employee.TimeStamp, TimeStamp);
        emp_object.set(E001_Employee.EditFlagRow, EditFlagRow);

        list_of_emp[i] = emp_object;


    }

    for (var i = (number_of_senior_employees + number_of_junior_emp); i < (number_of_trainee + number_of_senior_employees + number_of_junior_emp); i++) {
        ////console.log('employee: '+i);

        var emp_name = 'name:' + i;
        var skills = 'T';
        var exp_year = 20;
        var hospital_id = 'X';
        var unit_type = unit_id;
        var user_id = 'X';
        var shift_type = 'R';
        var connected_Employee_id = 'X';
        var connection_type = 'N';
        var priority = getIntValue(E000_Constants.month_starting_priority);
        var fixed_working_hour = getIntValue(E000_Constants.month_starting_working_hour);
        var remaining_working_hour = 0;
        var ID = i + "@" + unit_type;
        var TimeStamp = 'now()';
        var emp_type = getCode(E000_Constants.NormalUser);
        var EditFlagRow = getCode(E000_Constants.NewRowEdit);


        var emp_object = new Map();
        emp_object.set(E001_Employee.name, emp_name);
        emp_object.set(E001_Employee.skills, skills);
        emp_object.set(E001_Employee.exp_year, exp_year);
        emp_object.set(E001_Employee.unit_id, unit_type);
        emp_object.set(E001_Employee.shift_type, shift_type);
        emp_object.set(E001_Employee.connection_type, connection_type);
        emp_object.set(E001_Employee.connected_Employee_id, connected_Employee_id);
        emp_object.set(E001_Employee.priority, priority);
        emp_object.set(E001_Employee.fixed_working_hour, fixed_working_hour);
        emp_object.set(E001_Employee.remaining_working_hour, remaining_working_hour);
        emp_object.set(E001_Employee.emp_type, emp_type);
        emp_object.set(E001_Employee.user_id, user_id);
        emp_object.set(E001_Employee.hospital_id, hospital_id);
        emp_object.set(E001_Employee.ID, ID);
        emp_object.set(E001_Employee.TimeStamp, TimeStamp);
        emp_object.set(E001_Employee.EditFlagRow, EditFlagRow);

        list_of_emp[i] = emp_object;


    }

    for (var i = (number_of_trainee + number_of_senior_employees + number_of_junior_emp); i < (number_of_senior_and_junior + number_of_trainee + number_of_senior_employees + number_of_junior_emp); i++) {
        ////console.log('employee: '+i);

        var emp_name = 'name:' + i;
        var skills = 'S-J';
        var exp_year = 20;
        var hospital_id = 'X';
        var unit_type = unit_id;
        var user_id = 'X';
        var shift_type = 'R';
        var connected_Employee_id = 'X';
        var connection_type = 'N';
        var priority = getIntValue(E000_Constants.month_starting_priority);
        var fixed_working_hour = getIntValue(E000_Constants.month_starting_working_hour);
        var remaining_working_hour = 0;
        var ID = i + "@" + unit_type;
        var TimeStamp = 'now()';
        var emp_type = getCode(E000_Constants.NormalUser);
        var EditFlagRow = getCode(E000_Constants.NewRowEdit);


        var emp_object = new Map();
        emp_object.set(E001_Employee.name, emp_name);
        emp_object.set(E001_Employee.skills, skills);
        emp_object.set(E001_Employee.exp_year, exp_year);
        emp_object.set(E001_Employee.unit_id, unit_type);
        emp_object.set(E001_Employee.shift_type, shift_type);
        emp_object.set(E001_Employee.connection_type, connection_type);
        emp_object.set(E001_Employee.connected_Employee_id, connected_Employee_id);
        emp_object.set(E001_Employee.priority, priority);
        emp_object.set(E001_Employee.fixed_working_hour, fixed_working_hour);
        emp_object.set(E001_Employee.remaining_working_hour, remaining_working_hour);
        emp_object.set(E001_Employee.emp_type, emp_type);
        emp_object.set(E001_Employee.user_id, user_id);
        emp_object.set(E001_Employee.hospital_id, hospital_id);
        emp_object.set(E001_Employee.ID, ID);
        emp_object.set(E001_Employee.TimeStamp, TimeStamp);
        emp_object.set(E001_Employee.EditFlagRow, EditFlagRow);

        list_of_emp[i] = emp_object;


    }


    ////console.log(list_of_emp);
    return list_of_emp;

}

function getListOfLeave(unit_id) {

    var list_of_emp = [];

    ////console.log("msp : "+getIntValue(E000_Constants.month_starting_priority));

    ///////////////////////////////////////////////PL///////////////////////////////////////////////////////
    var starting_date = 20210101;
    var ending_date = 20211230;
    var leave_type = 'PL';
    var leave_count = 25;

    var employee_id = 'ALL';
    var unit_id = unit_id;
    var leave_detail = 'PREVELAGED LEAVE';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    // "20210101@20211230@PL@"+unit_id+"@ALL"
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[0] = emp_object;



    /////////////////////////////////////////////SL///////////////////////////////////////////////////////////


    var starting_date = 20210101;
    var ending_date = 20211230;
    var leave_type = 'SL';
    var leave_count = 5;

    var employee_id = 'ALL';
    var unit_id = unit_id;
    var leave_detail = 'SICK LEAVE';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[1] = emp_object;


    /////////////////////////////////////////////CL///////////////////////////////////////////////////////////

    var starting_date = 20210101;
    var ending_date = 20211230;
    var leave_type = 'CL';
    var leave_count = 5;

    var employee_id = 'ALL';
    var unit_id = unit_id;
    var leave_detail = 'CASUAL LEAVE';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[2] = emp_object;

    /////////////////////////////////////////////EL for emp1///////////////////////////////////////////////////////////

    var starting_date = 20210101;
    var ending_date = 20211230;
    var leave_type = 'EL';
    var leave_count = 2;

    var employee_id = '1@' + unit_id;
    var unit_id = unit_id;
    var leave_detail = 'EARN LEAVE';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[3] = emp_object;

    /////////////////////////////////////////////EL for emp4///////////////////////////////////////////////////////////

    var starting_date = 20210101;
    var ending_date = 20211230;
    var leave_type = 'EL';
    var leave_count = 1;

    var employee_id = '4@' + unit_id;
    var unit_id = unit_id;
    var leave_detail = 'EARN LEAVE';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[4] = emp_object;

    /////////////////////////////////////////////PH1///////////////////////////////////////////////////////////

    var starting_date = 20211021;//'PUBLIC HOLIDAY'
    var ending_date = 20211121;
    var leave_type = 'CO';
    var leave_count = 1;

    var employee_id = "ALL";
    var unit_id = unit_id;
    var leave_detail = 'COMPENSATORY OFF for DurgaPuja1';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[5] = emp_object;

    /////////////////////////////////////////////PH2///////////////////////////////////////////////////////////

    var starting_date = 20211022;//'PUBLIC HOLIDAY'
    var ending_date = 20211122;
    var leave_type = 'CO';
    var leave_count = 1;

    var employee_id = "ALL";
    var unit_id = unit_id;
    var leave_detail = 'COMPENSATORY OFF for DurgaPuja2';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[6] = emp_object;
    /////////////////////////////////////////////PH3///////////////////////////////////////////////////////////

    var starting_date = 20211023;//'PUBLIC HOLIDAY'
    var ending_date = 20211123;
    var leave_type = 'CO';
    var leave_count = 1;

    var employee_id = "ALL";
    var unit_id = unit_id;
    var leave_detail = 'COMPENSATORY OFF for DurgaPuja3';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[7] = emp_object;


    ////console.log(list_of_emp);


    /////////////////////////////////////////////PH4///////////////////////////////////////////////////////////

    var starting_date = 20211024;//'PUBLIC HOLIDAY'
    var ending_date = 20211124;
    var leave_type = 'CO';
    var leave_count = 1;

    var employee_id = "ALL";
    var unit_id = unit_id;
    var leave_detail = 'COMPENSATORY OFF for DurgaPuja4';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;//20211025@2021125@CO@"+unit_id+"@ALL"
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[8] = emp_object;
    /////////////////////////////////////////////PH5///////////////////////////////////////////////////////////

    var starting_date = 20211025;//'PUBLIC HOLIDAY'
    var ending_date = 20211125;
    var leave_type = 'CO';
    var leave_count = 1;

    var employee_id = "ALL";
    var unit_id = unit_id;
    var leave_detail = 'COMPENSATORY OFF for DurgaPuja4';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;//20211025@2021125@CO@"+unit_id+"@ALL"
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[9] = emp_object;

    /////////////////////////////////////////////PH6///////////////////////////////////////////////////////////

    var starting_date = 20210625;//'PUBLIC HOLIDAY'
    var ending_date = 20210725;
    var leave_type = 'CO';
    var leave_count = 1;

    var employee_id = "ALL";
    var unit_id = unit_id;
    var leave_detail = 'COMPENSATORY OFF for PublicHoliday';
    var ID = starting_date + "@" + ending_date + "@" + leave_type + "@" + unit_id + "@" + employee_id;//20210625@20210725@CO@"+unit_id+"@ALL"
    var TimeStamp = 'now()';
    var EditFlagRow = getCode(E000_Constants.NewRowEdit);


    var emp_object = new Map();
    emp_object.set(E008_LeaveDB.starting_date, starting_date);
    emp_object.set(E008_LeaveDB.ending_date, ending_date);
    emp_object.set(E008_LeaveDB.leave_type, leave_type);
    emp_object.set(E008_LeaveDB.leave_count, leave_count);

    emp_object.set(E008_LeaveDB.employee_id, employee_id);
    emp_object.set(E008_LeaveDB.unit_id, unit_id);
    emp_object.set(E008_LeaveDB.leave_detail, leave_detail);
    emp_object.set(E008_LeaveDB.ID, ID);
    emp_object.set(E008_LeaveDB.TimeStamp, TimeStamp);
    emp_object.set(E008_LeaveDB.EditFlagRow, EditFlagRow);

    list_of_emp[10] = emp_object;



    return list_of_emp;

}

function getRandomRequests(starting_date, ending_date, employee) {



    var c = new Date();

    //console.log('year: ' + starting_date.substring(0, 4));
    //console.log('month: ' + starting_date.substring(4, 6));
    //console.log('date: ' + starting_date.substring(6, 8));

    c.setFullYear(starting_date.substring(0, 4));
    c.setMonth((starting_date.substring(4, 6) - 1));
    c.setDate(starting_date.substring(6, 8));

    var list_of_emp_req = [];


    if (parseInt(ending_date) >= parseInt(starting_date)) {

        var day = c.getDate() - 1; // for looping 
        c.setDate(day);
        var loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());

        let index = 0;


        var unit = employee.unit_id;
        var skill = employee.skills;
        var id = employee.ID;
        var timestamp = admin.firestore.FieldValue.serverTimestamp();

        //dateShiftList

        var emp_object = new Map();

        var dateShiftList = '';

        let isFirtst = true;
        for (var i = (day + 1); (loop_date != parseInt(ending_date)); i++) {


            //console.log('loop_date : ' + loop_date);

            var day = c.getDate() + 1;
            c.setDate(day);
            loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());


            var shift = Math.floor(((((Math.random() * 300) / 100) + 1)));



            ////console.log("ID : "+ID);

            if (isFirtst) {
                dateShiftList = loop_date + "@" + shift;
                isFirtst = false;
            } else {
                dateShiftList = dateShiftList + "," + loop_date + "@" + shift;
            }
        }



        // emp_object.set(E004_EmployeRequests.date, loop_date);
        // emp_object.set(E004_EmployeRequests.shift, shift);

        emp_object.set(E004_EmployeRequests.dateShiftList, dateShiftList);
        emp_object.set(E004_EmployeRequests.employee_id, id);
        emp_object.set(E004_EmployeRequests.unit_id, unit);
        emp_object.set(E004_EmployeRequests.skills, skill);
        emp_object.set(E004_EmployeRequests.ID, unit + "@" + id);
        emp_object.set(E004_EmployeRequests.TimeStamp, timestamp);
        emp_object.set(E004_EmployeRequests.EditFlagRow, 'NW');

        list_of_emp_req[index] = emp_object;
        index++;

    }

    //console.log('list_of_emp_req');


    //console.log(list_of_emp_req);

    return list_of_emp_req;


}


exports.request = functions
    .region('asia-northeast3').https.onRequest((req, res) => {

        if (req.method === 'PUT') {
            return res.status(403).send('Forbidden!');
        }



        // //console.log('request query: ');
        // //console.log(req.query);


        var u = req.query.u;
        var s = req.query.s;
        var e = req.query.e;
        var hospital_ID_path = "/Nursing/" + req.query.h + "/";

        // //console.log('u: ' + u);
        // //console.log('s: ' + s);
        // //console.log('e: ' + e);



        var style_title_head1 =
            "<head>" +
            "<style>" +
            "table {" +
            " width:100%;" +
            "}" +
            "table, th, td {" +
            "border: 1px solid black;" +
            "border-collapse: collapse;" +
            "}" +
            "th, td {" +
            "padding: 15px;" +
            "text-align: left;" +
            "}" +
            "#t01 tr:nth-child(even) {" +
            "background-color: #eee;" +
            "}" +
            "#t01 tr:nth-child(odd) {" +
            "background-color: #fff;" +
            "}" +
            "#t01 th {" +
            "background-color: #212F3D;" +
            "color: white;" +
            "}" +

            "#C1 {" +
            "background-color: #3498DB;" +
            "color: white;" +
            "}" +

            "#C2 {" +
            "background-color: #28B463;" +
            "color: white;" +
            "}" +

            "#C3 {" +
            "background-color: #BA4A00;" +
            "color: white;" +
            "}" +

            "#C12 {" +
            "background-color: #8E44AD;" +
            "color: white;" +
            "}" +

            "#NO {" +
            "background-color: #34495E;" +
            "color: white;" +
            "}" +

            "#WO {" +
            "background-color: #DAF7A6;" +
            "color: #34495E;" +
            "}" +

            "</style>" +
            "</head>" +
            "<body>" +

            "<h2>Roster Table</h2>" +
            "<table id=\"t01\">";





        // //console.log('u: ' + u);
        // //console.log('s: ' + s);
        // //console.log('e: ' + e);

        if (s.length != 8) {
            return res.status(403).send('Forbidden!');
        }
        if (e.length != 8) {
            return res.status(403).send('Forbidden!');
        }

        if (parseInt(s) > parseInt(e)) {
            return res.status(403).send('Forbidden!');
        }

        try {

            let strting_year = parseInt(s.substring(0, 4));
            let starting_month = parseInt(s.substring(4, 6));

            let ending_year = parseInt(e.substring(0, 4));
            let ending_month = parseInt(e.substring(4, 6));

            if (strting_year != ending_year) {
                return res.status(403).send('Forbidden!');
            }

            if (starting_month > ending_month) {
                return res.status(403).send('Forbidden!');
            }

            if ((ending_month - starting_month) > 1) {
                return res.status(403).send('Forbidden!');
            }

        } catch (err) {
            //console.log(err);
        }

        let starting_date_d = new Date();

        // //console.log('year: ' + starting_date.substring(0, 4));
        // //console.log('month: ' + starting_date.substring(4, 6));
        // //console.log('date: ' + starting_date.substring(6, 8));

        starting_date_d.setFullYear(s.substring(0, 4));
        starting_date_d.setMonth((s.substring(4, 6) - 1));
        starting_date_d.setDate(s.substring(6, 8));


        let date1 = '';

        let day = starting_date_d.getDate() - 1;
        starting_date_d.setDate(day);

        let date_list = [];
        let date_list_int = [];

        let day_comp = 0;

        for (let i = 0; (day_comp < parseInt(e)); i++) {

            let day = starting_date_d.getDate() + 1;
            starting_date_d.setDate(day);
            day_comp = starting_date_d.getFullYear() * 10000 + (starting_date_d.getMonth() + 1) * 100 + starting_date_d.getDate();
            date1 = starting_date_d.getDate() + '/' + (starting_date_d.getMonth() + 1);
            // //console.log(date1);
            date_list.push(date1);
            date_list_int.push(day_comp);
        }

        ////console.log(date_list);


        var table_column_name2 = "<tr>" +
            "<th>Employee ID</th>";
        for (let d of date_list) {
            table_column_name2 = table_column_name2 + "<th>" + d + "</th> ";
        }

        table_column_name2 = table_column_name2 + "</tr>";



        var emp_data3 =
            "<tr>" +
            "<td>Jill</td>" +
            "<td>Smith</td>" +
            "<td>50</td>" +
            "</tr>" +

            "<tr>" +
            "<td>Eve</td>" +
            "<td>Jackson</td>" +
            "<td>94</td>" +
            "</tr>" +

            "<tr>" +
            "<td>John</td>" +
            "<td>Doe</td>" +
            "<td>80</td>" +
            "</tr>";

        var data_tale4 =
            "</table>" +
            "</body>" +
            "</html>";



        //style_title+table_content
        //res.send(style_title_head1+table_column_name2+emp_data3+data_tale4);


        let emp_value = getEmployeeRequest(hospital_ID_path, s, e, u);


        let employee_stringWork = new Map();

        emp_value.then((value) => {


            ////console.log(value);
            ////console.log(" aa giyaa");

            //table_column_name2 = '';

            let map_of_dates = new Set();

            for (let d of date_list_int) {

                for (let [emp_id, date_work] of value) {
                    if (date_work.has(d)) {

                        let str = '';
                        let id = 'C';
                        let isFirst = true;
                        for (let s of date_work.get(d)) {

                            if (isFirst) {
                                str = s;
                                id += s.split(':')[1];

                                isFirst = false;
                            } else {
                                str = str + ':' + s;
                                id += s.split(':')[1];
                            }

                            if (id == 'Cundefined') {
                                id = s;
                            }

                        }
                        let work = "<td id =\"" + id + "\">" + str + "</td>";

                        if (employee_stringWork.has(emp_id)) {
                            let emp_str = employee_stringWork.get(emp_id);
                            work = emp_str + work
                        }
                        employee_stringWork.set(emp_id, work);

                    } else {
                        let work = "<td>UND</td>";
                        if (employee_stringWork.has(emp_id)) {
                            let emp_str = employee_stringWork.get(emp_id);
                            work = emp_str + work
                        }
                        employee_stringWork.set(emp_id, work);
                    }
                }
            }


            emp_data3 = '';
            for (let [emp_id, date_work] of employee_stringWork) {

                emp_data3 = emp_data3 + "<tr>" +
                    "<td>" + emp_id + "</td>" +
                    date_work +
                    "</tr>";

            }


            ////console.log(emp_data3);

            res.send(style_title_head1 + table_column_name2 + emp_data3 + data_tale4);

            return;
        }).catch((err) => {
            console.log(err);
        })


    });

exports.requestCheck = functions
    .region('asia-northeast3').https.onRequest((req, res) => {

        if (req.method === 'PUT') {
            return res.status(403).send('Forbidden!');
        }



        console.log('request query: ');
        console.log(req.query);


        var r = req.query.r; // R = roaster; S = Shift
        var u = req.query.u;
        var s = req.query.s;
        var e = req.query.e;
        var hospital_ID_path = "/Nursing/" + req.query.h + "/";

        console.log('u: ' + u);
        console.log('s: ' + s);
        console.log('e: ' + e);
        console.log('h: ' + hospital_ID_path);




        var style_title_head1 =
            "<head>" +
            "<style>" +
            "table {" +
            " width:100%;" +
            "}" +
            "table, th, td {" +
            "border: 1px solid black;" +
            "border-collapse: collapse;" +
            "}" +
            "th, td {" +
            "padding: 15px;" +
            "text-align: left;" +
            "}" +
            "#t01 tr:nth-child(even) {" +
            "background-color: #eee;" +
            "}" +
            "#t01 tr:nth-child(odd) {" +
            "background-color: #fff;" +
            "}" +
            "#t01 th {" +
            "background-color: #212F3D;" +
            "color: white;" +
            "}" +

            "#C1 {" +
            "background-color: #3498DB;" +
            "color: white;" +
            "}" +

            "#C2 {" +
            "background-color: #28B463;" +
            "color: white;" +
            "}" +

            "#C3 {" +
            "background-color: #BA4A00;" +
            "color: white;" +
            "}" +

            "#C12 {" +
            "background-color: #8E44AD;" +
            "color: white;" +
            "}" +

            "#NO {" +
            "background-color: #34495E;" +
            "color: white;" +
            "}" +

            "#WO {" +
            "background-color: #DAF7A6;" +
            "color: #34495E;" +
            "}" +

            "#CO {" +
            "background-color: #34495E;" +
            "color: #F24D1B;" +
            "}" +

            "#PL {" +
            "background-color: #A1CAF1;" +
            "color: #0B12EB;" +
            "}" +

            "#EL {" +
            "background-color: #879588;" +
            "color: white;" +
            "}" +

            "</style>" +
            "</head>" +
            "<body>" +

            "<h2>Roster Table</h2>" +
            "<table id=\"t01\">";




        // //console.log('u: ' + u);
        // //console.log('s: ' + s);
        // //console.log('e: ' + e);

        if (s.length != 8) {
            return res.status(403).send('Forbidden!');
        }
        if (e.length != 8) {
            return res.status(403).send('Forbidden!');
        }

        if (parseInt(s) > parseInt(e)) {
            return res.status(403).send('Forbidden!');
        }

        try {

            let strting_year = parseInt(s.substring(0, 4));
            let starting_month = parseInt(s.substring(4, 6));

            let ending_year = parseInt(e.substring(0, 4));
            let ending_month = parseInt(e.substring(4, 6));

            if (strting_year != ending_year) {
                return res.status(403).send('Forbidden!');
            }

            if (starting_month > ending_month) {
                return res.status(403).send('Forbidden!');
            }

            if ((ending_month - starting_month) > 1) {
                return res.status(403).send('Forbidden!');
            }

        } catch (err) {
            console.log(err);
        }

        let starting_date_d = new Date();


        starting_date_d.setFullYear(s.substring(0, 4));
        starting_date_d.setMonth((s.substring(4, 6) - 1));
        starting_date_d.setDate(s.substring(6, 8));




        let date1 = '';

        let day = starting_date_d.getDate() - 1;
        starting_date_d.setDate(day);

        let date_list = [];
        let date_list_int = [];

        let day_comp = 0;

        for (let i = 0; (day_comp < parseInt(e)); i++) {

            let day = starting_date_d.getDate() + 1;
            starting_date_d.setDate(day);
            day_comp = starting_date_d.getFullYear() * 10000 + (starting_date_d.getMonth() + 1) * 100 + starting_date_d.getDate();
            date1 = starting_date_d.getDate() + '/' + (starting_date_d.getMonth() + 1);
            // //console.log(date1);
            date_list.push(date1);
            date_list_int.push(day_comp);
        }

        ////console.log(date_list);


        var table_column_name2 = "<tr>" +
            "<th>Employee ID</th>" + "<th>Total</th>";
        for (let d of date_list) {
            table_column_name2 = table_column_name2 + "<th>" + d + "</th> ";
        }

        table_column_name2 = table_column_name2 + "</tr>";



        var emp_data3 =
            "<tr>" +
            "<td>Jill</td>" +
            "<td>Smith</td>" +
            "<td>50</td>" +
            "</tr>" +

            "<tr>" +
            "<td>Eve</td>" +
            "<td>Jackson</td>" +
            "<td>94</td>" +
            "</tr>" +

            "<tr>" +
            "<td>John</td>" +
            "<td>Doe</td>" +
            "<td>80</td>" +
            "</tr>";

        var data_tale4 =
            "</table>" +
            "</body>" +
            "</html>";



        //style_title+table_content
        //res.send(style_title_head1+table_column_name2+emp_data3+data_tale4);



        let emp_value;

        // console.log("r = " + r);

        if (r == "R") {
            emp_value = getEmployeeRoaster(hospital_ID_path, s, e, u);
        } else {
            emp_value = getEmployeeShift(hospital_ID_path, s, e, u);
        }

        let emp_request = getEmployeeRequest(hospital_ID_path, s, e, u);

        let employee_stringWork = new Map();

        emp_value.then((value) => {

            emp_request.then((value_request) => {


                // console.log("value_request");
                // console.log(value);
                // console.log(" aa giyaa");

                let map_of_dates = new Set();

                let totalNightShift = 0;
                let totalDayShift = 0;
                let totalEveningShift = 0;

                let employee_working_hour = new Map();

                if (r == "R") {
                    for (let d of date_list_int) {

                        for (let [emp_id, date_work] of value) {
                            if (date_work.has("" + parseInt(d))) {

                                let str = '';
                                let id = 'C';
                                let isFirst = true;
                                for (let s of date_work.get("" + parseInt(d))) {


                                    let isRequestApproved = false;
                                    if (value_request.has(emp_id)) {
                                        let date_ReqSet = value_request.get(emp_id);
                                        // console.log(date_ReqSet);
                                        // console.log(date_ReqSet.get(d));
                                        // console.log(date_ReqSet.get(d).has(s));

                                        if (date_ReqSet.has(d)) {
                                            isRequestApproved = date_ReqSet.get(d).has(s);
                                        }
                                        // console.log(" isRequestApproved : "+s);
                                        // console.log(isRequestApproved);
                                    }

                                    if (isRequestApproved == undefined) {
                                        isRequestApproved = false;
                                    }

                                    let code = '';
                                    if (isFirst) {
                                        str = s;
                                        code = s.split(':')[1];
                                        id += code;
                                        isFirst = false;
                                    } else {
                                        str = str + '+' + s;
                                        code = s.split(':')[1];
                                        id += code;
                                    }

                                    if (code != undefined) {
                                        ////console.log('code: '+code);

                                        if (employee_working_hour.has(emp_id)) {
                                            let day_map = employee_working_hour.get(emp_id);
                                            if (day_map.has(code)) {
                                                let past_total = day_map.get(code);
                                                day_map.set(code, past_total + 1);
                                            } else {
                                                day_map.set(code, 1);
                                            }
                                            employee_working_hour.set(emp_id, day_map);

                                        } else {
                                            let day_map = new Map();
                                            day_map.set(code, 1);
                                            employee_working_hour.set(emp_id, day_map);
                                        }

                                    }

                                    if (isRequestApproved) {
                                        str = str + '#';
                                    }

                                    if (id == 'Cundefined') {
                                        id = s;
                                    }

                                }
                                let work = "<td id =\"" + id + "\">" + str + "</td>";

                                if (employee_stringWork.has(emp_id)) {
                                    let emp_str = employee_stringWork.get(emp_id);
                                    work = emp_str + work
                                }
                                employee_stringWork.set(emp_id, work);

                            } else {
                                let work = "<td>UND</td>";
                                if (employee_stringWork.has(emp_id)) {
                                    let emp_str = employee_stringWork.get(emp_id);
                                    work = emp_str + work
                                }
                                employee_stringWork.set(emp_id, work);
                            }
                        }
                    }
                } else {
                    for (let d of date_list_int) {

                        for (let [emp_id, date_work] of value) {
                            if (date_work.has(parseInt(d))) {

                                let str = '';
                                let id = 'C';
                                let isFirst = true;
                                for (let s of date_work.get(parseInt(d))) {


                                    let isRequestApproved = false;
                                    if (value_request.has(emp_id)) {
                                        let date_ReqSet = value_request.get(emp_id);
                                        // console.log(date_ReqSet);
                                        // console.log(date_ReqSet.get(d));
                                        // console.log(date_ReqSet.get(d).has(s));

                                        if (date_ReqSet.has(d)) {
                                            isRequestApproved = date_ReqSet.get(d).has(s);
                                        }
                                        // console.log(" isRequestApproved : "+s);
                                        // console.log(isRequestApproved);
                                    }

                                    if (isRequestApproved == undefined) {
                                        isRequestApproved = false;
                                    }

                                    let code = '';
                                    if (isFirst) {
                                        str = s;
                                        code = s.split(':')[1];
                                        id += code;
                                        isFirst = false;
                                    } else {
                                        str = str + '+' + s;
                                        code = s.split(':')[1];
                                        id += code;
                                    }

                                    if (code != undefined) {
                                        ////console.log('code: '+code);
                                        if (employee_working_hour.has(emp_id)) {
                                            let day_map = employee_working_hour.get(emp_id);
                                            if (day_map.has(code)) {
                                                let past_total = day_map.get(code);
                                                day_map.set(code, past_total + 1);
                                            } else {
                                                day_map.set(code, 1);
                                            }
                                            employee_working_hour.set(emp_id, day_map);

                                        } else {
                                            let day_map = new Map();
                                            day_map.set(code, 1);
                                            employee_working_hour.set(emp_id, day_map);
                                        }

                                    }

                                    if (isRequestApproved) {
                                        str = str + '#';
                                    }

                                    if (id == 'Cundefined') {
                                        id = s;
                                    }

                                }
                                let work = "<td id =\"" + id + "\">" + str + "</td>";

                                if (employee_stringWork.has(emp_id)) {
                                    let emp_str = employee_stringWork.get(emp_id);
                                    work = emp_str + work
                                }
                                employee_stringWork.set(emp_id, work);

                            } else {
                                let work = "<td>UND</td>";
                                if (employee_stringWork.has(emp_id)) {
                                    let emp_str = employee_stringWork.get(emp_id);
                                    work = emp_str + work
                                }
                                employee_stringWork.set(emp_id, work);
                            }
                        }
                    }
                }



                emp_data3 = '';
                for (let [emp_id, date_work] of employee_stringWork) {

                    emp_data3 = emp_data3 + "<tr>" +
                        "<td>" + emp_id + "</td>";

                    let total = 'NN';
                    if (employee_working_hour.has(emp_id)) {
                        for (let [id, sum] of employee_working_hour.get(emp_id)) {
                            total += id + ':' + sum + ';';
                        }
                    } else {
                        total = '0';
                    }

                    emp_data3 + emp_data3 + "<td>" + total + "</td>" +
                        date_work +
                        "</tr>";

                }

                emp_data3 = '';
                for (let [emp_id, date_work] of employee_stringWork) {

                    let total = '/';
                    let mega_sum = 0;
                    if (employee_working_hour.has(emp_id)) {
                        for (let [id, sum] of employee_working_hour.get(emp_id)) {
                            total += id + ':' + sum + '/';

                            if (id == '1') {
                                mega_sum = sum + mega_sum;
                            } else if (id == '2') {
                                mega_sum = sum + mega_sum;
                            } else if (id == '3') {
                                mega_sum = 2 * sum + mega_sum;
                            }
                        }

                        mega_sum = 6 * mega_sum;
                    } else {
                        total = '0';
                    }

                    emp_data3 = emp_data3 + "<tr>" +
                        "<td>" + emp_id + "</td>" +
                        "<td>" + total + '=' + mega_sum + "</td>" +
                        date_work +
                        "</tr>";

                }


                //console.log(emp_data3);

                res.send(style_title_head1 + table_column_name2 + emp_data3 + data_tale4);

                return;
            }).catch((err) => {
                console.log(err);
            })
        }).catch((err) => {
            console.log(err);
        })


    });

exports.leaveFunc = functions
    .region('asia-northeast3').https.onRequest((req, res) => {

        if (req.method === 'PUT') {
            return res.status(403).send('Forbidden!');
        }



        // //console.log('request query: ');
        // //console.log(req.query);


        var u = req.query.u;
        var s = req.query.s;
        var e = req.query.e;
        var hospital_ID_path = "/Nursing/" + req.query.h + "/";

        // //console.log('u: ' + u);
        // //console.log('s: ' + s);
        // //console.log('e: ' + e);



        var style_title_head1 =
            "<head>" +
            "<style>" +
            "table {" +
            " width:100%;" +
            "}" +
            "table, th, td {" +
            "border: 1px solid black;" +
            "border-collapse: collapse;" +
            "}" +
            "th, td {" +
            "padding: 15px;" +
            "text-align: left;" +
            "}" +
            "#t01 tr:nth-child(even) {" +
            "background-color: #eee;" +
            "}" +
            "#t01 tr:nth-child(odd) {" +
            "background-color: #fff;" +
            "}" +
            "#t01 th {" +
            "background-color: #212F3D;" +
            "color: white;" +
            "}" +

            "#C1 {" +
            "background-color: #3498DB;" +
            "color: white;" +
            "}" +

            "#C2 {" +
            "background-color: #28B463;" +
            "color: white;" +
            "}" +

            "#C3 {" +
            "background-color: #BA4A00;" +
            "color: white;" +
            "}" +

            "#C12 {" +
            "background-color: #8E44AD;" +
            "color: white;" +
            "}" +

            "#NO {" +
            "background-color: #34495E;" +
            "color: white;" +
            "}" +

            "#WO {" +
            "background-color: #DAF7A6;" +
            "color: #34495E;" +
            "}" +

            "</style>" +
            "</head>" +
            "<body>" +

            "<h2>Roster Table</h2>" +
            "<table id=\"t01\">";





        // //console.log('u: ' + u);
        // //console.log('s: ' + s);
        // //console.log('e: ' + e);

        if (s.length != 8) {
            return res.status(403).send('Forbidden!');
        }
        if (e.length != 8) {
            return res.status(403).send('Forbidden!');
        }

        if (parseInt(s) > parseInt(e)) {
            return res.status(403).send('Forbidden!');
        }

        // try {

        //     let strting_year = parseInt(s.substring(0, 4));
        //     let starting_month = parseInt(s.substring(4, 6));

        //     let ending_year = parseInt(e.substring(0, 4));
        //     let ending_month = parseInt(e.substring(4, 6));

        //     if (strting_year != ending_year) {
        //         return res.status(403).send('Forbidden!');
        //     }

        //     if (starting_month > ending_month) {
        //         return res.status(403).send('Forbidden!');
        //     }

        // } catch (err) {
        //     console.log(err);
        // }

        let starting_date_d = new Date();

        // //console.log('year: ' + starting_date.substring(0, 4));
        // //console.log('month: ' + starting_date.substring(4, 6));
        // //console.log('date: ' + starting_date.substring(6, 8));

        starting_date_d.setFullYear(s.substring(0, 4));
        starting_date_d.setMonth((s.substring(4, 6) - 1));
        starting_date_d.setDate(s.substring(6, 8));


        let date1 = '';

        let day = starting_date_d.getDate() - 1;
        starting_date_d.setDate(day);

        let date_list = [];
        let date_list_int = [];

        let day_comp = 0;

        for (let i = 0; (day_comp < parseInt(e)); i++) {

            let day = starting_date_d.getDate() + 1;
            starting_date_d.setDate(day);
            day_comp = starting_date_d.getFullYear() * 10000 + (starting_date_d.getMonth() + 1) * 100 + starting_date_d.getDate();
            date1 = starting_date_d.getDate() + '/' + (starting_date_d.getMonth() + 1);
            // //console.log(date1);
            date_list.push(date1);
            date_list_int.push(day_comp);
        }

        ////console.log(date_list);


        var table_column_name2 = "<tr>" +
            "<th>Employee ID</th>";
        for (let d of date_list) {
            table_column_name2 = table_column_name2 + "<th>" + d + "</th> ";
        }

        table_column_name2 = table_column_name2 + "</tr>";



        var emp_data3 =
            "<tr>" +
            "<td>Jill</td>" +
            "<td>Smith</td>" +
            "<td>50</td>" +
            "</tr>" +

            "<tr>" +
            "<td>Eve</td>" +
            "<td>Jackson</td>" +
            "<td>94</td>" +
            "</tr>" +

            "<tr>" +
            "<td>John</td>" +
            "<td>Doe</td>" +
            "<td>80</td>" +
            "</tr>";

        var data_tale4 =
            "</table>" +
            "</body>" +
            "</html>";



        //style_title+table_content
        //res.send(style_title_head1+table_column_name2+emp_data3+data_tale4);


        let emp_leave = getEmployeeLeaveDetails(hospital_ID_path, s, e, u);
        let all_leave_type = getLeaveDBDetails(hospital_ID_path, u); // <employeeID: <Date: <leave_type:type, leave_db_id: id>>>
        let employee_stringWork = new Map();

        all_leave_type.then((leave_values) => {
            emp_leave.then((emp_leave_values) => { // <employeeID: <Date: <leave_type:type, leave_db_id: id>>>

                let employee_ids = [];

                var table_column_name = "<tr>" +
                    "<th>Leave Type</th>" +
                    "<th>Leave Details</th>" +
                    "<th>Starting</th>" +
                    "<th>Ending</th>" +
                    "<th>Total Leave</th>";

                for (let [id, value_map] of emp_leave_values) {
                    table_column_name = table_column_name + "<th>" + id + "</th> ";
                    employee_ids.push(id);
                }
                table_column_name = table_column_name + "</tr>";

                var columns_values = "<tr>";

                let pending_tatal_leave = new Map();

                pending_tatal_leave.set("ALL", 0);

                for (let [id_leave, leave_values_details] of leave_values) {

                    columns_values = columns_values +
                        "<td>" + leave_values_details.get(E008_LeaveDB.leave_type) + "</td>" +
                        "<td>" + leave_values_details.get(E008_LeaveDB.leave_detail) + "</td>" +
                        "<td>" + leave_values_details.get(E008_LeaveDB.starting_date) + "</td>" +
                        "<td>" + leave_values_details.get(E008_LeaveDB.ending_date) + "</td>" +
                        "<td>" + leave_values_details.get(E008_LeaveDB.leave_count) + "</td>";

                    const total_leave = parseInt(leave_values_details.get(E008_LeaveDB.leave_count));


                    let All_total = pending_tatal_leave.get("ALL") + total_leave;
                    pending_tatal_leave.set("ALL", All_total);

                    for (let i = 0; i < employee_ids.length; i++) {

                        let map_leave = emp_leave_values.get(employee_ids[i]);

                        let leave_count = 0;
                        for (let [date, detail_map] of map_leave) {

                            if (detail_map.get(E003_LeaveCalendar.leave_db_id) == id_leave) {
                                leave_count++
                            }

                        }

                        let panding_takes = "";
                        if ((total_leave - leave_count) > 0) {
                            panding_takes = panding_takes + "P:" + (total_leave - leave_count) + ",";
                        }


                        panding_takes = panding_takes + " T:" + (leave_count)

                        columns_values = columns_values + "<td>" + panding_takes + "</td>";

                        if (pending_tatal_leave.has(employee_ids[i])) {

                            let p_t_map = pending_tatal_leave.get(employee_ids[i]);
                            let pending_val = p_t_map.get("P");
                            let consume_val = p_t_map.get("C");
                            pending_val = pending_val + (total_leave - leave_count);
                            consume_val = consume_val + leave_count;

                            p_t_map.set("P", pending_val);
                            p_t_map.set("C", consume_val);

                            pending_tatal_leave.set(employee_ids[i], p_t_map);

                        } else {

                            let p_t_map = new Map();
                            let pending_val = 0;
                            let consume_val = 0;
                            pending_val = pending_val + (total_leave - leave_count);
                            consume_val = consume_val + leave_count;

                            p_t_map.set("P", pending_val);
                            p_t_map.set("C", consume_val);

                            pending_tatal_leave.set(employee_ids[i], p_t_map);

                        }




                    }
                    columns_values = columns_values + "</tr>";
                }



                var total_row = "<tr>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td>total</td>" +
                    "<td>" + pending_tatal_leave.get("ALL") + "</td>";

                for (let i = 0; i < employee_ids.length; i++) {

                    let pending_total_l = pending_tatal_leave.get(employee_ids[i]);

                    let P = pending_total_l.get("P");
                    let T = pending_total_l.get("C");

                    total_row = total_row + "<td>" + "P:" + P + ", T:" + T + "</td> ";

                }
                total_ror = total_row + "</tr>";

                columns_values = columns_values + total_row;

                //////////////////////////////////////////////////WO NO/////////////////////////////////////////////

                var empty_row1 = "<tr>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td>  </td>";

                for (let i = 0; i < employee_ids.length; i++) {

                    empty_row1 = empty_row1 + "<td>   </td> ";

                }
                empty_row1 = empty_row1 + "</tr>";

                columns_values = columns_values + empty_row1;

                var empty_row2 = "<tr>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td>  </td>";

                for (let i = 0; i < employee_ids.length; i++) {

                    empty_row2 = empty_row2 + "<td>   </td> ";

                }
                empty_row2 = empty_row2 + "</tr>";

                columns_values = columns_values + empty_row2;

                var Week_off_row = "<tr>" +
                    "<td>WO</td>" +
                    "<td>Week Off</td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td>  </td>";

                for (let i = 0; i < employee_ids.length; i++) {

                    let week_off_count = 0;

                    // console.log("leave_values");
                    // console.log(leave_values);

                    if (emp_leave_values.has(employee_ids[i])) {
                        let map_of_leave = emp_leave_values.get(employee_ids[i]);


                        for (let [date, val] of map_of_leave) {



                            if (val.get("leave_type") == getCode(E000_Constants.week_off)) {
                                week_off_count++;
                            }
                        }
                    }


                    Week_off_row = Week_off_row + "<td> " + week_off_count + "  </td> ";

                }
                Week_off_row = Week_off_row + "</tr>";

                columns_values = columns_values + Week_off_row;


                var night_off_row = "<tr>" +
                    "<td>NO</td>" +
                    "<td>Night Off</td>" +
                    "<td> </td>" +
                    "<td> </td>" +
                    "<td>  </td>";

                for (let i = 0; i < employee_ids.length; i++) {

                    let night_off_count = 0;

                    // console.log("leave_values");
                    // console.log(leave_values);

                    if (emp_leave_values.has(employee_ids[i])) {
                        let map_of_leave = emp_leave_values.get(employee_ids[i]);


                        for (let [date, val] of map_of_leave) {



                            if (val.get("leave_type") == getCode(E000_Constants.night_off)) {
                                night_off_count++;
                            }
                        }
                    }


                    night_off_row = night_off_row + "<td> " + night_off_count + "  </td> ";

                }
                night_off_row = night_off_row + "</tr>";

                columns_values = columns_values + night_off_row;


                res.send(style_title_head1 + table_column_name + columns_values + data_tale4);


            }).catch((err) => {
                console.log(err);
            })

        }).catch((err) => {
            console.log(err);
        })


    });


function getMapOfString(string_map) {

    if (string_map == undefined) {
        return new Map();
    }
    ////console.log("value: " + string_map);

    var value = string_map.split(',');

    var map = new Map();
    for (var v of value) {
        var sub_value = v.split(':');
        map.set(sub_value[0], sub_value[1]);
    }
    return map;

}


async function get_3_employeeInCurrentShift(hospital_ID_path, unit, date, shift_intValue) {


    // let list_of_emp = new Set();

    // const ref_unit = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
    //     .where('unit_id', '==', unit)
    //     .where('date', '==', date)
    //     .where('shift', '==', shift_intValue);

    // await ref_unit
    //     .get()
    //     .then((doc) => {
    //         if (doc.size > 0) {
    //             //console.log("second :" + doc.size);
    //             doc.forEach((shift) => {

    //                 // let date = 


    //                 list_of_emp.add(shift.get(E002_Shift.employee_id));
    //             });
    //         }

    //     })
    //     .catch((error) => {
    //         console.log('getListOfEmptyShiftOfDay: ' + error);
    //     })

    ////////////////////////////////////////////////////////////////////////////////////////////////////start shift


    // console.log("");
    // console.log("111111111111111111111111111111111111111111111111111111111111");

    let list_of_emp2 = new Set();
    let yearmonth = "" + parseInt(parseInt(date) / 100);

    // console.log("yearmonth: "+yearmonth);
    // console.log("yearmonth: "+SHIFT_MAP.has(yearmonth));

    if (SHIFT_MAP.has(yearmonth)) {
        let employeeMap = SHIFT_MAP.get(yearmonth);
        for (let [employee_id, emp_val] of employeeMap) {

            // console.log("emp: "+emp_val.has(""+date));

            if (emp_val.has("" + date)) {
                let data_set = employeeMap.get("" + date);
                for (let shift_skill_attendance of data_set) {
                    let shift = parseInt(shift_skill_attendance.split("_")[0]);
                    if (shift == shift_intValue) {
                        list_of_emp2.add(employee_id);
                    }
                }
            }
        }
    }


    // console.log('data Check: get_3_employeeInCurrentShift');
    // console.log(list_of_emp2);
    // console.log(list_of_emp);

    // let boo = "equal";
    // for (let id of list_of_emp) {
    //     if (!list_of_emp2.has(id)) {
    //         boo = "not equal";
    //         break;
    //     }
    // }

    // console.log(boo);
    // console.log("1111111111111111111111111111111111111111111111111111111111111");
    // console.log("");

    /////////////////////////////////////////////////////////////////////////////////////////////////////end shift
    return list_of_emp2;
}

async function get_3_employeeInCurrentShift_new(hospital_ID_path, unit, date, shift_intValue) {


    let list_of_emp = new Set();

    let year = parseInt(parseInt(date) / 10000);
    let month = parseInt((parseInt(date) - year * 10000) / 100);



    const ref_unit = admin.firestore().collection(hospital_ID_path + E002_Roaster.E002_Roaster)
        .where(E002_Roaster.unit_id, '==', unit)
        .where(E002_Roaster.year, '==', year)
        .where(E002_Roaster.month, '==', month);

    await ref_unit
        .get()
        .then((doc) => {
            if (doc.size > 0) {
                //console.log("second :" + doc.size);
                doc.forEach((roster) => {

                    var ros = roster.get(E002_Roaster.roster);


                });
            }

        })
        .catch((error) => {
            console.log('getListOfEmptyShiftOfDay: ' + error);
        })




    return list_of_emp;
}

async function get_employee_in_3day_continue_leave(hospital_ID_path, unit, date) {

    let dateArry = [];
    dateArry.push(parseInt('' + date));
    dateArry.push(day_increment_int(date, 1));
    dateArry.push(day_increment_int(date, 2));

    var list_of_emp = new Set();
    var emp_leave_count = new Map();
    // const ref_unit = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
    //     .where(E003_LeaveCalendar.unit_id, '==', unit)
    //     .where(E003_LeaveCalendar.date, 'in', dateArry);

    // await ref_unit.get()
    //     .then((doc) => {
    //         if (doc.size > 0) {
    //             doc.forEach((shift) => {
    //                 let employee_id = shift.get(E003_LeaveCalendar.employee_id);
    //                 if (emp_leave_count.has(employee_id)) {
    //                     let count = (emp_leave_count.get(employee_id) + 1);
    //                     emp_leave_count.set(employee_id, count);
    //                 } else {
    //                     let count = 1;
    //                     emp_leave_count.set(employee_id, count);
    //                 }
    //             });
    //         }
    //     })
    //     .catch((error) => {
    //         console.log('getListOfEmptyShiftOfDay: ' + error);
    //     })





    //############################################################################################### leave map start

    try {
        let emp_leave_count1 = new Map();

        let doc = get_Paramiters_with_conditions(parseInt('' + date), day_increment_int(date, 2));

        if (doc.length > 0) {
            for (let leave of doc) {
                let employee_id = leave[E003_LeaveCalendar.employee_id];
                if (emp_leave_count.has(employee_id)) {
                    let count = (emp_leave_count.get(employee_id) + 1);
                    emp_leave_count.set(employee_id, count);
                } else {
                    let count = 1;
                    emp_leave_count.set(employee_id, count);
                }
            }
        }

        // console.log("leave 0000000000000000000000000000000000000000000000000000000000");
        // console.log(emp_leave_count1);
        // console.log(emp_leave_count);

        // console.log("leave 0000000000000000000000000000000000000000000000000000000000");
    } catch (Ex) {
        console.log(Ex);
    }

    for (let [employee_id, count] of emp_leave_count) {
        if (count > 1) {
            list_of_emp.add(employee_id);
        }
    }

    //###################################################################################################### leave map end


    return list_of_emp;

}

async function get_7_employeeInTodayShift(hospital_ID_path, unit, date) {


    // let list_of_emp = new Set();
    // const ref_unit = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
    //     .where('unit_id', '==', unit)
    //     .where('date', '==', date)

    // await ref_unit
    //     .get()
    //     .then((doc) => {
    //         if (doc.size > 0) {
    //             //console.log("second :" + doc.size);
    //             doc.forEach((shift) => {
    //                 list_of_emp.add(shift.get(E002_Shift.employee_id));
    //             });
    //         }

    //     })
    //     .catch((error) => {
    //         //console.log('getListOfEmptyShiftOfDay: ' + error);
    //     })



    ////////////////////////////////////////////////////////////////////////////////////////////////////start shift

    let roster_map = SHIFT_MAP.get(E002_Roaster.E002_Roaster);

    let list_of_emp2 = new Set();
    let year = "" + parseInt(date / 100);
    let employeeMap = roster_map.get(year);
    for (let [employee_id, emp_val] of employeeMap) {

        if (emp_val.has("" + date)) {
            list_of_emp2.add(employee_id);
        }
    }

    // console.log("");
    // console.log("2222222222222222222222222222222");
    // console.log('data Check: get_7_employeeInTodayShift');
    // console.log(list_of_emp2);
    // console.log(list_of_emp);

    // let boo = "equal";
    // for (let id of list_of_emp2) {
    //     if (!list_of_emp.has(id)) {
    //         boo = "not equal";
    //         break;
    //     }
    // }

    // console.log("2222222222222222222222222222222");
    // console.log("");

    /////////////////////////////////////////////////////////////////////////////////////////////////////end shift



    return list_of_emp2;
}

async function step1_get_elegible_employees_for_shift(hospital_ID_path, date, unit_id, skill, shift_type) {

    // employee rejected present in night shift
    // employee rejected in same shift (protection of dublication)
    // employee rejected present in leave

    let rejected_employee = new Set();

    let elegible_employee = new Set();

    // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);

    // let list_of_emp_test1 = new Set();
    // await ref_shift
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     .where(E002_Shift.shift, '==', getIntValue(E000_Constants.night_shift))
    //     .where(E002_Shift.date, '==', date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             rejected_employee.add(emp.get(E002_Shift.employee_id));
    //             list_of_emp_test1.add(emp.get(E002_Shift.employee_id));
    //         })
    //     }).catch((err) => {
    //         //console.log(err);
    //     });



    ////////////////////////////////////////////////////////////////////////////////////////////////////Start shift
    try {


        // console.log("");
        // console.log("3333333333333333333333333333333333333333333");

        rejected_employee = new Set();
        let yearMonth1 = "" + parseInt(parseInt(date / 100));

        if (SHIFT_MAP.has(yearMonth1)) {

            let employeeMap1 = SHIFT_MAP.get(yearMonth1);
            for (let [employee_id, emp_val] of employeeMap1) {

                if (emp_val.has("" + date)) {
                    let data_set = emp_val.get("" + date)
                    for (let shift_skill_attendance of data_set) {
                        let shift = parseInt(shift_skill_attendance.split("_")[0]);

                        if (shift == getIntValue(E000_Constants.night_shift)) {
                            rejected_employee.add(employee_id);
                        }
                    }
                }
            }
        }


        // console.log('data Check: step1_get_elegible_employees_for_shift (1)');
        // console.log(list_of_emp2);
        // console.log(list_of_emp_test1);

        // let boo = "equal";
        // for (let id of list_of_emp2) {
        //     if (!list_of_emp_test1.has(id)) {
        //         boo = "not equal";
        //         break;
        //     }
        // }
        // console.log("3333333333333333333333333333333333333333333");
        // console.log("");

    } catch (e) {
        console.log(e);
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////end shift



    // let list_of_emp_test2 = new Set();
    // const ref_shift1 = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);
    // await ref_shift1
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     .where(E002_Shift.shift, '==', shift_type)
    //     .where(E002_Shift.date, '==', date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             rejected_employee.add(emp.get(E002_Shift.employee_id));
    //             list_of_emp_test2.add(emp.get(E002_Shift.employee_id));
    //         })
    //     }).catch((err) => {
    //         //console.log(err);
    //     });


    ////////////////////////////////////////////////////////////////////////////////////////////////////start shift

    try {

        let yearmonth2 = "" + parseInt(date / 100);
        if (SHIFT_MAP.has(yearmonth2)) {
            let employeeMap2 = SHIFT_MAP.get(yearmonth2);
            for (let [employee_id, emp_val] of employeeMap2) {

                if (emp_val.has("" + date)) {
                    let data_set = emp_val.get("" + date);
                    for (let shift_skill_attendance of data_set) {
                        let shift = parseInt(shift_skill_attendance.split("_")[0]);
                        if (shift == shift_type) {
                            rejected_employee.add(employee_id);
                        }
                    }
                }
            }


            // console.log("");
            // console.log("444444444444444444444444444444444444444");
            // console.log('data Check: step1_get_elegible_employees_for_shift (2)');
            // console.log(list_of_emp3);
            // console.log(list_of_emp_test2);
            // let boo = "equal";
            // if (list_of_emp3.size == list_of_emp3.size) {
            //     for (let id of list_of_emp3) {
            //         if (!list_of_emp_test2.has(id)) {
            //             boo = "not equal";
            //             break;
            //         }
            //     }
            // }
            // console.log(boo);

            // console.log("444444444444444444444444444444444444444");
            // console.log("");
        }
    } catch (e) {
        console.log(e);
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////end shift


    // const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar);

    // await ref_leave
    //     .where(E003_LeaveCalendar.date, '==', date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             rejected_employee.add(emp.get(E003_LeaveCalendar.employee_id));
    //         })
    //     }).catch((err) => {
    //         console.log(err);
    //     });


    //################################################################################### leave map start

    try {

        // console.log("leave 1111111111111111111111111111111111111111111111111111111111");

        // let rejected_employee1 = new Set();

        let doc = get_Paramiters_with_conditions(date, date);

        // console.log("date1 " + date);
        // console.log("date2 " + date);
        // console.log("leave " + doc.length);

        if (doc.length > 0) {
            for (let leave of doc) {
                let employee_id = leave[E003_LeaveCalendar.employee_id];
                rejected_employee.add(employee_id);
            }
        }

        // console.log(rejected_employee1);
        // console.log(rejected_employee);

        // console.log("leave 1111111111111111111111111111111111111111111111111111111111");


    } catch (Ex) {
        console.log(Ex);
    }

    //##################################################################################### leave map end


    const ref_employee = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee);


    let employee_day_shift_type = [];

    employee_day_shift_type.push(getCode(E000_Constants.RosterShift));
    employee_day_shift_type.push(getCode(E000_Constants.OnlyMorningOrEveningShiftedEmployee));


    await ref_employee
        .where(E001_Employee.unit_id, '==', unit_id)
        .where(E001_Employee.shift_type, 'in', employee_day_shift_type)
        .get()
        .then((doc) => {
            doc.forEach((emp) => {

                let skill_db = emp.get(E001_Employee.skills);
                if (skill_db.search(skill) > -1) {
                    let id = emp.get(E001_Employee.ID);
                    if (!rejected_employee.has(id)) {
                        elegible_employee.add(id);
                    }
                }

            })
        }).catch((err) => {
            console.log(err);
        })



    return elegible_employee;



}

async function step1_1_get_employee_request(hospital_ID_path, date, unit_id, skill, shift_type) {

    let connected_employee_requesting = new Set();
    let connected_employee_not_requesting = new Set();


    const ref_emp = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee);
    await ref_emp
        .where(E001_Employee.skills, '==', skill)
        .where(E001_Employee.unit_id, '==', unit_id)
        .get()
        .then((doc) => {
            doc.forEach((request) => {

                let connection_type = request.get(E001_Employee.connected_Employee_id);


                if(E001_Employee.connected_Employee_id != 'X'){

                

                let id = request.get(E001_Employee.ID);
                let partner_employee = request.get(E001_Employee.connected_Employee_id);
                let connection_type = request.get(E001_Employee.connection_type);
                let priority = request.get(E001_Employee.priority);
                let connected_employee_hospital_id = request.get(E001_Employee.connected_emp_hospital_id);

                // const ref_pat_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);
                // ref_pat_shift
                //     .where(E002_Shift.employee_id, '==', partner_employee)
                //     .where(E002_Shift.date, '==', date)
                //     .where(E002_Shift.shift, '==', shift_type).get().then((shift_list) => {

                //         if (shift_list.size > 0) {
                //             if (connection_type == getCode(E000_Constants.Even_conn)) {
                //                 connected_employee_requesting.add(id);
                //             } else if (connection_type == getCode(E000_Constants.Odd_conn)) {
                //                 connected_employee_not_requesting.add(id);
                //             }
                //         } else {
                //             if (connection_type == getCode(E000_Constants.Even_conn)) {
                //                 connected_employee_not_requesting.add(id);
                //             } else if (connection_type == getCode(E000_Constants.Odd_conn)) {
                //                 connected_employee_requesting.add(id);
                //             }
                //         }
                //     })



                ////////////////////////////////////////////////////////////////////////////////////////////////////start shift

                // let connected_employee_requesting_new = new Set();
                // let connected_employee_not_requesting_new = new Set();
                let yearMonth = "" + parseInt(date / 100);

                let faund = false;

                if (connected_employee_hospital_id == hospital_ID_path.split("/")[1]) {
                    if (SHIFT_MAP.has(yearMonth)) {
                        let employeeMap = SHIFT_MAP.get(yearMonth);
                        if (employeeMap.has(partner_employee)) {
                            let employee_map = employeeMap.get(id);
                            if (employee_map.has("" + date)) {
                                let set_data = employee_map.get("" + date);
                                for (let shift_skill_attendance of set_data) {
                                    let shift_db = parseInt(shift_skill_attendance.split("_")[0]);
                                    if (shift_db == shift_type) {

                                        faund = true;
                                    }
                                }
                            }
                        }
                    }

                    if (faund) {
                        if (connection_type == getCode(E000_Constants.Even_conn)) {
                            connected_employee_requesting.add(id);
                        } else if (connection_type == getCode(E000_Constants.Odd_conn)) {
                            connected_employee_not_requesting.add(id);
                        }
                    } else {
                        if (connection_type == getCode(E000_Constants.Even_conn)) {
                            connected_employee_not_requesting.add(id);
                        } else if (connection_type == getCode(E000_Constants.Odd_conn)) {
                            connected_employee_requesting.add(id);
                        }
                    }

                } else {

                    //this section will be coverd soon...   request for other section employee

                }



                // console.log("555555555555555555555555555555555555555555555555555555555555555555555555");
                // console.log('data Check: step1_1_get_employee_request');
                // console.log(connected_employee_requesting_new);
                // console.log(connected_employee_not_requesting_new);

                // console.log(connected_employee_requesting);
                // console.log(connected_employee_not_requesting);

                // let set_A = connected_employee_requesting_new;
                // let set_B = connected_employee_not_requesting_new;
                // let boo = "equal";
                // if (set_A.size == set_B.size) {
                //     for (let id of set_B) {
                //         if (!set_A.has(id)) {
                //             boo = "not equal";
                //             break;
                //         }
                //     }
                // }
                // console.log(boo);

                // console.log("555555555555555555555555555555555555555555555555555555555555555555555555");

                /////////////////////////////////////////////////////////////////////////////////////////////////////end shift

            }

            })
        }).catch((err) => {
            console.log(err)
        })



    let requested_emp = new Set();





    const ref_req = admin.firestore().collection(hospital_ID_path + E004_EmployeRequests.E004_EmployeRequests);
    await ref_req
        .where(E004_EmployeRequests.skills, '==', skill)
        .where(E004_EmployeRequests.unit_id, '==', unit_id)
        .get()
        .then((doc) => {
            doc.forEach((request) => {
                let id = request.get(E004_EmployeRequests.employee_id);
                if (!connected_employee_not_requesting.has(id)) {

                    let list = request.get(E004_EmployeRequests.dateShiftList);

                    let listArray = list.split(",");

                    for (let l of listArray) {

                        let date_db = parseInt(l.split("@")[0]);
                        let shift_db = parseInt(l.split("@")[1]);

                        if (date == date_db) {
                            if (shift_type == shift_db) {
                                requested_emp.add(id)
                            }
                        }

                    }

                }
            })
        }).catch((err) => {
            console.log(err)
        })


    for (let id of connected_employee_requesting) {
        requested_emp.add(id);
    }

    return requested_emp;
}

async function step1_2_get_employee_shifting_position_score(hospital_ID_path, date, unit_id, skill, shift_type, elegible_employee) {

    // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);

    // let employee_present_date = new Set();
    // await ref_shift
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     .where(E002_Shift.skill, '==', skill)
    //     .where(E002_Shift.date, '==', date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             employee_present_date.add(emp.get(E002_Shift.employee_id));
    //         })
    //     }).catch((err) => {
    //         //console.log(err);
    //     });


    ////////////////////////////////////////////////////////////////////////////////////////////////////start shift



    let employee_present_date = new Set();
    let yearMonth1 = "" + parseInt(date / 100);


    if (SHIFT_MAP.has(yearMonth1)) {
        let employee_map = SHIFT_MAP.get(yearMonth1);
        for (let [employee_id, date_value] of employee_map) {

            if (date_value.has("" + date)) {

                let date_set = date_value.get("" + date);

                for (let date_val of date_set) {
                    let val_shift = date_val.split("_")[0];
                    let val_skill = date_val.split("_")[1];
                    let val_Attend = date_val.split("_")[2];
                    if (val_skill == skill) {
                        employee_present_date.add(employee_id);
                    }
                }
            }
        }
    }

    // console.log("6666666666666666666666666666666666666666666666666666666666666666666")
    //  console.log("data of step1_2_get_employee_shifting_position_score");
    //  console.log(employee_present_date);
    // console.log(employee_present_date_new);

    // let set_A = employee_present_date;
    // let set_B = employee_present_date_new;
    // let boo = "equal";
    // if (set_A.size == set_B.size) {
    //     for (let id of set_B) {
    //         if (!set_A.has(id)) {
    //             boo = "not equal";
    //             break;
    //         }
    //     }
    // }
    // console.log(boo);
    // console.log("6666666666666666666666666666666666666666666666666666666666666666666")

    ////////////////////////////////////////////////////////////////////////////////////////////////////end shift

    let yesterday_date = day_increment_int(date, -1);
    // let employee_yesterday = new Set();
    // await ref_shift
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     .where(E002_Shift.skill, '==', skill)
    //     .where(E002_Shift.shift, '==', shift_type)
    //     .where(E002_Shift.date, '==', yesterday_date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             employee_yesterday.add(emp.get(E002_Shift.employee_id));
    //         })
    //     }).catch((err) => {
    //         //console.log(err);
    //     });


    ////////////////////////////////////////////////////////////////////////////////////////////////////start shift

    let employee_yesterday = new Set();
    let yearMonth2 = "" + parseInt(parseInt(yesterday_date) / 100);

    if (SHIFT_MAP.has(yearMonth2)) {
        let employee_map = SHIFT_MAP.get(yearMonth2);
        for (let [employee_id, date_value] of employee_map) {

            if (date_value.has("" + yesterday_date)) {

                let date_set = date_value.get("" + yesterday_date);

                for (let date_val of date_set) {
                    let val_shift = date_val.split("_")[0];
                    let val_skill = date_val.split("_")[1];

                    if (val_skill == skill) {
                        if (parseInt(val_shift) == parseInt(shift_type)) {

                            employee_yesterday.add(employee_id);
                        }
                    }

                }
            }
        }
    }

    // console.log("606060606060606060606060606060606060606060606060606060606060606060")
    // console.log("data of step1_2_get_employee_shifting_position_score (1)");
    //  console.log(employee_yesterday);
    // console.log(employee_yesterday_new);

    // console.log("60606060606060606060606060606060606060606060606060606060606060")

    ////////////////////////////////////////////////////////////////////////////////////////////////////end shift
    let employee_shifting_map = new Map();
    for (let emp_id of elegible_employee) {
        employee_shifting_map.set(emp_id, 0);
    }


    for (let emp_id of elegible_employee) {
        if (employee_present_date.has(emp_id)) {
            let v = employee_shifting_map.get(emp_id) - getWaight(W000_Constants.Present_in_same_day_shift);

            employee_shifting_map.set(emp_id, v);
        }

        if (employee_yesterday.has(emp_id)) {
            let v = employee_shifting_map.get(emp_id) + getWaight(W000_Constants.present_in_same_shift_in_yesteday);

            employee_shifting_map.set(emp_id, v);
        }
    }

    return employee_shifting_map;
}

function mapGetEmployeeShiftList(employeeId, startDate, endDate) {

    let shift_list = [];
    try {
        let start_D = parseInt(startDate);
        let end_D = parseInt(endDate);

        for (let [year, employee_map] of SHIFT_MAP) {

            if (employee_map.has(employeeId)) {

                let date_map = employee_map.get(employeeId);

                for (let [date_db, value_set] of date_map) {

                    let date_int = parseInt('' + date_db);

                    if (start_D <= date_int) {
                        if (date_int <= end_D) {

                            for (let shift_skill_attend of value_set) {
                                let shift = shift_skill_attend.split("_")[0];
                                shift_list.push(shift);
                            }

                        }
                    }

                }
            }
        }
    } catch (e) {
        console.log(e);
    }


    return shift_list;

}

function mapIsEmployeePresent(Date, shift, skill) {

    let start_D = parseInt("" + startDate);
    let end_D = parseInt("" + endDate);

    let shift_list = [];

    for (let [year, employee_map] of SHIFT_MAP) {
        for (let [employee_ID, date_map] of employee_map) {

            if (employeeId == employee_ID) {
                for (let [date_db, value_set] of date_map) {

                    let date_int = parseInt('' + date_db);

                    if (start_D <= date_int) {
                        if (date_int <= end_D) {

                            for (let shift_skill_attend of value_set) {
                                let shift = shift_skill_attend.split("_")[0];
                                shift_list.push(shift);
                            }

                        }
                    }

                }
            }
        }
    }

    return shift_list;

}

async function step2_get_employee_score(hospital_ID_path, elegible_employee, requested_emp, shift_duration, starting_date, ending_date, maximum_shift_in_a_week, today_date, shift_duration_map, shift_type) {

    //1 priority of requested employee
    //2 working_hour
    //3 other shift diployement

    let employee_priority = new Map();

    for (let employee_id of elegible_employee) {

        const ref_employee = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(employee_id);

        await ref_employee
            .get()
            .then((emp) => {
                let id = emp.get(E001_Employee.ID);

                let p = parseInt('' + emp.get(E001_Employee.priority));
                let r = 0;


                let score = 0;
                if (requested_emp.has(id)) {
                    score = p + r;
                } else {
                    score = r;
                }

                employee_priority.set(id, 0);

            }).catch((err) => {
                console.log(err);
            })

        // console.log("employee_priority : ", employee_priority);

        // counting working hours....................


        let past_30_date = day_increment_int(today_date, -30);

        // let testing_previusr_list = [];
        // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);
        // await ref_shift
        //     .where(E002_Shift.employee_id, '==', employee_id)
        //     .where(E002_Shift.date, '<=', parseInt('' + today_date))
        //     .where(E002_Shift.date, '>=', parseInt('' + past_30_date))
        //     .get()
        //     .then((doc) => {
        //         doc.forEach((shift) => {
        //             let shift_type = shift.get(E002_Shift.shift);
        //             testing_previusr_list.push(shift_type);

        //             let duration_map = getMapOfString(shift_duration_map);

        //             let duration = 0;

        //             if (shift_type == getIntValue(E000_Constants.night_shift)) {
        //                 duration = duration_map.get(getCode(E000_Constants.night_shift));
        //             } else if (shift_type == getIntValue(E000_Constants.evening_shift)) {
        //                 duration = duration_map.get(getCode(E000_Constants.evening_shift));
        //             } else if (shift_type == getIntValue(E000_Constants.day_shift)) {
        //                 duration = duration_map.get(getCode(E000_Constants.day_shift));
        //             }


        //             let priority = employee_priority.get(employee_id);

        //             let score = priority - duration;
        //             employee_priority.set(employee_id, score)

        //         })
        //     }).catch((err) => {
        //         console.log(err);
        //     })
        ////////////////////////////////////////////////////////////////////////////////////////////////////start shift


        let list_of_shift = mapGetEmployeeShiftList(employee_id, past_30_date, today_date);

        // console.log("list_of_shift : ", list_of_shift);


        for (let shift_type of list_of_shift) {

            let shift_type_int = parseInt(shift_type);

            let duration_map = getMapOfString(shift_duration_map);

            let duration = 0;

            if (shift_type_int == getIntValue(E000_Constants.night_shift)) {
                duration = duration_map.get(getCode(E000_Constants.night_shift));
            } else if (shift_type_int == getIntValue(E000_Constants.evening_shift)) {
                duration = duration_map.get(getCode(E000_Constants.evening_shift));
            } else if (shift_type_int == getIntValue(E000_Constants.day_shift)) {
                duration = duration_map.get(getCode(E000_Constants.day_shift));
            } else {
                duration = parseInt(duration_map.get(shift_type));
            }

            let priority = employee_priority.get(employee_id);
            let score = priority - duration;
            employee_priority.set(employee_id, score);
        }

        // console.log("777777777777777777777777777777777777777777777777777777777777777777777");
        // console.log("step2_get_employee_score");
        // console.log(testing_previusr_list);
        //  console.log("employee_priority : ",employee_priority);

        // console.log("777777777777777777777777777777777777777777777777777777777777777777777");

        ////////////////////////////////////////////////////////////////////////////////////////////////////end shift


        ///// contiing max_week_shift  week off counting ..................

        let count_past_max_shift = 0;
        let past_max_shift_date = day_increment_int(today_date, (-1 * maximum_shift_in_a_week));

        // let testing_max_week_shift = [];

        // const ref_shift1 = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);
        // await ref_shift1
        //     .where(E002_Shift.employee_id, '==', employee_id)
        //     .where(E002_Shift.date, '<=', parseInt('' + today_date))
        //     .where(E002_Shift.date, '>=', parseInt('' + past_max_shift_date))
        //     .get()
        //     .then((doc) => {
        //         doc.forEach((shift) => {
        //             let shift_type = shift.get(E002_Shift.shift);

        //             testing_max_week_shift.push(shift_type);///testing

        //             if ((shift_type == getIntValue(E000_Constants.evening_shift)) || (shift_type == getIntValue(E000_Constants.day_shift))) {
        //                 count_past_max_shift = count_past_max_shift + 1;
        //                 if (count_past_max_shift >= maximum_shift_in_a_week) {
        //                     let score = employee_priority.get(employee_id) - getWaight(W000_Constants.continue_max_day_inWeek);
        //                     employee_priority.set(employee_id, score)
        //                 }
        //             }
        //         })
        //     }).catch((err) => {
        //         console.log(err);
        //     })
        ////////////////////////////////////////////////////////////////////////////////////////////////////start shift


        let list_of_max_week_shift = mapGetEmployeeShiftList(employee_id, past_max_shift_date, today_date);
        for (let shift_type of list_of_max_week_shift) {

            shift_type = parseInt(shift_type);
            if ((shift_type == getIntValue(E000_Constants.evening_shift)) || (shift_type == getIntValue(E000_Constants.day_shift))) {
                count_past_max_shift = count_past_max_shift + 1;
                if (count_past_max_shift >= maximum_shift_in_a_week) {
                    let score = employee_priority.get(employee_id) - getWaight(W000_Constants.continue_max_day_inWeek);
                    employee_priority.set(employee_id, score)
                }
            }
        }

        // console.log("8888888888888888888888888888888888888888888888888888888888888888");
        // console.log("step2_get_employee_score (1)");
        // console.log(testing_max_week_shift);
        //  console.log("list_of_max_week_shift : ",list_of_max_week_shift);
        //  console.log("employee_priority : ",employee_priority);
        // console.log("8888888888888888888888888888888888888888888888888888888888888888");
        ////////////////////////////////////////////////////////////////////////////////////////////////////end shift



        if (parseInt(shift_type) == getIntValue(E000_Constants.day_shift)) {
            // after night shift morning shift have low priority


            let past_max_shift_date = day_increment_int(today_date, -1);

            let if_week_off_present = false;
            // const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar);

            // await ref_leave
            //     .where(E003_LeaveCalendar.employee_id, '==', employee_id)
            //     .where(E003_LeaveCalendar.date, '==', past_max_shift_date)
            //     .get()
            //     .then((doc) => {

            //         doc.forEach((leave) => {
            //             if (leave.get(E003_LeaveCalendar.leave_type) == getCode(E000_Constants.night_off)) {

            //                 let score = employee_priority.get(employee_id) - getWaight(W000_Constants.morning_shift_rejection_after_night_off);
            //                 employee_priority.set(employee_id, score)

            //             } else if (leave.get(E003_LeaveCalendar.leave_type) == getCode(E000_Constants.week_off)) {
            //                 if_week_off_present = true;
            //             }
            //         })

            //     }).catch((err) => {
            //         console.log(err);
            //     })



            //################################################################################### leave map start

            try {

                let doc = get_Paramiters_with_conditions(parseInt(past_max_shift_date), past_max_shift_date);


                if (doc.length > 0) {
                    for (let leave of doc) {
                        let employee_id_db = leave[E003_LeaveCalendar.employee_id];
                        if (employee_id == employee_id_db) {
                            if (leave[E003_LeaveCalendar.leave_type] == getCode(E000_Constants.night_off)) {

                                let score = employee_priority.get(employee_id) - getWaight(W000_Constants.morning_shift_rejection_after_night_off);
                                employee_priority.set(employee_id, score)

                            } else if (leave[E003_LeaveCalendar.leave_type] == getCode(E000_Constants.week_off)) {
                                if_week_off_present = true;
                            }
                        }

                    }
                }

                // console.log("leave 2222222222222222222222222222222222222222222222222222222");
                // console.log(employee_priority1);
                //  console.log("if_week_off_present employee_priority : ",employee_priority);

                // console.log("leave 222222222222222222222222222222222222222222222222222222222");
            } catch (Ex) {
                console.log(Ex);
            }

            //##################################################################################### leave map end




            if (if_week_off_present) {

                let past_max_shift_date = day_increment_int(today_date, -2);

                let if_night_off_present = false;
                // const ref_leave_nigth_shift = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar);

                // await ref_leave_nigth_shift
                //     .where(E003_LeaveCalendar.employee_id, '==', employee_id)
                //     .where(E003_LeaveCalendar.date, '==', past_max_shift_date)
                //     .where(E003_LeaveCalendar.leave_type, '==', getCode(E000_Constants.night_off))
                //     .get()
                //     .then((doc) => {
                //         if (doc.size > 0) {
                //             let score = employee_priority.get(employee_id) - getWaight(W000_Constants.morning_shift_rejection_after_night_off);
                //             employee_priority.set(employee_id, score)
                //         }
                //     }).catch((err) => {
                //         console.log(err);
                //     })



                //################################################################################### leave map start

                try {

                    // console.log("leave 333333333333333333333333333333333333333333333333333333333");

                    let doc = get_Paramiters_with_conditions(parseInt(past_max_shift_date), past_max_shift_date);

                    // console.log("leave: "+ doc.length);

                    if (doc.length > 0) {
                        for (let leave of doc) {
                            let employee_id_db = leave[E003_LeaveCalendar.employee_id];
                            if (employee_id == employee_id_db) {
                                if (leave[E003_LeaveCalendar.leave_type] == getCode(E000_Constants.night_off)) {

                                    let score = employee_priority.get(employee_id) - getWaight(W000_Constants.morning_shift_rejection_after_night_off);
                                    employee_priority.set(employee_id, score)
                                }
                            }

                        }
                    }

                    // console.log(employee_priority1);
                    // console.log("employee_priority: ",employee_priority);

                    // console.log("leave 333333333333333333333333333333333333333333333333333333333");
                } catch (Ex) {
                    console.log(Ex);
                }

                //##################################################################################### leave map end




            }

        }


    }





    employee_priority = shortMapByValue(employee_priority);

    // console.log('dayShift step2_get_employee_score employee_priority');
    // console.log(employee_priority);

    return employee_priority;


}

async function step3_redusing_working_hour_and_priority(hospital_ID_path, alloted_emp, requested_emp, shift_hour, shift_type) {

    //1 priority of requested employee
    //2 working_hour
    //3 other shift diployement


    ////console.log('shift_hour : ' + shift_hour);



    for (let employee_id of alloted_emp) {

        const ref_employee = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(employee_id);

        await ref_employee
            .get()
            .then((emp) => {
                let id = emp.get(E001_Employee.ID);

                let p = parseInt('' + emp.get(E001_Employee.priority));
                let r = parseInt('' + emp.get(E001_Employee.remaining_working_hour));

                let tem_r = 0;

                // //console.log('step3 shift_type: '+shift_type);
                // //console.log('step3 shift_type day: '+(shift_type == getIntValue(E000_Constants.day_shift)));
                // //console.log('step3 shift_type evening: '+(shift_type == getIntValue(E000_Constants.evening_shift)));


                if (shift_type == getIntValue(E000_Constants.day_shift)) {
                    tem_r = parseInt('' + emp.get(E001_Employee.employee_morning_temp));
                } else if (shift_type == getIntValue(E000_Constants.evening_shift)) {
                    tem_r = parseInt('' + emp.get(E001_Employee.employee_evning_temp));
                }

                //console.log('step3 shift_type score: '+tem_r);



                if (requested_emp.has(id)) {
                    p = p - 1;
                    r = r - shift_hour;
                    tem_r = tem_r - shift_hour;

                } else {
                    r = r - shift_hour;
                    tem_r = tem_r - shift_hour;
                }

                //console.log('step3 shift_type score: '+tem_r);


                if (shift_type == getIntValue(E000_Constants.day_shift)) {
                    ref_employee.update({
                        'priority': p,
                        'remaining_working_hour': r,
                        'employee_morning_temp': tem_r
                    });
                } else if (shift_type == getIntValue(E000_Constants.evening_shift)) {
                    ref_employee.update({
                        'priority': p,
                        'remaining_working_hour': r,
                        'employee_evning_temp': tem_r
                    });
                }

            }).catch((err) => {
                console.log(err);
            })

    }

    // //console.log('employee_priority working_hour update');
    // //console.log(employee_priority);

}

async function make_shift_roster(hospital_ID_path, date, unit_id, skill, shift_type, number_of_employee_req, shift_hour, starting_date, ending_date, maximum_shift_in_a_week, shift_duration_map) {

    // step1 elegible employee
    // step2  working_hour + deployeement to past shift
    // listing of employee and shorting with score
    // get empty slot of date with shift
    // allot shift

    // step3 redusing priority and working_hour


    let shifted_employee = 0;
    // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);
    // await ref_shift
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     .where(E002_Shift.skill, '==', skill)
    //     .where(E002_Shift.shift, '==', shift_type)
    //     .where(E002_Shift.date, '==', date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             shifted_employee = shifted_employee + 1;
    //         })
    //     }).catch((err) => {
    //         console.log(err);
    //     });
    ///////////////////////////////////////////////////////////////////////////////////////////////start shift

    try {

        let yearMonth = "" + parseInt(parseInt(date) / 100);
        if (SHIFT_MAP.has(yearMonth)) {
            for (let [emp_id, date_value] of SHIFT_MAP.get(yearMonth)) {
                if (date_value.has("" + date)) {
                    for (let shift_skill_atten of date_value.get("" + date)) {
                        let shift_db = shift_skill_atten.split("_")[0];
                        let skill_db = shift_skill_atten.split("_")[1];

                        if (parseInt(shift_db) == parseInt(shift_type)) {
                            if (skill_db == skill) {
                                shifted_employee = shifted_employee + 1;
                            }
                        }

                    }
                }
            }
        }

        // console.log("999999999999999999999999999999999999999999999999999999999999");
        // console.log("make_shift_roster");
        // console.log(shifted_employee);
        // console.log(present);

        // let set_A = shifted_employee;
        // let set_B = present;
        // let boo = "equal";
        // if (set_A == set_B) {
        //     boo = "not equal";
        // }
        // console.log(boo);

        // console.log("9999999999999999999999999999999999999999999999999999999999999999");
    }
    catch (err) {
        console.log(err);
    }

    ///////////////////////////////////////////////////////////////////////////////////////////////end shift


    let requed_employee = number_of_employee_req - shifted_employee;


    // console.log("requed_employee: " + requed_employee);
    // console.log("Date: " + date);
    // console.log("Skill: " + skill);
    // console.log("shift_type: " + shift_type);


    if (requed_employee <= 0) {
        return;
    }

    let elegible_employee = new Set();
    await step1_get_elegible_employees_for_shift(hospital_ID_path, date, unit_id, skill, shift_type).then(
        function (value) {
            elegible_employee = value;
        },
        function (err) {
            console.log(err);
        }
    )

    let requested_emp = new Set();

    await step1_1_get_employee_request(hospital_ID_path, date, unit_id, skill, shift_type).then(
        function (value) {
            requested_emp = value;
        },
        function (err) {
            console.log(err);
        }
    )

    let today_and_yesterday_shift_score = new Map();

    await step1_2_get_employee_shifting_position_score(hospital_ID_path, date, unit_id, skill, shift_type, elegible_employee).then(
        function (value) {
            today_and_yesterday_shift_score = value;
        },
        function (err) {
            console.log(err);
        }
    )

    // console.log('today_and_yesterday_shift_score');
    // console.log(today_and_yesterday_shift_score);

    let employee_score = new Map();
    await step2_get_employee_score(hospital_ID_path, elegible_employee, requested_emp, shift_hour, starting_date, ending_date, maximum_shift_in_a_week, date, shift_duration_map, shift_type).then(
        function (value) {
            employee_score = value;
        },
        function (err) {
            console.log(err);
        }
    )


    //console.log('employee_score: ',employee_score);

    let employee_leave_score = new Map();
    await getLeave_Count_Other_Than_WO_or_NO_on_WorkingHour_Calculations(hospital_ID_path, date, unit_id).then(
        function (value) {
            employee_leave_score = value;
        }
        ,
        function (err) {
            console.log(err);
        }
    )

    for (let [emp_id, score] of employee_leave_score) {
        if (employee_score.has(emp_id)) {
            score = -score + employee_score.get(emp_id);
            employee_score.set(emp_id, score);
        }
    }

    let moreThan3WO = new Map();
    await getLeave_Count_More_than_3_WO(hospital_ID_path, date, unit_id).then(
        function (value) {
            moreThan3WO = value;
        }
        ,
        function (err) {
            console.log(err);
        }
    )



    // console.log('moreThan3WO: ', moreThan3WO);

    for (let [emp_id, wo_count] of moreThan3WO) {
        if (employee_score.has(emp_id)) {

            if (wo_count > 2) {
                let score = getWaight(W000_Constants.more_than3_wo) + employee_score.get(emp_id);
                employee_score.set(emp_id, score);
            }

        }
    }



    ///////Adding requested employee score in total employee score
    //     for (let [emp_id, score] of  employee_score) {
    //         if (requested_emp.has(emp_id)) {
    //             score = score + getWaight(W000_Constants.AdditionalWaightageOnRequestedEmployeeScore);
    //             employee_score.set(emp_id, score);
    //         }
    //     }
    //////////////////////////////////////////////////////////////////

    for (let [emp_id, score] of today_and_yesterday_shift_score) {
        if (employee_score.has(emp_id)) {
            score = score + employee_score.get(emp_id);
            employee_score.set(emp_id, score);
        }
    }



    employee_score = shortMapByValue(employee_score);


    // console.log('employee_score day shift: ',employee_score);


    let alloted_emp = new Set();


    let requested_employee_with_WO_elegibility = new Set();

    for (let id of requested_emp) {
        if (!employee_leave_score.has(id)) {
            requested_employee_with_WO_elegibility.add(id);
        }
    }

    // console.log("requested_employee_with_WO_elegibility:  ");
    // console.log(requested_employee_with_WO_elegibility);


    if (requested_employee_with_WO_elegibility.size > 0) {
        for (let [id_score, score] of employee_score) {
            for (let id of requested_employee_with_WO_elegibility) {
                if (id_score == id) {
                    if (!alloted_emp.has(alloted_emp)) {
                        if (requed_employee > 0) {
                            alloted_emp.add(id);
                            requed_employee--;
                        }
                    }
                }
            }
        }
    }

    // console.log("for employee request alloted_emp:  ");
    // console.log(alloted_emp);

    for (let [id, score] of employee_score) {
        if (!alloted_emp.has(alloted_emp)) {
            if (requed_employee > 0) {
                alloted_emp.add(id);
                requed_employee--;
            }
        }
    }

    // console.log("before employee request alloted_emp:  ");
    // console.log(alloted_emp);


    // allot shift

    for (let emp_id of alloted_emp) {
        //let shift_id = unit_id + '@' + emp_id + '@' + date + '@' + shift_type;
        // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift).doc(shift_id);

        // const data = {
        //     'employee_id': emp_id,
        //     'skill': skill,
        //     'shift': shift_type,
        //     'date': date,
        //     'unit_id': unit_id,
        //     'attendance': 'N',
        //     'ID': shift_id //unit_id@employee_id@date

        // }

        /////////////////////////////////////////////////////////////////////////////////////////////////////// shift start
        setRosterShifts(emp_id, skill, shift_type, date, "N");
        /////////////////////////////////////////////////////////////////////////////////////////////////////// shift end
        // await ref_shift.set(data).catch((err) => {
        //     console.log(err);
        // });
    }





    await step3_redusing_working_hour_and_priority(hospital_ID_path, alloted_emp, requested_emp, shift_hour, shift_type);

}

async function check_week_off_elegibility_and_allot_week_off(hospital_ID_path, maximum_shift_in_a_week, unit_id, date) {


    // let shifted_employee = new Set();
    // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift);

    // await ref_shift
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     .where(E002_Shift.date, '==', date)
    //     .get()
    //     .then((doc) => {
    //         doc.forEach((emp) => {
    //             shifted_employee.add(emp.get(E002_Shift.employee_id));
    //         })
    //     }).catch((err) => {
    //         console.log(err);
    //     });

    ///////////////////////////////////////////////////////////////////////////////start shift

    let shifted_employee = new Set();
    try {

        let shift_data = SHIFT_MAP;

        let dateYear = "" + parseInt(date / 100);
        if (shift_data.has(dateYear)) {
            let employeeMap = shift_data.get(dateYear);
            for (let [emp_id, date_map] of employeeMap) {
                if (date_map.has("" + date)) {
                    shifted_employee.add(emp_id);
                }
            }
        }

        // console.log("10101010101010101010101010101010101010101010101010101010101010101010");
        // console.log("make_shift_roster");
        // console.log(shifted_employee1);
        // console.log(shifted_employee);

        // let set_A = shifted_employee;
        // let set_B = shifted_employee1;
        // let boo = "equal";
        // if (set_A.size == set_B.size) {
        //     for (let id of set_B) {
        //         if (!set_A.has(id)) {
        //             boo = "not equal";
        //             break;
        //         }
        //     }
        // }
        // console.log(boo);

        // console.log("10101010101010101010101010101010101010101010101010101010101010101010");
    } catch (e) {
        console.log(e);
    }


    /////////////////////////////////////////////////////////////////////////////// end shift

    let not_shifted_employee = new Set();

    const ref_emp = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee);


    let morning_and_evening_shift_type = [];
    morning_and_evening_shift_type.push(getCode(E000_Constants.RosterShift));
    morning_and_evening_shift_type.push(getCode(E000_Constants.OnlyMorningOrEveningShiftedEmployee));

    await ref_emp
        .where(E001_Employee.unit_id, '==', unit_id)
        .where(E001_Employee.shift_type, 'in', morning_and_evening_shift_type)
        .get()
        .then((doc) => {
            doc.forEach((emp) => {
                let emp_id = emp.get(E001_Employee.ID);
                if (!shifted_employee.has(emp_id)) {
                    not_shifted_employee.add(emp_id);
                }
            })
        }).catch((err) => {
            console.log(err);
        });

    // //console.log('not_shifted_employee');
    // //console.log(not_shifted_employee);

    for (let emp_id of not_shifted_employee) {
        // employee_id@date
        let ID = emp_id + "@" + date;


        // const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar).doc(ID);

        // let data = {
        //     'employee_id': emp_id,
        //     'date': date,
        //     'leave_type': getCode(E000_Constants.week_off),
        //     'unit_id': unit_id,
        //     'ID': ID
        // }


        ///////////////////////////////////////////////////////////////////////////////////////// leave start
        setRoasterLeave(emp_id, date, getCode(E000_Constants.week_off), "X", true);
        ///////////////////////////////////////////////////////////////////////////////////////// leave end

        // await ref_leave.get()
        //     .then((doc) => {
        //         if (!doc.exists) {
        //             ref_leave.set(data);
        //             console.log(' leave is added ');

        //         } else {
        //             console.log('leave is present');

        //         }
        //     })
        //     .catch((err) => {
        //         console.log("Error: " + err);
        //     });

    }






}

async function preProcessingEmployeeShift(hospital_ID_path, unit_id, starting_date, ending_date, day_shift_duration, evening_shift_duration, day_shift_map, evening_shift_map, total_number_of_employee_scheme) {


    let starting_date_d = new Date();

    // //console.log('year: ' + starting_date.substring(0, 4));
    // //console.log('month: ' + starting_date.substring(4, 6));
    // //console.log('date: ' + starting_date.substring(6, 8));

    starting_date = '' + starting_date;
    ending_date = '' + ending_date;

    starting_date_d.setFullYear(starting_date.substring(0, 4));
    starting_date_d.setMonth((starting_date.substring(4, 6) - 1));
    starting_date_d.setDate(starting_date.substring(6, 8));


    let day = starting_date_d.getDate() - 1;
    starting_date_d.setDate(day);


    let day_count = 0;
    let date1 = 0;
    for (let i = 0; (date1 < parseInt(ending_date)); i++) {

        let day = starting_date_d.getDate() + 1;
        starting_date_d.setDate(day);
        date1 = (starting_date_d.getFullYear() * 10000 + ((starting_date_d.getMonth() + 1) * 100 + starting_date_d.getDate()));
        ////console.log(date1);
        day_count++;

    }
    //console.log('day_count: '+day_count);

    let skill_shift_remainingWorkingHour = new Map();
    for (let [skill, employee_number] of total_number_of_employee_scheme) {




    }

    for (let [skill, employee_number] of day_shift_map) {

        let shift_remaining_working_hour = parseInt(employee_number) * day_count * day_shift_duration;


    }




}

async function preProcessingEmployeeShift_updated(hospital_ID_path, unit_id) {

    const ref_shift = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee);

    await ref_shift
        .where(E001_Employee.unit_id, '==', unit_id)
        .where(E001_Employee.shift_type, '==', getCode(E000_Constants.RosterShift))
        .get()
        .then((doc) => {
            doc.forEach((emp) => {
                let employee_id = emp.get(E001_Employee.ID);

                const ref_shift_emp = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(employee_id);

                ref_shift_emp.update({ 'employee_evning_temp': 0, 'employee_morning_temp': 0 });

            })
        }).catch((err) => {
            console.log(err);
        });

}

async function make_day_shift_roster(
    hospital_ID_path, unit_id, starting_date, ending_date,
    total_number_of_employee_scheme, day_shift_employee, evening_shift_employee, maximum_shift_in_a_week, shift_duration_map) {


    // [1] make morning shift
    // [2] make evening shift
    // [3] check for week_off

    // console.log('unit_id: '+unit_id);
    // console.log('starting_date: '+starting_date);
    // console.log('ending_date: '+ending_date);
    // console.log('total_number_of_employee_scheme: '+total_number_of_employee_scheme);
    // console.log('day_shift_employee: '+day_shift_employee);
    // console.log('evening_shift_employee: '+evening_shift_employee);
    // console.log('maximum_shift_in_a_week: '+maximum_shift_in_a_week);
    // console.log('shift_duration_map: '+shift_duration_map);


    if (parseInt(ending_date) >= parseInt(starting_date)) {

        let starting_date_d = new Date();

        // //console.log('year: ' + starting_date.substring(0, 4));
        // //console.log('month: ' + starting_date.substring(4, 6));
        // //console.log('date: ' + starting_date.substring(6, 8));

        starting_date = '' + starting_date;
        ending_date = '' + ending_date;

        starting_date_d.setFullYear(starting_date.substring(0, 4));
        starting_date_d.setMonth((starting_date.substring(4, 6) - 1));
        starting_date_d.setDate(starting_date.substring(6, 8));


        let date1 = '';

        let day_shift_map = getMapOfString(day_shift_employee);
        let evening_shift_map = getMapOfString(evening_shift_employee);
        let shift_duration_hour = getMapOfString(shift_duration_map);

        //console.log(shift_duration_hour);
        let day_shift_duration = parseInt(shift_duration_hour.get(getCode(E000_Constants.day_shift)));
        let evening_shift_duration = parseInt(shift_duration_hour.get(getCode(E000_Constants.evening_shift)));


        //await preProcessingEmployeeShift(unit_id, starting_date, ending_date, day_shift_duration, evening_shift_duration, day_shift_map, evening_shift_map, total_number_of_employee_scheme);

        await preProcessingEmployeeShift_updated(hospital_ID_path, unit_id)

        let day = starting_date_d.getDate() - 1;
        starting_date_d.setDate(day);

        for (let i = 0; (date1 < parseInt(ending_date)); i++) {

            let day = starting_date_d.getDate() + 1;
            starting_date_d.setDate(day);
            date1 = (starting_date_d.getFullYear() * 10000 + ((starting_date_d.getMonth() + 1) * 100 + starting_date_d.getDate()));
            //console.log(date1);

            // day shift map
            for (let [skill, emp_number] of day_shift_map) {
                await make_shift_roster(hospital_ID_path, date1, unit_id, skill, getIntValue(E000_Constants.day_shift), emp_number, day_shift_duration, starting_date, ending_date, maximum_shift_in_a_week, shift_duration_map);
            }

            // evening shift map
            for (let [skill, emp_number] of evening_shift_map) {
                await make_shift_roster(hospital_ID_path, date1, unit_id, skill, getIntValue(E000_Constants.evening_shift), emp_number, evening_shift_duration, starting_date, ending_date, maximum_shift_in_a_week, shift_duration_map);
            }

            await check_week_off_elegibility_and_allot_week_off(hospital_ID_path, maximum_shift_in_a_week, unit_id, date1);

            //await IsTodayAPublicHoliday(date1, unit_id);

        }
    }
}

async function getEligibleEmployee(hospital_ID_path, not_eligible_emloyee_id_list, unit_id, skill) {



    const ref_unit = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee);

    let list_of_eligible_employee = new Set();

    // //console.log('not_eligible_emloyee_id_list');
    // //console.log(not_eligible_emloyee_id_list);

    await ref_unit
        .where(E001_Employee.unit_id, '==', unit_id)
        //.where('skills', '==', skill)
        .where(E001_Employee.shift_type, '==', getCode(E000_Constants.RosterShift))
        .get()
        .then((doc) => {

            doc.forEach((doc1) => {

                let skill_db = doc1.get(E001_Employee.skills);

                if (skill_db.search(skill) > -1) {
                    let id = '' + doc1.get('ID');
                    if (!not_eligible_emloyee_id_list.has(id)) {
                        ////console.log(id);
                        list_of_eligible_employee.add(id);
                        ////console.log(list_of_eligible_employee);
                    }
                }
            })
        })
        .catch((err) => {
            console.log(err);
        });

    ////console.log('just before return');
    ////console.log(list_of_eligible_employee);
    return list_of_eligible_employee;
}

// update is requed
async function setEmployeePriorityAndWorkingHour(hospital_ID_path, unit_id, month_starting_date, roster_days) {


    var c = new Date();


    c.setFullYear(month_starting_date.substring(0, 4));
    c.setMonth((month_starting_date.substring(4, 6) - 1));
    c.setDate(month_starting_date.substring(6, 8));


    // console.log('setEmployeePriorityAndWorkingHour: ' + unit_id);
    // console.log('roster_days: ' + roster_days);

    var day = c.getDate() - 30;
    c.setDate(day);
    var date_past_30_day = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());
    ////console.log('date_past_30_day: ' + date_past_30_day);


    const ref_emp = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).where('unit_id', '==', unit_id);



    await ref_emp.get().then((employees_of_unit) => {

        employees_of_unit.forEach((employee_of_unit) => {

            // console.log(employee_of_unit);
            // console.log('ID: ' + employee_of_unit.get('ID'));

            let past_priority = parseInt('' + employee_of_unit.get('priority'));
            let past_remaining_working_hour = parseInt('' + employee_of_unit.get('remaining_working_hour'));
            let working_hour = Math.round(parseInt('' + employee_of_unit.get('fixed_working_hour')) * roster_days / 30);

            let priority_value = past_priority - past_remaining_working_hour;

            const data_to_update = {
                priority: priority_value,
                remaining_working_hour: working_hour,
            }

            let ID = employee_of_unit.get('ID');
            const ref_emp_up = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(ID);

            ref_emp_up.update(data_to_update);

            // //console.log(ID+' : priority: '+priority_value);
            // //console.log(ID+' : remaining_working_hour: '+working_hour);
        })

    }).catch((err) => {
        console.log(err);
    })

    // //console.log('employee is end');

}


async function getLeave_Count_Other_Than_WO_or_NO_on_WorkingHour_Calculations(hospital_ID_path, date, unit_id) {

    let employeeID_withleave_count = new Map();

    let past30day = day_increment_int(date, -30);

    // const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
    //     .where(E003_LeaveCalendar.unit_id, '==', unit_id)
    //     .where(E003_LeaveCalendar.date, '>=', past30day)
    //     .where(E003_LeaveCalendar.date, '<=', date);

    // await ref_leave.get().then((doc) => {
    //     doc.forEach((emp) => {
    //         let employee_id = emp.get(E003_LeaveCalendar.employee_id);
    //         let leave_type = emp.get(E003_LeaveCalendar.leave_type);


    //         if (!((leave_type == getCode(E000_Constants.week_off)) || (leave_type == getCode(E000_Constants.night_off)))) {

    //             if (employeeID_withleave_count.has(employee_id)) {
    //                 let count = employeeID_withleave_count.get(employee_id) + getWaight(W000_Constants.Leave_of_employee);
    //                 employeeID_withleave_count.set(employee_id, count);
    //             } else {
    //                 let count = (getWaight(W000_Constants.Leave_of_employee));
    //                 employeeID_withleave_count.set(employee_id, count);
    //             }
    //         }
    //     }
    //     )

    // }).catch((err) => {
    //     console.log(err);
    // })


    //################################################################################### leave map start

    try {
        let employeeID_withleave_count1 = new Map();

        let doc = get_Paramiters_with_conditions(past30day, date);
        if (doc.length > 0) {
            for (let leave of doc) {
                let employee_id_db = leave[E003_LeaveCalendar.employee_id];
                let leave_type_db = leave[E003_LeaveCalendar.leave_type];


                if (!((leave_type_db == getCode(E000_Constants.week_off)) || (leave_type_db == getCode(E000_Constants.night_off)))) {

                    if (employeeID_withleave_count.has(employee_id_db)) {
                        let count = employeeID_withleave_count.get(employee_id_db) + getWaight(W000_Constants.Leave_of_employee);
                        employeeID_withleave_count.set(employee_id_db, count);
                    } else {
                        let count = (getWaight(W000_Constants.Leave_of_employee));
                        employeeID_withleave_count.set(employee_id_db, count);
                    }
                }

            }
        }

        // console.log("leave 444444444444444444444444444444444444444444444444444444444");
        // console.log(employeeID_withleave_count1);
        // console.log(employeeID_withleave_count);
        // console.log("leave 444444444444444444444444444444444444444444444444444444444");
    } catch (Ex) {
        console.log(Ex);
    }

    //##################################################################################### leave map end



    // console.log("employeeID_withleave_count");
    // console.log(employeeID_withleave_count);


    return employeeID_withleave_count;

}



async function getLeave_Count_More_than_3_WO(hospital_ID_path, date, unit_id) {

    let employeeID_withleave_count = new Map();

    let past4day = day_increment_int(date, -4);

    try {
        let doc = get_Paramiters_with_conditions(past4day, date);
        if (doc.length > 0) {
            for (let leave of doc) {
                let employee_id_db = leave[E003_LeaveCalendar.employee_id];
                let leave_type_db = leave[E003_LeaveCalendar.leave_type];

                if (leave_type_db == getCode(E000_Constants.week_off)) {

                    if (employeeID_withleave_count.has(employee_id_db)) {
                        let count = employeeID_withleave_count.get(employee_id_db) + 1;
                        employeeID_withleave_count.set(employee_id_db, count);
                    } else {
                        let count = 1;
                        employeeID_withleave_count.set(employee_id_db, count);
                    }
                }
            }
        }

    } catch (Ex) {
        console.log(Ex);
    }

    return employeeID_withleave_count;

}

async function step1_getElegibleEmployeeList_nightShiftRoaster(hospital_ID_path, unit_id, date, skill) {

    // step 1 get list of eligible employees

    var set_of_uneligible_employees = new Set();

    date = '' + date; // change to string type

    // step1 1 employees have more than 3 day leave from today
    await get_employee_in_3day_continue_leave(hospital_ID_path, unit_id, date).then(

        function (value) {
            for (const item of value) {
                set_of_uneligible_employees.add(item);
                // //console.log(item);
            }
        },
        function (error) {
            console.log('error: ' + error);
        }
    );



    // step1 2 employees are shifted in any shift on today
    await get_7_employeeInTodayShift(hospital_ID_path, unit_id, date).then(

        function (value) {
            for (const item of value) {
                set_of_uneligible_employees.add(item);
                ////console.log(item);
            }

        },
        function (error) {
            //console.log('error: ' + error);
        }
    );


    var c = new Date();

    // //console.log('year: ' + date.substring(0, 4));
    // //console.log('month: ' + date.substring(4, 6));
    // //console.log('date: ' + date.substring(6, 8));

    c.setFullYear(date.substring(0, 4));
    c.setMonth((date.substring(4, 6) - 1));
    c.setDate(date.substring(6, 8));

    var day = c.getDate() - 1;
    c.setDate(day);
    yesterday_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());

    // step1 3 employees are shifted in yesterday night
    await get_3_employeeInCurrentShift(hospital_ID_path, unit_id, yesterday_date, getIntValue(E000_Constants.night_shift)).then(

        function (value) {
            for (const item of value) {
                set_of_uneligible_employees.add(item);
                ////console.log(item);
            }

        },
        function (error) {
            //console.log('error: ' + error);
        }
    );


    var eligible_employees = new Set();
    await getEligibleEmployee(hospital_ID_path, set_of_uneligible_employees, unit_id, skill).then(

        function (value) {
            for (const item of value) {
                eligible_employees.add(item);
                ////console.log(item);
            }
        },
        function (error) {
            //console.log('error: ' + error);
        }
    );


    // //console.log('set_of_uneligible_employees');
    // //console.log(set_of_uneligible_employees);


    // //console.log('eligible_employees');
    // //console.log(eligible_employees);

    return eligible_employees;

}

async function step2_getEmployeeRequestForMaxNight(hospital_ID_path, date, unit_id, skill, maximum_number_of_night_shift) {

    // step1 check for employee connected to other employee
    // step2 make request as (even / odd) connected employees are shifted 
    // step3 get request for 'date' to 'date+maximum_number_of_night_shift'
    // step4 get employee priority and make Map<ID, priority>


    var list_of_connected_employees = new Map();

    const ref_connected_emp = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee)
        .where(E001_Employee.unit_id, '==', unit_id)
        .where(E001_Employee.skills, '==', skill)
        .where(E001_Employee.connected_Employee_id, '!=', 'X');

    await ref_connected_emp.get().then((doc) => { // '</>'= used as a seprator
        doc.forEach((emp) => {
            list_of_connected_employees.set(emp.get(E001_Employee.ID), (emp.get(E001_Employee.connected_Employee_id) + '</>' + emp.get(E001_Employee.connection_type) + '</>' + emp.get(E001_Employee.connected_emp_hospital_id)));
        })
    }).catch((err) => {
        console.log(err);
    });


    var c = new Date();

    date = '' + date;

    c.setFullYear(date.substring(0, 4));
    c.setMonth((date.substring(4, 6) - 1));
    c.setDate(date.substring(6, 8));

    var dates = [];

    var day = c.getDate() - 1;
    c.setDate(day);
    for (var i = 0; i < maximum_number_of_night_shift; i++) {
        var day = c.getDate() + 1;
        c.setDate(day);
        var date1 = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());
        dates.push(date1);
    }


    const set_of_employee_have_connected_shift = new Set();

    var number_of_request_in_empID = [];

    /////////////////////////////////////////////////////////////////////////////////////////////
    list_of_connected_employees = new Map(); // this line will be removed after some time below code still depends on Shift DB
    /////////////////////////////////////////////////////////////////////////////////////////////
    for (const [emp_id, value] of list_of_connected_employees) {

        const connected_employee_id = value.split('</>')[0];
        const connection_type = value.split('</>')[1];
        const hospital_ID_of_connected_employee = value.split('</>')[2];

        let hospital_ID_path_connected_employee = "/" + hospital_ID_path.split("/")[1] + "/" + hospital_ID_of_connected_employee + "/";

        let date_set = new Set();
        for (let d of dates) {
            date_set.add(d / 100);
        }

        let yearMonmth = [];

        for (let d of date_set) {
            yearMonmth.push(d);
        }

        if (connection_type == getCode(E000_Constants.Even_conn)) {
            const ref_unit = admin.firestore().collection(hospital_ID_path_connected_employee + E002_Shift.E002_Shift)
                .where(E002_Shift.employee_id, '==', connected_employee_id)
                .where(E002_Shift.shift, '==', getIntValue(E000_Constants.night_shift))
                .where(E002_Shift.date, 'in', dates);

            await ref_unit
                .get()
                .then((doc) => {
                    if (doc.size > 0) {
                        //console.log("even count :" + doc.size);
                        doc.forEach((shift) => {
                            number_of_request_in_empID.push(emp_id);
                            set_of_employee_have_connected_shift.add(emp_id);
                        });
                    }
                })
                .catch((error) => {
                    console.log('getListOfEmptyShiftOfDay: ' + error);
                })

        } else if (connection_type == getCode(E000_Constants.Odd_conn)) {

            let shift_list = new Set();
            shift_list.add(getIntValue(E000_Constants.day_shift));
            shift_list.add(getIntValue(E000_Constants.evening_shift));


            const ref_unit = admin.firestore().collection(hospital_ID_path_connected_employee + E002_Shift.E002_Shift)
                .where(E002_Shift.employee_id, '==', connected_employee_id)
                .where(E002_Shift.date, 'in', dates);

            await ref_unit
                .get()
                .then((doc) => {
                    if (doc.size > 0) {
                        doc.forEach((shift) => {
                            let shift_type = shift.get(E002_Shift.shift);
                            if (shift_list.has(shift_type)) {
                                number_of_request_in_empID.push(emp_id);
                                set_of_employee_have_connected_shift.add(emp_id);
                            }
                        });
                    }
                })
                .catch((error) => {
                    console.log('getListOfEmptyShiftOfDay: ' + error);
                })
        }
    }



    const ref_req = admin.firestore().collection(hospital_ID_path + E004_EmployeRequests.E004_EmployeRequests);
    await ref_req
        .where(E004_EmployeRequests.skills, '==', skill)
        .where(E004_EmployeRequests.unit_id, '==', unit_id)
        .get()
        .then((doc) => {
            doc.forEach((request) => {

                let list = request.get(E004_EmployeRequests.dateShiftList);
                let shift_type = getIntValue(E000_Constants.night_shift);
                let listArray = list.split(",");

                for (let l of listArray) {
                    let date_db = parseInt(l.split("@")[0]);
                    let shift_db = parseInt(l.split("@")[1]);

                    if (date == date_db) {
                        if (shift_type == shift_db) {

                            if (!set_of_employee_have_connected_shift.has(request.get(E004_EmployeRequests.employee_id))) {
                                number_of_request_in_empID.push(request.get(E004_EmployeRequests.employee_id));

                            }
                        }
                    }
                }

            })
        }).catch((err) => {
            console.log(err)
        })

    const employeeIDs = new Set();

    for (const emp_id of number_of_request_in_empID) {

        employeeIDs.add(emp_id);

    }

    const employeeID_priorityScore = new Map();


    for (const emp_id of employeeIDs) {

        const ref = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(emp_id);

        await ref.get().then((employee) => {

            const priority = parseInt(employee.get(E001_Employee.priority))
            employeeID_priorityScore.set(emp_id, priority);

        }).catch((err) => {
            console.log(err)
        })
    }

    for (const emp_id of number_of_request_in_empID) {
        const priority = Math.round(employeeID_priorityScore.get(emp_id) * 1.1);
        employeeID_priorityScore.set(emp_id, priority);
    }


    return employeeID_priorityScore;


}

async function step3_getEmployeeWithWorkingHour_PastNightShifting(hospital_ID_path, date, unit_id, skill, maximum_number_of_night_shift, number_of_pairs, shift_duration_map) {

    // [N] - - - - [2] [1] [0]
    // [1] = date+maximum_number_of_night_shift  to date
    // [2] = date+2*maximum_number_of_night_shift  to date+1*maximum_number_of_night_shift
    // [N] = date+N*maximum_number_of_night_shift  to date+(N-1)*maximum_number_of_night_shift


    var list_of_employees_nightShift_sequense = new Map();

    let current_date = date;
    date = '' + date;

    let new_date = "" + day_increment_int(date, maximum_number_of_night_shift);

    for (let j = 0; j <= (number_of_pairs + 1); j++) {

        var c = new Date();

        // //console.log('year: ' + date.substring(0, 4));
        // //console.log('month: ' + date.substring(4, 6));
        // //console.log('date: ' + date.substring(6, 8));

        c.setFullYear(new_date.substring(0, 4));
        c.setMonth((new_date.substring(4, 6) - 1));
        c.setDate(new_date.substring(6, 8));

        var dates = [];
        var day = c.getDate() - 1;
        c.setDate(day);
        let isFirst = true;
        for (var i = j * maximum_number_of_night_shift; i < (maximum_number_of_night_shift * (j + 1)); i++) {

            if (isFirst) {
                var day = c.getDate() - i;
                isFirst = false;
            } else {
                var day = c.getDate() - 1;
            }
            ////console.log(i);

            c.setDate(day);
            var date1 = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());
            dates.push(date1);
        }

        let waightege = -1 * (number_of_pairs + 1 - (j));

        if (j == 0) {
            waightege = 2 * waightege;
        }

        //  //console.log('waightege : ' + waightege);

        // const ref_connected_emp = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
        //     .where(E002_Shift.unit_id, '==', unit_id)
        //     .where(E002_Shift.skill, '==', skill)
        //     .where(E002_Shift.shift, '==', getIntValue(E000_Constants.night_shift))
        //     .where(E002_Shift.date, 'in', dates);

        // await ref_connected_emp.get().then((doc) => { 
        //     doc.forEach((emp) => {

        //         let emp_id = emp.get(E002_Shift.employee_id);
        //         let skill_db = emp.get(E002_Shift.skill);

        //         if (list_of_employees_nightShift_sequense.has(emp_id)) {

        //             let w = list_of_employees_nightShift_sequense.get(emp_id);
        //             w = w + waightege;

        //             list_of_employees_nightShift_sequense.set(emp_id, w);

        //         } else {
        //             list_of_employees_nightShift_sequense.set(emp_id, waightege);
        //         }

        //     })
        // }).catch((err) => {
        //     console.log(err);
        // })



        ///////////////////////////////////////////////////////////////////////////////start shift

        try {
            let shift_data = SHIFT_MAP;

            //let list_of_employees_nightShift_sequense1 = new Map();

            for (let d of dates) {
                let dateYear = "" + parseInt(d / 100);
                if (shift_data.has(dateYear)) {
                    let employeeMap = shift_data.get(dateYear);
                    for (let [emp_id, date_map] of employeeMap) {
                        if (date_map.has("" + d)) {
                            let data_set = date_map.get("" + d);
                            for (let data of data_set) {
                                let shift_DB = data.split("_")[0];
                                let skill_DB = data.split("_")[1];

                                if ((skill_DB == skill) & (parseInt(shift_DB) == getIntValue(E000_Constants.night_shift))) {

                                    if (list_of_employees_nightShift_sequense.has(emp_id)) {

                                        let w = list_of_employees_nightShift_sequense.get(emp_id);
                                        w = w + waightege;

                                        list_of_employees_nightShift_sequense.set(emp_id, w);

                                    } else {
                                        list_of_employees_nightShift_sequense.set(emp_id, waightege);
                                    }
                                }
                            }
                        }
                    }
                }
            }


            // console.log("11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 ");
            // console.log("make_shift_roster");
            // console.log(list_of_employees_nightShift_sequense);
            // console.log(list_of_employees_nightShift_sequense);

            // let set_A = list_of_employees_nightShift_sequense;
            // let set_B = list_of_employees_nightShift_sequense1;
            // let boo = "equal";
            // if (set_A.size == set_B.size) {
            //     for (let id of set_B) {
            //         if (!set_A.has(id)) {
            //             boo = "not equal";
            //             break;
            //         }
            //     }
            // } else {
            //     boo = "not equal";
            // }
            // console.log(boo);

            // console.log("11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 ");
        } catch (e) {
            console.log(e);
        }


        /////////////////////////////////////////////////////////////////////////////// end shift



    }



    let temp_list = new Map();

    for (let [key, value] of list_of_employees_nightShift_sequense) {
        temp_list.set(key, value);
    }



    current_date = '' + current_date;


    current_date = day_increment_int(current_date, maximum_number_of_night_shift);
    let past30Day_date = day_increment_int(current_date, -30);

    let duration_map = getMapOfString(shift_duration_map);




    // const ref_connected_emp_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
    //     .where(E002_Shift.unit_id, '==', unit_id)
    //     //.where(E002_Shift.skill, '==', skill)
    //     .where(E002_Shift.date, '>=', parseInt('' + past30Day_date))
    //     .where(E002_Shift.date, '<=', parseInt('' + current_date));

    // await ref_connected_emp_shift.get().then((doc) => {

    //     ////console.log('doc size: '+doc.size);

    //     doc.forEach((shift) => {
    //         try {
    //             let id = shift.get(E002_Shift.employee_id);
    //             let shift_type = shift.get(E002_Shift.shift);

    //             let duration = 0;

    //             if (shift_type == getIntValue(E000_Constants.night_shift)) {
    //                 duration = duration_map.get(getCode(E000_Constants.night_shift));
    //             } else if (shift_type == getIntValue(E000_Constants.evening_shift)) {
    //                 duration = duration_map.get(getCode(E000_Constants.evening_shift));
    //             } else if (shift_type == getIntValue(E000_Constants.day_shift)) {
    //                 duration = duration_map.get(getCode(E000_Constants.day_shift));
    //             }

    //             if (list_of_employees_nightShift_sequense.has(id)) {
    //                 let previus_score = list_of_employees_nightShift_sequense.get(id);
    //                 list_of_employees_nightShift_sequense.set(id, (previus_score - duration));
    //             } else {
    //                 list_of_employees_nightShift_sequense.set(id, (0 - duration));
    //             }


    //         } catch (err) {
    //             console.log(err)
    //         }

    //     })



    // }).catch((err) => {
    //     console.log(err)
    // })





    ///////////////////////////////////////////////////////////////////////////////start shift

    try {
        let shift_data = SHIFT_MAP;

        let list_of_employees_nightShift_sequense2 = new Map();

        for (let d = parseInt('' + past30Day_date); d < parseInt('' + current_date); d = day_increment_int(d, 1)) {
            let dateYear = "" + parseInt(d / 100);
            if (shift_data.has(dateYear)) {
                let employeeMap = shift_data.get(dateYear);
                for (let [emp_id, date_map] of employeeMap) {
                    if (date_map.has("" + d)) {
                        let data_set = date_map.get("" + d);
                        for (let data of data_set) {
                            let shift_DB = data.split("_")[0];
                            let skill_DB = data.split("_")[1];

                            let id = emp_id;
                            let shift_type = data.split("_")[0];
                            let shift_type_int = parseInt(shift_type);

                            let duration = 0;

                            if (shift_type_int == getIntValue(E000_Constants.night_shift)) {
                                duration = duration_map.get(getCode(E000_Constants.night_shift));
                            } else if (shift_type_int == getIntValue(E000_Constants.evening_shift)) {
                                duration = duration_map.get(getCode(E000_Constants.evening_shift));
                            } else if (shift_type_int == getIntValue(E000_Constants.day_shift)) {
                                duration = duration_map.get(getCode(E000_Constants.day_shift));
                            } else {
                                duration = parseInt(duration_map.get(shift_type));
                            }

                            if (list_of_employees_nightShift_sequense.has(id)) {
                                let previus_score = list_of_employees_nightShift_sequense.get(id);
                                list_of_employees_nightShift_sequense.set(id, (previus_score - duration));
                            } else {
                                list_of_employees_nightShift_sequense.set(id, (0 - duration));
                            }



                        }
                    }
                }
            }
        }


        // console.log("12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 ");
        // console.log("make_shift_roster");
        // console.log(list_of_employees_nightShift_sequense2);
        // console.log(list_of_employees_nightShift_sequense);

        // let set_A = list_of_employees_nightShift_sequense;
        // let set_B = list_of_employees_nightShift_sequense2;
        // let boo = "equal";
        // if (set_A.size == set_B.size) {
        //     for (let id of set_B) {
        //         if (!set_A.has(id)) {
        //             boo = "not equal";
        //             break;
        //         }
        //     }
        // }
        // console.log(boo);

        // console.log("12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 12 ");
    } catch (e) {
        console.log(e);
    }


    /////////////////////////////////////////////////////////////////////////////// end shift

    return list_of_employees_nightShift_sequense;


}

async function step4_getEmployeeDontHaveLeavePast4Days(hospital_ID_path, date, unit_id) {

    let past4day = [];

    let day1 = day_increment_int(date, -1);
    let day2 = day_increment_int(date, -2);
    let day3 = day_increment_int(date, -3);
    let day4 = day_increment_int(date, -4);

    past4day.push(day1);
    past4day.push(day2);
    past4day.push(day3);
    past4day.push(day4);

    let employee_have_Leave = new Set();
    let employee_have_not_leave = new Set();

    // const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
    //     .where(E003_LeaveCalendar.unit_id, '==', unit_id)
    //     .where(E003_LeaveCalendar.date, 'in', past4day);

    // await ref_leave.get().then((doc) => {
    //     doc.forEach((emp) => {
    //         employee_have_Leave.add(emp.get(E003_LeaveCalendar.employee_id));
    //     }
    //     )
    // }).catch((err) => {
    //     console.log(err);
    // })




    //################################################################################### leave map start

    try {
        let employee_have_Leave1 = new Set();

        let doc = get_Paramiters_with_conditions(day_increment_int(date, -4), date);
        if (doc.length > 0) {
            for (let leave of doc) {
                let employee_id_db = leave[E003_LeaveCalendar.employee_id];
                let leave_type_db = leave[E003_LeaveCalendar.leave_type];


                employee_have_Leave.add(employee_id_db);

            }
        }

        // console.log("leave 66666666666666666666666666666666666666666666666666666666666");
        // console.log(employee_have_Leave1);
        // console.log(employee_have_Leave);
        // console.log("leave 66666666666666666666666666666666666666666666666666666666666");
    } catch (Ex) {
        console.log(Ex);
    }

    //##################################################################################### leave map end


    const ref_employee = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee)
        .where(E001_Employee.unit_id, '==', unit_id);


    await ref_employee.get().then((doc) => {
        doc.forEach((emp) => {

            let employee_id = emp.get(E001_Employee.ID);
            if (!employee_have_Leave.has(employee_id)) {
                employee_have_not_leave.add(employee_id);
            }
        }
        )
    }).catch((err) => {
        console.log(err);
    })


    // console.log("employee_have_not_leave");
    // console.log(employee_have_not_leave);

    // console.log("employee_have_Leave");
    // console.log(employee_have_Leave);


    return employee_have_not_leave;

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

async function get_employee_leave_map(hospital_ID_path, starting_date, number_of_max_night_shift, employee_id_set) {

    //console.log('employee_id_set');
    //console.log(employee_id_set);

    let employee_leave_map = new Map();

    let date = starting_date;

    var c = new Date();

    //console.log('year: ' + date.substring(0, 4));
    //console.log('month: ' + date.substring(4, 6));
    //console.log('date: ' + date.substring(6, 8));

    c.setFullYear(date.substring(0, 4));
    c.setMonth((date.substring(4, 6) - 1));
    c.setDate(date.substring(6, 8));

    var dates = [];

    var day = c.getDate() - 1;
    c.setDate(day);
    for (var i = 0; i < number_of_max_night_shift; i++) {
        var day = c.getDate() + 1;
        c.setDate(day);
        var date1 = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());
        dates.push(date1);
    }


    // console.log('leave date: ');
    // console.log(dates);

    for (let id of employee_id_set) {

        // const ref_unit = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
        //     .where(E003_LeaveCalendar.employee_id, '==', id)
        //     .where(E003_LeaveCalendar.date, 'in', dates);

        // await ref_unit.get()
        //     .then((doc) => {

        //         //console.log('size: '+doc.size);

        //         doc.forEach((LeaveDoc) => {
        //             let employee_id = LeaveDoc.get(E003_LeaveCalendar.employee_id);
        //             let date = LeaveDoc.get(E003_LeaveCalendar.date);
        //             //console.log('employee_id: '+employee_id);

        //             if (employee_leave_map.has(employee_id)) {
        //                 let date_set = employee_leave_map.get(employee_id);
        //                 date_set.add(date);
        //                 employee_leave_map.set(employee_id, date_set);

        //             } else {
        //                 let date_set = new Set();
        //                 date_set.add(date);
        //                 employee_leave_map.set(employee_id, date_set);
        //             }
        //         })
        //     })
        //     .catch((error) => {
        //         console.log('getListOfEmptyShiftOfDay: ' + error);
        //     })


        //################################################################################### leave map start

        try {
            let employee_leave_map1 = new Map();

            let doc = get_Paramiters_with_conditions(date, day_increment_int(date, parseInt(number_of_max_night_shift)));

            if (doc.length > 0) {
                for (let leave of doc) {
                    let employee_id_db = leave[E003_LeaveCalendar.employee_id];
                    let leave_type_db = leave[E003_LeaveCalendar.leave_type];
                    let date = leave[E003_LeaveCalendar.date];
                    //console.log('employee_id: '+employee_id);

                    if (employee_leave_map.has(employee_id_db)) {
                        let date_set = employee_leave_map.get(employee_id_db);
                        date_set.add(date);
                        employee_leave_map.set(employee_id_db, date_set);

                    } else {
                        let date_set = new Set();
                        date_set.add(date);
                        employee_leave_map.set(employee_id_db, date_set);
                    }
                }
            }

            // console.log("leave 77777777777777777777777777777777777777777777777777777777777");
            // console.log(employee_leave_map1);
            // console.log(employee_leave_map);
            // console.log("leave 77777777777777777777777777777777777777777777777777777777777");
        } catch (Ex) {
            console.log(Ex);
        }

        //##################################################################################### leave map end

    }

    //console.log("employee_leave_map");
    //console.log(employee_leave_map);

    return employee_leave_map;
}


async function move_employee_leave(hospital_ID_path, starting_date, number_of_max_night_shift, employee_id, unit_id) {

    // console.log('move_employee_leave   starts');
    // console.log(starting_date);
    // console.log(number_of_max_night_shift);
    // console.log(employee_id);

    let employee_leave_map = new Map();

    let date = "" + starting_date;

    var c = new Date();

    // console.log('year: ' + date.substring(0, 4));
    // console.log('month: ' + date.substring(4, 6));
    // console.log('date: ' + date.substring(6, 8));

    c.setFullYear(date.substring(0, 4));
    c.setMonth((date.substring(4, 6) - 1));
    c.setDate(date.substring(6, 8));

    var dates = [];

    var day = c.getDate() - 1;
    c.setDate(day);
    for (var i = 0; i < number_of_max_night_shift + 2; i++) {
        var day = c.getDate() + 1;
        c.setDate(day);
        var date1 = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());
        dates.push(date1);
    }


    // const ref_unit = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
    //     .where(E003_LeaveCalendar.employee_id, '==', employee_id)
    //     .where(E003_LeaveCalendar.date, 'in', dates);



    // await ref_unit.get()
    //     .then((doc) => {

    //         doc.forEach((LeaveDoc) => {
    //             let date = LeaveDoc.get(E003_LeaveCalendar.date);
    //             let leave_type = LeaveDoc.get(E003_LeaveCalendar.leave_type);
    //             let leave_db_id = LeaveDoc.get(E003_LeaveCalendar.leave_db_id);

    //             let aMap = new Map();
    //             aMap.set("leave_type", leave_type);
    //             aMap.set("leave_db_id", leave_db_id);
    //             employee_leave_map.set(date, aMap);

    //             LeaveDoc.ref.delete();
    //         })
    //     })
    //     .catch((error) => {
    //         console.log('getListOfEmptyShiftOfDay: ' + error);

    //     })



    //################################################################################### leave map start

    try {

        if (LEAVE_MAP.has(employee_id)) {
            let date_map = LEAVE_MAP.get(employee_id);
            if (date_map.has(date)) {

                date_map.delete(date);
                LEAVE_MAP.set(employee_id, date_map)
            }
        }

    } catch (Ex) {
        console(Ex);
    }

    //##################################################################################### leave map end



    let index = 0;
    for (let [date, leave_data] of employee_leave_map) {


        let leave_type = leave_data.get("leave_type");
        let leave_db_id = leave_data.get("leave_db_id");


        let start_process_is_complete = true;
        while (start_process_is_complete) {
            let day_for_shifting_leave = day_increment_int(starting_date, number_of_max_night_shift + 2 + index);
            let ID = employee_id + "@" + day_for_shifting_leave;

            ///////////////////////////////////////////////////////////////////////////////////////// leave start
            setRoasterLeave(employee_id, day_for_shifting_leave, leave_type, leave_db_id, true);
            ///////////////////////////////////////////////////////////////////////////////////////// leave end



            // const leave_ref = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
            //     .where(E003_LeaveCalendar.date, "==", day_for_shifting_leave)
            //     .where(E003_LeaveCalendar.employee_id, "==", employee_id);


            // await leave_ref.get()
            //     .then((doc) => {

            //         //console.log('size: '+doc.size);

            //         if (doc.size > 0) { // leave is present
            //             start_process_is_complete = true;
            //         } else { // leave is emperty

            //             const leave_ref1 = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar).doc(ID);

            //             if (leave_db_id == undefined) {
            //                 leave_db_id = "NULL";
            //             }



            //             let leave_data = {
            //                 "employee_id": employee_id,
            //                 "date": day_for_shifting_leave,
            //                 "leave_type": leave_type,
            //                 "unit_id": unit_id,
            //                 "ID": ID,
            //                 "leave_db_id": leave_db_id,
            //                 "TimeStamp": 'TimeStamp',
            //                 "EditFlagRow": 'EditFlagRow'
            //             };



            //             leave_ref1.set(leave_data);
            //             start_process_is_complete = false;
            //         }
            //         index++;

            //         // console.log('index:'+index);
            //         // console.log('start_process_is_complete:'+start_process_is_complete);

            //     })
            //     .catch((error) => {
            //         start_process_is_complete = false;
            //         console.log('getListOfEmptyShiftOfDay: ' + error);

            //     })
        }



    }

    return true;

}

/*
async function setShift_with_leaveMap(elegible_employee_with_priority, slot, starting_date, max_night_shift) {



    // //console.log('elegible_employee_with_priority');
    // //console.log(elegible_employee_with_priority);
    // //console.log('slot');
    // //console.log(slot);
    // //console.log('starting_date');
    // //console.log(starting_date);
    // //console.log('max_night_shift');
    // //console.log(max_night_shift);


    starting_date = '' + starting_date;

    let map = shortMapByValue(elegible_employee_with_priority);
    let map_leave = new Map();

    let employee_id_set = map.keys();

    await get_employee_leave_map(starting_date, max_night_shift, employee_id_set).then(
        function (value) {
            map_leave = value;
        },
        function (err) {
            //console.log(err);
        }
    )


    var c = new Date();

    // //console.log('year: ' + starting_date.substring(0, 4));
    // //console.log('month: ' + starting_date.substring(4, 6));
    // //console.log('date: ' + starting_date.substring(6, 8));

    c.setFullYear(starting_date.substring(0, 4));
    c.setMonth((starting_date.substring(4, 6) - 1));
    c.setDate(starting_date.substring(6, 8));



    var day = c.getDate() - 1; // for looping 
    c.setDate(day);
    var loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());


    let day_Map_shift = new Map(); // date, Map()<empID,op>

    for (var i = 0; i < max_night_shift; i++) {

        var day = c.getDate() + 1;
        c.setDate(day);
        loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());

        // //console.log('loop_date : ' + loop_date);
        // //console.log(slot);

        let temp_slot = slot.get(loop_date);
        // //console.log('temp_slot : ' + temp_slot);
        if (temp_slot == 0) {
            continue;
        }
        if (temp_slot == NaN) {
            continue;
        }
        if (temp_slot == undefined) {
            continue;
        }
        for (let [id, value] of map) {

            if (map_leave.has(id)) {

                let date = map_leave.get(id);

                if (date.has(loop_date)) {
                    // //console.log(id + ' hollyday')

                } else if (day_Map_shift.has(loop_date)) {
                    let detais = day_Map_shift.get(loop_date);
                    // //console.log(loop_date + '  :  ' + detais);

                    detais.set(id, loop_date);
                    day_Map_shift.set(loop_date, detais);
                    temp_slot--;
                } else {
                    let detais = new Map();
                    detais.set(id, loop_date);
                    day_Map_shift.set(loop_date, detais);
                    temp_slot--;
                }


            } else {

                if (day_Map_shift.has(loop_date)) {
                    let detais = day_Map_shift.get(loop_date);
                    // //console.log(loop_date + '  :  ' + detais);

                    detais.set(id, loop_date);
                    day_Map_shift.set(loop_date, detais);
                    temp_slot--;
                } else {
                    let detais = new Map();
                    detais.set(id, loop_date);
                    day_Map_shift.set(loop_date, detais);
                    temp_slot--;
                }

            }

            // //console.log('slot: ' + temp_slot);
            if (temp_slot <= 0) {
                break;
            }

        }


    }

    return day_Map_shift;

}
*/

async function setShift_with_leave_in_priority(hospital_ID_path, elegible_employee_with_priority, slot, starting_date, max_night_shift) {


    // console.log("starting_date: " + starting_date);

    let NIGHT_OFF = getCode(E000_Constants.night_off);
    let WEEK_OFF = getCode(E000_Constants.week_off);

    starting_date = '' + starting_date;

    let map = shortMapByValue(elegible_employee_with_priority);
    let map_leave = new Map();

    let employee_id_set = map.keys();

    await get_employee_leave_map(hospital_ID_path, starting_date, max_night_shift, employee_id_set).then(
        function (value) {
            map_leave = value;
        },
        function (err) {
            console.log("setShift_with_leaveMap.get_employee_leave_map: " + err);
        }
    )


    // console.log("elegible_employee_with_priority");
    // console.log(elegible_employee_with_priority);

    // console.log("map_leave");
    // console.log(map_leave);

    let day_Map_shift = new Map(); // date, Map()<empID,op>


    for (let [current_employee_id, value] of map) {

        let employee_continue_shift_counter = 0;

        var c = new Date();

        c.setFullYear(starting_date.substring(0, 4));
        c.setMonth((starting_date.substring(4, 6) - 1));
        c.setDate(starting_date.substring(6, 8));



        var day = c.getDate() - 1; // for looping 
        c.setDate(day);
        var loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());



        for (var i = 0; i < max_night_shift; i++) {

            var day = c.getDate() + 1;
            c.setDate(day);
            loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());

            // //console.log('loop_date : ' + loop_date);
            // //console.log(slot);

            let required_slot = slot.get(loop_date);
            // //console.log('temp_slot : ' + temp_slot);
            if (required_slot == 0) {
                continue;
            }
            if (required_slot == NaN) {
                continue;
            }
            if (required_slot == undefined) {
                continue;
            }


            let present_slot_in_map = 0;

            if (day_Map_shift.has(loop_date)) {

                let employee_map = day_Map_shift.get(loop_date);
                for (let [id, present_date] of employee_map) {

                    if (present_date == loop_date) {
                        present_slot_in_map++;
                    }

                }

            }

            if (present_slot_in_map < required_slot) {

                let employee_have_leave_today = false;
                if (map_leave.has(current_employee_id)) {
                    let employee_leaves = map_leave.get(current_employee_id);

                    if (employee_leaves.has(loop_date)) {
                        employee_have_leave_today = true;
                    }

                }

                if (employee_have_leave_today) {
                    //provide week_off for employee if it have more than 1 night shift

                    if (employee_continue_shift_counter > 0) {
                        if (day_Map_shift.has(loop_date)) {
                            let day_shedule = day_Map_shift.get(loop_date);
                            day_shedule.set(current_employee_id, NIGHT_OFF);
                            day_Map_shift.set(loop_date, day_shedule);
                        } else {
                            let day_shedule = new Map();
                            day_shedule.set(current_employee_id, NIGHT_OFF);
                            day_Map_shift.set(loop_date, day_shedule);
                        }
                    }


                    if (employee_continue_shift_counter > 1) {
                        let week_off_day = day_increment_int(loop_date, 1);
                        if (day_Map_shift.has(week_off_day)) {
                            let day_shedule = day_Map_shift.get(week_off_day);
                            day_shedule.set(current_employee_id, WEEK_OFF);
                            day_Map_shift.set(week_off_day, day_shedule);
                        } else {
                            let day_shedule = new Map();
                            day_shedule.set(current_employee_id, WEEK_OFF);
                            day_Map_shift.set(week_off_day, day_shedule);
                        }
                    }
                    break;
                } else {

                    if (day_Map_shift.has(loop_date)) {
                        let day_shedule = day_Map_shift.get(loop_date);
                        day_shedule.set(current_employee_id, loop_date);
                        day_Map_shift.set(loop_date, day_shedule);
                    } else {
                        let day_shedule = new Map();
                        day_shedule.set(current_employee_id, loop_date);
                        day_Map_shift.set(loop_date, day_shedule);
                    }

                    employee_continue_shift_counter++;
                }



            }


            if (i == (max_night_shift - 1)) {

                if (employee_continue_shift_counter > 0) {
                    let night_off_day = day_increment_int(loop_date, 1);
                    if (day_Map_shift.has(night_off_day)) {
                        let day_shedule = day_Map_shift.get(night_off_day);
                        day_shedule.set(current_employee_id, NIGHT_OFF);
                        day_Map_shift.set(night_off_day, day_shedule);
                    } else {
                        let day_shedule = new Map();
                        day_shedule.set(current_employee_id, NIGHT_OFF);
                        day_Map_shift.set(night_off_day, day_shedule);
                    }
                }
                if (employee_continue_shift_counter > 1) {
                    let week_off_day = day_increment_int(loop_date, 2);
                    if (day_Map_shift.has(week_off_day)) {
                        let day_shedule = day_Map_shift.get(week_off_day);
                        day_shedule.set(current_employee_id, WEEK_OFF);
                        day_Map_shift.set(week_off_day, day_shedule);
                    } else {
                        let day_shedule = new Map();
                        day_shedule.set(current_employee_id, WEEK_OFF);
                        day_Map_shift.set(week_off_day, day_shedule);
                    }
                }
            }

        }


    }


    // console.log("day_Map_shift");
    // console.log(day_Map_shift);

    return day_Map_shift;

}

async function setShift_with_leaveMap_nightShift_in_priority(hospital_ID_path, elegible_employee_with_priority, slot, starting_date, max_night_shift, unit_id) {


    let NIGHT_OFF = getCode(E000_Constants.night_off);
    let WEEK_OFF = getCode(E000_Constants.week_off);




    starting_date = '' + starting_date;

    let map = shortMapByValue(elegible_employee_with_priority);
    let map_leave = new Map();

    let employee_id_set = map.keys();



    await get_employee_leave_map(hospital_ID_path, starting_date, max_night_shift, employee_id_set).then(
        function (value) {
            map_leave = value;
        },
        function (err) {
            console.log(err);
        }
    )

    // console.log("nightPriority   employee map_leave");
    // console.log(map_leave);

    // console.log("nightPriority   employee slot");
    // console.log(slot);

    let day_Map_shift = new Map(); // date, Map()<empID,op>


    for (let [current_employee_id, value] of map) {

        let employee_leave_counter = 0;
        let employee_continue_shift_counter = 0;

        var c = new Date();

        c.setFullYear(starting_date.substring(0, 4));
        c.setMonth((starting_date.substring(4, 6) - 1));
        c.setDate(starting_date.substring(6, 8));



        var day = c.getDate() - 1; // for looping 
        c.setDate(day);
        var loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());



        for (var i = 0; i < max_night_shift; i++) {

            var day = c.getDate() + 1;
            c.setDate(day);
            loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());

            // //console.log('loop_date : ' + loop_date);
            // //console.log(slot);

            let required_slot = slot.get(loop_date);
            // //console.log('temp_slot : ' + temp_slot);
            if (required_slot == 0) {
                continue;
            }
            if (required_slot == NaN) {
                continue;
            }
            if (required_slot == undefined) {
                continue;
            }


            let present_slot_in_map = 0;

            if (day_Map_shift.has(loop_date)) {

                let employee_map = day_Map_shift.get(loop_date);
                for (let [id, present_date] of employee_map) {

                    if (present_date == loop_date) {
                        present_slot_in_map++;
                    }

                }

            }

            if (present_slot_in_map < required_slot) {

                //console.log("move_employee_leave starts");
                let isRun = false;
                await move_employee_leave(hospital_ID_path, starting_date, max_night_shift, current_employee_id, unit_id).then(
                    function (value) {
                        isRun = value;
                    },
                    function (err) {
                        console.log(err);
                    }
                ).catch((err) => {
                    console.log(err);
                })


                if (day_Map_shift.has(loop_date)) {
                    let day_shedule = day_Map_shift.get(loop_date);
                    day_shedule.set(current_employee_id, loop_date);
                    day_Map_shift.set(loop_date, day_shedule);
                } else {
                    let day_shedule = new Map();
                    day_shedule.set(current_employee_id, loop_date);
                    day_Map_shift.set(loop_date, day_shedule);
                }

                employee_continue_shift_counter++;
            }


            if (i == (max_night_shift - 1)) {

                let night_off_day = day_increment_int(loop_date, 1);
                if (employee_continue_shift_counter > 0) {

                    if (day_Map_shift.has(night_off_day)) {
                        let day_shedule = day_Map_shift.get(night_off_day);
                        day_shedule.set(current_employee_id, NIGHT_OFF);
                        day_Map_shift.set(night_off_day, day_shedule);
                    } else {
                        let day_shedule = new Map();
                        day_shedule.set(current_employee_id, NIGHT_OFF);
                        day_Map_shift.set(night_off_day, day_shedule);
                    }
                }

                if (employee_continue_shift_counter > 1) {
                    let week_off_day = day_increment_int(loop_date, 2);
                    if (day_Map_shift.has(week_off_day)) {
                        let day_shedule = day_Map_shift.get(week_off_day);
                        day_shedule.set(current_employee_id, WEEK_OFF);
                        day_Map_shift.set(week_off_day, day_shedule);
                    } else {
                        let day_shedule = new Map();
                        day_shedule.set(current_employee_id, WEEK_OFF);
                        day_Map_shift.set(week_off_day, day_shedule);
                    }
                }
            }
        }


    }


    // console.log("day_Map_shift");
    // console.log(day_Map_shift);

    return day_Map_shift;

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

function make_night_off(hospital_ID_path, employee_leave_map, employee_slot) {

    let map = employee_leave_map;

    // console.log("make_night_off employee_leave_map");
    // console.log(employee_leave_map);

    // console.log("make_night_off employee_slot");
    // console.log(employee_slot);


    let NIGHT_OFF = 'NIGHT_OFF';
    let WEEK_OFF = 'WEEK_OFF';
    let map_with_day_off = new Map();

    for (let [date, employee_id_date] of map) {
        map_with_day_off.set(date, employee_id_date);
    }

    let past_day_employee_shifting_date_order = new Set();
    let today_employee_shifting_date_order = new Set();

    var isFirst = true;
    for (let [date, value] of employee_slot) {

        let employee_id_date = new Map();

        if (map.has(date)) {
            employee_id_date = map.get(date);
        } else {
            employee_id_date = new Map();
        }

        for (let [id, date1] of employee_id_date) {

            today_employee_shifting_date_order.add(id);

        }

        for (let id of past_day_employee_shifting_date_order) {
            if (!today_employee_shifting_date_order.has(id)) {

                if (map_with_day_off.has(date)) {
                    let emp = map_with_day_off.get(date);
                    emp.set(id, NIGHT_OFF);
                    map_with_day_off.set(date, emp);
                } else {
                    let emp = new Map();
                    emp.set(id, NIGHT_OFF);
                    map_with_day_off.set(date, emp);
                }
            }
        }

        // //console.log(past_day_employee_shifting_date_order);
        // //console.log(today_employee_shifting_date_order);



        past_day_employee_shifting_date_order = today_employee_shifting_date_order;
        today_employee_shifting_date_order = new Set()
    }






    // console.log("map_with_day_off");
    // console.log(map_with_day_off);

    return map_with_day_off;

}

async function night_shiftpriorityDicrement(hospital_ID_path, employee_shifting_with_leaveMap, requested_employee, night_shift_hour, maximum_number_of_night_shift) {
    for (let [date, emp_map] of employee_shifting_with_leaveMap) {

        for (let [employee_id, date] of emp_map) {

            if (requested_employee.has(employee_id)) {

                const ref = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(employee_id);
                await ref.get()
                    .then((doc) => {

                        let priority = doc.get(E001_Employee.priority);
                        priority = priority - 1;

                        let remaining_working_hour = doc.get(E001_Employee.remaining_working_hour);
                        remaining_working_hour = remaining_working_hour - night_shift_hour;


                        ref.update({
                            'priority': priority,
                            'remaining_working_hour': remaining_working_hour
                        });


                    })
                    .catch((err) => {
                        console.log("Error: " + err);
                    });

            } else {

                const ref = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee).doc(employee_id);
                await ref.get()
                    .then((doc) => {

                        let remaining_working_hour = doc.get(E001_Employee.remaining_working_hour);
                        remaining_working_hour = remaining_working_hour - (maximum_number_of_night_shift * night_shift_hour);


                        ref.update({
                            'remaining_working_hour': remaining_working_hour
                        });


                    })
                    .catch((err) => {
                        console.log("Error: " + err);
                    });


            }

        }
    }

    // for(let [employee_id, score] of Emp_getting_shift){

    //     const ref = admin.firestore().collection(hospital_ID_path+E001_Employee.E001_Employee).doc(employee_id);
    //     await ref.get()
    //         .then((doc) => {

    //             let priority = doc.get(E001_Employee.priority);
    //             priority = priority - score;

    //             ref.update({'priority':priority});


    //         })
    //         .catch((err) => {
    //             //console.log("Error: " + err);
    //         });


    // }

}

async function make_night_shift(
    hospital_ID_path,
    date,
    unit_id,
    skill,
    maximum_number_of_night_shift,
    set_of_employee_req_in_night_shift_for_max_of_skill,
    number_of_employee_req_in_night_shift_of_skill,
    total_num_of_employee_of_skill,
    night_shift_hour,
    shift_duration_map,
    night_shift_mode
) {

    // employees are not allowd  
    // 1 employees are night-off in today // step1
    // 2 employees are shifted in yesterday night //step1
    // 3 employees are shifted in any shift on today //step1

    // employee list depends on 
    // 1 employee request for night shift (from starting to starting+maximum_number_of_night_shift) 
    // 2 employee_night_shift_position
    // 3 employee_working_hour
    // 4 having maximum leave in future period (from starting to starting+maximum_number_of_night_shift)

    //console.log('nightShift date');
    //console.log(date+"; skill:"+skill);

    ////////////step1//////////////
    var eligible_employees = new Set();
    await step1_getElegibleEmployeeList_nightShiftRoaster(hospital_ID_path, unit_id, date, skill).then(
        function (value) {
            eligible_employees = value;
        },
        function (error) {
            console.log('error: ' + error);
        }
    );

    //console.log('nightShift step1:  eligible_employees');
    //console.log(eligible_employees);


    ////////////step2//////////////
    let requested_employee = new Map();
    await step2_getEmployeeRequestForMaxNight(hospital_ID_path, date, unit_id, skill, maximum_number_of_night_shift).then(
        function (value) {
            requested_employee = value;
        },
        function (error) {
            console.log('error: ' + error);
        }
    );


    //console.log('nightShift step2:  requested_employee');
    //console.log(requested_employee);


    ////////////step3//////////////
    const max_pairs = total_num_of_employee_of_skill / number_of_employee_req_in_night_shift_of_skill;
    let employee_working_hour_past_night_shift = new Map();
    await step3_getEmployeeWithWorkingHour_PastNightShifting(hospital_ID_path, date, unit_id, skill, maximum_number_of_night_shift, max_pairs, shift_duration_map).then(
        function (value) {
            employee_working_hour_past_night_shift = value;
        },
        function (error) {
            console.log('error: ' + error);
        }
    );


    let employee_dont_get_leave_in_past_4_days = new Set();
    await step4_getEmployeeDontHaveLeavePast4Days(hospital_ID_path, date, unit_id).then(
        function (value) {
            employee_dont_get_leave_in_past_4_days = value;
        },
        function (error) {
            console.log('error: ' + error);
        }
    )

    let employee_Leave_counnt = new Map();
    await getLeave_Count_Other_Than_WO_or_NO_on_WorkingHour_Calculations(hospital_ID_path, date, unit_id).then(
        function (value) {
            employee_Leave_counnt = value;
        },
        function (error) {
            console.log('error: ' + error);
        }
    )

    //console.log('nightShift step3: employee_working_hour_past_night_shift');
    //console.log(employee_working_hour_past_night_shift);
    // return;


    var elegible_employee_value_map = new Map();

    for (let emp of eligible_employees) {
        let value = 0;
        if (requested_employee.has(emp)) {
            value = value + requested_employee.get(emp);
        }
        if (employee_working_hour_past_night_shift.has(emp)) {
            value = value + employee_working_hour_past_night_shift.get(emp);
        }
        if (employee_dont_get_leave_in_past_4_days.has(emp)) {
            value = value - getWaight(W000_Constants.NotGetLeaveInPast4Days);
        }
        if (employee_Leave_counnt.has(emp)) {
            value = value - (employee_Leave_counnt.get(emp));
        }

        elegible_employee_value_map.set(emp, value);
    }


    let elegible_employee_value_shorted_map = shortMapByValue(elegible_employee_value_map);


    let employee_shifting_with_leaveMap = new Map();


    if (night_shift_mode == getCode(E000_Constants.employee_leave_in_priority)) {

        await setShift_with_leave_in_priority(hospital_ID_path, elegible_employee_value_shorted_map, set_of_employee_req_in_night_shift_for_max_of_skill, date, maximum_number_of_night_shift).then(

            function (value) {
                employee_shifting_with_leaveMap = value;
            },
            function (err) {
                console.log(err)
            }
        ).catch((err) => {
            console.log(err)
        })

    } else {

        await setShift_with_leaveMap_nightShift_in_priority(hospital_ID_path, elegible_employee_value_shorted_map, set_of_employee_req_in_night_shift_for_max_of_skill, date, maximum_number_of_night_shift, unit_id).then(

            function (value) {
                employee_shifting_with_leaveMap = value;
            },
            function (err) {
                console.log(err)
            }
        ).catch((err) => {
            console.log(err)
        })




    }

    // console.log('night shift1: employee_shifting_with_leaveMap');
    // console.log(employee_shifting_with_leaveMap);

    for (let [date, id_value] of employee_shifting_with_leaveMap) {

        for (let [employee_id, date_or_value] of id_value) {

            if ((typeof date_or_value) == 'number') {
                //let ID = unit_id + '@' + employee_id + '@' + date + '@' + getIntValue(E000_Constants.night_shift);
                // const ref_shift = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift).doc(ID);


                // //console.log("ID shift: "+ID);

                // let data = {
                //     'employee_id': employee_id,
                //     'skill': skill,
                //     'shift': getIntValue(E000_Constants.night_shift),
                //     'date': date,
                //     'unit_id': unit_id,
                //     'attendance': getCode(E000_Constants.attendance_notdefined),
                //     'ID': ID,
                // };

                /////////////////////////////////////////////////////////////////////////////////////////////////////// shift start
                setRosterShifts(employee_id, skill, getIntValue(E000_Constants.night_shift), date, getCode(E000_Constants.attendance_notdefined));
                /////////////////////////////////////////////////////////////////////////////////////////////////////// shift end
                //here here;
                // await ref_shift.get()
                //     .then((doc) => {
                //         if (!doc.exists) {
                //             ref_shift.set(data).then(() => {
                //                 //console.log("night shift data is added");
                //             }).catch((err) => {
                //                 //console.log("night shift  data is not added: "+err);
                //             });
                //         }

                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     })

            } else if ((typeof date_or_value) == 'string') {
                let ID = employee_id + '@' + date;

                //console.log("ID leave: "+ID);


                // const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar).doc(ID);

                // let data = {
                //     'employee_id': employee_id,
                //     'date': date,
                //     'leave_type': date_or_value,
                //     'unit_id': unit_id,
                //     'ID': ID
                // }

                ///////////////////////////////////////////////////////////////////////////////////////// leave start
                setRoasterLeave(employee_id, date, date_or_value, "X", true);
                ///////////////////////////////////////////////////////////////////////////////////////// leave end



                // await ref_leave.get()
                //     .then((doc) => {
                //         if (!doc.exists) {
                //             ref_leave.set(data);
                //         }

                //     })
                //     .catch((err) => {
                //         console.log(err);
                //     })
            }

        }

    }


    await night_shiftpriorityDicrement(hospital_ID_path, employee_shifting_with_leaveMap, requested_employee, night_shift_hour, maximum_number_of_night_shift);



}

function get_nearest_loop_of_date(starting_date, ending_date, maximum_number_of_night_shift) {

    let new_starting_date;
    var saved_initial_data = '20210101';

    if (parseInt(starting_date) <= parseInt(saved_initial_data)) {
        return null;
    }

    if (parseInt(ending_date) > parseInt(starting_date)) {
        let saved_date = new Date();

        saved_date.setFullYear(saved_initial_data.substring(0, 4));
        saved_date.setMonth((saved_initial_data.substring(4, 6) - 1));
        saved_date.setDate(saved_initial_data.substring(6, 8));

        let starting_date1 = new Date();

        starting_date1.setFullYear(starting_date.substring(0, 4));
        starting_date1.setMonth((starting_date.substring(4, 6) - 1));
        starting_date1.setDate(starting_date.substring(6, 8));

        let int_saved_date = saved_date.getDate() +
            saved_date.getMonth() * 30.436 +
            saved_date.getFullYear() * 365.25;

        const int_starting_date1 = starting_date1.getDate() +
            starting_date1.getMonth() * 30.436 +
            starting_date1.getFullYear() * 365.25;


        let approx_day_diffrence = int_starting_date1 - int_saved_date;

        // //console.log('starting_date = ' + starting_date);
        // //console.log('saved_initial_data = ' + saved_initial_data);
        // //console.log('approx_day_diffrence = ' + approx_day_diffrence);


        let int_value = approx_day_diffrence / maximum_number_of_night_shift;
        // //console.log('diffrence = ' + int_value);

        let int_value2 = Math.round(int_value) * maximum_number_of_night_shift;
        // //console.log('round = ' + int_value2);

        //int_value2 = 5000000;

        var day = saved_date.getDate() + int_value2;
        saved_date.setDate(day);
        var nearest_loop_date = saved_date.getFullYear() * 10000 + ((saved_date.getMonth() + 1) * 100 + saved_date.getDate());

        // //console.log('nearest loop starting date = ' + nearest_loop_date);

        // //console.log(' day = ' + saved_date.getDate());
        // //console.log(' getMonth = ' + saved_date.getMonth());
        // //console.log(' getFullYear = ' + saved_date.getFullYear());

        int_saved_date = saved_date.getDate() +
            saved_date.getMonth() * 30.436 +
            saved_date.getFullYear() * 365.25;

        // //console.log('nearest loop starting date 2 = ' + int_saved_date);
        // //console.log('nearest loop int_starting_date1 date 2 = ' + int_starting_date1);




        if (int_saved_date <= int_starting_date1) {

            let diff_value = int_starting_date1 - int_saved_date;
            //console.log('diff_value = ' + diff_value);

            while (diff_value > maximum_number_of_night_shift) {

                var day = saved_date.getDate() + maximum_number_of_night_shift;
                saved_date.setDate(day);
                nearest_loop_date = saved_date.getFullYear() * 10000 + ((saved_date.getMonth() + 1) * 100 + saved_date.getDate());

                // //console.log('nearest loop starting date = ' + nearest_loop_date);

                int_saved_date = saved_date.getDate() +
                    saved_date.getMonth() * 30.436 +
                    saved_date.getFullYear() * 365.25;


                diff_value = Math.round(int_starting_date1 - int_saved_date);
                // //console.log('diff_value = ' + diff_value);

            }


            new_starting_date = nearest_loop_date;


        } else {

            let diff_value = int_saved_date - int_starting_date1;
            //console.log('diff_value = ' + diff_value);

            while ((int_starting_date1 < int_saved_date)) {

                var day = saved_date.getDate() - maximum_number_of_night_shift;
                saved_date.setDate(day);
                nearest_loop_date = saved_date.getFullYear() * 10000 + ((saved_date.getMonth() + 1) * 100 + saved_date.getDate());

                // //console.log('nearest loop starting date = ' + nearest_loop_date);

                int_saved_date = saved_date.getDate() +
                    saved_date.getMonth() * 30.436 +
                    saved_date.getFullYear() * 365.25;


                diff_value = Math.round(int_saved_date - int_starting_date1);
                // //console.log('diff_value = ' + diff_value);

            }


            new_starting_date = nearest_loop_date;



        }

        ////console.log('new_starting_date : ' + new_starting_date);


    }

    return '' + new_starting_date;
}

async function make_night_and_day_shift_roaster(
    hospital_ID_path,
    unit_id,
    starting_date,
    ending_date,
    night_shift_employee, day_shift_employee, evening_shift_employee,
    maximum_number_of_night_shift, total_number_of_employee_scheme, shift_duration_map, maximum_shift_in_a_week, night_shift_mode
) {


    starting_date = get_nearest_loop_of_date(starting_date, ending_date, maximum_number_of_night_shift);

    if (starting_date == null) {
        return;
    }

    var c = new Date();

    c.setFullYear(starting_date.substring(0, 4));
    c.setMonth((starting_date.substring(4, 6) - 1));
    c.setDate(starting_date.substring(6, 8));



    if (parseInt(ending_date) > parseInt(starting_date)) {

        var day = c.getDate() - 1; // for looping 
        c.setDate(day);
        var loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());



        for (var i = 0; (loop_date < parseInt(ending_date)); i = i + maximum_number_of_night_shift) {


            let dates = [];
            for (var i = 0; i < maximum_number_of_night_shift; i++) {
                var day = c.getDate() + 1;
                c.setDate(day);
                loop_date = c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate());
                dates.push(loop_date);
            }


            let skill_date_numberOfEmployeePresentOnDate = new Map(); // <skill, <date,numberOfEmployeePresentOnDate >>

            //var list_of_emp = new Set();

            // const ref_unit = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
            //     .where(E002_Shift.unit_id, '==', unit_id)
            //     .where(E002_Shift.shift, '==', getIntValue(E000_Constants.night_shift))
            //     .where(E002_Shift.date, 'in', dates);


            // await ref_unit.get()
            //     .then((doc) => {

            //         doc.forEach((shift) => {


            //             list_of_emp.add(shift.get(E002_Shift.employee_id));

            //             let skill = shift.get(E002_Shift.skill);
            //             let date = shift.get(E002_Shift.date);


            //             if (skill_date_numberOfEmployeePresentOnDate.has(skill)) {
            //                 let skill_map = skill_date_numberOfEmployeePresentOnDate.get(skill);
            //                 if (skill_map.has(date)) {
            //                     let employe_present = skill_map.get(date);
            //                     employe_present++;
            //                     skill_map.set(date, employe_present);
            //                 } else {
            //                     skill_map.set(date, 1);
            //                 }
            //                 skill_date_numberOfEmployeePresentOnDate.set(skill, skill_map);
            //             } else {
            //                 let skill_map = new Map();
            //                 skill_map.set(date, 1);
            //                 skill_date_numberOfEmployeePresentOnDate.set(skill, skill_map);
            //             }
            //         });
            //     })
            //     .catch((error) => {
            //         console.log('getListOfEmptyShiftOfDay: ' + error);
            //     })
            ///////////////////////////////////////////////////////////////////////////////start shift

            try {

                let shift_data = SHIFT_MAP;

                let skill_date_numberOfEmployeePresentOnDate1 = new Map();

                for (let d of dates) {
                    let dateYear = "" + parseInt(d / 100);
                    if (shift_data.has(dateYear)) {
                        let employeeMap = shift_data.get(dateYear);
                        for (let [emp_id, date_map] of employeeMap) {
                            if (date_map.has("" + d)) {
                                let data_set = date_map.get("" + d);
                                for (let data of data_set) {
                                    let shift_DB = data.split("_")[0];
                                    let skill_DB = data.split("_")[1];

                                    if (getIntValue(E000_Constants.night_shift) == parseInt(shift_DB)) {
                                        if (skill_date_numberOfEmployeePresentOnDate.has(skill_DB)) {
                                            let skill_map = skill_date_numberOfEmployeePresentOnDate.get(skill_DB);
                                            if (skill_map.has(d)) {
                                                let employe_present = skill_map.get(d);
                                                employe_present++;
                                                skill_map.set(d, employe_present);
                                            } else {
                                                skill_map.set(d, 1);
                                            }
                                            skill_date_numberOfEmployeePresentOnDate.set(skill_DB, skill_map);
                                        } else {
                                            let skill_map = new Map();
                                            skill_map.set(d, 1);
                                            skill_date_numberOfEmployeePresentOnDate.set(skill_DB, skill_map);
                                        }
                                    }
                                }
                            }
                        }
                    }
                }


                // console.log("101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101  ");
                // console.log("make_shift_roster");
                // console.log(skill_date_numberOfEmployeePresentOnDate);
                // console.log(skill_date_numberOfEmployeePresentOnDate1);

                // let set_A = skill_date_numberOfEmployeePresentOnDate;
                // let set_B = skill_date_numberOfEmployeePresentOnDate1;
                // let boo = "equal";
                // if (set_A.size == set_B.size) {
                //     for (let id of set_B) {
                //         if (!set_A.has(id)) {
                //             boo = "not equal";
                //             break;
                //         }
                //     }
                // }
                // console.log(boo);

                // console.log("101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 101 ");
            } catch (e) {
                console.log(e);
            }


            /////////////////////////////////////////////////////////////////////////////// end shift


            var night_shift_employee_map_str = getMapOfString(night_shift_employee);

            let day_list = dates;

            let skill_date_numberOfEmployeeEmpertey = new Map(); // <skill, <date, slot_req>>

            for (let [skill, date_num] of night_shift_employee_map_str) {

                if (skill_date_numberOfEmployeePresentOnDate.has(skill)) {
                    let map = skill_date_numberOfEmployeePresentOnDate.get(skill);

                    for (let date of day_list) {
                        if (map.has(date)) {
                            let present_shift = map.get(date);
                            let requed_shift = date_num - present_shift;
                            ////console.log(requed_shift + '=' + date_num + '-' + present_shift);
                            map.set(date, requed_shift);
                        } else {
                            map.set(date, date_num);
                        }
                    }
                    skill_date_numberOfEmployeeEmpertey.set(skill, map);


                } else {
                    let map = new Map();
                    for (let date of day_list) {
                        map.set(date, date_num);
                    }
                    skill_date_numberOfEmployeeEmpertey.set(skill, map);
                }

            }


            // we have not present skill number map in night_shift_employee_map
            for (let [skill, number_of_skill] of skill_date_numberOfEmployeeEmpertey) {
                var night_shift_employee_map_str = getMapOfString(night_shift_employee);
                var shift_duration = getMapOfString(shift_duration_map);
                var total_number_of_employee_scheme_map = getMapOfString(total_number_of_employee_scheme);
                let employee_in_night_shift = parseInt(night_shift_employee_map_str.get(skill));
                let total_employee_in_skill = total_number_of_employee_scheme_map.get(skill);
                let night_shift_hour = parseInt(shift_duration.get(getCode(E000_Constants.night_shift)));


                await make_night_shift(
                    hospital_ID_path,
                    dates[0],
                    unit_id,
                    skill,
                    maximum_number_of_night_shift,
                    number_of_skill,
                    employee_in_night_shift,
                    total_employee_in_skill,
                    night_shift_hour,
                    shift_duration_map,
                    night_shift_mode);

            }

            let day_starting_date = dates[0];
            if (dates[0] < parseInt(starting_date)) {
                day_starting_date = starting_date;
            }

            let day_ending_date = dates[maximum_number_of_night_shift - 1];
            if (dates[maximum_number_of_night_shift - 1] > parseInt(ending_date)) {
                day_ending_date = ending_date;
            }

            await make_day_shift_roster(
                hospital_ID_path,
                unit_id,
                day_starting_date,
                day_ending_date,
                total_number_of_employee_scheme,
                day_shift_employee,
                evening_shift_employee,
                maximum_shift_in_a_week,
                shift_duration_map
            );



        }

    }
}

function setRosterShifts(employee_ID, skill, shift_type, date, attendance) {

    date = "" + date;
    try {
        let yearMonth = "" + parseInt(parseInt(date) / 100);

        if (SHIFT_MAP.has(yearMonth)) {
            let employee_map = SHIFT_MAP.get(yearMonth);

            if (employee_map.has(employee_ID)) {
                let date_map = employee_map.get(employee_ID);

                if (date_map.has(date)) {
                    let set_value = date_map.get(date);
                    let data = shift_type + "_" + skill + "_" + attendance;
                    set_value.add(data);
                    date_map.set(date, set_value);
                    employee_map.set(employee_ID, date_map);
                } else {
                    let set_value = new Set();

                    let data = shift_type + "_" + skill + "_" + attendance;
                    set_value.add(data);
                    date_map.set(date, set_value);
                    employee_map.set(employee_ID, date_map);

                }
            } else {
                let date_map = new Map();
                let set_value = new Set();

                let data = shift_type + "_" + skill + "_" + attendance;
                set_value.add(data);
                date_map.set(date, set_value);
                employee_map.set(employee_ID, date_map);
            }
            SHIFT_MAP.set(yearMonth, employee_map);
        } else {

            let employee_map = new Map();
            let date_map = new Map();
            let set_value = new Set();

            let data = shift_type + "_" + skill + "_" + attendance;
            set_value.add(data);
            date_map.set(date, set_value);

            employee_map.set(employee_ID, date_map);
            SHIFT_MAP.set(yearMonth, employee_map);
        }
        // console.log("////////////////////////////////////////////////////////////////")
        // console.log(SHIFT_MAP)
        // console.log("////////////////////////////////////////////////////////////////")
    } catch (e) {
        console.log(e)
    }

}

function setRoasterLeave(employee_id, date, leave_type, leave_db_id, addWhenNotPresent) {

    // <employee_id: <date:[set]>>    set = leave_Type_leave_db_id
    /*
    
    let leave_data = {
            "employee_id":employee_id,
            "date": day_for_shifting_leave,
            "leave_type": leave_type,
            "unit_id": unit_id,
            "ID": ID,
            "leave_db_id":leave_db_id
        };

     */
    date = "" + date;
    try {
        if (LEAVE_MAP.has(employee_id)) {
            let date_map = LEAVE_MAP.get(employee_id);

            if (date_map.has(date)) {
                if (!addWhenNotPresent) {
                    let set_value = new Set();
                    let data = leave_type + "_" + leave_db_id;
                    set_value.add(data);
                    date_map.set(date, set_value);
                    LEAVE_MAP.set(employee_id, date_map);
                }
            } else {
                let set_value = new Set();
                let data = leave_type + "_" + leave_db_id;
                set_value.add(data);
                date_map.set(date, set_value);
                LEAVE_MAP.set(employee_id, date_map);
            }

        } else {
            let date_map = new Map();
            let set_value = new Set();

            let data = leave_type + "_" + leave_db_id;
            set_value.add(data);
            date_map.set(date, set_value);
            LEAVE_MAP.set(employee_id, date_map);
        }
    } catch (e) {
        console.log(e);
    }
}

async function getRostrAndLeaveMap(hospital_ID_path, strting_date, ending_date, unit_id) {


    const ref_roaster = admin.firestore().collection(hospital_ID_path + E002_Roaster.E002_Roaster);


    let starting_year = parseInt(parseInt("" + strting_date) / 10000);
    let starting_month = parseInt((parseInt("" + strting_date) - starting_year * 10000) / 100);

    let ending_year = parseInt(parseInt("" + ending_date) / 10000);
    let ending_month = parseInt((parseInt("" + ending_date) - ending_year * 10000) / 100);

    let past_year;
    let past_month;

    if (starting_month <= 4) {
        past_month = 12 + starting_month - 4;
        past_year = starting_year - 1;
    } else {
        past_month = starting_month - 4;
        past_year = starting_year;
    }

    let startingYearMonthToMakeMap = past_year * 100 + past_month;
    let endingYearMonthToMakeMap = ending_year * 100 + ending_month;


    let rostrSuperMap = new Map(); // <yearMonth : <employee_id:<date:[set_data]>>>

    await ref_roaster
        .where(E002_Roaster.unit_id, "==", unit_id)
        .where(E002_Roaster.yearMonth, ">=", startingYearMonthToMakeMap)
        .where(E002_Roaster.yearMonth, "<=", endingYearMonthToMakeMap)
        .get()
        .then((v) => {
            v.forEach((roaster) => {

                let roster_string = roaster.get(E002_Roaster.roster);
                let rostrMap = getRoasterStringToMap(roster_string);
                let yearMonth = roaster.get(E002_Roaster.yearMonth);

                rostrSuperMap.set("" + yearMonth, rostrMap);
            })
        })
        .catch((e) => {
            console.log(e)
        })

    const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveOnCalendar.E003_LeaveOnCalendar);

    let current_year = starting_year;
    let leave_Starting_year;
    if (starting_month == 1) {
        leave_Starting_year = starting_year - 1;
    } else {
        leave_Starting_year = starting_year;
    }


    let leaverMap = new Map();// <employee_id : <date:[data_set]>>
    await ref_leave
        .where(E003_LeaveOnCalendar.unit_id, "==", unit_id)
        .where(E003_LeaveOnCalendar.year, ">=", leave_Starting_year)
        .where(E003_LeaveOnCalendar.year, "<=", current_year)
        .get()
        .then((v  /* = <employee_id : <date:[data_set]>>*/) => {

            v.forEach((v) => {
                let value_in_map = getLeaveStringToMap(v.get(E003_LeaveOnCalendar.leave_map));
                let employee_id = v.get(E003_LeaveOnCalendar.employee_id);

                if (leaverMap.has(employee_id)) {

                    let past_Map = leaverMap.get(employee_id);
                    for (let [id, value] of value_in_map) {
                        past_Map.set(id, value);
                    }
                    leaverMap.set(employee_id, past_Map);
                } else {
                    leaverMap.set(employee_id, value_in_map);
                }
            })
        })
        .catch((e) => {
            console.log(e)
        })


    SHIFT_MAP = rostrSuperMap;
    LEAVE_MAP = leaverMap;

}

async function setRoasterAndLeaveMap(hospital_ID_path, unit_id) {

    try {

        let rostrMap = SHIFT_MAP;// <yearMonth : <employee_id: <date:[set]>>>
        let leaverMap = LEAVE_MAP;// <employee_id: <date:[set]>>


        // console.log("this is my roaster");
        // console.log(rostrMap);
        // console.log(leaverMap);
        for (let [yearMonth, employee_id_value] of rostrMap) {

            let doc_id = unit_id + "@" + yearMonth;
            const ref_roster = admin.firestore().collection(hospital_ID_path + E002_Roaster.E002_Roaster).doc(doc_id);


            let year = parseInt(parseInt(yearMonth) / 100);
            let month = parseInt(parseInt(yearMonth) - (year * 100));

            let roster = getRoasterMapToString(employee_id_value);

            let data = {
                'unit_id': unit_id,
                'ID': doc_id,
                'roster': roster,
                'year': year,
                'month': month,
                'yearMonth': parseInt(yearMonth)
            };

            await ref_roster.get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        ref_roster.update(data);
                    } else {
                        ref_roster.set(data);
                    }
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });



        }

        let leave_map_with_year = new Map(); // <year : <employee_id: <date:[set]>>>

        for (let [employee_id, value] of leaverMap) {

            for (let [date, set] of value) {

                let year = parseInt(date / 10000);

                if (leave_map_with_year.has(year)) {
                    let map = leave_map_with_year.get(year);
                    if (map.has(employee_id)) {
                        let employeeMap = map.get(employee_id);
                        employeeMap.set(date, set);
                        map.set(employee_id, employeeMap);
                    } else {
                        let employeeMap = new Map();
                        employeeMap.set(date, set);
                        map.set(employee_id, employeeMap);
                    }

                    leave_map_with_year.set(year, map);

                } else {
                    let map = new Map();
                    let employeeMap = new Map();
                    employeeMap.set(date, set);
                    map.set(employee_id, employeeMap);
                    leave_map_with_year.set(year, map);

                }

            }

        }

        for (let [year, employee_map] of leave_map_with_year) {

            for (let [employee_id, value] of employee_map) {

                let doc_id = unit_id + "@" + employee_id + "@" + year; //  unit_id@employee_id@year
                const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveOnCalendar.E003_LeaveOnCalendar).doc(doc_id);

                let leave_data = getLeaveMapToString(value);

                let data = {
                    'unit_id': unit_id,
                    'ID': doc_id,
                    'leave_map': leave_data,
                    'employee_id': employee_id,
                    'year': year,
                };

                await ref_leave.get()
                    .then((snapshot) => {
                        if (snapshot.exists) {
                            ref_leave.update(data);
                        } else {
                            ref_leave.set(data);
                        }
                    })
                    .catch((err) => {
                        console.log("Error: " + err);
                    });

            }
        }

    } catch (e) {
        console.log(e);
    }
}


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


function getEndingDateOfMonth(yearMonth) {

    let starting_date = '' + yearMonth;

    var lastDay = new Date();
    lastDay.setFullYear(starting_date.substring(0, 4));
    lastDay.setMonth((starting_date.substring(4, 6)));
    lastDay.setDate(0);


    return lastDay.toISOString();
}

function getStartingDateOfMonth(yearMonth) {

    let starting_date = '' + yearMonth;

    var lastDay = new Date();
    lastDay.setFullYear(starting_date.substring(0, 4));
    lastDay.setMonth((parseInt(starting_date.substring(4, 6)) - 1));
    lastDay.setDate(1);


    return lastDay.toISOString();
}

async function setRoasterDBForFrontEnd(hospital_ID_path, unit_id, starting_date, ending_date) {

    try {

        let rostrMap = SHIFT_MAP;// <yearMonth : <employee_id: <date:[set]>>>
        let leaverMap = LEAVE_MAP;// <employee_id: <date:[set]>>

        const unit = admin.firestore().collection(hospital_ID_path + E005_Unit.E005_Unit).doc(unit_id);

        let shift_starting_time;

        await unit.get().then((snapshot) => {
            shift_starting_time = snapshot.get(E005_Unit.shift_starting_time);
        })

        let shift_starting_time_map = getShiftTimeMap(shift_starting_time);

        for (let [yearMonth, employee_id_value] of rostrMap) {

            let doc_id = unit_id + "@" + yearMonth;
            const ref_roster = admin.firestore().collection(hospital_ID_path + "RosterDB").doc(doc_id);

            let year = parseInt(parseInt(yearMonth) / 100);
            let month = parseInt(parseInt(yearMonth) - year * 100);

            let roster = getRoasterDBDecoder(employee_id_value, shift_starting_time_map);



            let data = {
                'data': roster,
                'endDate': getEndingDateOfMonth(yearMonth),
                'groupId': unit_id,
                'isFinal': false,
                'startDate': getStartingDateOfMonth(yearMonth),

                'yearMonth': parseInt(yearMonth),
                'month': parseInt(month)
            };

            await ref_roster.get()
                .then((snapshot) => {
                    if (snapshot.exists) {
                        ref_roster.update(data);
                    } else {
                        ref_roster.set(data);
                    }
                })
                .catch((err) => {
                    console.log("Error: " + err);
                });

        }
    } catch (e) {
        console.log(e);
    }

}

function get_Paramiters_with_conditions(starting_date, ending_date) {
    /*
        E003_LeaveCalendar: 'E003_LeaveCalendar',
        employee_id: 'employee_id',
        date: 'date',
        leave_type: 'leave_type',
        unit_id: 'unit_id',
        ID: 'ID',
        leave_db_id: 'leave_db_id'
    */

    starting_date = parseInt(starting_date);
    ending_date = parseInt(ending_date);
    let list_of_leave = [];

    if (starting_date < ending_date) {

        try {
            for (let [emp_id, date_map] of LEAVE_MAP) {
                for (let [date_db, set_value] of date_map) {

                    if (parseInt(date_db) >= starting_date) {
                        if (parseInt(date_db) <= ending_date) {
                            for (let str of set_value) {

                                let obj = {
                                    employee_id: emp_id,
                                    date: parseInt(date_db),
                                    leave_type: str.split("_")[0],
                                    leave_db_id: str.split("_")[1]
                                };

                                list_of_leave.push(obj);

                            }
                        }
                    }
                }
            }

        } catch (e) {
            console.log(e);
        }
    } else if (ending_date == ending_date) {
        try {
            for (let [emp_id, date_map] of LEAVE_MAP) {
                if (date_map.has("" + ending_date)) {
                    set_value = date_map.get("" + ending_date);
                    for (let str of set_value) {

                        let obj = {
                            employee_id: emp_id,
                            date: parseInt(ending_date),
                            leave_type: str.split("_")[0],
                            leave_db_id: str.split("_")[1]
                        };

                        list_of_leave.push(obj);

                    }
                }
            }

        } catch (e) {
            console.log(e);
        }
    }




    //  console.log(list_of_leave);


    return list_of_leave;
}

function check_the_starting_ending_date(strting_date, ending_date){
    
    let starting_year =parseInt( (parseInt(strting_date)/10000));
    let ending_year = parseInt((parseInt(ending_date)/10000));

    console.log("year: "+starting_year+"  "+ending_year);

    if((parseInt(ending_date) < parseInt(strting_date))){
        console.log("1 Not posible: starting date is greater than ending date");
        return false;
    }
   
    if((ending_year - starting_year) > 2){
        console.log("2 Not posible: more than limit days");
        return false;
    }

    let starting_month =parseInt(parseInt( parseInt(strting_date) - starting_year*10000)/100);
    let ending_month = parseInt(parseInt(parseInt(ending_date) - ending_year*10000)/100);

    console.log("month: "+starting_month+"  "+ending_month);

    if(ending_year == starting_year){
        if((ending_month - starting_month) > 4 ){
            console.log("3 Not posible: more than limit days");
            return false;
        }
    }else if(ending_year > starting_year){

        if((12 + ending_month - starting_month) > 4 ){
            console.log("4 Not posible: more than limit days");
            return false;
        }
    }

    return true;
}

let SHIFT_MAP;/* <yearMonth : <employee_id: <date:[set]>>> */
let LEAVE_MAP;/* <employee_id : <date:[data_set]>> */
async function makeRoster(hospital_ID_path, strting_date, ending_date, unit_id) {

    //await RosterStatusStart(unit_id, hospital_ID_path);
    const ref_unit = admin.firestore().collection(hospital_ID_path + E005_Unit.E005_Unit).doc(unit_id);


   if(!check_the_starting_ending_date(strting_date, ending_date)){
        return; 
   }


    await getRostrAndLeaveMap(hospital_ID_path, strting_date, ending_date, unit_id);

    await getEmployeeRequestFromChoises(unit_id,  hospital_ID_path);

    // let ROSTER_MAP = new Map();


    //  console.log(SHIFT_MAP);
    //  console.log(LEAVE_MAP);


    var maximum_number_of_night_shift = 0;

    var night_shift_employee;
    var total_number_of_employee_scheme;
    var shift_duration_map;

    var day_shift_employee;
    var evening_shift_employee;
    var maximum_shift_in_a_week = 0;

    var night_shift_mode;


    await ref_unit.get().then((unit_doc) => {

        var property = unit_doc.get(E005_Unit.roster_rules);

        // console.log('property : ' + property);

        if (property == undefined) {
            return;
        }

        var property_map = getMapOfString(property);

        maximum_number_of_night_shift = property_map.get('1');
        if (maximum_number_of_night_shift != undefined) {
            maximum_number_of_night_shift = parseInt(property_map.get('1'));
        } else {
            maximum_number_of_night_shift = 4;
        }

        maximum_shift_in_a_week = property_map.get('2');
        if (maximum_shift_in_a_week != undefined) {
            maximum_shift_in_a_week = parseInt(property_map.get('2'));
        } else {
            maximum_shift_in_a_week = 6;
        }

        night_shift_mode = unit_doc.get(E005_Unit.night_shift_mode);




        total_number_of_employee_scheme = unit_doc.get(E005_Unit.numberOfEmployees)


        night_shift_employee = unit_doc.get(E005_Unit.night_shift_employee);
        shift_duration_map = unit_doc.get(E005_Unit.shift_duration_map);
        day_shift_employee = unit_doc.get(E005_Unit.day_shift_employee);
        evening_shift_employee = unit_doc.get(E005_Unit.evening_shift_employee);

    }).catch((error) => {
        console.log(error);
    })


    //console.log('maximum_number_of_night_shift : ' + maximum_number_of_night_shift);

    if (maximum_number_of_night_shift == 0) {
        //console.log('roster is cant make becouse \'maximum_number_of_night_shift == 0\'')
        return;
    }


    var c = new Date();


    c.setFullYear(strting_date.substring(0, 4));
    c.setMonth((strting_date.substring(4, 6) - 1));
    c.setDate(strting_date.substring(6, 8));


    let roster_days = 0;
    if (parseInt(ending_date) > parseInt(strting_date)) {

        let date1 = '';
        roster_days = 1;
        for (let i = 0; (date1 <= parseInt(ending_date)); i++) {
            roster_days++;
            let day = c.getDate() + 1;
            c.setDate(day);
            date1 = (c.getFullYear() * 10000 + ((c.getMonth() + 1) * 100 + c.getDate()));
            //console.log(date1);
            //console.log(ending_date);
        }

    }

    // testing
    await setEmployeePriorityAndWorkingHour(hospital_ID_path, unit_id, strting_date, roster_days);

    await make_night_and_day_shift_roaster(hospital_ID_path, unit_id, strting_date, ending_date, night_shift_employee, day_shift_employee, evening_shift_employee, maximum_number_of_night_shift, total_number_of_employee_scheme, shift_duration_map, maximum_shift_in_a_week, night_shift_mode);


    await setRoasterAndLeaveMap(hospital_ID_path, unit_id);

    await setRoasterDBForFrontEnd(hospital_ID_path, unit_id, strting_date, ending_date);

    await RosterStatusEnd(unit_id, hospital_ID_path);
}

async function getEmployeeShift(hospital_ID_path, starting_time, ending_time, unit_id) {



    const shift_list = new Map();/// <employeeID, <Date, [shift_type]>>

    // console.log(hospital_ID_path+E002_Shift.E002_Shift);

    const ref = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
        .where(E002_Shift.unit_id, '==', unit_id)
        .where(E002_Shift.date, '>=', parseInt(starting_time))
        .where(E002_Shift.date, '<=', parseInt(ending_time));

    await ref.get().then((doc) => {
        doc.forEach((shift) => {

            let date = shift.get(E002_Shift.date);
            let employee_id = shift.get(E002_Shift.employee_id);
            let skill = shift.get(E002_Shift.skill);
            let shift_type = shift.get(E002_Shift.shift);

            /// <employeeID, <Date, [shift_type]>>
            if (shift_list.has(employee_id)) {
                let map_of_date = shift_list.get(employee_id);
                if (map_of_date.has(date)) {
                    let shift_set = map_of_date.get(date);
                    shift_set.add(skill + ':' + shift_type);
                    map_of_date.set(date, shift_set);
                } else {
                    let shift_set = new Set();
                    shift_set.add(skill + ':' + shift_type);
                    map_of_date.set(date, shift_set);
                }

                shift_list.set(employee_id, map_of_date);

            } else {
                let map_of_date = new Map();
                let shift_set = new Set();
                shift_set.add(skill + ':' + shift_type);
                map_of_date.set(date, shift_set);
                shift_list.set(employee_id, map_of_date);
            }
        })

    }).catch((err) => {

    })




    const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
        .where(E003_LeaveCalendar.unit_id, '==', unit_id)
        .where(E003_LeaveCalendar.date, '>=', parseInt(starting_time))
        .where(E003_LeaveCalendar.date, '<=', parseInt(ending_time));


    await ref_leave.get().then((doc) => {
        doc.forEach((shift) => {

            let date = shift.get(E003_LeaveCalendar.date);
            let employee_id = shift.get(E003_LeaveCalendar.employee_id);
            let leave_type = shift.get(E003_LeaveCalendar.leave_type);

            if (shift_list.has(employee_id)) {
                let map_of_date = shift_list.get(employee_id);
                if (map_of_date.has(date)) {
                    let shift_set = map_of_date.get(date);
                    shift_set.add(leave_type);
                    map_of_date.set(date, shift_set);
                } else {
                    let shift_set = new Set();
                    shift_set.add(leave_type);
                    map_of_date.set(date, shift_set);
                }

                shift_list.set(employee_id, map_of_date);

            } else {
                let map_of_date = new Map();
                let shift_set = new Set();
                shift_set.add(leave_type);
                map_of_date.set(date, shift_set);
                shift_list.set(employee_id, map_of_date);
            }
        })

    }).catch((err) => {
        console.log(err)
    })


    return shift_list;

}

async function getEmployeeRoaster(hospital_ID_path, starting_time, ending_time, unit_id) {


    await getRostrAndLeaveMap(hospital_ID_path, starting_time, ending_time, unit_id);
    const shift_list = new Map();/// <employeeID, <Date, [shift_type]>>

    try {


        LEAVE_MAP; //  <yearMonth : <employee_id: <date:[set]>>>
        SHIFT_MAP; // <employee_id : <date:[data_set]>> 

        for (let [yearMonth, empoyee_map] of SHIFT_MAP) {

            for (let [employee_id, date_map] of empoyee_map) {

                for (let [date, set] of date_map) {

                    for (let d of set) {

                        let shift = d.split("_")[0];
                        let skill = d.split("_")[1];

                        if (shift_list.has(employee_id)) {
                            let empoyee_map_1 = shift_list.get(employee_id);

                            if (empoyee_map_1.has(date)) {
                                let shift_set = empoyee_map_1.get(date);
                                shift_set.add(skill + ":" + shift);
                                empoyee_map_1.set(date, shift_set);
                            } else {
                                let shift_set = new Set();
                                shift_set.add(skill + ":" + shift);
                                empoyee_map_1.set(date, shift_set);
                            }
                            shift_list.set(employee_id, empoyee_map_1);
                        } else {
                            let empoyee_map_1 = new Map();
                            let shift_set = new Set();
                            shift_set.add(skill + ":" + shift);
                            empoyee_map_1.set(date, shift_set);
                            shift_list.set(employee_id, empoyee_map_1);
                        }

                    }

                }

            }

        }

        for (let [employee_id, day_map] of LEAVE_MAP) {
            for (let [date, set] of day_map) {
                for (let off of set) {

                    //console.log(off);

                    let off_w = off.split("_")[0];
                    if (shift_list.has(employee_id)) {
                        let empoyee_map_1 = shift_list.get(employee_id);
                        if (empoyee_map_1.has(date)) {
                            let shift_set = empoyee_map_1.get(date);
                            shift_set.add(off_w);
                            empoyee_map_1.set(date, shift_set);
                        } else {
                            let shift_set = new Set();
                            shift_set.add(off_w);
                            empoyee_map_1.set(date, shift_set);
                        }
                        shift_list.set(employee_id, empoyee_map_1);
                    } else {
                        let empoyee_map_1 = new Map();
                        let shift_set = new Set();
                        shift_set.add(off_w);
                        empoyee_map_1.set(date, shift_set);
                        shift_list.set(employee_id, empoyee_map_1);
                    }
                }
            }
        }

    } catch (e) {
        console.log(e);
    }
    return shift_list;

}

async function getEmployeeRequest(hospital_ID_path, starting_time, ending_time, unit_id) {

    const shift_list = new Map();

    /// <employeeID, <Date, [shift_type]>>
    // const ref = admin.firestore().collection(hospital_ID_path+E004_EmployeRequests.E004_EmployeRequests)
    //     .where(E004_EmployeRequests.unit_id, '==', unit_id)
    //     .where(E004_EmployeRequests.date, '>=', parseInt(starting_time))
    //     .where(E004_EmployeRequests.date, '<=', parseInt(ending_time));

    // await ref.get().then((doc) => {
    //     doc.forEach((shift) => {


    //         let date = shift.get(E004_EmployeRequests.date);
    //         let employee_id = shift.get(E004_EmployeRequests.employee_id);
    //         let skill = shift.get(E004_EmployeRequests.skills);
    //         let shift_type = shift.get(E004_EmployeRequests.shift);

    //         /// <employeeID, <Date, [shift_type]>>
    //         if (shift_list.has(employee_id)) {
    //             let map_of_date = shift_list.get(employee_id);
    //             if (map_of_date.has(date)) {
    //                 let shift_set = map_of_date.get(date);
    //                 shift_set.add(skill + ':' + shift_type);
    //                 map_of_date.set(date, shift_set);
    //             } else {
    //                 let shift_set = new Set();
    //                 shift_set.add(skill + ':' + shift_type);
    //                 map_of_date.set(date, shift_set);
    //             }

    //             shift_list.set(employee_id, map_of_date);

    //         } else {
    //             let map_of_date = new Map();
    //             let shift_set = new Set();
    //             shift_set.add(skill + ':' + shift_type);
    //             map_of_date.set(date, shift_set);
    //             shift_list.set(employee_id, map_of_date);
    //         }
    //     })

    // }).catch((err) => {

    // })


    const ref = admin.firestore().collection(hospital_ID_path + E004_EmployeRequests.E004_EmployeRequests)
        .where(E004_EmployeRequests.unit_id, '==', unit_id);


    await ref
        .get()
        .then((doc) => {
            doc.forEach((request) => {

                let employee_id = request.get(E004_EmployeRequests.employee_id);
                let skill = request.get(E004_EmployeRequests.skills);
                let list = request.get(E004_EmployeRequests.dateShiftList);

                let listArray = list.split(",");

                for (let l of listArray) {

                    let date_db = parseInt(l.split("@")[0]);
                    let shift_db = parseInt(l.split("@")[1]);

                    if ((parseInt(starting_time) <= date_db) && (parseInt(date_db) <= ending_time)) {

                        let date = date_db;
                        let shift_type = shift_db;

                        /// <employeeID, <Date, [shift_type]>>
                        if (shift_list.has(employee_id)) {
                            let map_of_date = shift_list.get(employee_id);
                            if (map_of_date.has(date)) {
                                let shift_set = map_of_date.get(date);
                                shift_set.add(skill + ':' + shift_type);
                                map_of_date.set(date, shift_set);
                            } else {
                                let shift_set = new Set();
                                shift_set.add(skill + ':' + shift_type);
                                map_of_date.set(date, shift_set);
                            }

                            shift_list.set(employee_id, map_of_date);

                        } else {
                            let map_of_date = new Map();
                            let shift_set = new Set();
                            shift_set.add(skill + ':' + shift_type);
                            map_of_date.set(date, shift_set);
                            shift_list.set(employee_id, map_of_date);
                        }

                    }

                }

            })
        }).catch((err) => {
            console.log(err)
        })


    // console.log('request_list');
    // console.log(shift_list);


    return shift_list;

}

async function getEmployeeLeaveDetails(hospital_ID_path, starting_time, ending_time, unit_id) {

    const employee_leave_list = new Map();/// <employeeID: <Date: <leave_type:type, leave_db_id: id>>>

    // const ref = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
    //     .where(E003_LeaveCalendar.unit_id, '==', unit_id)
    //     .where(E003_LeaveCalendar.date, '>=', parseInt(starting_time))
    //     .where(E003_LeaveCalendar.date, '<=', parseInt(ending_time));

    // await ref.get().then((doc) => {
    //     doc.forEach((shift) => {

    //         let date = shift.get(E003_LeaveCalendar.date);
    //         let employee_id = shift.get(E003_LeaveCalendar.employee_id);
    //         let leave_type = shift.get(E003_LeaveCalendar.leave_type);
    //         let leave_db_id = shift.get(E003_LeaveCalendar.leave_db_id);

    //         if (employee_leave_list.has(employee_id)) {

    //             let date_map = employee_leave_list.get(employee_id);
    //             let detail_map = new Map();
    //             detail_map.set("leave_type", leave_type);
    //             detail_map.set("leave_db_id", leave_db_id);

    //             date_map.set(date, detail_map);

    //             employee_leave_list.set(employee_id, date_map);
    //         } else {
    //             let date_map = new Map();
    //             let detail_map = new Map();
    //             detail_map.set("leave_type", leave_type);
    //             detail_map.set("leave_db_id", leave_db_id);

    //             date_map.set(date, detail_map);

    //             employee_leave_list.set(employee_id, date_map);
    //         }
    //     })

    // }).catch((err) => {
    //     console.log(err);
    // })

    await getRostrAndLeaveMap(hospital_ID_path, starting_time, ending_time, unit_id);
    let doc = get_Paramiters_with_conditions(starting_time, ending_time);

    for (shift of doc) {

        let date = shift[E003_LeaveCalendar.date];
        let employee_id = shift[E003_LeaveCalendar.employee_id];
        let leave_type = shift[E003_LeaveCalendar.leave_type];
        let leave_db_id = shift[E003_LeaveCalendar.leave_db_id];

        if (employee_leave_list.has(employee_id)) {

            let date_map = employee_leave_list.get(employee_id);
            let detail_map = new Map();
            detail_map.set("leave_type", leave_type);
            detail_map.set("leave_db_id", leave_db_id);

            date_map.set(date, detail_map);

            employee_leave_list.set(employee_id, date_map);
        } else {
            let date_map = new Map();
            let detail_map = new Map();
            detail_map.set("leave_type", leave_type);
            detail_map.set("leave_db_id", leave_db_id);

            date_map.set(date, detail_map);

            employee_leave_list.set(employee_id, date_map);
        }
    }

    return employee_leave_list;

}

async function getLeaveDBDetails(hospital_ID_path, unit_id) {

    const leave_list = new Map();/// <employeeID: <Date: <leave_type:type, leave_db_id: id>>>

    const ref = admin.firestore().collection(hospital_ID_path + E008_LeaveDB.E008_LeaveDB)
        .where(E008_LeaveDB.unit_id, '==', unit_id);

    await ref.get().then((doc) => {
        doc.forEach((leave) => {

            let leave_detail = leave.get(E008_LeaveDB.leave_detail);
            let leave_type = leave.get(E008_LeaveDB.leave_type);
            let starting_date = leave.get(E008_LeaveDB.starting_date);
            let ending_date = leave.get(E008_LeaveDB.ending_date);
            let leave_count = leave.get(E008_LeaveDB.leave_count);
            let ID = leave.get(E008_LeaveDB.ID);


            let leave_details = new Map();
            leave_details.set(E008_LeaveDB.leave_detail, leave_detail);
            leave_details.set(E008_LeaveDB.leave_type, leave_type);
            leave_details.set(E008_LeaveDB.starting_date, starting_date);
            leave_details.set(E008_LeaveDB.ending_date, ending_date);
            leave_details.set(E008_LeaveDB.leave_count, leave_count);

            leave_list.set(ID, leave_details);
        })

    }).catch((err) => {
        console.log(err);
    })



    // console.log('All employee leave_list');
    // console.log(leave_list);


    return leave_list;

}

async function getEmployeeShift2(hospital_ID_path, starting_time, ending_time, unit_id) {



    const shift_list = new Map();/// <employeeID, <Date, [shift_type]>>

    // console.log(hospital_ID_path+E002_Shift.E002_Shift);

    const ref = admin.firestore().collection(hospital_ID_path + E002_Shift.E002_Shift)
        .where(E002_Shift.unit_id, '==', unit_id)
        .where(E002_Shift.date, '>=', parseInt(starting_time))
        .where(E002_Shift.date, '<=', parseInt(ending_time));

    await ref.get().then((doc) => {
        doc.forEach((shift) => {

            let date = shift.get(E002_Shift.date);
            let employee_id = shift.get(E002_Shift.employee_id);
            let skill = shift.get(E002_Shift.skill);
            let shift_type = shift.get(E002_Shift.shift);

            /// <employeeID, <Date, [shift_type]>>
            if (shift_list.has(employee_id)) {
                let map_of_date = shift_list.get(employee_id);
                if (map_of_date.has(date)) {
                    let shift_set = map_of_date.get(date);
                    shift_set.add(skill + '_' + shift_type);
                    map_of_date.set(date, shift_set);
                } else {
                    let shift_set = new Set();
                    shift_set.add(skill + '_' + shift_type);
                    map_of_date.set(date, shift_set);
                }

                shift_list.set(employee_id, map_of_date);

            } else {
                let map_of_date = new Map();
                let shift_set = new Set();
                shift_set.add(skill + '_' + shift_type);
                map_of_date.set(date, shift_set);
                shift_list.set(employee_id, map_of_date);
            }
        })

    }).catch((err) => {
        console.log(err);
    })


    return shift_list;

}

async function getEmployeeleave2(hospital_ID_path, starting_time, ending_time, unit_id) {



    const shift_list = new Map();

    const ref_leave = admin.firestore().collection(hospital_ID_path + E003_LeaveCalendar.E003_LeaveCalendar)
        .where(E003_LeaveCalendar.unit_id, '==', unit_id)
        .where(E003_LeaveCalendar.date, '>=', parseInt(starting_time))
        .where(E003_LeaveCalendar.date, '<=', parseInt(ending_time));


    await ref_leave.get().then((doc) => {
        doc.forEach((shift) => {

            let date = shift.get(E003_LeaveCalendar.date);
            let employee_id = shift.get(E003_LeaveCalendar.employee_id);
            let leave_type = shift.get(E003_LeaveCalendar.leave_type);

            if (shift_list.has(employee_id)) {
                let map_of_date = shift_list.get(employee_id);
                if (map_of_date.has(date)) {
                    let shift_set = map_of_date.get(date);
                    shift_set.add(leave_type);
                    map_of_date.set(date, shift_set);
                } else {
                    let shift_set = new Set();
                    shift_set.add(leave_type);
                    map_of_date.set(date, shift_set);
                }

                shift_list.set(employee_id, map_of_date);

            } else {
                let map_of_date = new Map();
                let shift_set = new Set();
                shift_set.add(leave_type);
                map_of_date.set(date, shift_set);
                shift_list.set(employee_id, map_of_date);
            }
        })

    }).catch((err) => {
        console.log(err);
    })


    // //console.log('shift_list');
    // console.log(shift_list);

    return shift_list;

}


exports.supervisorUpdate = functions
    .region('asia-northeast3')
    .runWith({
        // Ensure the function has enough memory and time
        // to process large files
        timeoutSeconds: 300,
        memory: "512MB",
    })
    .firestore
    .document('/Nursing/{documentId}/supervisor/{documentId2}')
    .onUpdate((snapshot_list, context) => {

        var snapshot = snapshot_list.after;

        console.log(snapshot.data());
        console.log("documentId: " + snapshot.id);
        console.log("documentId2: " + snapshot.ref.path);

        const path = snapshot.ref.path.toString();
        const hospital_id = path.split("/")[1];
        console.log("hospital_id: " + hospital_id);
        let pre_path = "/Nursing/" + hospital_id + "/";
        let hospital_ID_path = pre_path;

        // //console.log(getSampleString (snapshot.id));

        var starting_time = snapshot.get("s");
        var ending_time = snapshot.get("e");
        var usr_command = snapshot.get("c");
        var usr_prog = snapshot.get("p");
        var unit_id = snapshot.get("id");


        if (usr_prog == 'create_roster') {
            console.log('create_roster: starts');

            return makeRoster(pre_path, "" + starting_time, '' + ending_time, unit_id).then(() => {
                console.log('Roster end!!!!!!!!!!');
            }).catch((err) => {
                console.log('Roster end Error' + err);
            })

        }

        else if (usr_prog == 'insert_employee') {

            return insertImployee(unit_id, pre_path).then((value) => {
                console.log(value);
            }).catch((e) => {
                console.log(e);
            });

        }

        else if (usr_prog == 'get_employee_request_list') {

            const ref = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee);

            ref.where(E001_Employee.unit_id, '==', unit_id).get()

                .then((snapshot) => {

                    const promisees = [];
                    snapshot.forEach((employee) => {

                        promisees.push(employee.data());

                    });

                    return Promise.all(promisees);
                })
                .then((promisees) => {

                    promisees.forEach((employee) => {

                        // console.log('Employee :  ' + employee);

                        var requests = getRandomRequests(starting_time, ending_time, employee);

                        // console.log(requests);

                        requests.forEach((request) => {

                            const ref = admin.firestore().collection(hospital_ID_path + E004_EmployeRequests.E004_EmployeRequests).doc(request.get(E004_EmployeRequests.ID));

                            //console.log(hospital_ID_path+E004_EmployeRequests.E004_EmployeRequests);
                            //console.log(request.get(E004_EmployeRequests.ID));

                            var data = {
                                'dateShiftList': request.get(E004_EmployeRequests.dateShiftList),
                                'employee_id': request.get(E004_EmployeRequests.employee_id),
                                'skills': request.get(E004_EmployeRequests.skills),
                                'unit_id': request.get(E004_EmployeRequests.unit_id),
                                'ID': request.get(E004_EmployeRequests.ID),
                                'TimeStamp': admin.firestore.FieldValue.serverTimestamp(),
                                'EditFlagRow': request.get(E004_EmployeRequests.EditFlagRow)
                            };

                            // console.log(data);


                            ref.get()
                                .then((snapshot) => {
                                    if (snapshot.exists) {
                                        console.log("exist");
                                        ref.update(data).catch((e) => { console.log("existys: " + e) });
                                    } else {
                                        console.log("not exists");
                                        ref.set(data).catch((e) => { console.log("existys: " + e) });
                                    }
                                })
                                .catch((err) => {
                                    console.log("Error: " + err);
                                });
                        });

                    });

                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
        }

        else if (usr_prog == 'get_employee_request_list_decode') {


            const ref_req = admin.firestore().collection(hospital_ID_path + E004_EmployeRequests.E004_EmployeRequests);

            let skill = "S";

            ref_req
                .where(E004_EmployeRequests.skills, '==', skill)
                .where(E004_EmployeRequests.unit_id, '==', unit_id)
                .get()
                .then((doc) => {
                    doc.forEach((request) => {
                        let id = request.get(E004_EmployeRequests.employee_id);
                        let list = request.get(E004_EmployeRequests.dateShiftList);

                        let listArray = list.split(",");

                        for (let l of listArray) {

                            let date_db = l.split("@")[0];
                            let shift_db = l.split("@")[1];

                            // console.log("date: $date_db : " + date_db);
                            // console.log("shift_db :" + shift_db);



                        }


                    })
                }).catch((err) => {
                    console.log(err)
                })

        }

        else if (usr_command == 1) {
            console.log("starting_time: " + starting_time);
            console.log("ending_time: " + ending_time);


            var ID = "1";

            const ref = admin.firestore().collection(hospital_ID_path + 'newsletter').doc("usr_prog");



            var data = {
                "verified": 'insertedgfddgfdfgdfgs',
                "starting_time": ending_time
            }

            ref.get()
                .then((doc) => {
                    if (doc.exists) {
                        ref.update({ verified: 'updated' });
                    } else {
                        ref.set(data);
                    }
                    console.log("data added ");

                })
                .catch((err) => {
                    console.log("Error: " + err);
                });
        }

        else if (usr_prog == 'shift_test') {

            var unit_id = '1';
            var skill = 'S';

            const not_eligible_emloyee_id_list = new Set();

            not_eligible_emloyee_id_list.add('2@1');
            not_eligible_emloyee_id_list.add('3@1');

            getEligibleEmployee(pre_path, not_eligible_emloyee_id_list, unit_id, skill).then(
                function (value) {
                    const get_eligible_emp = value;
                    //console.log(get_eligible_emp);

                    for (const item of get_eligible_emp) {
                        //console.log(item);
                    }

                },
                function (error) {
                    //console.log('error: ' + error);
                }
            )
        }

        else if (usr_prog == 'night_off_employee_test') {

            // var unit_id = '1';
            // var skill = 'S';

            // const not_eligible_emloyee_id_list = new Set();

            // not_eligible_emloyee_id_list.add('2@1');
            // not_eligible_emloyee_id_list.add('3@1');

            let starting_date = '20210602';
            let number_of_max_night_shift = 7;


            let employee_id_set = new Set();

            employee_id_set.add("2@1");
            employee_id_set.add("3@1");
            employee_id_set.add("4@1");

            get_employee_leave_map(hospital_ID_path, starting_date, number_of_max_night_shift, employee_id_set).then(
                function (value) {
                    const get_eligible_emp = value;
                    //console.log(get_eligible_emp);

                    // for (const item of get_eligible_emp) {
                    //     //console.log(item);
                    // }

                },
                function (error) {
                    //console.log('error: ' + error);
                }
            )
        }

        else if (usr_prog == 'getShift_List') {

            //getShift(starting_time, ending_time, unit_id);
            getEmployeeShift(pre_path, starting_time, ending_time, unit_id);

        }

        else if (usr_prog == 'get_employee_requests') {

            let emp_request = getEmployeeRequest(pre_path, starting_time, ending_time, unit_id);

        }

        else if (usr_prog == 'MakeANewshiftSchime1') {

            let emp_request = getEmployeeShift2(pre_path, starting_time, ending_time, unit_id)

            emp_request.then(
                (value) => {

                    console.log(value);
                    let strw = getRoasterMapToString(value);
                    console.log(strw);

                    let map_strw = getRoasterStringToMap(strw);
                    console.log(map_strw);

                    console.log("end.............");

                }
            ).catch((err) => {
                console.log(err);
            });
        }

        else if (usr_prog == "sample_input") {
            const ref_unit = admin.firestore().collection(hospital_ID_path + E002_Roaster.E002_Roaster).doc("1@5");

            ref_unit.get()
                .then((v) => {
                    // let st = v.get(E002_Roaster.roster);

                    // var map = JSON.parse(st);

                    // console.log(map);

                    // for(let [emp_id, val] of st){
                    //     console.log(emp_id);
                    //     console.log(val);
                    //     console.log("");
                    // } 

                })
                .catch((e) => {
                    console.log(e);
                })

        }

        else if (usr_prog == "compare_the_shift_and_roasters") {
            //getRostrAndLeaveMap(hospital_ID_path, starting_time, ending_time, unit_id);

            compareShiftAndRoasterDB(hospital_ID_path, starting_time, ending_time, unit_id)

        }

        else if (usr_prog == 'readNewshiftSchime') {


            getEmployeeRoaster(hospital_ID_path, starting_time, ending_time, unit_id);



        }

        else if (usr_prog == 'get_employee_request_list_by_app') {
            //return getEmployeeRequestFromChoises(unit_id,  pre_path);
            return makeShiftAndLeaveMapFromPastEmployee(unit_id, usr_command, hospital_ID_path);
        }

        return Promise.resolve();

    });


async function insertImployee(unit_id, pre_path) {

    //console.log('program_command : ' + usr_prog);

    //const unit_id = unit_id;

    const senior_emp_number = 4;
    const junior_emp_number = 4;
    const number_of_senior_and_junior = 2;
    const trainee = 0;


    const ref_unit = admin.firestore().collection(pre_path + E005_Unit.E005_Unit).doc(unit_id);

    await ref_unit.get()
        .then((doc) => {

            var data = {
                'name': 'Bone',

                'shift_duration_map': 'N:720,D:360,E:360,X:540,1235:300,Ykjffj:240',
                'shift_starting_time': '3=1800_Night;1=0600_Morning;2=1200_Afternoon;X=1000_Double;1235=1300_Purpule;Ykjffj=0800_Double',


                'hospital_id': 'X',
                'supervisor_employee_id': '0@' + unit_id,



                'day_shift_starting': 8,
                'evning_shift_starting': 14,
                'night_shift_starting': 20,

                'numberOfEmployees': 'S:' + senior_emp_number + ',J:' + junior_emp_number + ',T:' + trainee + ',S-J:' + number_of_senior_and_junior,
                'day_shift_employee': 'S:1,J:2',
                'evening_shift_employee': 'S:1,J:1',
                'night_shift_employee': 'S:1,J:1',
                'fixed_working_hour': 294,
                'roster_rules': '1:4,2:6',
                'EditFlagRow': 'EE',
                'roaster_last_starting_date': 20210101,
                "night_shift_mode": getCode(E000_Constants.night_shift_in_priority),
                //"night_shift_mode": getCode(E000_Constants.employee_leave_in_priority),
                'ID': unit_id,
                'TimeStamp': admin.firestore.FieldValue.serverTimestamp()
            };

            if (doc.exists) {
                ref_unit.update(data);
            } else {
                ref_unit.set(data);
            }
        })
        .catch((err) => {
            console.log("insert_employee: Error: ", err);
        });

    var emps = getListOfEmployees(senior_emp_number, junior_emp_number, trainee, unit_id, number_of_senior_and_junior);

    for (let employee of emps) {
        let ref = admin.firestore().collection(pre_path + 'E001_Employee').doc(employee.get(E001_Employee.ID));

        //console.log('employee :  ' + employee);

        //console.log('employee :  ' + employee.get(E001_Employee.ID));
        await ref.get()
            .then((doc) => {


                var data = {
                    'name': employee.get(E001_Employee.name),
                    'priority': employee.get(E001_Employee.priority),
                    'connection_type': employee.get(E001_Employee.connection_type),
                    'unit_id': employee.get(E001_Employee.unit_id),
                    'EditFlagRow': employee.get(E001_Employee.EditFlagRow),
                    'ID': employee.get(E001_Employee.ID),
                    'TimeStamp': admin.firestore.FieldValue.serverTimestamp(),
                    'connected_Employee_id': employee.get(E001_Employee.connected_Employee_id),
                    'fixed_working_hour': employee.get(E001_Employee.fixed_working_hour),
                    'skills': employee.get(E001_Employee.skills),
                    'remaining_working_hour': employee.get(E001_Employee.remaining_working_hour),
                    'exp_year': employee.get(E001_Employee.exp_year),
                    'user_id': employee.get(E001_Employee.user_id),
                    'hospital_id': employee.get(E001_Employee.hospital_id),
                    'shift_type': employee.get(E001_Employee.shift_type),
                    'emp_type': employee.get(E001_Employee.emp_type),
                };

                if (doc.exists) {
                    ref.update(data)
                } else {
                    ref.set(data)
                }
            })
            .catch((err) => {
                console.log("insert_employee: Error: ", err);
            });

    };


    var employee_leaves = getListOfLeave(unit_id);

    for (let leave of employee_leaves) {
        const ref = admin.firestore().collection(pre_path + E008_LeaveDB.E008_LeaveDB).doc(leave.get(E008_LeaveDB.ID));

        await ref.get()
            .then((doc) => {


                var data = {
                    'starting_date': leave.get(E008_LeaveDB.starting_date),
                    'ending_date': leave.get(E008_LeaveDB.ending_date),
                    'leave_type': leave.get(E008_LeaveDB.leave_type),
                    'leave_count': leave.get(E008_LeaveDB.leave_count),

                    'employee_id': leave.get(E008_LeaveDB.employee_id),
                    'unit_id': leave.get(E008_LeaveDB.unit_id),
                    'leave_detail': leave.get(E008_LeaveDB.leave_detail),

                    'ID': leave.get(E008_LeaveDB.ID),
                    'TimeStamp': admin.firestore.FieldValue.serverTimestamp(),
                    'EditFlagRow': leave.get(E008_LeaveDB.EditFlagRow)
                };

                if (doc.exists) {
                    ref.update(data);
                } else {
                    ref.set(data);
                }
            })
            .catch((err) => {
                console.log("insert_employee: Error: ", err);
            });
    };

    return true;
}


async function RosterStatusStart(unit_id, pre_path) {

    const ref_unit = admin.firestore().collection(pre_path + "RosterStatus").doc(unit_id);

    await ref_unit.get()
        .then((doc) => {

            var data = {
                'isReady': false
            };

            if (doc.exists) {
                ref_unit.update(data);
            } else {
                ref_unit.set(data);
            }
        })
        .catch((err) => {
            console.log("RosterStatus : ", err);
        });

}




function makeMap(shift_duration_map, shift_starting_time) {



    let shift_starting_dutation_map = new Map();


    let shift_starting_time_arr = shift_starting_time.split(";");

    for (shift of shift_starting_time_arr) {
        let id = shift.split("=")[0];
        let startingTime = shift.split("=")[1].split("_")[0];

        switch (id) {
            case '1':
                shift_starting_dutation_map.set("D", startingTime);
                break;
            case '2':
                shift_starting_dutation_map.set("E", startingTime);
                break;
            case '3':
                shift_starting_dutation_map.set("N", startingTime);
                break;

            default:
                shift_starting_dutation_map.set(id, startingTime);
        }

    }

    let shift_duration_map_arr = shift_duration_map.split(",");

    for (shift of shift_duration_map_arr) {
        let id = shift.split(":")[0];
        let startingTime = shift.split(":")[1];

        if (shift_starting_dutation_map.has(id)) {
            let value = shift_starting_dutation_map.get(id);
            shift_starting_dutation_map.set(id, value + "_" + startingTime);
        }

    }


    shift_starting_dutation_map.set('1', shift_starting_dutation_map.get('D'));
    shift_starting_dutation_map.delete('D');
    shift_starting_dutation_map.set('2', shift_starting_dutation_map.get('E'));
    shift_starting_dutation_map.delete('E');
    shift_starting_dutation_map.set('3', shift_starting_dutation_map.get('N'));
    shift_starting_dutation_map.delete('N');



    return shift_starting_dutation_map;

}

function getRequestingShiftID(value_arr, shift_starting_dutation_map) {

    let startingTime = parseInt(value_arr[0]);

    let duration = parseInt(value_arr[1]);

    for ([id, value] of shift_starting_dutation_map) {

        let st = parseInt(value.split("_")[0]);
        let du = parseInt(value.split("_")[1]);

        //console.log("value: "+value+"; st: "+st+";  du :"+du);
        if ((parseInt(startingTime) == st) && (parseInt(duration) == du)) {
            return id;
        }
    }

}

function getPrimaryShifID(map_of_all_shift, ID) {
    let m = map_of_all_shift.get('1');
    //console.log(m);
    let e = map_of_all_shift.get('2');
    //console.log(e);
    let n = map_of_all_shift.get('3');
    //console.log(n);

    if (map_of_all_shift.has(ID)) {


        let value = map_of_all_shift.get(ID);

        switch (value) {

            case m: {
                return "1";
            }

            case e: {
                return "2";
            }

            case n: {
                return "3";
            }

        }

        let endingtime_m = (parseInt(parseInt(m.split("_")[0] / 100) * 60) + m.split("_")[0] % 100 + parseInt(m.split("_")[1]));
        let endingtime_e = (parseInt(parseInt(e.split("_")[0] / 100) * 60) + e.split("_")[0] % 100 + parseInt(e.split("_")[1]));
        let endingtime_n = (parseInt(parseInt(n.split("_")[0] / 100) * 60) + n.split("_")[0] % 100 + parseInt(n.split("_")[1]));


        let start_dur = value.split("_");

        let start_time = parseInt(start_dur[0]);
        let duration = parseInt(start_dur[1]);

        let ending_time = (parseInt(start_time / 100) * 60) + start_time % 100 + duration;

        //console.log("ending_time: "+ending_time);

        if (parseInt(n.split("_")[0]) >= start_time) {
            if (endingtime_m <= ending_time) {
                return "3";
            }
        }

        if (parseInt(e.split("_")[0]) >= start_time) {
            if (endingtime_e <= ending_time) {
                return "2";
            }
        }

        if (parseInt(m.split("_")[0]) >= start_time) {
            if (endingtime_n <= ending_time) {
                return "1";
            }
        }

    }


}



async function getEmployeeRequestFromChoises(unit_id, hospital_ID_path) {

    

    const ref_unit = admin.firestore().collection(hospital_ID_path + E005_Unit.E005_Unit).doc(unit_id);

    let shift_duration_map;
    let shift_starting_time;

    await ref_unit.get().then((unit_doc) => {
        shift_duration_map = unit_doc.get(E005_Unit.shift_duration_map);
        shift_starting_time = unit_doc.get(E005_Unit.shift_starting_time);
    }).catch((error) => {
        console.log(error);
    })

    console.log("shift_duration_map : ", shift_duration_map);
    console.log("shift_starting_time : ", shift_starting_time);


    const map_shift_duration = makeMap(shift_duration_map, shift_starting_time);

    console.log("map_shift_duration : ", map_shift_duration);

    const emp_ids_unit = admin.firestore().collection("NursingUser").where("groupId", "==", unit_id);


    let list_of_members = new Map(); // <uid, mem_id>


    await emp_ids_unit.get()
        .then((doc) => {

            doc.forEach((nursingUser) => {

                let id = nursingUser.get("id");
                let m_id = nursingUser.get("memberId");
                list_of_members.set(id, m_id);

            })

        })
        .catch((err) => {
            console.log("RosterStatus : ", err);
        });


    for (let [mem_id, mem] of list_of_members) {

        ///////////////////////////////////////////////////////////////////// employee request list /////////////////////////////////////////////////////////////////////

        const emp_ids_unit_duty_choices = admin.firestore().collection("NursingUser/" + mem_id + "/duty_choices").doc(unit_id + "@" + mem_id);

        let employee_request = "";
        await emp_ids_unit_duty_choices.get().then((doc) => {

            if(doc.exists){

            
            console.log((doc.id));
            //console.log((doc.data()));
            console.log();

            let choises = doc.data()['choices'];

            const dates = Object.keys(choises);


            console.log(dates);
            console.log("loops");

            let isFirst = true;
            for (let date of dates) {

                let value = choises[date];

                let d = new Date(date);

                let year = d.getFullYear();
                let month = d.getMonth() + 1;
                let day = d.getDate();

                let date_in_formate = year * 10000 + (month * 100 + day);

                console.log(date_in_formate + " : ", value);

                let id = value.split("_")[0];

                // console.log(date_in_formate + " : ", id);

                //df dfdf;
                let primarryId = getPrimaryShifID(map_shift_duration, id);

                console.log(date_in_formate + " : ", id + "   " + primarryId);

                if (primarryId != undefined) {

                    console.log("if condition : " + date_in_formate + " : ", id + "   " + primarryId);
                    if (isFirst) {
                        employee_request += date_in_formate + "@" + primarryId;
                        isFirst = false;
                    } else {
                        employee_request += "," + date_in_formate + "@" + primarryId;
                    }
                }
            }
        }
        }).catch((err) => {
                console.log("RosterStatus : ", err);
        })


        const ref = admin.firestore().collection(hospital_ID_path + E001_Employee.E001_Employee)
        .where(E001_Employee.user_id, "==", mem_id);


        if(employee_request.length > 2){

        

        let skills = "" ;
        let employee_id = "";
        await ref.get().then((data) => {
            data.forEach((employee) => {
                skills = employee.get(E001_Employee.skills);
                employee_id = employee.get(E001_Employee.ID);
            })
        })
        .catch((err) => {
            console.log("Error: " + err);
        });

        console.log("employee_id : "+employee_id);
        console.log("skills : "+skills);
        console.log("dateShiftList : "+employee_request);

        

        const ref_emp = admin.firestore().collection(hospital_ID_path + E004_EmployeRequests.E004_EmployeRequests).doc(employee_id);

        
        //console.log(request.get(E004_EmployeRequests.ID));

        var data = {
            'dateShiftList': employee_request,
            'employee_id': employee_id,
            'skills': skills,
            'unit_id': unit_id,
            'ID': unit_id + "@" + employee_id,
            'TimeStamp': admin.firestore.FieldValue.serverTimestamp(),
            'EditFlagRow': "EF"
        };

        // console.log(data);


        await ref_emp.get()
            .then((snapshot) => {
                if (snapshot.exists) {
                    console.log("exist");
                    ref_emp.update(data).catch((e) => { console.log("existys: " + e) });
                } else {
                    console.log("not exists");
                    ref_emp.set(data).catch((e) => { console.log("existys: " + e) });
                }
            })
            .catch((err) => {
                console.log("Error: " + err);
            });


       
        }
        


    }

}


async function  makeShiftAndLeaveMapFromPastEmployee(unit_id, yearMonth, hospital_ID_path) {

    //step-1 try to make Shift_map and leave_map 
    //step-2 make user request and upload to firebase database

    let SHIFT_MAP;/* <yearMonth : <employee_id: <date:[set]>>> ; where: set = <ID_Seniority_level_N> ; date = [YYYYMMDD]*/
    let LEAVE_MAP;/* <employee_id : <date:[data_set]>> ; where data_set = [[abbreviation]]_ID] */


    const ref_unit = admin.firestore().collection(hospital_ID_path + E005_Unit.E005_Unit).doc(unit_id);

    let shift_duration_map;
    let shift_starting_time;

    await ref_unit.get().then((unit_doc) => {
        shift_duration_map = unit_doc.get(E005_Unit.shift_duration_map);
        shift_starting_time = unit_doc.get(E005_Unit.shift_starting_time);
    }).catch((error) => {
        console.log(error);
    })

    console.log("shift_duration_map : ", shift_duration_map);
    console.log("shift_starting_time : ", shift_starting_time);


    const map_shift_duration = makeMap(shift_duration_map, shift_starting_time);

    console.log("map_shift_duration : ", map_shift_duration);

    const emp_ids_unit = admin.firestore().collection("NursingUser").where("groupId", "==", unit_id);


    let list_of_members = new Map(); // <uid, mem_id>


    await emp_ids_unit.get()
        .then((doc) => {

            doc.forEach((nursingUser) => {

                let id = nursingUser.get("id");
                let m_id = nursingUser.get("memberId");
                list_of_members.set(id, m_id);

            })

        })
        .catch((err) => {
            console.log("RosterStatus : ", err);
        });


        // for([id, id1] of list_of_members){
        //     console.log("user address : "+id+"  "+id1);
        // }


    /////////////////////////////////////////////////////////////// setting employee past shift ///////////////////////////////////////////////////////////////
    
    for (let [mem_id, mem] of list_of_members) {

        console.log("user address : "+"NursingUser/" + mem_id + "/dutyData");
        const emp_ids_dutyData = admin.firestore().collection("NursingUser/" + mem_id + "/dutyData").doc(yearMonth);

        await emp_ids_dutyData.get().then((doc) => {

            console.log((doc.id));
            console.log((doc.data()));
            //console.log(doc.toString);


            const arry = Object.keys(doc.data());


            console.log("arry: "+arry);
            console.log("loops");
            for (let date of arry) {

                let value = doc.data()[date];

                console.log(date + " : ", value);

                // let SHIFT_MAP;/* <yearMonth : <employee_id: <date:[set]>>> ; where: set = <2_J_N> ; date = [YYYYMMDD]*/
                // let LEAVE_MAP;/* <employee_id : <date:[data_set]>> ; where data_set = [[abbreviation]]_ID] */


                if (value.includes("#")) {

                    let value_str = value.split("#");
                    for (let v of value_str) {

                        let value_arr = v.split("_");

                        if (value_arr.length > 0) {

                            if (value_arr[value_arr.length - 1] == 'false') {

                                let id = getRequestingShiftID(value_arr, map_shift_duration);

                                console.log("id: " + id);

                            }
                            else if (value_arr[value_arr.length - 1] == 'true') {

                                let abbr = value_arr[value_arr.length - 2];

                                console.log("leave : ", abbr);




                            }

                        }
                    }

                } else {
                    let value_arr = value.split("_");
                    if (value_arr.length > 0) {

                        if (value_arr[value_arr.length - 1] == 'false') {

                            let id = getRequestingShiftID(value_arr, map_shift_duration);

                            console.log(" id: " + id);

                        }
                        else if (value_arr[value_arr.length - 1] == 'true') {

                            let abbr = value_arr[value_arr.length - 2];

                            console.log("leave : ", abbr);



                        }

                    }

                }



            }

        }).catch((err) => {
            console.log("RosterStatus : ", err);
        })

    }
}



async function RosterStatusEnd(unit_id, pre_path) {


    const ref_unit = admin.firestore().collection(pre_path + "RosterStatus").doc(unit_id);

    await ref_unit.get()
        .then((doc) => {

            var data = {
                'isReady': true
            };

            if (doc.exists) {
                ref_unit.update(data);
            } else {
                ref_unit.set(data);
            }
        })
        .catch((err) => {
            console.log("RosterStatus : ", err);
        });
}

function getLeaveStringToMap(value) {

    let value_map = new Map(Object.entries(JSON.parse(value)));
    let date_map = new Map();

    for (let [date, shift] of value_map) {

        let st = shift.split("#");
        let set = new Set();

        // console.log("value_map");
        // console.log(value_map);

        for (let s of st) {
            set.add(s);
        }

        date_map.set(date, set);

    }


    return date_map;
}

function getLeaveMapToString(value) {

    let map_value = new Map();
    for (let [date, value1] of value) {

        let isFirst = true;

        let shift_st = "";
        for (let shift of value1) {
            if (isFirst) {
                shift_st = shift;
                isFirst = false;
            } else {
                shift_st += "#" + shift;
            }
        }
        map_value.set(date, shift_st);
    }
    return JSON.stringify(mapToObj(map_value));
}

// return <employeeID:< date: [value_set]>>
function getRoasterStringToMap(roster_string) {


    let employee_map = new Map();

    let myMap = new Map(Object.entries(JSON.parse(roster_string)));


    for (let [employeeID, value] of myMap) {

        let value_map = new Map(Object.entries(JSON.parse(value)));
        let date_map = new Map();

        for (let [date, shift] of value_map) {

            let st = shift.split("#");
            let set = new Set();

            // console.log("value_map");
            // console.log(value_map);

            for (let s of st) {
                console.log(s);
                set.add(s);
            }

            date_map.set(date, set);

        }

        employee_map.set(employeeID, date_map);
    }

    return employee_map;
}

function getRoasterMapToString(roster_map) {
    let map_roster = new Map();
    for (let [emp_id, value] of roster_map) {
        let map_value = new Map();
        for (let [date, value1] of value) {

            let isFirst = true;

            let shift_st = "";
            for (let shift of value1) {
                if (isFirst) {
                    shift_st = shift;
                    isFirst = false;
                } else {
                    shift_st += "#" + shift;
                }

            }
            map_value.set(date, shift_st);
        }
        let st_emp = JSON.stringify(mapToObj(map_value));
        map_roster.set(emp_id, st_emp);
    }
    return JSON.stringify(mapToObj(map_roster));
}


function getRoasterDBDecoder(roster_map, shift_starting_time_map) {
    let map_roster = new Map();
    for (let [emp_id, value] of roster_map) {
        let map_value = new Map();
        for (let [date, value1] of value) {
            let isFirst = true;

            let shift_st = "";
            for (let shift of value1) {
                if (isFirst) {
                    isFirst = false;
                    shift_st = shift_starting_time_map.get(shift.split("_")[0]) + "_" + shift.split("_")[0] + "_" + shift.split("_")[1];
                } else {
                    shift_st += "#" + shift_starting_time_map.get(shift.split("_")[0]) + "_" + shift.split("_")[0] + "_" + shift.split("_")[1];
                }

            }
            map_value.set(date, shift_st);


        }
        let st_emp = JSON.stringify(mapToObj(map_value));
        map_roster.set(emp_id, st_emp);
    }
    return JSON.stringify(mapToObj(map_roster));
}


function mapToObj(map) {
    const obj = {}
    for (let [k, v] of map) { obj[k] = v }
    return obj;
}


async function compareShiftAndRoasterDB(hospital_ID_path, starting_time, ending_time, unit_id) {

    try {
        await getRostrAndLeaveMap(hospital_ID_path, starting_time, ending_time, unit_id);

        let list = get_Paramiters_with_conditions(starting_time, starting_time);

        // if(list.length > 0 ){
        //     console.log("size : "+list.length );

        //     for(let i of list){
        //         console.log("size : "+i[E003_LeaveCalendar.employee_id] );

        //     }
        // }

        // return "1";

        let shift_map;
        let roster_map = SHIFT_MAP;
        await getEmployeeShift2(hospital_ID_path, starting_time, ending_time, unit_id).then(
            (value) => {
                shift_map = value;
            }
        );


        for (let [employee_id, date_map] of shift_map) {
            for (let [date, set] of date_map) {
                for (let value of set) {

                    // console.log(employee_id);

                    // console.log(value);


                    let month_year = "" + parseInt(date / 100);
                    let employee_map = roster_map.get(month_year);
                    let date_map = employee_map.get(employee_id);
                    let set_roster = date_map.get("" + date);

                    // console.log(set_roster);
                    // console.log("");
                    // console.log("");

                    let matched = false;
                    for (let value1 of set_roster) {
                        let skill_shift = value.split("_")[0];
                        let s_shift = value.split("_")[1];

                        let skill_roster = value1.split("_")[1];
                        let s_roster = value1.split("_")[0];

                        if (skill_shift == skill_roster) {
                            if (s_shift == s_roster) {
                                matched = true;
                                break;
                            }
                        }
                    }


                    if (matched) {
                        //console.log("present");
                    } else {
                        console.log(date);
                        console.log("not present: ");
                        console.log(set_roster);
                        console.log(set);
                        console.log("");
                        console.log("");
                    }

                }
            }
        }




        let leave_map;
        let roster_leave_map = LEAVE_MAP;
        await getEmployeeleave2(hospital_ID_path, starting_time, ending_time, unit_id).then(
            (value) => {
                leave_map = value;
            }
        );

        for (let [employee_id, date_map] of leave_map) {
            for (let [date, set] of date_map) {



                // console.log(employee_id);

                //console.log(value);


                let date_map = roster_leave_map.get(employee_id);
                let set_roster = date_map.get("" + date);
                //console.log(set_roster);

                // console.log(date);
                // console.log("");
                // console.log("");

                let matched = false;
                for (let value1 of set_roster) {
                    let skill_shift = value1.split("_")[0]

                    if (skill_shift == set) {
                        matched = true;
                    }
                }


                if (matched) {
                    // console.log("present");
                } else {
                    console.log(date);
                    console.log("not present: ");
                    console.log(set_roster);
                    console.log(set);
                    console.log("");
                    console.log("");
                }


            }
        }



    } catch (e) {
        console.log(e);
    }



}

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



