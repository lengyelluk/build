import MaskedInput from 'react-text-mask'
import React from 'react'

import createNumberMask from 'text-mask-addons/dist/createNumberMask'

export default function PriceInput({ ...props }) {
	const defaultMaskOptions = {
		prefix: '',
		suffix: ' €',
		includeThousandsSeparator: true,
		thousandsSeparatorSymbol: ' ',
		allowDecimal: false,
		decimalSymbol: ',',
		decimalLimit: 2,
		integerLimit: 7,
		allowNegative: false,
		allowLeadingZeroes: false,
	}

	const priceMask = createNumberMask(defaultMaskOptions)

	return (
		<MaskedInput
			mask={priceMask}
			{...props}
		/>
	)
}