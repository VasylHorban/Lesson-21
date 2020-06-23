$('#timetable').accordion();
$('#draggable').draggable({cursor:'move'});
let count = 0;
$('#droppable').droppable({
    drop:function(){
        count++;
        $("#droppable").text('Кількість переміщень : ' + count);
     }
});
