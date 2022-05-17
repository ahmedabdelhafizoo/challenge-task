angular.module('appModule').service('Employees', EmployeesService);

function EmployeesService($http) {
  const loadEmployeesData = (page) => {
    const employeesUrl = 'https://fe-task.getsandbox.com/employees';

    return $http.get(employeesUrl, { params: { page } });
  };

  return {
    loadEmployeesData,
  };
}
