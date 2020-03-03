import React from 'react'
import { Progress } from 'semantic-ui-react'

export default function ProgressBar(props) {
	return (
		<Progress percent={props.percent} indicating />
	)
}