let calculation = localStorage.getItem('calculation') || '';
      displayCalculation();
      function updateCalculation(value) {
        calculation += value;
        saveCalculation();
        displayCalculation();
      }

      function saveCalculation(){
        localStorage.setItem('calculation',calculation)
      };

      function displayCalculation(){
        document.querySelector('.js-total-calculation')
          .innerHTML = calculation
      }