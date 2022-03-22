// var items = ['item1', 'item2', 'item3'];
var items = [];

// items.forEach(function(item) {
//     //console.log(item);
//     document.getElementById('myList').innerHTML += '<li>' + item + '</li>';
// });

//////////////// ya da ////////////////////
// var list = document.querySelector('#myList');
// var html = '';
// items.forEach(function(item){
//     html += '<li class="list-group-item">' + item + '</li>';
// });

// list.innerHTML=html;

var list = document.querySelector('#myList');

items.forEach(function(item){

    CreateItem(item);

    // var li = document.createElement('li');
    // var t=document.createTextNode(item);
    // li.className='list-group-item';
    // li.appendChild(t);
    // list.appendChild(li);

    // var span = document.createElement('span');
    // var text = document.createTextNode('\u00D7');
    // span.className = 'close';
    // span.appendChild(text);
    // li.appendChild(span);

    // span.onclick = function() {
    //     var div = this.parentElement;
    //     div.style.display = 'none';
    // }

});

// var close = document.getElementsByClassName('close');

// for(var i=0; i<close.length; i++){
//     close[i].onclick = function(){
//         var li = this.parentElement;
//         li.style.display = 'none';
//     }
// }

list.addEventListener('click', function(item){
    
    if(item.target.tagName=='LI'){
        item.target.classList.toggle('checked');
        ToogleDeleteButton();
    }

    //console.log(item.target.tagName);
    // item.target.classList.toggle('checked');

    // if(item.target.tagName == 'li'){
    // }
});

document.querySelector('#deleteAll').onclick=function(){
    var elements = document.querySelectorAll('.checked');
    //console.log(elements);
    elements.forEach(function(item){
        // item.parentElement.removeChild(item);
        // ya da
        item.style.display= 'none';
        document.querySelector('#deleteAll').classList.add('d-none');
    });
}

function ToogleDeleteButton(){
    var checkList = document.querySelectorAll('.list-group-item.checked');
    // console.log(checkList);
    // console.log(checkList.length);
    if(checkList.length>0){
        document.querySelector('#deleteAll').classList.remove('d-none');
    }else{
        document.querySelector('#deleteAll').classList.add('d-none');
    }
}

document.getElementById('txtItem').addEventListener('keyup', function(event){
    if(event.keyCode===13){
        event.preventDefault();
        document.getElementById('btnCreate').click();
    }
});

document.querySelector('#btnCreate').addEventListener(('click'), function(){

    var item = document.querySelector('#txtItem').value;
    // console.log(item);
    if(item===''){
        alert('Lütfen bir değer giriniz');
        return;
    }else if(item===' '){
        alert('Lütfen boşluk karakteri girmeyiniz');
        return;
    }

    CreateItem(item);
    document.getElementById('txtItem').value = '';

});

function CreateItem(item){

    var li = document.createElement('li');
    var t=document.createTextNode(item);
    li.className='list-group-item';
    li.appendChild(t);
    list.appendChild(li);

    var span = document.createElement('span');
    var text = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(text);
    li.appendChild(span);

    span.onclick = function() {
        var li = this.parentElement;
        li.style.display = 'none';
        li.classList.remove('checked');
    }

}
