let counter = 0;

const value = document.querySelector('#value');
const buttons = document.querySelectorAll('.button')

buttons.forEach(button => {
  button.addEventListener('click', function(e) {

    const styles = e.currentTarget.classList;

    if(styles.contains('decrease')) {
      counter--;
    }
    else if(styles.contains('increase')) {
      counter++;
    }
    else {
      counter = 0;
    }
      value.textContent = counter;

      // change colors

      if(counter > 0) {
        value.style.color = '#fff';
      }
      if(counter < 0) {
        value.style.color = '#ba215a';
      }
  })
})