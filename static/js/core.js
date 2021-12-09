function hide_show_img(button_element) {
    var img = document.getElementById(button_element.value);
    if (img.classList.contains('show')) {
        img.classList.remove('show');
      } else {
        img.classList.add('show');
      }
    // alert(button_element.innerHTML);
    // TODO I need to update the inner html to change the + to a -
}