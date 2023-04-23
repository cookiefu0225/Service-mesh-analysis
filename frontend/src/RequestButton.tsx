import React, { useState } from 'react';
import { Button, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import axios from 'axios';

const RequestButton: React.FC = () => {
	const [size, setSize] = useState<SizeType>('large'); // default is 'middle'
	const url = 'https://api.coingecko.com/api/v3/ping'; // destination of request

	// send request when button is clicked
	const send = () => {
		// Send request to backend
		console.log("Clicked, see the request result");

		// Test response
		const requestFreq = 10;
		for (let i = 0; i < requestFreq; i++) {
			getRequest();
		}
	};

	const getRequest = () => {
		axios.get(url).then(response => {
			console.log(response.data);
		});
	}

	return (
		<Space direction="vertical">
			<Space wrap>
				<Button type="primary" shape="round" size={size} onClick={send}>
					Send Request
				</Button>
			</Space>
		</Space>
	);
};

export default RequestButton;