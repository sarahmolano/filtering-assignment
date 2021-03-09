document.addEventListener("DOMContentLoaded", function () {
  const select_menu = document.querySelector(".filter");

  select_menu.addEventListener("change", function(e){
    const park_type_class = e.target.value;
    const active_items = document.querySelectorAll(".item.active");

    active_items.forEach(function(item){
      item.classList.remove("active");
    });

    const park_items = document.querySelectorAll(`.item.${park_type_class}`);

    park_items.forEach(function(item){
      item.classList.add("active");
    });
  });
});
