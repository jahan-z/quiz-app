// correct answers
const correctAnswers = ['A', 'B', 'B', 'A'];
// console.log(correctAnswers);




// Form
const form = document.querySelector('.quiz-form')
console.log(form);
// results
const results= document.querySelector('.results')
// console.log(results);

// formEvent
form.addEventListener('submit', e=>{
    e.preventDefault()
  
    
   const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value]
   
    let score=0;
    userAnswer.forEach((answer,index)=>{

        if (answer === correctAnswers[index]){
            score = score + 25;
        } 
        results.classList.remove('d-none')

        scrollTo(0,0);

        let output=0 ;

        const timer= setInterval(()=>{
            
            if(output === score){
                clearInterval(timer)
            }else{
                output++;
            }
            results.querySelector('span').textContent= `${output}%`
        }, 25)

    }) 
    // foreachend


})
// eventlistenerend