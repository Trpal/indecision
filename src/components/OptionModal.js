import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
	<Modal
		isOpen={!!props.selectedOption}
		onRequestClose={props.handleClearSelectedOption}
		contentLabel="Selected Option"
		closeTimeoutMS={200}
	>
		<h3>Selected Option</h3>
		{ props.selectedOption && <p>{props.selectedOption}</p> }
		<button onClick={props.handleClearSelectedOption}>Roger</button>
	</Modal>
);

export default OptionModal;
