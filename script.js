const btns = document.querySelectorAll('button')

btns.forEach(function (i) {
  i.addEventListener('click', function() {
    console.log(i);
  });
  });