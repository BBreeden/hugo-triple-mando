function hide_show_img(button_element) {
    var img = document.getElementById(button_element.value);
    if (img.classList.contains('hide')) {
        img.classList.remove('hide');
      } else {
        img.classList.add('hide');
      }
    // alert(button_element.innerHTML);
    // TODO I need to update the inner html to change the + to a -
}