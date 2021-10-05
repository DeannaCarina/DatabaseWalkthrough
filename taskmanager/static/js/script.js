document.addEventListener('DOMContentLoaded', function() {
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);
    let modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);
    let datepicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(datepicker, {
      format: "dd mmmm, yyyy",
      i18n: {done: "Select"}
    });
    let dropdown = document.querySelectorAll('select');
    M.FormSelect.init(dropdown);
    let collapse = document.querySelectorAll('.collapsible');
    M.Collapsible.init(collapse);
  });