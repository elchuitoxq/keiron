(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["demo"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Charts/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Charts/LineChart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Charts/BarChart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard/SocialTrafficTable */ "./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue");
/* harmony import */ var _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dashboard/PageVisitsTable */ "./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Charts


 // Tables



/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    LineChart: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Charts/LineChart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    BarChart: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Charts/BarChart'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()),
    PageVisitsTable: _Dashboard_PageVisitsTable__WEBPACK_IMPORTED_MODULE_2__["default"],
    SocialTrafficTable: _Dashboard_SocialTrafficTable__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: []
        },
        extraOptions: !(function webpackMissingModule() { var e = new Error("Cannot find module '@/components/Charts/config'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        }
      }
    };
  },
  methods: {
    initBigChart: function initBigChart(index) {
      var chartData = {
        datasets: [{
          label: 'Performance',
          data: this.bigLineChart.allData[index]
        }],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      };
      this.bigLineChart.chartData = chartData;
      this.bigLineChart.activeIndex = index;
    }
  },
  mounted: function mounted() {
    this.initBigChart(0);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'page-visits-table',
  data: function data() {
    return {
      tableData: [{
        page: '/argon/',
        visitors: '4,569',
        unique: '340',
        bounceRate: '46,53%',
        bounceRateDirection: 'up'
      }, {
        page: '/argon/index.html',
        visitors: '3,985',
        unique: '319',
        bounceRate: '46,53%',
        bounceRateDirection: 'down'
      }, {
        page: '/argon/charts.html',
        visitors: '3,513',
        unique: '294',
        bounceRate: '36,49%',
        bounceRateDirection: 'down'
      }, {
        page: '/argon/tables.html',
        visitors: '2,050',
        unique: '147',
        bounceRate: '50,87%',
        bounceRateDirection: 'up'
      }, {
        page: '/argon/profile.html',
        visitors: '1,795',
        unique: '190',
        bounceRate: '46,53%',
        bounceRateDirection: 'down'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'social-traffic-table',
  data: function data() {
    return {
      tableData: [{
        name: 'Facebook',
        visitors: '1,480',
        progress: 60,
        progressType: 'gradient-danger'
      }, {
        name: 'LinkedIn',
        visitors: '5,480',
        progress: 70,
        progressType: 'gradient-success'
      }, {
        name: 'Google',
        visitors: '4,807',
        progress: 80,
        progressType: 'gradient-primary'
      }, {
        name: 'Instagram',
        visitors: '3,678',
        progress: 75,
        progressType: 'gradient-info'
      }, {
        name: 'Twitter',
        visitors: '2,645',
        progress: 30,
        progressType: 'gradient-warning'
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Icons.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Icons.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.common.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-clipboard2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
!(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap-vue/es/directives/tooltip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



vue__WEBPACK_IMPORTED_MODULE_0___default.a.use(!(function webpackMissingModule() { var e = new Error("Cannot find module 'vue-clipboard2'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
/* harmony default export */ __webpack_exports__["default"] = ({
  directives: {
    'b-tooltip': !(function webpackMissingModule() { var e = new Error("Cannot find module 'bootstrap-vue/es/directives/tooltip'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  data: function data() {
    return {
      icons: [{
        name: "ni ni-active-40"
      }, {
        name: "ni ni-air-baloon"
      }, {
        name: "ni ni-album-2"
      }, {
        name: "ni ni-align-center"
      }, {
        name: "ni ni-align-left-2"
      }, {
        name: "ni ni-ambulance"
      }, {
        name: "ni ni-app"
      }, {
        name: "ni ni-archive-2"
      }, {
        name: "ni ni-atom"
      }, {
        name: "ni ni-badge"
      }, {
        name: "ni ni-bag-17"
      }, {
        name: "ni ni-basket"
      }, {
        name: "ni ni-bell-55"
      }, {
        name: "ni ni-bold-down"
      }, {
        name: "ni ni-bold-left"
      }, {
        name: "ni ni-bold-right"
      }, {
        name: "ni ni-bold-up"
      }, {
        name: "ni ni-bold"
      }, {
        name: "ni ni-book-bookmark"
      }, {
        name: "ni ni-books"
      }, {
        name: "ni ni-box-2"
      }, {
        name: "ni ni-briefcase-24"
      }, {
        name: "ni ni-building"
      }, {
        name: "ni ni-bulb-61"
      }, {
        name: "ni ni-bullet-list-67"
      }, {
        name: "ni ni-bus-front-12"
      }, {
        name: "ni ni-button-pause"
      }, {
        name: "ni ni-button-play"
      }, {
        name: "ni ni-button-power"
      }, {
        name: "ni ni-calendar-grid-58"
      }, {
        name: "ni ni-camera-compact"
      }, {
        name: "ni ni-caps-small"
      }, {
        name: "ni ni-cart"
      }, {
        name: "ni ni-chart-bar-32"
      }, {
        name: "ni ni-chart-pie-35"
      }, {
        name: "ni ni-chat-round"
      }, {
        name: "ni ni-check-bold"
      }, {
        name: "ni ni-circle-08"
      }, {
        name: "ni ni-cloud-download-95"
      }, {
        name: "ni ni-cloud-upload-96"
      }, {
        name: "ni ni-compass-04"
      }, {
        name: "ni ni-controller"
      }, {
        name: "ni ni-credit-card"
      }, {
        name: "ni ni-curved-next"
      }, {
        name: "ni ni-delivery-fast"
      }, {
        name: "ni ni-diamond"
      }, {
        name: "ni ni-email-83"
      }, {
        name: "ni ni-fat-add"
      }, {
        name: "ni ni-fat-delete"
      }, {
        name: "ni ni-fat-remove"
      }, {
        name: "ni ni-favourite-28"
      }, {
        name: "ni ni-folder-17"
      }, {
        name: "ni ni-glasses-2"
      }, {
        name: "ni ni-hat-3"
      }, {
        name: "ni ni-headphones"
      }, {
        name: "ni ni-html5"
      }, {
        name: "ni ni-istanbul"
      }, {
        name: "ni ni-circle-08"
      }, {
        name: "ni ni-key-25"
      }, {
        name: "ni ni-laptop"
      }, {
        name: "ni ni-like-2"
      }, {
        name: "ni ni-lock-circle-open"
      }, {
        name: "ni ni-map-big"
      }, {
        name: "ni ni-mobile-button"
      }, {
        name: "ni ni-money-coins"
      }, {
        name: "ni ni-note-03"
      }, {
        name: "ni ni-notification-70"
      }, {
        name: "ni ni-palette"
      }, {
        name: "ni ni-paper-diploma"
      }, {
        name: "ni ni-pin-3"
      }, {
        name: "ni ni-planet"
      }, {
        name: "ni ni-ruler-pencil"
      }, {
        name: "ni ni-satisfied"
      }, {
        name: "ni ni-scissors"
      }, {
        name: "ni ni-send"
      }, {
        name: "ni ni-settings-gear-65"
      }, {
        name: "ni ni-settings"
      }, {
        name: "ni ni-single-02"
      }, {
        name: "ni ni-single-copy-04"
      }, {
        name: "ni ni-sound-wave"
      }, {
        name: "ni ni-spaceship"
      }, {
        name: "ni ni-square-pin"
      }, {
        name: "ni ni-support-16"
      }, {
        name: "ni ni-tablet-button"
      }, {
        name: "ni ni-tag"
      }, {
        name: "ni ni-tie-bow"
      }, {
        name: "ni ni-time-alarm"
      }, {
        name: "ni ni-trophy"
      }, {
        name: "ni ni-tv-2"
      }, {
        name: "ni ni-umbrella-13"
      }, {
        name: "ni ni-user-run"
      }, {
        name: "ni ni-vector"
      }, {
        name: "ni ni-watch-time"
      }, {
        name: "ni ni-world"
      }, {
        name: "ni ni-zoom-split-in"
      }, {
        name: "ni ni-collection"
      }, {
        name: "ni ni-image"
      }, {
        name: "ni ni-shop"
      }, {
        name: "ni ni-ungroup"
      }, {
        name: "ni ni-world-2"
      }, {
        name: "ni ni-ui-04"
      }]
    };
  },
  methods: {
    onCopy: function onCopy() {
      this.$notify({
        type: 'success',
        title: 'Copied to clipboard'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login',
  data: function data() {
    return {
      model: {
        email: '',
        password: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Maps.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Maps.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  mounted: function mounted() {
    var google = window.google;
    var map = document.getElementById('map-canvas');
    var lat = map.getAttribute('data-lat');
    var lng = map.getAttribute('data-lng');
    var myLatlng = new google.maps.LatLng(lat, lng);
    var mapOptions = {
      zoom: 12,
      scrollwheel: false,
      center: myLatlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [{
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#444444"
        }]
      }, {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [{
          "color": "#f2f2f2"
        }]
      }, {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "road",
        "elementType": "all",
        "stylers": [{
          "saturation": -100
        }, {
          "lightness": 45
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [{
          "visibility": "simplified"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "water",
        "elementType": "all",
        "stylers": [{
          "color": '#5e72e4'
        }, {
          "visibility": "on"
        }]
      }]
    };
    map = new google.maps.Map(map, mapOptions);
    var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      animation: google.maps.Animation.DROP,
      title: 'Hello World!'
    });
    var contentString = '<div class="info-window-content"><h2>Argon Dashboard</h2>' + '<p>A beautiful Dashboard for Bootstrap 4. It is Free and Open Source.</p></div>';
    var infowindow = new google.maps.InfoWindow({
      content: contentString
    });
    google.maps.event.addListener(marker, 'click', function () {
      infowindow.open(map, marker);
    });
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Register.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Register.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'register',
  data: function data() {
    return {
      model: {
        name: '',
        email: '',
        password: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Tables.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tables_ProjectsTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables/ProjectsTable */ "./resources/js/argon-admin/views/Tables/ProjectsTable.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'tables',
  components: {
    ProjectsTable: _Tables_ProjectsTable__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'projects-table',
  props: {
    type: {
      type: String
    },
    title: String
  },
  data: function data() {
    return {
      tableData: [{
        img: 'img/theme/bootstrap.jpg',
        title: 'Argon Design System',
        budget: '$2500 USD',
        status: 'pending',
        statusType: 'warning',
        completion: 60
      }, {
        img: 'img/theme/angular.jpg',
        title: 'Angular Now UI Kit PRO',
        budget: '$1800 USD',
        status: 'completed',
        statusType: 'success',
        completion: 100
      }, {
        img: 'img/theme/sketch.jpg',
        title: 'Black Dashboard',
        budget: '$3150 USD',
        status: 'delayed',
        statusType: 'danger',
        completion: 72
      }, {
        img: 'img/theme/react.jpg',
        title: 'React Material Dashboard',
        budget: '$4400 USD',
        status: 'on schedule',
        statusType: 'info',
        completion: 90
      }, {
        img: 'img/theme/vue.jpg',
        title: 'Vue Paper UI Kit PRO',
        budget: '$2200 USD',
        status: 'completed',
        statusType: 'success',
        completion: 100
      }]
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'user-profile',
  data: function data() {
    return {
      model: {
        username: '',
        email: '',
        firstName: '',
        lastName: '',
        address: '',
        city: '',
        country: '',
        zipCode: '',
        about: ''
      }
    };
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard.vue?vue&type=template&id=509288a6&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Dashboard.vue?vue&type=template&id=509288a6& ***!
  \*******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-xl-8 mb-5 mb-xl-0" },
            [
              _c(
                "card",
                {
                  attrs: { type: "default", "header-classes": "bg-transparent" }
                },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row align-items-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "h6",
                          {
                            staticClass: "text-light text-uppercase ls-1 mb-1"
                          },
                          [_vm._v("Overview")]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "h3 text-white mb-0" }, [
                          _vm._v("Sales value")
                        ])
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "ul",
                          { staticClass: "nav nav-pills justify-content-end" },
                          [
                            _c("li", { staticClass: "nav-item mr-2 mr-md-0" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link py-2 px-3",
                                  class: {
                                    active: _vm.bigLineChart.activeIndex === 0
                                  },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.initBigChart(0)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-none d-md-block" },
                                    [_vm._v("Month")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "d-md-none" }, [
                                    _vm._v("M")
                                  ])
                                ]
                              )
                            ]),
                            _vm._v(" "),
                            _c("li", { staticClass: "nav-item" }, [
                              _c(
                                "a",
                                {
                                  staticClass: "nav-link py-2 px-3",
                                  class: {
                                    active: _vm.bigLineChart.activeIndex === 1
                                  },
                                  attrs: { href: "#" },
                                  on: {
                                    click: function($event) {
                                      $event.preventDefault()
                                      return _vm.initBigChart(1)
                                    }
                                  }
                                },
                                [
                                  _c(
                                    "span",
                                    { staticClass: "d-none d-md-block" },
                                    [_vm._v("Week")]
                                  ),
                                  _vm._v(" "),
                                  _c("span", { staticClass: "d-md-none" }, [
                                    _vm._v("W")
                                  ])
                                ]
                              )
                            ])
                          ]
                        )
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("line-chart", {
                    ref: "bigChart",
                    attrs: {
                      height: 350,
                      "chart-data": _vm.bigLineChart.chartData,
                      "extra-options": _vm.bigLineChart.extraOptions
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4" },
            [
              _c(
                "card",
                { attrs: { "header-classes": "bg-transparent" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "row align-items-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "col" }, [
                        _c(
                          "h6",
                          {
                            staticClass: "text-uppercase text-muted ls-1 mb-1"
                          },
                          [_vm._v("Performance")]
                        ),
                        _vm._v(" "),
                        _c("h5", { staticClass: "h3 mb-0" }, [
                          _vm._v("Total orders")
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("bar-chart", {
                    ref: "barChart",
                    attrs: {
                      height: 350,
                      "chart-data": _vm.redBarChart.chartData
                    }
                  })
                ],
                1
              )
            ],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col-xl-8 mb-5 mb-xl-0" },
            [_c("page-visits-table")],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-4" },
            [_c("social-traffic-table")],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=3e5d1b95&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=3e5d1b95& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _vm._m(0),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.page) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v("\n          " + _vm._s(row.unique) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c("i", {
                        staticClass: "fas fa-arrow-up text-success mr-3",
                        class:
                          row.bounceRateDirection === "up"
                            ? "text-success"
                            : "text-danger"
                      }),
                      _vm._v(
                        "\n          " + _vm._s(row.bounceRate) + "\n        "
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Page name")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th", [_vm._v("Unique users")]),
              _vm._v(" "),
              _c("th", [_vm._v("Bounce rate")])
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _c("div", { staticClass: "col" }, [
          _c("h3", { staticClass: "mb-0" }, [_vm._v("Page visits")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "col text-right" }, [
          _c(
            "a",
            { staticClass: "btn btn-sm btn-primary", attrs: { href: "#!" } },
            [_vm._v("See all")]
          )
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=4bf04160&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=4bf04160& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-header border-0" }, [
      _c("div", { staticClass: "row align-items-center" }, [
        _vm._m(0),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col text-right" },
          [
            _c("base-button", { attrs: { size: "sm", type: "primary" } }, [
              _vm._v("See all")
            ])
          ],
          1
        )
      ])
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "table-responsive" },
      [
        _c(
          "base-table",
          {
            attrs: { "thead-classes": "thead-light", data: _vm.tableData },
            scopedSlots: _vm._u([
              {
                key: "default",
                fn: function(ref) {
                  var row = ref.row
                  return [
                    _c("th", { attrs: { scope: "row" } }, [
                      _vm._v("\n          " + _vm._s(row.name) + "\n        ")
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _vm._v(
                        "\n          " + _vm._s(row.visitors) + "\n        "
                      )
                    ]),
                    _vm._v(" "),
                    _c("td", [
                      _c(
                        "div",
                        { staticClass: "d-flex align-items-center" },
                        [
                          _c("span", { staticClass: "mr-2" }, [
                            _vm._v(_vm._s(row.progress) + "%")
                          ]),
                          _vm._v(" "),
                          _c("base-progress", {
                            staticClass: "pt-0",
                            attrs: {
                              type: row.progressType,
                              "show-percentage": false,
                              value: row.progress
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ]
                }
              }
            ])
          },
          [
            _c("template", { slot: "columns" }, [
              _c("th", [_vm._v("Referral")]),
              _vm._v(" "),
              _c("th", [_vm._v("Visitors")]),
              _vm._v(" "),
              _c("th")
            ])
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Social traffic")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Icons.vue?vue&type=template&id=033e4c9a&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Icons.vue?vue&type=template&id=033e4c9a& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("div", { staticClass: "card shadow" }, [
              _vm._m(0),
              _vm._v(" "),
              _c("div", { staticClass: "card-body" }, [
                _c(
                  "div",
                  { staticClass: "row icon-examples" },
                  _vm._l(_vm.icons, function(icon, index) {
                    return _c(
                      "div",
                      {
                        key: icon.name + index,
                        staticClass: "col-lg-3 col-md-6"
                      },
                      [
                        _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "b-tooltip",
                                rawName: "v-b-tooltip.hover.top",
                                modifiers: { hover: true, top: true }
                              },
                              {
                                name: "clipboard",
                                rawName: "v-clipboard:copy",
                                value: icon.name,
                                expression: "icon.name",
                                arg: "copy"
                              },
                              {
                                name: "clipboard",
                                rawName: "v-clipboard:success",
                                value: _vm.onCopy,
                                expression: "onCopy",
                                arg: "success"
                              }
                            ],
                            staticClass: "btn-icon-clipboard",
                            attrs: {
                              type: "button",
                              title: icon.name,
                              "data-clipboard-text": "air-baloon"
                            }
                          },
                          [
                            _c("div", [
                              _c("i", { class: icon.name }),
                              _vm._v(" "),
                              _c("span", [
                                _vm._v(_vm._s(icon.name.substring(6)))
                              ])
                            ])
                          ]
                        )
                      ]
                    )
                  }),
                  0
                )
              ])
            ])
          ])
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-transparent" }, [
      _c("h3", { staticClass: "mb-0" }, [_vm._v("Icons")])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Login.vue?vue&type=template&id=2c8892fc&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Login.vue?vue&type=template&id=2c8892fc& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-lg-5 col-md-7" }, [
      _c("div", { staticClass: "card bg-secondary shadow border-0" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body px-lg-5 py-lg-5" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "form",
            { attrs: { role: "form" } },
            [
              _c("base-input", {
                staticClass: "input-group-alternative mb-3",
                attrs: {
                  placeholder: "Email",
                  "addon-left-icon": "ni ni-email-83"
                },
                model: {
                  value: _vm.model.email,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "email", $$v)
                  },
                  expression: "model.email"
                }
              }),
              _vm._v(" "),
              _c("base-input", {
                staticClass: "input-group-alternative",
                attrs: {
                  placeholder: "Password",
                  type: "password",
                  "addon-left-icon": "ni ni-lock-circle-open"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              }),
              _vm._v(" "),
              _c(
                "base-checkbox",
                { staticClass: "custom-control-alternative" },
                [
                  _c("span", { staticClass: "text-muted" }, [
                    _vm._v("Remember me")
                  ])
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "base-button",
                    { staticClass: "my-4", attrs: { type: "primary" } },
                    [_vm._v("Sign in")]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _vm._m(2),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6 text-right" },
          [
            _c(
              "router-link",
              { staticClass: "text-light", attrs: { to: "/register" } },
              [_c("small", [_vm._v("Create new account")])]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-transparent pb-5" }, [
      _c("div", { staticClass: "text-muted text-center mt-2 mb-3" }, [
        _c("small", [_vm._v("Sign in with")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-wrapper text-center" }, [
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }, [
              _c("img", { attrs: { src: "img/icons/common/github.svg" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Github")])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }, [
              _c("img", { attrs: { src: "img/icons/common/google.svg" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Google")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center text-muted mb-4" }, [
      _c("small", [_vm._v("Or sign in with credentials")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("a", { staticClass: "text-light", attrs: { href: "#" } }, [
        _c("small", [_vm._v("Forgot password?")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Maps.vue?vue&type=template&id=67a5fee4&":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Maps.vue?vue&type=template&id=67a5fee4& ***!
  \**************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _vm._m(0)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container-fluid mt--7" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c("div", { staticClass: "card shadow border-0" }, [
            _c("div", {
              staticClass: "map-canvas",
              staticStyle: { height: "600px" },
              attrs: {
                id: "map-canvas",
                "data-lat": "40.748817",
                "data-lng": "-73.985428"
              }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Register.vue?vue&type=template&id=eca689cc&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Register.vue?vue&type=template&id=eca689cc& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "row justify-content-center" }, [
    _c("div", { staticClass: "col-lg-5 col-md-7" }, [
      _c("div", { staticClass: "card bg-secondary shadow border-0" }, [
        _vm._m(0),
        _vm._v(" "),
        _c("div", { staticClass: "card-body px-lg-5 py-lg-5" }, [
          _vm._m(1),
          _vm._v(" "),
          _c(
            "form",
            { attrs: { role: "form" } },
            [
              _c("base-input", {
                staticClass: "input-group-alternative mb-3",
                attrs: {
                  placeholder: "Name",
                  "addon-left-icon": "ni ni-hat-3"
                },
                model: {
                  value: _vm.model.name,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "name", $$v)
                  },
                  expression: "model.name"
                }
              }),
              _vm._v(" "),
              _c("base-input", {
                staticClass: "input-group-alternative mb-3",
                attrs: {
                  placeholder: "Email",
                  "addon-left-icon": "ni ni-email-83"
                },
                model: {
                  value: _vm.model.email,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "email", $$v)
                  },
                  expression: "model.email"
                }
              }),
              _vm._v(" "),
              _c("base-input", {
                staticClass: "input-group-alternative",
                attrs: {
                  placeholder: "Password",
                  type: "password",
                  "addon-left-icon": "ni ni-lock-circle-open"
                },
                model: {
                  value: _vm.model.password,
                  callback: function($$v) {
                    _vm.$set(_vm.model, "password", $$v)
                  },
                  expression: "model.password"
                }
              }),
              _vm._v(" "),
              _vm._m(2),
              _vm._v(" "),
              _c("div", { staticClass: "row my-4" }, [
                _c(
                  "div",
                  { staticClass: "col-12" },
                  [
                    _c(
                      "base-checkbox",
                      { staticClass: "custom-control-alternative" },
                      [
                        _c("span", { staticClass: "text-muted" }, [
                          _vm._v("I agree with the "),
                          _c("a", { attrs: { href: "#!" } }, [
                            _vm._v("Privacy Policy")
                          ])
                        ])
                      ]
                    )
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "base-button",
                    { staticClass: "my-4", attrs: { type: "primary" } },
                    [_vm._v("Create account")]
                  )
                ],
                1
              )
            ],
            1
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "row mt-3" }, [
        _vm._m(3),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "col-6 text-right" },
          [
            _c(
              "router-link",
              { staticClass: "text-light", attrs: { to: "/login" } },
              [_c("small", [_vm._v("Login into your account")])]
            )
          ],
          1
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-header bg-transparent pb-5" }, [
      _c("div", { staticClass: "text-muted text-center mt-2 mb-3" }, [
        _c("small", [_vm._v("Sign up with")])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "btn-wrapper text-center" }, [
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }, [
              _c("img", { attrs: { src: "img/icons/common/github.svg" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Github")])
          ]
        ),
        _vm._v(" "),
        _c(
          "a",
          { staticClass: "btn btn-neutral btn-icon", attrs: { href: "#" } },
          [
            _c("span", { staticClass: "btn-inner--icon" }, [
              _c("img", { attrs: { src: "img/icons/common/google.svg" } })
            ]),
            _vm._v(" "),
            _c("span", { staticClass: "btn-inner--text" }, [_vm._v("Google")])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center text-muted mb-4" }, [
      _c("small", [_vm._v("Or sign up with credentials")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-muted font-italic" }, [
      _c("small", [
        _vm._v("password strength: "),
        _c("span", { staticClass: "text-success font-weight-700" }, [
          _vm._v("strong")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-6" }, [
      _c("a", { staticClass: "text-light", attrs: { href: "#" } }, [
        _c("small", [_vm._v("Forgot password?")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables.vue?vue&type=template&id=5fe5659c&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Tables.vue?vue&type=template&id=5fe5659c& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "pb-6 pb-8 pt-5 pt-md-8",
          attrs: { type: "gradient-success" }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-red",
                      "sub-title": "350,897",
                      icon: "ni ni-active-40"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 3.48%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Total traffic",
                      type: "gradient-orange",
                      "sub-title": "2,356",
                      icon: "ni ni-chart-pie-35"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 12.18%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Sales",
                      type: "gradient-green",
                      "sub-title": "924",
                      icon: "ni ni-money-coins"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-danger mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-down" }),
                        _vm._v(" 5.72%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col-xl-3 col-lg-6" },
              [
                _c(
                  "stats-card",
                  {
                    staticClass: "mb-4 mb-xl-0",
                    attrs: {
                      title: "Performance",
                      type: "gradient-info",
                      "sub-title": "49,65%",
                      icon: "ni ni-chart-bar-32"
                    }
                  },
                  [
                    _c("template", { slot: "footer" }, [
                      _c("span", { staticClass: "text-success mr-2" }, [
                        _c("i", { staticClass: "fa fa-arrow-up" }),
                        _vm._v(" 54.8%")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "text-nowrap" }, [
                        _vm._v("Since last month")
                      ])
                    ])
                  ],
                  2
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col" },
            [_c("projects-table", { attrs: { title: "Light Table" } })],
            1
          )
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "row mt-5" }, [
          _c(
            "div",
            { staticClass: "col" },
            [
              _c("projects-table", {
                attrs: { type: "dark", title: "Dark Table" }
              })
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=template&id=149fb0be&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=template&id=149fb0be& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "card shadow",
      class: _vm.type === "dark" ? "bg-default" : ""
    },
    [
      _c(
        "div",
        {
          staticClass: "card-header border-0",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [
          _c("div", { staticClass: "row align-items-center" }, [
            _c("div", { staticClass: "col" }, [
              _c(
                "h3",
                {
                  staticClass: "mb-0",
                  class: _vm.type === "dark" ? "text-white" : ""
                },
                [_vm._v("\n          " + _vm._s(_vm.title) + "\n        ")]
              )
            ]),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "col text-right" },
              [
                _c("base-button", { attrs: { type: "primary", size: "sm" } }, [
                  _vm._v("See all")
                ])
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "table-responsive" },
        [
          _c(
            "base-table",
            {
              staticClass: "table align-items-center table-flush",
              class: _vm.type === "dark" ? "table-dark" : "",
              attrs: {
                "thead-classes":
                  _vm.type === "dark" ? "thead-dark" : "thead-light",
                "tbody-classes": "list",
                data: _vm.tableData
              },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var row = ref.row
                    return [
                      _c("th", { attrs: { scope: "row" } }, [
                        _c("div", { staticClass: "media align-items-center" }, [
                          _c(
                            "a",
                            {
                              staticClass: "avatar rounded-circle mr-3",
                              attrs: { href: "#" }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: row.img
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "media-body" }, [
                            _c("span", { staticClass: "name mb-0 text-sm" }, [
                              _vm._v(_vm._s(row.title))
                            ])
                          ])
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", { staticClass: "budget" }, [
                        _vm._v(
                          "\n          " + _vm._s(row.budget) + "\n        "
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        [
                          _c(
                            "badge",
                            {
                              staticClass: "badge-dot mr-4",
                              attrs: { type: row.statusType }
                            },
                            [
                              _c("i", { class: "bg-" + row.statusType }),
                              _vm._v(" "),
                              _c("span", { staticClass: "status" }, [
                                _vm._v(_vm._s(row.status))
                              ])
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("td", [
                        _c("div", { staticClass: "avatar-group" }, [
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Ryan Tompson"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-1-800x800.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Romina Hadid"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-2-800x800.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Alexander Smith"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-3-800x800.jpg"
                                }
                              })
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "a",
                            {
                              staticClass: "avatar avatar-sm rounded-circle",
                              attrs: {
                                href: "#",
                                "data-toggle": "tooltip",
                                "data-original-title": "Jessica Doe"
                              }
                            },
                            [
                              _c("img", {
                                attrs: {
                                  alt: "Image placeholder",
                                  src: "img/theme/team-4-800x800.jpg"
                                }
                              })
                            ]
                          )
                        ])
                      ]),
                      _vm._v(" "),
                      _c("td", [
                        _c(
                          "div",
                          { staticClass: "d-flex align-items-center" },
                          [
                            _c("span", { staticClass: "completion mr-2" }, [
                              _vm._v(_vm._s(row.completion) + "%")
                            ]),
                            _vm._v(" "),
                            _c(
                              "div",
                              [
                                _c("base-progress", {
                                  staticClass: "pt-0",
                                  attrs: {
                                    type: row.statusType,
                                    "show-percentage": false,
                                    value: row.completion
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "td",
                        { staticClass: "text-right" },
                        [
                          _c(
                            "base-dropdown",
                            {
                              staticClass: "dropdown",
                              attrs: { position: "right" }
                            },
                            [
                              _c(
                                "a",
                                {
                                  staticClass:
                                    "btn btn-sm btn-icon-only text-light",
                                  attrs: {
                                    slot: "title",
                                    role: "button",
                                    "data-toggle": "dropdown",
                                    "aria-haspopup": "true",
                                    "aria-expanded": "false"
                                  },
                                  slot: "title"
                                },
                                [_c("i", { staticClass: "fas fa-ellipsis-v" })]
                              ),
                              _vm._v(" "),
                              [
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Action")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Another action")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  {
                                    staticClass: "dropdown-item",
                                    attrs: { href: "#" }
                                  },
                                  [_vm._v("Something else here")]
                                )
                              ]
                            ],
                            2
                          )
                        ],
                        1
                      )
                    ]
                  }
                }
              ])
            },
            [
              _c("template", { slot: "columns" }, [
                _c("th", [_vm._v("Project")]),
                _vm._v(" "),
                _c("th", [_vm._v("Budget")]),
                _vm._v(" "),
                _c("th", [_vm._v("Status")]),
                _vm._v(" "),
                _c("th", [_vm._v("Users")]),
                _vm._v(" "),
                _c("th", [_vm._v("Completion")]),
                _vm._v(" "),
                _c("th")
              ])
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "card-footer d-flex justify-content-end",
          class: _vm.type === "dark" ? "bg-transparent" : ""
        },
        [_c("base-pagination", { attrs: { total: "30" } })],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/UserProfile.vue?vue&type=template&id=19caa992&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/argon-admin/views/UserProfile.vue?vue&type=template&id=19caa992& ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _c(
        "base-header",
        {
          staticClass: "header pb-8 pt-5 pt-lg-8 d-flex align-items-center",
          staticStyle: {
            "min-height": "600px",
            "background-image": "url(img/theme/profile-cover.jpg)",
            "background-size": "cover",
            "background-position": "center top"
          }
        },
        [
          _c("span", { staticClass: "mask bg-gradient-success opacity-8" }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "container-fluid d-flex align-items-center" },
            [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col-lg-7 col-md-10" }, [
                  _c("h1", { staticClass: "display-2 text-white" }, [
                    _vm._v("Hello Jesse")
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "text-white mt-0 mb-5" }, [
                    _vm._v(
                      "This is your profile page. You can see the progress you've made with your work and manage your projects or assigned tasks"
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "a",
                    { staticClass: "btn btn-info", attrs: { href: "#!" } },
                    [_vm._v("Edit profile")]
                  )
                ])
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "container-fluid mt--7" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-4 order-xl-2 mb-5 mb-xl-0" }, [
            _c("div", { staticClass: "card card-profile shadow" }, [
              _vm._m(0),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4"
                },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-between" },
                    [
                      _c(
                        "base-button",
                        {
                          staticClass: "mr-4",
                          attrs: { size: "sm", type: "info" }
                        },
                        [_vm._v("Connect")]
                      ),
                      _vm._v(" "),
                      _c(
                        "base-button",
                        {
                          staticClass: "float-right",
                          attrs: { size: "sm", type: "default" }
                        },
                        [_vm._v("Message")]
                      )
                    ],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _vm._m(1)
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-xl-8 order-xl-1" },
            [
              _c(
                "card",
                { attrs: { shadow: "", type: "secondary" } },
                [
                  _c(
                    "div",
                    {
                      staticClass: "bg-white border-0",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("div", { staticClass: "row align-items-center" }, [
                        _c("div", { staticClass: "col-8" }, [
                          _c("h3", { staticClass: "mb-0" }, [
                            _vm._v("My account")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "col-4 text-right" }, [
                          _c(
                            "a",
                            {
                              staticClass: "btn btn-sm btn-primary",
                              attrs: { href: "#!" }
                            },
                            [_vm._v("Settings")]
                          )
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  [
                    _c(
                      "form",
                      {
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                          }
                        }
                      },
                      [
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("User information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Username",
                                    placeholder: "Username",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.username,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "username", $$v)
                                    },
                                    expression: "model.username"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Email address",
                                    placeholder: "jesse@example.com",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.email,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "email", $$v)
                                    },
                                    expression: "model.email"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "First name",
                                    placeholder: "First name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.firstName,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "firstName", $$v)
                                    },
                                    expression: "model.firstName"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-6" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Last name",
                                    placeholder: "Last name",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.lastName,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "lastName", $$v)
                                    },
                                    expression: "model.lastName"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("Contact information")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-md-12" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Address",
                                    placeholder: "Home Address",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "address", $$v)
                                    },
                                    expression: "model.address"
                                  }
                                })
                              ],
                              1
                            )
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "row" }, [
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "City",
                                    placeholder: "City",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "city", $$v)
                                    },
                                    expression: "model.city"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Country",
                                    placeholder: "Country",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.country,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "country", $$v)
                                    },
                                    expression: "model.country"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "col-lg-4" },
                              [
                                _c("base-input", {
                                  attrs: {
                                    alternative: "",
                                    label: "Postal code",
                                    placeholder: "Postal code",
                                    "input-classes": "form-control-alternative"
                                  },
                                  model: {
                                    value: _vm.model.zipCode,
                                    callback: function($$v) {
                                      _vm.$set(_vm.model, "zipCode", $$v)
                                    },
                                    expression: "model.zipCode"
                                  }
                                })
                              ],
                              1
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _c("hr", { staticClass: "my-4" }),
                        _vm._v(" "),
                        _c(
                          "h6",
                          { staticClass: "heading-small text-muted mb-4" },
                          [_vm._v("About me")]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "pl-lg-4" }, [
                          _c(
                            "div",
                            { staticClass: "form-group" },
                            [
                              _c(
                                "base-input",
                                {
                                  attrs: { alternative: "", label: "About Me" }
                                },
                                [
                                  _c(
                                    "textarea",
                                    {
                                      staticClass:
                                        "form-control form-control-alternative",
                                      attrs: {
                                        rows: "4",
                                        placeholder: "A few words about you ..."
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "A beautiful Dashboard for Bootstrap 4. It is Free and Open Source."
                                      )
                                    ]
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ])
                      ]
                    )
                  ]
                ],
                2
              )
            ],
            1
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row justify-content-center" }, [
      _c("div", { staticClass: "col-lg-3 order-lg-2" }, [
        _c("div", { staticClass: "card-profile-image" }, [
          _c("a", { attrs: { href: "#" } }, [
            _c("img", {
              staticClass: "rounded-circle",
              attrs: { src: "img/theme/team-4-800x800.jpg" }
            })
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body pt-0 pt-md-4" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col" }, [
          _c(
            "div",
            {
              staticClass:
                "card-profile-stats d-flex justify-content-center mt-md-5"
            },
            [
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("22")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Friends")])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("10")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Photos")])
              ]),
              _vm._v(" "),
              _c("div", [
                _c("span", { staticClass: "heading" }, [_vm._v("89")]),
                _vm._v(" "),
                _c("span", { staticClass: "description" }, [_vm._v("Comments")])
              ])
            ]
          )
        ])
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "text-center" }, [
        _c("h3", [
          _vm._v("\n                                Jessica Jones"),
          _c("span", { staticClass: "font-weight-light" }, [_vm._v(", 27")])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "h5 font-weight-300" }, [
          _c("i", { staticClass: "ni location_pin mr-2" }),
          _vm._v("Bucharest, Romania\n                            ")
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "h5 mt-4" }, [
          _c("i", { staticClass: "ni business_briefcase-24 mr-2" }),
          _vm._v(
            "Solution Manager - Creative Tim Officer\n                            "
          )
        ]),
        _vm._v(" "),
        _c("div", [
          _c("i", { staticClass: "ni education_hat mr-2" }),
          _vm._v("University of Computer Science\n                            ")
        ]),
        _vm._v(" "),
        _c("hr", { staticClass: "my-4" }),
        _vm._v(" "),
        _c("p", [
          _vm._v(
            "Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music."
          )
        ]),
        _vm._v(" "),
        _c("a", { attrs: { href: "#" } }, [_vm._v("Show more")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard.vue":
/*!******************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_509288a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=509288a6& */ "./resources/js/argon-admin/views/Dashboard.vue?vue&type=template&id=509288a6&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_509288a6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_509288a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard.vue?vue&type=template&id=509288a6&":
/*!*************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard.vue?vue&type=template&id=509288a6& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_509288a6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=509288a6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard.vue?vue&type=template&id=509288a6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_509288a6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_509288a6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _PageVisitsTable_vue_vue_type_template_id_3e5d1b95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=template&id=3e5d1b95& */ "./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=3e5d1b95&");
/* harmony import */ var _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PageVisitsTable.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PageVisitsTable_vue_vue_type_template_id_3e5d1b95___WEBPACK_IMPORTED_MODULE_0__["render"],
  _PageVisitsTable_vue_vue_type_template_id_3e5d1b95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=3e5d1b95&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=3e5d1b95& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_3e5d1b95___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./PageVisitsTable.vue?vue&type=template&id=3e5d1b95& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/PageVisitsTable.vue?vue&type=template&id=3e5d1b95&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_3e5d1b95___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PageVisitsTable_vue_vue_type_template_id_3e5d1b95___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue":
/*!*************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SocialTrafficTable_vue_vue_type_template_id_4bf04160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=template&id=4bf04160& */ "./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=4bf04160&");
/* harmony import */ var _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SocialTrafficTable_vue_vue_type_template_id_4bf04160___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SocialTrafficTable_vue_vue_type_template_id_4bf04160___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=4bf04160&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=4bf04160& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_4bf04160___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./SocialTrafficTable.vue?vue&type=template&id=4bf04160& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Dashboard/SocialTrafficTable.vue?vue&type=template&id=4bf04160&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_4bf04160___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SocialTrafficTable_vue_vue_type_template_id_4bf04160___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Icons.vue":
/*!**************************************************!*\
  !*** ./resources/js/argon-admin/views/Icons.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Icons_vue_vue_type_template_id_033e4c9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Icons.vue?vue&type=template&id=033e4c9a& */ "./resources/js/argon-admin/views/Icons.vue?vue&type=template&id=033e4c9a&");
/* harmony import */ var _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Icons.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Icons_vue_vue_type_template_id_033e4c9a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Icons_vue_vue_type_template_id_033e4c9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Icons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Icons.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Icons.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Icons.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Icons.vue?vue&type=template&id=033e4c9a&":
/*!*********************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Icons.vue?vue&type=template&id=033e4c9a& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_033e4c9a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Icons.vue?vue&type=template&id=033e4c9a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Icons.vue?vue&type=template&id=033e4c9a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_033e4c9a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Icons_vue_vue_type_template_id_033e4c9a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Login.vue":
/*!**************************************************!*\
  !*** ./resources/js/argon-admin/views/Login.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_2c8892fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=2c8892fc& */ "./resources/js/argon-admin/views/Login.vue?vue&type=template&id=2c8892fc&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_2c8892fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_2c8892fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Login.vue?vue&type=template&id=2c8892fc&":
/*!*********************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Login.vue?vue&type=template&id=2c8892fc& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2c8892fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=2c8892fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Login.vue?vue&type=template&id=2c8892fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2c8892fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_2c8892fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Maps.vue":
/*!*************************************************!*\
  !*** ./resources/js/argon-admin/views/Maps.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maps_vue_vue_type_template_id_67a5fee4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maps.vue?vue&type=template&id=67a5fee4& */ "./resources/js/argon-admin/views/Maps.vue?vue&type=template&id=67a5fee4&");
/* harmony import */ var _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Maps.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Maps_vue_vue_type_template_id_67a5fee4___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Maps_vue_vue_type_template_id_67a5fee4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Maps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Maps.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Maps.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Maps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Maps.vue?vue&type=template&id=67a5fee4&":
/*!********************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Maps.vue?vue&type=template&id=67a5fee4& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_67a5fee4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Maps.vue?vue&type=template&id=67a5fee4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Maps.vue?vue&type=template&id=67a5fee4&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_67a5fee4___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maps_vue_vue_type_template_id_67a5fee4___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Register.vue":
/*!*****************************************************!*\
  !*** ./resources/js/argon-admin/views/Register.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Register_vue_vue_type_template_id_eca689cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Register.vue?vue&type=template&id=eca689cc& */ "./resources/js/argon-admin/views/Register.vue?vue&type=template&id=eca689cc&");
/* harmony import */ var _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Register.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Register_vue_vue_type_template_id_eca689cc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Register_vue_vue_type_template_id_eca689cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Register.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Register.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Register.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Register.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Register.vue?vue&type=template&id=eca689cc&":
/*!************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Register.vue?vue&type=template&id=eca689cc& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_eca689cc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Register.vue?vue&type=template&id=eca689cc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Register.vue?vue&type=template&id=eca689cc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_eca689cc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Register_vue_vue_type_template_id_eca689cc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Tables.vue":
/*!***************************************************!*\
  !*** ./resources/js/argon-admin/views/Tables.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tables_vue_vue_type_template_id_5fe5659c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tables.vue?vue&type=template&id=5fe5659c& */ "./resources/js/argon-admin/views/Tables.vue?vue&type=template&id=5fe5659c&");
/* harmony import */ var _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tables.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tables_vue_vue_type_template_id_5fe5659c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tables_vue_vue_type_template_id_5fe5659c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Tables.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Tables.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Tables.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Tables.vue?vue&type=template&id=5fe5659c&":
/*!**********************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Tables.vue?vue&type=template&id=5fe5659c& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_5fe5659c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tables.vue?vue&type=template&id=5fe5659c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables.vue?vue&type=template&id=5fe5659c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_5fe5659c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tables_vue_vue_type_template_id_5fe5659c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/Tables/ProjectsTable.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/argon-admin/views/Tables/ProjectsTable.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProjectsTable_vue_vue_type_template_id_149fb0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectsTable.vue?vue&type=template&id=149fb0be& */ "./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=template&id=149fb0be&");
/* harmony import */ var _ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectsTable.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectsTable_vue_vue_type_template_id_149fb0be___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProjectsTable_vue_vue_type_template_id_149fb0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/Tables/ProjectsTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectsTable.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=template&id=149fb0be&":
/*!************************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=template&id=149fb0be& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_template_id_149fb0be___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProjectsTable.vue?vue&type=template&id=149fb0be& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/Tables/ProjectsTable.vue?vue&type=template&id=149fb0be&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_template_id_149fb0be___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectsTable_vue_vue_type_template_id_149fb0be___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/argon-admin/views/UserProfile.vue":
/*!********************************************************!*\
  !*** ./resources/js/argon-admin/views/UserProfile.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserProfile_vue_vue_type_template_id_19caa992___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=template&id=19caa992& */ "./resources/js/argon-admin/views/UserProfile.vue?vue&type=template&id=19caa992&");
/* harmony import */ var _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserProfile.vue?vue&type=script&lang=js& */ "./resources/js/argon-admin/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserProfile_vue_vue_type_template_id_19caa992___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserProfile_vue_vue_type_template_id_19caa992___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/argon-admin/views/UserProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/argon-admin/views/UserProfile.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/argon-admin/views/UserProfile.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/UserProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/argon-admin/views/UserProfile.vue?vue&type=template&id=19caa992&":
/*!***************************************************************************************!*\
  !*** ./resources/js/argon-admin/views/UserProfile.vue?vue&type=template&id=19caa992& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19caa992___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserProfile.vue?vue&type=template&id=19caa992& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/argon-admin/views/UserProfile.vue?vue&type=template&id=19caa992&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19caa992___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserProfile_vue_vue_type_template_id_19caa992___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);