import React, { useState } from 'react';
import { Button, Space } from 'antd';
import type { SizeType } from 'antd/es/config-provider/SizeContext';

const RequestButton: React.FC = () => {
  const [size, setSize] = useState<SizeType>('large'); // default is 'middle'

	const send = () => {
		// Send request to backend
		console.log("Clicked")
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