function fn() {
	return 'Code here';
}

const arrowFn1 = () => 'Code here';
const arrowFn2 = () => {
	// Mais de expressão
	return 'Code here';
}

// Funções também são objetos
fn.prop = 'Posso criar propiedades';

console.log(fn());
console.log(fn.prop);

// Receber parâmetros
const logValue = value => console.log(value);
const logFnResult = fnParam => console.log(fnParam());

logFnResult(fn);

// Receber e retornar funções
const controlFnExec = fnParam => allowed => {
	if (allowed) {
		fnParam();
	}
}

const handleFnExecution = controlFnExec(fn);