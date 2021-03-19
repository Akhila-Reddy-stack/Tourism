$(document).ready(function () {
  $("#placestovisit").click(function () {
    $("#trip-placestovisit").show();
    $("#trip-info").hide();
    $("#trip-food").hide();
    $("#footer").hide();
  });
  $("#travelinfo").click(function () {
    $("#trip-info").show();
    $("#trip-placestovisit").hide();
    $("#trip-food").hide();
    $("#footer").show();
  });
  $("#food").click(function () {
    $("#trip-food").show();
    $("#trip-placestovisit").hide();
    $("#trip-info").hide();
    $("#footer").hide();
  });
});
$(document).ready(function () {
  $("#modify").click(function () {
    $(".search-more").show();
    $(".search").hide();
  });
});

$(document).ready(function () {
  $("#placestovisit").click(function () {
    $("#placestovisit").addClass("navbarselect");
    $("#travelinfo").removeClass("navbarselect");
    $("#food").removeClass("navbarselect");
  });
  $("#travelinfo").click(function () {
    $("#travelinfo").addClass("navbarselect");
    $("#placestovisit").removeClass("navbarselect");
    $("#food").removeClass("navbarselect");
  });
  $("#food").click(function () {
    $("#food").addClass("navbarselect");
    $("#travelinfo").removeClass("navbarselect");
    $("#placestovisit").removeClass("navbarselect");
  });
});

// Filtering
$(document).ready(function () {
  $(".call").click(function () {
    console.log("kkkkkkkkkkkk");
    $(".all").show();
    $(".museum").hide();
    $(".park").hide();
    $(".call").addClass("placeselected");
    $(".cparks").removeClass("placeselected mt");
    $(".cmuseums").removeClass("placeselected mtt");
  });
  $(".cparks").click(function () {
    console.log("kkkkkkkkkkkk");
    $(".all").hide();
    $(".museum").hide();
    $(".park").show();
    $(".call").removeClass("placeselected mt");
    $(".cmuseums").removeClass("placeselected mtt");
    $(".cparks").addClass("placeselected");
  });
  $(".cmuseums").click(function () {
    console.log("kkkkkkkkkkkk");
    $(".all").hide();
    $(".museum").show();
    $(".park").hide();
    $(".cmuseums").addClass("placeselected mtt");
    $(".call").removeClass("placeselected ");
    $(".cparks").removeClass("placeselected mt");
  });
});

$(document).ready(function () {
  var toggleFromDropdown = "none";
  $(".plan-fromtrip").on("click", function () {
    $(".trip-from").css({ top: $(this).offset().top + 85 });
    toggleFromVisibility();
  });

  $(".trip-from button").on("click", function () {
    toggleFromVisibility();
  });

  $(".trip-from li").on("click", function () {
    let location = $(this).text();
    console.log("location", location);
    $(".plan-fromtrip input[name='from']").val(location);
    $(".plan-fromtrip .from-search h3 ").text(location);
    toggleFromVisibility();
  });

  // toggle visibility of Location dropdown
  function toggleFromVisibility() {
    $(".trip-from").css({
      display: toggleFromDropdown === "none" ? "block" : "none",
    });
    toggleFromDropdown = toggleFromDropdown === "none" ? "block" : "none";
  }

  var toggleToDropdown = "none";
  $(".plan-totrip").on("click", function () {
    $(".trip-to").css({ top: $(this).offset().top + 85 });
    toggleToVisibility();
  });

  $(".trip-to button").on("click", function () {
    toggleToVisibility();
  });

  $(".trip-to li").on("click", function () {
    let location = $(this).text();
    console.log("location", location);
    $(".plan-totrip input[name='from']").val(location);
    $(".plan-totrip .to-search h3 ").text(location);
    toggleToVisibility();
  });

  // toggle visibility of Location dropdown
  function toggleToVisibility() {
    $(".trip-to").css({
      display: toggleToDropdown === "none" ? "block" : "none",
    });
    toggleToDropdown = toggleToDropdown === "none" ? "block" : "none";
  }

  $(document).mouseup(function (e) {
    FContainer = $(".plan-fromtrip");
    TContainer = $(".plan-totrip");
    if (toggleFromDropdown === "block") {
      if ($(e.target).closest("div").attr("class") !== "trip-from") {
        console.log(";;;;;;;");
        if (!FContainer.is(e.target) && FContainer.has(e.target).length == 0) {
          $(".trip-from").css({ display: "none" });
        }
      }
    }
    if (toggleToDropdown === "block") {
      if ($(e.target).closest("div").attr("class") !== "trip-to") {
        if (!TContainer.is(e.target) && TContainer.has(e.target).length == 0) {
          $(".trip-to").css({ display: "none" });
        }
      }
    }
  });

  // toggle visibility of Location dropdown
  window.onclick = function (e) {
    FromContainer = $(".plan-fromtrip");
    ToContainer = $(".plan-totrip");

    if (toggleFromDropdown === "block") {
      if (
        !FromContainer.is(e.target) &&
        FromContainer.has(e.target).length == 0
      ) {
        $(".trip-from").css({ display: "none" });
        toggleFromDropdown = "none";
      }
    }
    if (toggleToDropdown === "block") {
      if (!ToContainer.is(e.target) && ToContainer.has(e.target).length == 0) {
        $(".trip-to").css({ display: "none" });
        toggleToDropdown = "none";
      }
    }
  };
});

