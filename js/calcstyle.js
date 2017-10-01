//Fuction onClick begins each Grade Calculation  
function score() {
    eScore();
    mScore();
    hScore();
    aScore();
    pScore();
    avgGrade();
}

//English Grade Function
function eScore() {
    //English input value
    let eNumber = $('#eNumber').val()
    //input alerts
    if(eNumber > 100 || eNumber < 0) alert('Invalid Entry');
    if(eNumber === '') alert ('English Score Cannot Be Blank');

    //grade mapping
    let map = [
        {max: 101, grade: 'A+'},
        {max: 96, grade: 'A'},
        {max: 93, grade: 'A-'},
        {max: 89, grade: 'B+'},
        {max: 85, grade: 'B'},
        {max: 83, grade: 'B-'},
        {max: 79, grade: 'C+'},
        {max: 75, grade: 'C'},
        {max: 73, grade: 'C-'},
        {max: 69, grade: 'D+'},
        {max: 65, grade: 'D'},
        {max: 63, grade: 'D-'},
        {max: 59, grade: 'F'},
        {max: 0, grade: 'NA'}
    ];
    //loop to determine map value for english score
    for(var loop = 0; loop < map.length; loop++) {
        var data = map[loop];
        if(eNumber >= data.max) return data.grade;
        //return letter grade value to page
        document.getElementById('eScoreResult').innerHTML = 'Your English Grade is ' + data.grade;
    }
}

//math Grade function
function mScore() {
    //math input value
    let mNumber = $('#mNumber').val()
    //input alerts
    if(mNumber > 100 || mNumber < 0) alert('Math Score Must Be A Numeric Value');
    if(mNumber === '') alert ('Math Score Cannot Be Blank');
    
    //grade mapping
    let map = [
        {max: 101, grade: 'A+'},
        {max: 96, grade: 'A'},
        {max: 93, grade: 'A-'},
        {max: 89, grade: 'B+'},
        {max: 85, grade: 'B'},
        {max: 83, grade: 'B-'},
        {max: 79, grade: 'C+'},
        {max: 75, grade: 'C'},
        {max: 73, grade: 'C-'},
        {max: 69, grade: 'D+'},
        {max: 65, grade: 'D'},
        {max: 63, grade: 'D-'},
        {max: 59, grade: 'F'},
        {max: 0, grade: 'NA'}
    ];
    //loop to determine map value for math score
    for(var loop = 0; loop < map.length; loop++) {
        var data = map[loop];
        if(mNumber >= data.max) return data.grade;
        //return letter grade value to page
        document.getElementById('mScoreResult').innerHTML = 'Your Math Grade is ' + data.grade;
    }
}

//history Grade function
function hScore() {
    //history input value
    let hNumber = $('#hNumber').val()
    //input alerts
    if(hNumber > 100 || hNumber < 0) alert('History Score Must Be A Numeric Value');
    if(hNumber === '') alert ('History Score Cannot Be Blank');
    
    //grade mapping
    let map = [
        {max: 101, grade: 'A+'},
        {max: 96, grade: 'A'},
        {max: 93, grade: 'A-'},
        {max: 89, grade: 'B+'},
        {max: 85, grade: 'B'},
        {max: 83, grade: 'B-'},
        {max: 79, grade: 'C+'},
        {max: 75, grade: 'C'},
        {max: 73, grade: 'C-'},
        {max: 69, grade: 'D+'},
        {max: 65, grade: 'D'},
        {max: 63, grade: 'D-'},
        {max: 59, grade: 'F'},
        {max: 0, grade: 'NA'}
    ];
    //loop to determine map value for history score
    for(var loop = 0; loop < map.length; loop++) {
        var data = map[loop];
        if(hNumber >= data.max) return data.grade;
        //return letter grade value to page
        document.getElementById('hScoreResult').innerHTML = 'Your History Grade is ' + data.grade;
    }
}

