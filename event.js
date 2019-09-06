events=require('events');

event=new events.EventEmitter();
event.on('click',function(){
    console.log("Action is performed");
});

event.emit('click');