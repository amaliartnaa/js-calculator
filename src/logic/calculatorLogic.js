import { useState } from 'react';

export const useCalculator = () => {
	const [input, setInput] = useState('0');
	const [formula, setFormula] = useState('');
	const [evaluated, setEvaluated] = useState(false);

	const handleNumber = (num) => {
		if (evaluated) {
			setInput(num);
			setFormula(num);
			setEvaluated(false);
		} else if (input === '0' && num === '0') {
			return;
		} else if (input === '0' || /[+\-*/]/.test(input)) {
			setInput(num);
			setFormula(formula + num);
		} else {
			setInput(input + num);
			setFormula(formula + num);
		}
	};

	const handleOperator = (op) => {
		if (evaluated) {
			setFormula(input + op);
			setEvaluated(false);
		} else if (/[+\-*/]/.test(input)) {
			setFormula(formula.slice(0, -1) + op);
		} else {
			setFormula(formula + op);
		}
		setInput(op);
	};

	const handleDecimal = () => {
		if (evaluated) {
			setInput('0.');
			setFormula('0.');
			setEvaluated(false);
		} else if (!input.includes('.')) {
			setInput(input + '.');
			setFormula(formula + '.');
		}
	};

	const handleClear = () => {
		setInput('0');
		setFormula('');
		setEvaluated(false);
	};

	const handleEvaluate = () => {
		try {
			const result = eval(formula);
			setInput(result.toString());
			setFormula(formula + '=' + result);
			setEvaluated(true);
		} catch (e) {
			setInput('Error');
			setFormula('');
		}
	};

	return {
		input,
		formula,
		handleNumber,
		handleOperator,
		handleDecimal,
		handleClear,
		handleEvaluate,
	};
};
