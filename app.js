

// Details Order JS Start
let menu = document.querySelector('#menu-bar');

document.querySelectorAll('.featured-image-1').forEach(image_1 =>{
    image_1.addEventListener('click', () =>{
        var src = image_1.getAttribute('src');
        document.querySelector('.big-image-1').src = src;
    });
});

document.querySelectorAll('.featured-image-2').forEach(image_2 =>{
    image_2.addEventListener('click', () =>{
        var src = image_2.getAttribute('src');
        document.querySelector('.big-image-2').src = src;
    });
});

document.querySelectorAll('.featured-image-3').forEach(image_3 =>{
    image_3.addEventListener('click', () =>{
        var src = image_3.getAttribute('src');
        document.querySelector('.big-image-3').src = src;
    });
});
// Details Order JS End



// Checkout JS Start
const user = {
    name : 'Ksatria Pamungkas',
    number : '08123456789',
    order : 'Monas',
    address : 'Sabang'
}


const nameElm = document.getElementById('name')
const numberElm = document.getElementById('number')
const ordersElm = document.getElementById('orders')
const extraOrdersElm = document.getElementById('extraOrders')
const ticketsElm = document.getElementById('tickets')
const timeElm = document.getElementById('time')
const addressElm = document.getElementById('address')
const messageElm = document.getElementById('message')

const btn_orderElm = document.querySelector('.btn')



btn_orderElm = addEventListener("click", ()=>{
    if((nameElm.value.length > 0 && numberElm.value.length > 0 && ordersElm.value.length > 0 && addressElm.value.length > 0) &&
        (extraOrdersElm.value.length > 0 || ticketsElm.value.length > 0 || timeElm.value.length > 0 || messageElm.value.length > 0)){

            if(nameElm.value == user.name && numberElm.value == user.number && ordersElm.value == user.order && addressElm.value == user.address ){
                alert('Pemesanan Anda berhasil')
            }else{
                alert('Data yang harus diisi harus sesuai dengan data akun yang terdaftar dan sesuai dengan pemesanan')
            }

        
    }
    // else{
    //     alert('Form harus diisi dengan lengkap')
    // }
})








// Checkout JS End




