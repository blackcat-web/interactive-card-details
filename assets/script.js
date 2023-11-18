function Go(){
    const userName = document.getElementById('cname').value;
    const cardNum = document.getElementById('cnumber').value;
    const expday =document.getElementById('exday').value;
    const expmonth = document.getElementById('exmonth').value;
    const getCVV = document.getElementById('CVV').value;
    
//showing on card 
    const showNumber = document.getElementById('cardNum');
    const showName = document.getElementById('cardname');
    const dayIncard = document.getElementById('dayIncard')
    const monthincard =  document.getElementById('monthincard');
    const cvvNum = document.getElementById('cvvNum');

//error elements 
const NameError = document.getElementById('errorName');
const NumberError = document.getElementById('Numerror');
const expDerror = document.getElementById('expDerror');
const expMerror = document.getElementById('expMerror');
const cvvError = document.getElementById('cvvError');
let checker = 0;

   if( userName == "" || cardNum == "" || expday == "" || expmonth == "" || getCVV == ""){
        NameError.innerHTML = NumberError.innerHTML = expDerror.innerHTML = expMerror.innerHTML = cvvError.innerHTML = `invalid input`;
        
    }else{
        if(cardNum<10**15 || cardNum>10**16){
            NumberError.innerHTML ="required 16 digit card No.";
            
        }else{
            checker++;
            NumberError.innerHTML ="";
            let temp =0;
        showNumber.innerHTML = '';
        for(let i=0; i<4;  i++){
            showNumber.innerHTML+=' ';
            for(let j=0; j<4; j++){
                showNumber.innerHTML+= cardNum[temp];
                temp+=1;
            }
        }
        }

        showName.innerText = userName;
        checker++;
        NameError.innerHTML = '';

        if( expday<=12 && expday>0 ){
            dayIncard.innerText = expday;
            expDerror.innerHTML = "";
            checker++;
            
        }else{
            expDerror.innerHTML = "invalid exp.day"; 
        }
        
        const currentDate = new Date();
        let currentYear = currentDate.getFullYear();
        console.log(currentYear)
        currentYear = Number.parseInt(currentYear-2000); 
        
        if(expmonth<currentYear){
            expMerror.style = "margin-left:100px" ;
            expMerror.innerHTML = "invalid exp.year";
        }else if(expmonth>=currentYear){
            monthincard.innerText = expmonth;
            expMerror.innerHTML ='';
            checker++;
        }

       if( getCVV>100 && getCVV<1000){
        cvvError.innerHTML = "";
        cvvNum.innerText = getCVV;
        checker++;
       }else{
        cvvError.innerHTML = "invalid cvv";
       }
       if(checker == 5){
        document.getElementById('inform').classList.add('none');
       document.getElementById('thankyoubox').classList.remove('none');
       }
    }  
} 
function continuekey(){
    document.getElementById('inform').classList.remove('none');
    document.getElementById('thankyoubox').classList.add('none');
}
