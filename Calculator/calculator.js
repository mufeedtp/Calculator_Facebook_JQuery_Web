
let max;
function calc(val){
    if(val == '.'){
        if(document.getElementById("claculator-screen").value.includes(val)){

            var value = document.getElementById("claculator-screen").value

            if(value.includes('+') || value.includes('-') || value.includes('*') || value.includes('/') || value.includes('%')){
                document.getElementById("claculator-screen").value += val;
            }
            else{
                document.getElementById("claculator-screen").value = document.getElementById("claculator-screen").value;
            }
            
        }
        else{
            if(document.getElementById("claculator-screen").value == ""){
                document.getElementById("claculator-screen").value = 0+val
            }
            else{
                document.getElementById("claculator-screen").value += val;
            }
            
        }
    }
    else{
        if(document.getElementById("claculator-screen").value == '0'){
            console.log(document.getElementById("claculator-screen").value)
            document.getElementById("claculator-screen").value = val
        }
        else{
            document.getElementById("claculator-screen").value += val;
        }
        
    }
    
}

function clearscreen(){
    document.getElementById("claculator-screen").value = "";
}

function equal(){
    var value = document.getElementById("claculator-screen").value
    var result =  eval(value)
    document.getElementById("claculator-screen").value = result
}

function deleteLastDigit(){
    var value = document.getElementById("claculator-screen").value
    document.getElementById("claculator-screen").value = value.slice(0, -1)
}

function Boldfont(){
     if(document.getElementById("claculator-screen").style.fontWeight != '900'){
        document.getElementById("claculator-screen").style.fontWeight = '900'
        document.getElementById("claculator-screen").style.fontSize = '18px'
     }
     else{
        document.getElementById("claculator-screen").style.fontWeight = '100'
        document.getElementById("claculator-screen").style.fontSize = '13px'
     }
}