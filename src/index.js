import React from "react";
import ReactDOM from "react-dom";
import {IntlProvider} from 'react-intl';
import localeEsMessages from "./locales/es";
import localeEnMessages from "./locales/en";
import JobsList from "./components/jobsList";



let getBrowserLanguage = ()=> {
    return navigator.language || navigator.userLanguage;
}
let getLanguage=()=>{
	var lan = getBrowserLanguage();
	if(lan === 'es-ES'){
		return "es";
	}
	return "en";


}
let getLanguageData=()=>{
	var lan = getBrowserLanguage();
	if (lan === 'es-ES'){
		return localeEsMessages;
	}
	return localeEnMessages;

}


ReactDOM.render(
	<IntlProvider locale={getLanguage()} messages={getLanguageData()}>
		<JobsList/>
	</IntlProvider>, document.getElementById("root")
);