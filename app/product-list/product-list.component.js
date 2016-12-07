'use strict';

// Register `producList` component, along with its associated controller and template
angular.
  module('productList').
  component('productList', {
    templateUrl: 'product-list/product-list.template.html',
    controller: function ProductListController($http) {
      var self = this;
      self.filter = {};

      $http.get('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js').then(function(response) {
        self.products = response.data.products;
      });

      self.orderProp = 'msrpInCents';
      self.filterByPrice = filterByPrice;
      self.getPrice = getPrice;

      function filterByPrice(product) {
        return self.filter[product.msrpInCents] || noFilter(self.filter);
      }

      function getPrice() {
        return (self.products || []).
          map(function (product) { return product.msrpInCents; }).
          filter(function (cat, idx, arr) { return arr.indexOf(cat) === idx; });
      }

      function noFilter(filterObj) {
        return Object.
          keys(filterObj).
          every(function (key) { return !filterObj[key]; });
      }
    }

  })
  .filter('monetaryUnit', function () {
  return function (amount) {
      return '$' + (amount / 100).toFixed(2);
    }
  });
