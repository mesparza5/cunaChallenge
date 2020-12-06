import renderer from '@testing-library/react'
import App from '../containers/App';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'

const mockStore = configureStore([]);

describe('Application connected with react-redux', () => {
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      myState: 'mock state'
    })

    store.dispatch = jest.fn();
    component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });

  it('renders app with mock state', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
})

