const PubSub = require('../helper/pub_sub.js')

const SelectView = function(element){
    this.element = element
}

SelectView.prototype.bindEvents = function(){
    PubSub.subscribe('Instruments: Loaded', (evt) => {
        const allInstruments = evt.detail;
        this.populate(allInstuments);
    });
}

SelectView.prototype.populate = function(InstrumentsData){
    InstrumentsData.forEach((instruments, index) => {
        const option = document.createElement('option');
        option.textContent = instument.name;
        option.value = index;
        this.element.appendChild(option);
    })
}

module.exports = SelectView;