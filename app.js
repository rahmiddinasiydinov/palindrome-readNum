const palindrom = document.querySelector('.palindrom__form')
const readNum = document.querySelector('.readNum__form');
const palindromInput = document.querySelector('.palindrom__input');
const readNumInput = document.querySelector('.readNum__input');
const palindromText = document.querySelector('.palindrom__text');
const readNumText = document.querySelector('.readNum__text');

palindrom.addEventListener('submit', (e)=>{
    e.preventDefault();
    let value = palindromInput.value;
    let answer = palindrom(value)
    
    function palindrom(num){
        if(num == num.split('').reverse().join('')){
          return num+' is palindrom';
        } else{
          return num+' is not palindrom'
        }
      }
      palindromText.textContent =answer;
})
readNum.addEventListener('submit', (e)=>{
    e.preventDefault();
    let value = readNumInput.value;
    let answer = readNum(value)
    readNumText.textContent=answer
    
    function readNum(num){
        let birlik =['bir', 'ikki', 'uch', 'to\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\'qqiz'];
        let unlik = ['o\'n', 'yigirma', 'o\'ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to\'qson'];
        while(num.length%3!=0){
          num='0'+num;
        }
        num = num.split('').reverse();
        let numArray = [];
        let finalAns = [];
        while(num.length!==0){
          let num2 = num.splice(0, 3).reverse();
        
          numArray.push(num2)
      }
      
        for( let i in numArray){
        let everyThree =''
             for(let t in numArray[i]){
                 let number =Number(numArray[i][t]) 
               if(t==0){
                 if(number!=0){
                   everyThree+=`${birlik[number-1]} yuz `
                 }else{
                   everyThree+=''
                 }
               }
               else if(t==1){
                   if(number!=0){
                   everyThree+=`${unlik[number-1]} `
                 }}
               else if(t==2){
                 if(number!=0){
                   everyThree+=birlik[number-1]
                 }
               }
                
               
             }
          finalAns.push(everyThree);
        }
          let answer = [];
        for(let  i in finalAns){ 
          if(i==0 && finalAns[i]){
            answer.push(finalAns[i])
          } else   if(i==1  && finalAns[i] ){
            answer.push(finalAns[i]+' ming ')
          } else   if(i==2  && finalAns[i]){
            answer.push(finalAns[i]+' million ')
          } else   if(i==3  && finalAns[i]){
            answer.push(finalAns[i]+' milliard ')
          } else   if(i==4  && finalAns[i]){
            answer.push(finalAns[i]+' trillion ')
          }
        }
          return answer.reverse().join('');
        
          
      }
      
})



