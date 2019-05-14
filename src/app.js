const instrumentData = require('./data/instrument_family_data.js')
const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const instrumentFamilies = new InstrumentFamilies(instrumentData)
  instrumentFamilies.bindEvents()


  const selectElement = document.querySelector('select#instruments-families');
  const instumentDropdown = new SelectView(selectElement);
  instumentDropdown.bindEvents();
});
