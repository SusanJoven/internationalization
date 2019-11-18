import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
//import localeEnMessages from "./locales/en";



import JobsList from "./components/jobsList";







ReactDOM.render(
	<IntlProvider locale='es-ES' messages={localeEsMessages}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);