const PubSub = require('../helpers/pub_sub.js')

const SelectView = function(element){
    this.element = element
}

SelectView.prototype.bindEvents = function(){
    console.log('ho1');
    PubSub.subscribe('Instruments: Loaded', (evt) => {
        console.log('ho');
        const allInstruments = evt.detail;
        this.populate(allInstruments);
    });
}


SelectView.prototype.populate = function(InstrumentsData){
    
    InstrumentsData.forEach((instrument, index) => {
        const option = document.createElement('option');
        option.textContent = instrument.name;
        option.value = index;
        this.element.appendChild(option);
    })
}

module.exports = SelectView;