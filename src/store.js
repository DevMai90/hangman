// Create store function
// applyMiddleware allows for store enhancers
import { createStore, applyMiddleware } from 'redux';

// Allows us to use devtools in browser
import { composeWithDevTools } from 'redux-devtools-extension';
// Import thunk middleware. Allows us to write action creators that return a function instead of an action. So we can separately call dispatch
import thunk from 'redux-thunk';

// Import default reducer file which will contain all reducers
import rootReducer from './reducers';

// Set intial state
const initialState = {};

// List middleware
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
