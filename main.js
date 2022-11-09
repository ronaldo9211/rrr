document.getElementById("1").onclick=()=>{val(1)}
document.getElementById("2").onclick=()=>{val(2)}
document.getElementById("3").onclick=()=>{val(3)}
document.getElementById("4").onclick=()=>{val(4)}
document.getElementById("5").onclick=()=>{val(5)}
document.getElementById("6").onclick=()=>{val(6)}
document.getElementById("7").onclick=()=>{val(7)}
document.getElementById("8").onclick=()=>{val(8)}
document.getElementById("9").onclick=()=>{val(9)}
document.getElementById("0").onclick=()=>{val(0)}
document.getElementById("00").onclick=()=>{val('00')}
document.getElementById("dot").onclick=()=>{val('.')}
document.getElementById("p").onclick=()=>{val('+')}
document.getElementById("m").onclick=()=>{val('-')}
document.getElementById("d").onclick=()=>{val('/')}
document.getElementById("mul").onclick=()=>{val('*')}
document.getElementById("sin").onclick=()=>{val('sin')}
document.getElementById("cos").onclick=()=>{val('cos')}
document.getElementById("tan").onclick=()=>{val('tan')}
document.getElementById("bopen").onclick=()=>{val('(')}
document.getElementById("bclose").onclick=()=>{val(')')}
document.getElementById("ANS").onclick=()=>{solve()}
document.getElementById("clear").onclick=()=>{ document.getElementById("txt1").value=""}
document.getElementById("bspace").onclick=()=>{ 
    let val=document.getElementById("txt1").value
    document.getElementById("txt1").value=""
    for (let i=0;i<(val.length-1);i++){
        document.getElementById("txt1").value+=val[i]
    }
}

function solve (){
    let x = document.getElementById("txt1").value
    let y = math.evaluate(x)
    document.getElementById("txt2").value = y
}
function val(num){
    document.getElementById("txt1").value+=`${num}`
}
