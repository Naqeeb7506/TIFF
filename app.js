document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.getElementById('close-btn');

    hamburger.addEventListener('click', () => {
        sidebar.style.display = 'block'; 
        setTimeout(() => {
            sidebar.classList.add('open'); 
        }, 10); 
    });

    closeBtn.addEventListener('click', () => {
        sidebar.classList.remove('open'); 
        setTimeout(() => {
            sidebar.style.display = 'none'; 
        }, 500); 
    });
});

document.getElementById("scrollToTop").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// window.addEventListener('scroll', function() {
//     const myDiv = document.getElementsByClassName('nav-div');
//     if (window.scrollY > 20) {
//       myDiv.style.display = 'block';
//     } else {
//       myDiv.style.display = 'none';
//     }
//   });