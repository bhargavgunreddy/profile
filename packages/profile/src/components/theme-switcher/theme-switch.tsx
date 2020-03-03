import React,{useState} from 'react';
import './theme-switch.scss';

export const ContextSwitch = ()=>{

	let [parentClass, setParentClass] = useState('bg-white');

	let [inputClass, setInputClass] = useState('fl-none');


	let switchFn = ()=>{
		if(parentClass.indexOf('white') !== -1){
			setParentClass('bg-black');
			setInputClass('fl-right');
		}else{
			setParentClass('bg-white');
			setInputClass('fl-none');
		}
	}


	return (
		<label className={"switch " + parentClass}>
			<input className={"switch-btn " + inputClass} type='range' min='0' max='1'/>
		</label>
		)
};