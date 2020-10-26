 $('#myCarousel').carousel({
            interval: 8000
        });
		
		
		 $('#myCarousel2').carousel({
            interval: 8000
        });
	
		
		 tabControl();

        /*
        We also apply the switch when a viewport change is detected on the fly
        (e.g. when you resize the browser window or flip your device from 
        portrait mode to landscape). We set a timer with a small delay to run 
        it only once when the resizing ends. It's not perfect, but it's better
        than have it running constantly during the action of resizing.
        */
        var resizeTimer;
        $(window).on('resize', function(e) {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function() {
                tabControl();
            }, 250);
        });

        /*
        The function below is responsible for switching the tabs when clicked.
        It switches both the tabs and the accordion buttons even if 
        only the one or the other can be visible on a screen. We prefer
        that in order to have a consistent selection in case the viewport
        changes (e.g. when you esize the browser window or flip your 
        device from portrait mode to landscape).
        */
        function tabControl() {
            var tabs = $('.tabbed-content').find('.tabs');
            if (tabs.is(':visible')) {
                tabs.find('a').on('click', function(event) {
                    event.preventDefault();
                    var target = $(this).attr('href'),
                        tabs = $(this).parents('.tabs'),
                        buttons = tabs.find('a'),
                        item = tabs.parents('.tabbed-content').find('.item');
                    buttons.removeClass('active');
                    item.removeClass('active');
                    $(this).addClass('active');
                    $(target).addClass('active');
                });
            } else {
                $('.item').on('click', function() {
                    var container = $(this).parents('.tabbed-content'),
                        currId = $(this).attr('id'),
                        items = container.find('.item');
                    container.find('.tabs a').removeClass('active');
                    items.removeClass('active');
                    $(this).addClass('active');
                    container.find('.tabs a[href$="#' + currId + '"]').addClass('active');
                });
            }
        }
		
		
		
		jQuery(function($) {
	$.fn.select2.amd.require([
    'select2/selection/single',
    'select2/selection/placeholder',
    'select2/selection/allowClear',
    'select2/dropdown',
    'select2/dropdown/search',
    'select2/dropdown/attachBody',
    'select2/utils'
  ], function (SingleSelection, Placeholder, AllowClear, Dropdown, DropdownSearch, AttachBody, Utils) {

		var SelectionAdapter = Utils.Decorate(
      SingleSelection,
      Placeholder
    );
    
    SelectionAdapter = Utils.Decorate(
      SelectionAdapter,
      AllowClear
    );
          
    var DropdownAdapter = Utils.Decorate(
      Utils.Decorate(
        Dropdown,
        DropdownSearch
      ),
      AttachBody
    );
    
		var base_element = $('.select2-multiple2')
    $(base_element).select2({
    	placeholder: 'Select multiple items',
      selectionAdapter: SelectionAdapter,
      dropdownAdapter: DropdownAdapter,
      allowClear: true,
      templateResult: function (data) {

        if (!data.id) { return data.text; }

        var $res = $('<div></div>');

        $res.text(data.text);
        $res.addClass('wrap');

        return $res;
      },
      templateSelection: function (data) {
      	if (!data.id) { return data.text; }
        var selected = ($(base_element).val() || []).length;
        var total = $('option', $(base_element)).length;
        return "Selected " + selected + " of " + total;
      }
    })
  
  });
  
});


$(function() {

            $("#range").ionRangeSlider({
                hide_min_max: true,
                keyboard: true,
                min: 0,
                max: 50,
                from: 10,
                to: 40,
                type: 'double',
                step: 1,
                prefix: "",
                grid: true
            });
            $("#range-slider").ionRangeSlider({
                hide_min_max: true,
                keyboard: true,
                min: 25,
                max: 50,
                from: 10,
                to: 50,
                type: 'double',
                step: 1,
                prefix: "",
                grid: true
            });
			$("#range-slider1").ionRangeSlider({
                hide_min_max: true,
                keyboard: true,
                min: 25,
                max: 50,
                from: 10,
                to: 50,
                type: 'double',
                step: 1,
                prefix: "$",
                grid: true
            });
        });
      $("#demo_10").ionRangeSlider({
            skin: "round",
            grid: true,
            min: 0,
            max: 100,
            from: 21,
            max_postfix: "+",
        });
		
		
		// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


/* range slide 1 Waitlist */

$(document).ready(function () {
  //
  var $slider = $("#slider-range1");
  var $tooltip_container = $("#tooltip_container");
  var $sliderValue = $("#slider-range-value");
  //
  noUiSlider.create($slider[0], {
    start: [50],
    range: {
      min: [25],
      max: [250] },

    margin: 100,
    tooltips: [true],
    animate: true,
    connect: "lower",
    pips: { mode: "count", values: 9 } });

  //
  //
  /* click tooltip */
  $(".noUi-tooltip").on("click", function (e) {
    if (!$(e.target).is("input")) {
      var _currentValue = $(this).text();
      $(this).append(
      '<input type="text" class="input-tooltip" value="' + _currentValue + '">');

      $(this).
      find(".input-tooltip").
      focus().
      keydown(function (e) {
        if (e.keyCode == 13) {
          var valor = $(this).val();
          $slider[0].noUiSlider.set(valor);
        }
      });
    }
  });
  //
});
/* range slide 1 Waitlist End */ 


/* range slide 2 Waitlist */ 
$(document).ready(function () {
  //
  var $slider = $("#slider-range");
  var $tooltip_container = $("#tooltip_container");
  var $sliderValue = $("#slider-range-value");
  //
  noUiSlider.create($slider[0], {
    start: [50],
    range: {
      min: [25],
      max: [250] },

    margin: 100,
    tooltips: [true],
    animate: true,
    connect: "lower",
    pips: { mode: "count", values: 9 } });

  //
  //
  /* click tooltip */
  $(".noUi-tooltip").on("click", function (e) {
    if (!$(e.target).is("input")) {
      var _currentValue = $(this).text();
      $(this).append(
      '<input type="text" class="input-tooltip" value="' + _currentValue + '">');

      $(this).
      find(".input-tooltip").
      focus().
      keydown(function (e) {
        if (e.keyCode == 13) {
          var valor = $(this).val();
          $slider[0].noUiSlider.set(valor);
        }
      });
    }
  });
  //
});
//# sourceURL=pen.js
/* range slide 2 Waitlist End */ 

 


 