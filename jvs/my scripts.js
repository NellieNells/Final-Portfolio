//get elements from the DOM
const faqs = faq.querySelectorAll(".faq");
const question= faq.querySelectorAll('.question');
const answer= faq.querySelectorAll('answer');
const arr= faq.querySelectorAll('arrow');

//select all 'question' elements
for( let i=0; i < q. length; i++) {
    //Add click event to all 'question' elements
    question[i].addEventListener('click',() =>{
        return;
    });
      /*open the a 'element' with the same 'i' as the clicked 'q' element*/ 
      answer[i] .classList.toggle('answer-opened');
      /*Rotate the arr 'element' with the same 'i' as the clicked 'q' element*/
      arr[i].classList.toggle('arrow-rotated');
    };
