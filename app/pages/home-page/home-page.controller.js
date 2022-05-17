// filter helper: https://stackoverflow.com/questions/15519713/highlighting-a-filtered-result-in-angularjs
angular
  .module('appModule')
  .controller('homeController', homePageController).filter('highlight', function ($sce) {
    return function (text, phrase) {
      if (phrase) {
        text = text.replace(
          new RegExp('(' + phrase + ')', 'gi'),
          '<mark>$1</mark>'
        );
      }

      return $sce.trustAsHtml(text);
    };
  });

// eslint-disable-next-line no-unused-vars
function homePageController(Employees) {
  const homePageVm = this;
  homePageVm.employees = [];

  homePageVm.query = '';
  homePageVm.loading = false;
  homePageVm.page = 1;
  homePageVm.totalPages = null;

  homePageVm.setQuery = function (newQuery) {
    homePageVm.query = newQuery;
  };

  function getEmployeesData() {
    homePageVm.loading = true;
    Employees.loadEmployeesData(homePageVm.page)
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.totalPages = data.pages;
      }).finally(() => {
        homePageVm.loading = false;
      });
  }

  getEmployeesData();

  homePageVm.loadMoreData = function () {
    homePageVm.page += 1;
    getEmployeesData();
  };
}
