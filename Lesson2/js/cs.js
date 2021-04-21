
let src=" pic/img.jpeg";
let cls='img-fluid';
let text=" text \"ტექსტი\" "

let html =" <img  src=' "  + src + " ' class=' " + cls + " ' > ";  //"+ src+ " წაიკითხავს შიგნით როგროც კლასს
let p='<p>' + text + '</p>'; // სტრინგების შეკრება

let htmls= ` <div class="${cls} ">     <p> ${text} </p>  </div>` // რამოდენიმე კლასსის ერთად დაწერა 2მეთოდი

let str="I am  I a student"


document.getElementById("test").innerHTML =html + p +htmls


console.log(src)
console.log(str.length)          // dagviwers stringshi ramdeni wevria itvlis gamotovebul adgilebsac
console.log(str.indexOf("am" , 2 )) //  მარცხნიდან ეძებს gviwers im sityvidan ramdeni indexia marcxniv ,2 gamotovebs or simbolos
console.log(str.lastIndexOf("am"))  // ბოლოდან ეძებს სტრინგის სიბოლოებს
console.log(str.search("student"))   // ეძებს სიტყვას
console.log(str.slice(2, ))          //მოჭრის იმდენ სიმბოლოს რამდენსაც დავწერთ -2 დატოვებს ბოლოდან ორს. 
console.log(str.slice(2, 7))          //მოჭრის პირველ ორ სიმბოლოს შემდეგ ციფრამდე დატოვებ და მოჭრის დანარჩენს
console.log(str.slice(-4, -1))       // -2 დან -4 მდე დატოვებს
console.log(str.slice(2, -1))        //მოჭრის პირველ ორს  მოჭრის ბოლოს ერთს
console.log(str.substring( 2,-4))
console.log(str.substr( 2,-4))

function vals(val){
    val.replace(" word ", "x");
    document.getElementById("le").innerHTML= val;


}
function vals(val){
    let mwal= val.toUppercase();                     //uppercase
    document.getElementById("le").innerHTML= val;
    

}

function vals(val){
    let mwal= val.trim();                          //წაშლის დაშორებებს თავში და ბოლოში
    document.getElementById("le").innerHTML= val;
    

}
console.log(str.replace("I", "Shako" ))  //სტრინგის ჩანაცვლება ერთხელ   /I/g ჩაანაცვლებს სხვაგანაც გლობალურად
console.log(str.replace(" ", ""))
console.log(str.split(""))       // მასივებად დაშლის
console.log(str.split(","))   // სიტტვყვებს შეიტანს მასივში
console.log(str.split("/"))  
console.log(str[3])      //  წამოიღებს მესამე ელემნტს