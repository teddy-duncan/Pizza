 name_array=["Cheese Pizza","Veggie Pizza","Pepporoni Pizza"];
function submit(){
    var name1=document.getElementById("student1").value;
 
    name_array.push(name1);
    console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
    document.getElementById("submit_button").style.display="none";
    document.getElementById("sort_button").style.display="inline-block";
}

function sorting(){
    name_array.sort();
 console.log(name_array);
    document.getElementById("display_name").innerHTML=name_array;
}