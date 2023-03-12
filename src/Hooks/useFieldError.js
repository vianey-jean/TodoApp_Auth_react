import { useState } from "react";

const useFieldError = () => {

	const [ error, setError ] = useState(null);

	const validateField = (value, { type, required, minLength, maxLength }) => {

		if (type && typeof value !== type) {
			setError(`La valeur doit être un ${type}`);
		} else if (required && !value) {
			setError(`Ce champ est requis`);
		} else if (minLength && value.length < minLength) {
			setError(`La valeur doit avoir au moins ${minLength} Caractères`);
		} else if (maxLength && value.length > maxLength) {
			setError(`La valeur est limitée à${maxLength} Caractères`);
		} else {
			setError(null);
		}

	};

	return {
		error,
		validateField
	};

};

export default useFieldError;