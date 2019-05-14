const PubSub = require('../helpers/pub_sub.js')

const InstrumentFamilies = function(data) {
  this.data = data;
};


InstrumentFamilies.prototype.bindEvents = function() {
  PubSub.publish('Instruments: Loaded', this.data);

  PubSub.subscribe('SelectView:change', (event)=>{
    const selectedIndex = event.detail
    this.publishInstrumentDetaisl(selectedIndex)
  })

InstrumentFamilies.prototype.publishInstrumentDetaisl = function(selectedIndex){
    const selectedInstrument = this.data[selectedIndex]
    PubSub.publish('DisplayView: InstrumentFamily', selectedInstrument)
    
}

};

module.exports = InstrumentFamilies;
