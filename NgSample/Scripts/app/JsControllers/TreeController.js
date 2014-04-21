// Tree
angular.module('main')
.controller('TreeController', ['$scope', function ($scope) {

    var treeClass = function (val) {
        this.treenode = val || null;
        this.right = null;
        this.left = null;
        this.childnodes = [this.left, this.right];
    };


    treeClass.prototype.addnode = function (value) {
        if (!this.treenode) this.treenode = value;
        if (value > this.treenode) {
            if (this.right) {
                this.right.addnode(value);
            } else if (!this.right) {
                this.right = new treeClass(value);
                this.childnodes[1] = this.right;
            }
        } else if (value < this.treenode) {
            if (this.left) {
                this.left.addnode(value);
            } else if (!this.left) {
                this.left = new treeClass(value);
                this.childnodes[0] = this.left;
            }
        }
    };

    $scope.add = function (val) {
        mytree.addnode(val);
        $scope.data = mytree;
    };

    var mytree = new treeClass(10);

    $scope.data = mytree;
    $scope.add(1);
    $scope.add(12);
    $scope.add(15);
    $scope.add(-5);
    $scope.add(7);
    $scope.add(11);


}]);