var name = prompt('Nhập tên của bạn: ');
var age = prompt('Nhập tuổi của bạn: ');
if(isNaN(age)){
    alert('nhập lại tuổi là số');
}else if(age >= 6){
    alert("giá vé 20k");
}else{
    alert("miễn phí vé");
}

