let budgetController = (() => {

})();

let uiController = (() => {

    // private section
    const DOM_STRINGS = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }

    // public section
    return {
        getInput: () => {
            return {
                type: document.querySelector(DOM_STRINGS.inputType).value, // inc or exp.
                description: document.querySelector(DOM_STRINGS.inputDescription).value, 
                value: document.querySelector(DOM_STRINGS.inputValue).value
            }
        },

        getDOMStrings: () => {
            return DOM_STRINGS;
        }
    }

})();

let controller = ((budgetCtrl, uiCtrl) => {

    // private section
    const ENTER_KEYCODE = 13;
    const DOM = uiCtrl.getDOMStrings();

    let ctrlAddItem = () => {
        // Get the field input  data
        let input = uiCtrl.getInput();
        console.log(input);
    }

    let setupEventListeners = () => {
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    
        document.addEventListener('keypress', (event) => {
            
            if (event.keyCode === ENTER_KEYCODE || event.which === ENTER_KEYCODE) {
                ctrlAddItem();
            }
        });
    }

    // public section
    return {
        init: function() {
            console.log('Application has started');
            setupEventListeners();
        }
    }

})(budgetController, uiController);

controller.init();