import Display from './components/Display';
import Button from './components/Button';
import { useCalculator } from './logic/calculatorLogic';

export default function App() {
	const {
		input,
		handleNumber,
		handleOperator,
		handleDecimal,
		handleClear,
		handleEvaluate,
	} = useCalculator();

	return (
		<div className="calculator bg-gray-100 p-8 rounded-lg shadow-lg max-w-xs mx-auto mt-20">
			<Display input={input} />
			<div className="grid grid-cols-4 gap-4">
				<Button id="clear" value="AC" onClick={handleClear} className="col-span-2 bg-red-500 hover:bg-red-600 text-white" />
				<Button id="divide" value="/" onClick={handleOperator} className="bg-blue-500 hover:bg-blue-600 text-white" />
				<Button id="multiply" value="*" onClick={handleOperator} className="bg-blue-500 hover:bg-blue-600 text-white" />
				<Button id="seven" value="7" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="eight" value="8" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="nine" value="9" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="subtract" value="-" onClick={handleOperator} className="bg-blue-500 hover:bg-blue-600 text-white" />
				<Button id="four" value="4" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="five" value="5" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="six" value="6" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="add" value="+" onClick={handleOperator} className="bg-blue-500 hover:bg-blue-600 text-white" />
				<Button id="one" value="1" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="two" value="2" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="three" value="3" onClick={handleNumber} className="bg-gray-300 hover:bg-gray-400" />
				<Button id="equals" value="=" onClick={handleEvaluate} className="row-span-2 bg-green-500 hover:bg-green-600 text-white" />
				<Button id="zero" value="0" onClick={handleNumber} className="col-span-2 bg-gray-300 hover:bg-gray-400" />
				<Button id="decimal" value="." onClick={handleDecimal} className="bg-gray-300 hover:bg-gray-400" />
			</div>
		</div>
	);
}
