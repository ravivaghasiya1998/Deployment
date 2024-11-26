function handleToggle(button){
  if (!button.classList.contains('is-toggled')){
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}