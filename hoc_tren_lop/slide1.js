/*alert('Xin chào');//tạo hộp thông báo
console.log('Xin chào');//in ra console

var diem = prompt('Nhập điểm của bạn');//tạo hộp nhập liệu

if(diem >= 5 && diem <= 10){
    alert('bạn đã đậu');
}else if(diem >= 0 && diem < 5){
    alert('bạn đã rớt');
}else{
    alert('Điểm không hợp lệ');
}

Math.random()//trả về số ngẫu nhiên từ 0 đến 1 trừ số 0
console.log(Math.random());*/
//bài 1
var a = prompt('Nhập cạnh của tam giác: ');
console.log(a);
var b = prompt('Nhập cạnh của tam giác: ');
console.log(b);
var c = prompt('Nhập cạnh của tam giác: ');
console.log(c);
var p = (Number(a) + Number(b) + Number(c));
alert('Chu vi tam giác là: ' + p);


//bài 2
var ten = prompt('Nhập họ tên sinh viên: ');
var diem1 = Number(prompt('Điểm 1: '));
var diem2 = Number(prompt('Điểm 2: '));
var diem3 = Number(prompt('Điểm 3: '));
//bài 3
var dtb = (parseFloat(diem1) + parseFloat(diem2) + parseFloat(diem3)) / 3;
alert('Điểm trung bình của ' + ten + ' là: ' + parseFloat(dtb).toFixed(2));

document.write('Họ tên sinh viên: ' + ten + '<br>');
document.write('Điểm trung bình: ' + parseFloat(dtb).toFixed(2) + '<br>');
if(dtb >= 5 && dtb <= 10){
    document.write('chúc mừng đã đậu');    
} else if(dtb >= 0 && dtb < 5) {
    document.write(' đã rớt');
} else {
    document.write('Điểm không hợp lệ');
}


