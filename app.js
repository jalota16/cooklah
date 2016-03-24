Sortable.create(number0, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number1, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number2, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number3, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number4, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number5, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number6, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart1 -= 1
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

Sortable.create(number7, {
    group: {name:"DragFood", pull:'clone', put:false},
    animation: 150,
    handle: '.my-handle',
    onEnd: function (/**Event*/evt) {
        if ($counterCart1 > 1){
            evt.item.parentNode.removeChild(evt.item);
            window.alert("1 Meal per Date");
        }else if ($counterCart2 > 1){
            evt.item.parentNode.removeChild(evt.item);
            $counterCart2 -= 1
            window.alert("1 Meal per Date");
        }
    },
})

var $counterCart1 = 0

Sortable.create(cart1, {
    group: {name:"DragFood", put:true, pull:false},
    animation: 150,
    filter: '.js-remove',
    onFilter: function (evt) {
        evt.item.parentNode.removeChild(evt.item);
        $counterCart1 -= 1
        console.log($counterCart1)
    },
    onAdd: function (evt){        
        $counterCart1 += 1;
        var name = evt.item.getElementsByTagName("img")[0].name;
        evt.item.innerHTML = "</br></br><p><b>" + name + "</b>" + "<i class='js-remove remove icon'></i></p>";
        console.log($counterCart1)
    },
})

var $counterCart2 = 0

Sortable.create(cart2, {
    group: {name:"DragFood", put:true, pull:false},
    animation: 150,
    filter: '.js-remove',
    onFilter: function (evt) {
        evt.item.parentNode.removeChild(evt.item);
        $counterCart2 -= 1
    },
    onAdd: function (evt){
        evt.item.innerHTML += ' <i class="js-remove remove icon"></i>';
        $counterCart2 += 1
        var name = evt.item.getElementsByTagName("img")[0].name;
        evt.item.innerHTML = "</br></br><p><b>" + name + "</b>" + "<i class='js-remove remove icon'></i></p>";
        console.log($counterCart2)
    },
})

