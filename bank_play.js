var Bank = function(){
  this.accounts = [100, 200, 300, 400];
  this.total = 0;
}

Bank.prototype = {
  setTotal: function(){
      this.total = 0;
      this.accounts.forEach( function(account){
        // this. is part of a global object and losses the scope from above and no longer has the same total...
        this.total += account;
        // .bind(this) ensures that the .this is the same as the .this about and not the new global this...
      }.bind(this));
  }
}

var b = new Bank();
console.log ("total before", b.total);

b.setTotal();

console.log ("total after", b.total);