// Search More

$(document).ready(function () {
  var toggleSFromDropdown = "none";
  $(".plan-your-trip").on("click", function () {
    $(".trip-from-search").css({ top: $(this).offset().top + 85 });
    toggleSearchFromVisibility();
  });

  $(".trip-from-search button").on("click", function () {
    toggleSearchFromVisibility();
  });

  $(".trip-from-search li").on("click", function () {
    let location = $(this).text();
    console.log("location", location);
    $(".plan-your-trip input[name='from']").val(location);
    $(".plan-your-trip .f-search h3 ").text(location);
    toggleSearchFromVisibility();
  });

  // toggle visibility of Location dropdown
  function toggleSearchFromVisibility() {
    $(".trip-from-search").css({
      display: toggleSFromDropdown === "none" ? "block" : "none",
    });
    toggleSFromDropdown = toggleSFromDropdown === "none" ? "block" : "none";
  }

  var toggleSToDropdown = "none";
  $(".plan-your-totrip").on("click", function () {
    $(".trip-to-search").css({ top: $(this).offset().top + 85 });
    toggleSearchToVisibility();
  });

  $(".trip-to-search button").on("click", function () {
    toggleSearchToVisibility();
  });

  $(".trip-to-search li").on("click", function () {
    let location = $(this).text();
    console.log("location", location);
    $(".plan-your-totrip input[name='from']").val(location);
    $(".plan-your-totrip .t-search h3 ").text(location);
    toggleSearchToVisibility();
  });

  // toggle visibility of Location dropdown
  function toggleSearchToVisibility() {
    $(".trip-to-search").css({
      display: toggleSToDropdown === "none" ? "block" : "none",
    });
    toggleSToDropdown = toggleSToDropdown === "none" ? "block" : "none";
  }

  // toggle visibility of Location dropdown
  window.onclick = function (e) {
    SearchFromContainer = $(".plan-your-trip");
    SearchToContainer = $(".plan-your-totrip");

    if (toggleSFromDropdown === "block") {
      if (
        !SearchFromContainer.is(e.target) &&
        SearchFromContainer.has(e.target).length == 0
      ) {
        $(".trip-from-search").css({ display: "none" });
        toggleSFromDropdown = "none";
      }
    }
    if (toggleSToDropdown === "block") {
      if (
        !SearchToContainer.is(e.target) &&
        SearchToContainer.has(e.target).length == 0
      ) {
        $(".trip-to-search").css({ display: "none" });
        toggleSToDropdown = "none";
      }
    }
  };
});

jQuery(function ($) {
  var script = document.createElement("script");
  script.src =
    "https://maps.googleapis.com/maps/api/js?sensor=false&callback=initialize";
  document.body.appendChild(script);
});

