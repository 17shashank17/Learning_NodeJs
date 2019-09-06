events=require('events');
util=require('util')

Person=function(name){
    this.name=name;
}

util.inherits(Person,events.EventEmitter);

var shas=new Person('Shashank');
var saur=new Person('Saurabh');
var man=new Person('Manan');

var people=[shas,saur,man]

people.forEach(function(person){
    person.on('speak',function(msg){
        console.log(person.name+" speak: "+msg);
    });
});

shas.emit('speak','Hey buddy');
saur.emit('speak','Hi');