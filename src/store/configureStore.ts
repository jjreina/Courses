import {configureStore as dev} from './configureStore.dev';
import {configureStore as prod} from './configureStore.prod';

let configureStore: any;

if (process.env.NODE_ENV === 'production') {
    configureStore = prod;
} else {
    configureStore = dev;
}

export default configureStore;
