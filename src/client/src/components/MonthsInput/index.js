import MaskedInput from 'react-text-mask'
import React from 'react'

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export default function MonthsInput({ ...props }) {
	const defaultMaskOptions = {
		prefix: '',
		suffix: ' months',
		includeThousandsSeparator: false,
		thousandsSeparatorSymbol: ' ',
		allowDecimal: false,
		decimalSymbol: ',',
		decimalLimit: 2,
		integerLimit: 7,
		allowNegative: false,
		allowLeadingZeroes: false,
	}

	const monthsMask = createNumberMask(defaultMaskOptions)

	return (
		<MaskedInput
			mask={monthsMask}
			{...props}
		/>
	)
}