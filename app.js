Sortable.create(number0, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(number1, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(number2, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(number3, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(number4, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(number5, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(number6, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
})

Sortable.create(cart1, {
    group: {name:"DragFood", put:true, pull:false},
    animation: 150,
    filter: '.js-remove',
    onFilter: function (evt) {
        evt.item.parentNode.removeChild(evt.item);
    },
    onAdd: function (evt){
            evt.item.innerHTML += ' <i class="js-remove remove icon"></i>';
        },
})

Sortable.create(cart2, {
    group: {name:"DragFood", put:true, pull:false},
    animation: 150,
    filter: '.js-remove',
    onFilter: function (evt) {
        evt.item.parentNode.removeChild(evt.item);
    },
    onAdd: function (evt){
            evt.item.innerHTML += ' <i class="js-remove remove icon"></i>';
        },
})

