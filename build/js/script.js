const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

const selectCart = document.querySelector('._select');
const selectCart_title = selectCart.querySelector('._select_title');
const selectCart_labels = selectCart.querySelectorAll('._select_label');

// Toggle menu
selectCart_title.addEventListener('click', () => {
  if ('active' === selectCart.getAttribute('data-state')) {
    selectCart.setAttribute('data-state', '');
  } else {
    selectCart.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectCart_labels.length; i++) {
  selectCart_labels[i].addEventListener('click', (evt) => {
    selectCart_title.textContent = evt.target.textContent;
    selectCart.setAttribute('data-state', '');
  });
}



