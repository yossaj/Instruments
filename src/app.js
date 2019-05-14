const instrumentData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const DisplayView = require('./views/display_view.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  

  const selectElement = document.querySelector('select#instrument-families');
  const instumentDropdown = new SelectView(selectElement);
  instumentDropdown.bindEvents();

  const instrumentFamilies = new InstrumentFamilies(instrumentData)
  instrumentFamilies.bindEvents()

  const selectDiv = document.querySelector('div#instrument-fam-info')
  console.log(selectDiv);
  
  const displayView = new DisplayView(selectDiv)
  displayView.bindEvents()

  
});
