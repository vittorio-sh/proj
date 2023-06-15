document.addEventListener('DOMContentLoaded', function() {
    var toggleFilterSection = function(id) {
      var section = document.getElementById(id);
      var items = section.getElementsByTagName("li");
      for (var i = 0; i < items.length; i++) {
        if (items[i].style.display === "none") {
          items[i].style.display = "block";
        } else {
          items[i].style.display = "none";
        }
      }
    };

    var h3Elements = document.querySelectorAll('.filter-section h3');
    for (var i = 0; i < h3Elements.length; i++) {
      h3Elements[i].addEventListener('click', function() {
        var sectionId = this.getAttribute('data-section-id');
        toggleFilterSection(sectionId);
      });
    }
  });