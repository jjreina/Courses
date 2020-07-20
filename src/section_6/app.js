let budgetController = (() => {

    // private section
    // Function constructor
    class Expense {
        constructor(id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }

    // Function constructor
    class Income {
        constructor (id, description, value) {
            this.id = id;
            this.description = description;
            this.value = value;
        }
    }

    let data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    return {
        addItem: (type, des, val) => {
            let newItem, ID;

            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            data.allItems[type].push(newItem);
            return newItem;
        },
        testing: () => {
            console.log(data);
        }
    }

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
        let input, newItem;

        // Get the field input  data
        input = uiCtrl.getInput();
        // Add the item to the budget controller
        newItem = budgetController.addItem(input.type, input.description, input.value);
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