//Art Grade function
function aScore() {
    //art input value
    let aNumber = $('#aNumber').val()
    //input alerts
    if(aNumber > 100 || aNumber < 0) alert('Art Score Must Be A Numeric Value');
    if(aNumber === '') alert ('Art Score Cannot Be Blank');
    
    //grade mapping   
    let map = [
        {max: 101, grade: 'A+'},
        {max: 96, grade: 'A'},
        {max: 93, grade: 'A-'},
        {max: 89, grade: 'B+'},
        {max: 85, grade: 'B'},
        {max: 83, grade: 'B-'},
        {max: 79, grade: 'C+'},
        {max: 75, grade: 'C'},
        {max: 73, grade: 'C-'},
        {max: 69, grade: 'D+'},
        {max: 65, grade: 'D'},
        {max: 63, grade: 'D-'},
        {max: 59, grade: 'F'},
        {max: 0, grade: 'NA'}
    ];
    //loop to determine map value for art score
    for(var loop = 0; loop < map.length; loop++) {
        var data = map[loop];
        if(aNumber >= data.max) return data.grade;
        //return letter grade value to page
        document.getElementById('aScoreResult').innerHTML = 'Your Art Grade is ' + data.grade;
    }
}

//Physical Education Grade function
function pScore() {
    //PE input value
    let pNumber = $('#pNumber').val()
    //input alerts
    if(pNumber > 100 || pNumber < 0) alert('PE Score Must Be A Numeric Value');
    if(pNumber === '') alert ('PE Score Cannot Be Blank');
   
    //grade mapping   
    let map = [
        {max: 101, grade: 'A+'},
        {max: 96, grade: 'A'},
        {max: 93, grade: 'A-'},
        {max: 89, grade: 'B+'},
        {max: 85, grade: 'B'},
        {max: 83, grade: 'B-'},
        {max: 79, grade: 'C+'},
        {max: 75, grade: 'C'},
        {max: 73, grade: 'C-'},
        {max: 69, grade: 'D+'},
        {max: 65, grade: 'D'},
        {max: 63, grade: 'D-'},
        {max: 59, grade: 'F'},
        {max: 0, grade: 'NA'}
    ];
    //loop to determine map value for PE score
    for(var loop = 0; loop < map.length; loop++) {
        var data = map[loop];
        if(pNumber >= data.max) return data.grade;
        //return letter grade value to page
        document.getElementById('pScoreResult').innerHTML = 'Your PE Grade is ' + data.grade;
    }
}

//Average Grade function
function avgGrade() {
   
    //All Scores input values
    let eNumber = $('#eNumber').val()
    let mNumber = $('#mNumber').val()
    let hNumber = $('#hNumber').val()
    let aNumber = $('#aNumber').val()
    let pNumber = $('#pNumber').val()
    //Average of Scores Weighted Value
    let average = (eNumber*.25 + mNumber*.25 + hNumber*.25 + aNumber*.1 + pNumber*.15);
    //grade mapping
    let map = [
        {max: 101, grade: 'A+'},
        {max: 96, grade: 'A'},
        {max: 93, grade: 'A-'},
        {max: 89, grade: 'B+'},
        {max: 85, grade: 'B'},
        {max: 83, grade: 'B-'},
        {max: 79, grade: 'C+'},
        {max: 75, grade: 'C'},
        {max: 73, grade: 'C-'},
        {max: 69, grade: 'D+'},
        {max: 65, grade: 'D'},
        {max: 63, grade: 'D-'},
        {max: 59, grade: 'F'},
        {max: 0, grade: 'NA'}
    ];

    //loop to determine map value for Average Score
    for(var loop = 0; loop < map.length; loop++) {
        var data = map[loop];
                console.log(loop);
        if(average >= data.max) return data.grade;
        //return letter grade value to page
        document.getElementById('avgScoreResult').innerHTML = 'Your Average Grade is ' + data.grade;
    }

}

document.getElementById('btn').addEventListener('click', score, true);