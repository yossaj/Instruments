const PubSub = require('../helpers/pub_sub.js')

const DisplayView = function(container){
    this.container = container 
}

DisplayView.prototype.bindEvents = function(){
    
    PubSub.subscribe('DisplayView: InstrumentFamily', (evt)=>{
        const instrument = evt.detail;
        this.render(instrument)        
    })
};

DisplayView.prototype.render = function(instrument){
    const paragraph1 = document.createElement('h')
    paragraph1.textContent = `${instrument.name}`
//    console.log(this.container);
   
    this.container.innerHTML ='';
    this.container.appendChild(paragraph1)
}

module.exports = DisplayView;