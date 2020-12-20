import React, { Fragment } from 'react';
import { Provider } from 'react-redux';

import store from './components/redux/store';
import Dashboard from './components/dashboard/dashboard';

const App = () => {
	return (
		<Fragment>
			<Provider store={store}>
				<Dashboard />
			</Provider>
		</Fragment>
	);
};

export default App;
