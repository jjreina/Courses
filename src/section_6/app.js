let budgetController = (() => {

})();

let uiController = (() => {

    const DOM_STRINGS = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    }
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

    const ENTER_KEYCODE = 13;
    const DOM = uiCtrl.getDOMStrings();

    let ctrlAddItem = () => {
        // Get the field input  data
        let input = uiCtrl.getInput();
        console.log(input);
    }

    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', (event) => {
        
        if (event.keyCode === ENTER_KEYCODE || event.which === ENTER_KEYCODE) {
            ctrlAddItem();
        }
    });

})(budgetController, uiController);