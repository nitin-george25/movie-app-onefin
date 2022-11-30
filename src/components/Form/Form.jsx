import React from 'react';
import Input from '../Input';

const Form = ({ formInputs }) => {
	return (
		<form className='mt-4 last:mb-0'>
			{formInputs?.map((input) => (
				<Input
					type={input.type}
					placeholder={input.placeholder}
					onInputChange={input.onInputChange}
					label={input.label}
				/>
			))}
		</form>
	);
};

export default Form;
