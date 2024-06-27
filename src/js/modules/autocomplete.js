import autoComplete from '@tarekraafat/autocomplete.js';
import countryList from './helpers/countryList';

function autoCompleteFunc () {
  const autoCompleteJS = new autoComplete( {
    selector: '#autoCompleteCountry',
    placeHolder: 'e.g Bali, Indonesia',
    data: {
        src: countryList,
        keys: ["name"],
        cache: true,
    },
    resultItem: {
        highlight: true,
    },
  
    events: {
      input: {
          selection: (event) => {
              const selection = event.detail.selection.value;
              console.log(selection)
              autoCompleteJS.input.value = selection.name;
          },
        },
  },
  
    resultList: {
      maxResult: 10,
    },
  
    searchEngine: 'strict',
  
  });
}

export default autoCompleteFunc;