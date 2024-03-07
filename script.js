// window.onscroll= function(){
//     myFunction();
// }

// function myFunction(){
//     console.log('im here');
//     const navBar = document.querySelector("nav");

//     setTimeout(()=>{
//         navBar.style.backgroundColor = "blue";
//     },2000)

// }
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var header = document.querySelector('header');

    // Calculate the scroll position relative to the document height
    var scrollPercentage = (scrollPosition / (document.body.scrollHeight - window.innerHeight)) * 100;

    // Change the header color when scrolled 50% of the page
    if (scrollPercentage >= 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

function downloadResume() {
    var link = document.createElement('a');
    link.href = 'asset/GOWTHAM_KUMAR_SOLLETI_resume.pdf';
    link.download = 'GOWTHAM_KUMAR_SOLLETI_resume.pdf';
    link.click();
}
function togglePortfolio() {
    var moreCards = document.querySelectorAll('.portfolio-card.hidden');
    moreCards.forEach(card => {
        card.classList.remove('hidden');
    });
    var viewMoreButton = document.querySelector('button');
    viewMoreButton.style.display = 'none';
}



function togglePortfolio() {
    var portfolioCards = document.querySelectorAll('.portfolio-card');
    portfolioCards.forEach(function(card) {
        card.classList.toggle('show');
        // Check if the card is being hidden, then show the button
        if (!card.classList.contains('show')) {
            card.querySelector('button').style.display = 'inline-block';
        }
    });
    var viewMoreButton = document.querySelector('button');
    if (viewMoreButton.textContent === 'View More') {
        viewMoreButton.textContent = 'View Less';
    } else {
        viewMoreButton.textContent = 'View More';
    }
}
function toggleCard(card) {
    card.classList.toggle('flipped');
}


// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Function to flip the card after 1 second and then unflip it
  function flipAndUnflipFirstCard() {
    // Get the first portfolio card
    const firstCard = document.querySelector('.portfolio-card');
  
    // Add the flipped class after 1 second if the portfolio section is in viewport
    if (isInViewport(firstCard)) {
      setTimeout(() => {
        firstCard.classList.add('flipped');
      }, 2000);
  
      // Remove the flipped class after 2 seconds to unflip the card
      setTimeout(() => {
        firstCard.classList.remove('flipped');
      }, 3000);
    }
  }
  
  // Call the flipAndUnflipFirstCard function when the window is scrolled
  window.addEventListener('scroll', flipAndUnflipFirstCard);
  
