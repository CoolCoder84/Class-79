var students=[];
function submit(){
    var name1=document.getElementById("S1").value;
    var name2=document.getElementById("S2").value;
    var name3=document.getElementById("S3").value;
    var name4=document.getElementById("S4").value;

    students.push(name1);
    students.push(name2);
    students.push(name3);
    students.push(name4);

    console.log(students);

    document.getElementById("display_name").innerHTML=students;

    document.getElementById("submit").style.display="none";


    document.getElementById("s0rt").style.display="inline-block";
}

function s0rt(){
    students.sort();
    console.log(students);
    document.getElementById("display_name").innerHTML=students;
}