$(document).ready(function () {
  var index = "";
  var icons;
  $("#markers_info .marker").hover(
    // mouse in
    function () {
      // first we need to know which <div class="marker"></div> we hovered
      index = $("#markers_info .marker").index(this);
      var map;
      var bounds = new google.maps.LatLngBounds();
      var mapOptions = {
        mapTypeId: "roadmap",
      };

      // Display a map on the page
      map = new google.maps.Map(
        document.getElementById("map_canvas"),
        mapOptions
      );
      // map.setTilt(45);

      var markers = [
        ["Arulmigu Koodal Azhagar Temple", 9.9144, 78.1141],
        ["Gandhi Memorial Museum", 12.3375, 75.8069],
        ["Meenakshi Amman Temple", 9.9195, 78.1193],
        ["Rajaji Park", 9.9917, 78.2896],
        ["Kazimar Big Mosque ", 9.9127, 78.1142],
        ["Jeeva Park", 13.044, 80.2378],
        ["Chetpet Ecopark", 13.644, 80.2378],
        ["ISKCON Madurai", 9.9275, 78.1146],
        ['CHILDREN"S MUSEUM ', 10.0889, 77.0595],
        ["Chettinad Palace", 13.0158, 80.2692],
      ];

      var infoWindowContent = [
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/arulmigu.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.3(3k) </div>' +
            '<h3 class="content_title">Arulmigu Koodal Azhagar Temple</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/gandhi.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.5(4k) </div>' +
            '<h3 class="content_title">Gandhi Memorial Museum</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/meenakshi.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.0(3k) </div>' +
            '<h3 class="content_title">Meenakshi Amman Temple</h3>' +
            "</div>" +
            "</div>",
        ],

        [
          '<div class="info_content">' +
            '<div><img src="../../assets/images/sideNavbar/rajaji.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>3.0(2k)</div>' +
            '<h3 class="content_title">Rajaji Park</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/mosque.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>3.5(2.8k) </div>' +
            '<h3 class="content_title">Kazimar Big Mosque</h3>' +
            "</div>" +
            "</div>",
        ],

        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/jeeva.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.3(4.5k) </div>' +
            '<h3 class="content_title">Jeeva Park</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/eco.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.3(3.5k) </div>' +
            '<h3 class="content_title">Chetpet Ecopark</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/iskcon.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.6(5k) </div>' +
            '<h3 class="content_title">ISKCON Madurai</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/chennaimu.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.0(4k) </div>' +
            '<h3 class="content_title">CHILDREN"S MUSEUM</h3>' +
            "</div>" +
            "</div>",
        ],
        [
          '<div class="info_content">' +
            '<div><img src="./assets/images/sideNavbar/chetti.jfif"/> </div>' +
            '<div class="content_details">' +
            '<div class="content_rating"><i class="fa fa-star checked"></i>4.0(4k) </div>' +
            '<h3 class="content_title">Chettinad Palace</h3>' +
            "</div>" +
            "</div>",
        ],
      ];

      // Display multiple markers on a map
      var infoWindow = new google.maps.InfoWindow(),
        marker,
        i;
      console.log(";;;;qq", infoWindow);
      // Loop through our array of markers & place each one on the map
      for (i = 0; i < markers.length; i++) {
        console.log(i);
        var labelv = [
          "9,398",
          "8,719",
          "5,040",
          "4,369",
          "2,798",
          "4,801",
          "748",
          "3,698",
          "4,031",
          "4,454",
          "5,375",
        ];
        console.log(labelv[0]);
        console.log(index);
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        console.log(position);
        bounds.extend(position);
        var label = labelv[i];
        if (i === index) {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            title: markers[i][0],
            map: map,
            icon: "./assets/images/marker-highlight.png",
          });
        } else {
          marker = new google.maps.Marker({
            position: new google.maps.LatLng(markers[i][1], markers[i][2]),
            title: markers[i][0],
            map: map,
            icon: "./assets/images/marker.png",
          });
        }

        google.maps.event.addListener(
          marker,
          "click",
          (function (marker, i) {
            console.log(";;;;qdddddddddq", marker);
            return function () {
              console.log(";;;;qdddddddddq", marker);
              infoWindow.setContent(infoWindowContent[i][0]);
              infoWindow.open(map, marker);
              zoom: 4;
            };
          })(marker, i)
        );

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
      }
    },
    // mouse out
    function () {
      // first we need to know which <div class="marker"></div> we hovered
      index = $("#markers_info .marker").index(this);
      console.log(index);
      markers[index].setIcon(normalIcon());
    }
  );
  console.log(index);
});

