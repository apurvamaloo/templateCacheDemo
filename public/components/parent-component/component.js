 var app=angular.module('templateCacheApp',[])
      .component("parentComponent",
      {
        'templateUrl':"public/components/parent-component/template.html",
        'controller':'parentComponentController',
        'controllerAs':"parentComponentCtrl"
      })
function parentComponentController()
{
  var parentComponent=this;
  console.log(this);
}
