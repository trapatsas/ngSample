// Tree
angular.module('main')
.controller('TreeController', ['$scope', function ($scope) {
    $scope.treeClass = {
        treenode: "RootNode",
        childnodes: [
          {
              treenode: "aooooo",
              childnodes: [
                {
                    treenode: "sooooo", childnodes: [{ treenode: "dooooo" }, { treenode: "fooooo" }]
                },
                {
                    treenode: "vooooo", childnodes: [{ treenode: "gooooo" }]
                }
              ]
          },
          {
              treenode: "zooooo", childnodes: [{ treenode: "xooooo" }]
          }
        ]
    };

    //$scope.treeClass = function (val) {
    //    this.treenode = val || null;
    //    this.right = null;
    //    this.left = null;
    //    this.childnodes = [this.left, this.right];
    //};

    //$scope.treeClass.prototype.addnode = function (value) {
    //    if (!this.value) this.value = value;
    //    if (value > this.value) {
    //        if (this.right) {
    //            this.right.addnode(value);
    //        } else if (!this.right) {
    //            this.right = new treeClass(value);
    //        }
    //    } else if (value < this.value) {
    //        if (this.left) {
    //            this.left.addnode(value);
    //        } else if (!this.left) {
    //            this.left = new treeClass(value);
    //        }
    //    }
    //};

}]);