function initialize() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {
    mapTypeId: "roadmap",
  };

  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  map.setTilt(45);

  // Multiple Markers
  var markers = [
    ["Arulmigu Koodal Azhagar Temple", 9.9144, 78.1141],
    ["Gandhi Memorial Museum", 9.9299, 78.1386],
    ["Meenakshi Amman Temple", 9.9195, 78.1193],
    ["Rajaji Park", 29.9917, 78.2896],
    ["Kazimar Big Mosque ", 9.9127, 78.1142],
    ["Jeeva Park", 13.044, 80.2378],
    ["Chetpet Ecopark", 13.644, 80.2378],
    ["ISKCON Madurai", 9.9275, 78.1146],
    ['CHILDREN"S MUSEUM ', 10.0889, 77.0595],
    ["Chettinad Palace", 13.0158, 80.2692],
  ];

  var infoWindowContent = [
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/arulmigu.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.3(3k) </div>' +
        '<h3 class="content_title">Arulmigu Koodal Azhagar Temple</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/gandhi.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.5(4k) </div>' +
        '<h3 class="content_title">Gandhi Memorial Museum</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/meenakshi.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.0(3k) </div>' +
        '<h3 class="content_title">Meenakshi Amman Temple</h3>' +
        "</div>" +
        "</div>",
    ],

    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/rajaji.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>3.0(2k)</div>' +
        '<h3 class="content_title">Rajaji Park</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/mosque.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>3.5(2.8k) </div>' +
        '<h3 class="content_title">Kazimar Big Mosque</h3>' +
        "</div>" +
        "</div>",
    ],

    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/jeeva.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.3(4.5k) </div>' +
        '<h3 class="content_title">Jeeva Park</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/eco.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.3(3.5k) </div>' +
        '<h3 class="content_title">Chetpet Ecopark</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/iskcon.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.6(5k) </div>' +
        '<h3 class="content_title">ISKCON Madurai</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/chennaimu.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.0(4k) </div>' +
        '<h3 class="content_title">CHILDREN"S MUSEUM</h3>' +
        "</div>" +
        "</div>",
    ],
    [
      '<div class="info_content">' +
        '<div><img src="./assets/images/sideNavbar/chetti.jfif"/> </div>' +
        '<div class="content_details">' +
        '<div class="content_rating"><i class="fa fa-star checked"></i>4.0(4k) </div>' +
        '<h3 class="content_title">Chettinad Palace</h3>' +
        "</div>" +
        "</div>",
    ],
  ];

  console.log(label);
  // Display multiple markers on a map
  var infoWindow = new google.maps.InfoWindow(),
    marker,
    i;

  for (i = 0; i < markers.length; i++) {
    console.log(i);
    var labelv = [
      "9,398",
      "8,719",
      "5,040",
      "4,369",
      "2,798",
      "4,801",
      "748",
      "3,698",
      "4,031",
      "4,454",
      "5,375",
    ];
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    var label = labelv[i];
    console.log(position);
    var icons = {
      url: "../../assets/images/marker.png",
      color: "#58D400",
      border: "2px solid red",
    };
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0],
      icon: icons.url,
    });

    google.maps.event.addListener(
      marker,
      "click",
      (function (marker, i) {
        return function () {
          infoWindow.setContent(infoWindowContent[i][0]);
          infoWindow.open(map, marker);
          zoom: 4;
        };
      })(marker, i)
    );

    // center the map
    map.fitBounds(bounds);
  }
  var boundsListener = google.maps.event.addListener(
    map,
    "bounds_changed",
    function (event) {
      this.setZoom(5);
      google.maps.event.removeListener(boundsListener);
    }
  );
}
