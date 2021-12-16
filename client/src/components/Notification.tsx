// This component Should be used for both successful and failure notifications
// The parent component should pass status, title and subTitle based on the values 
// recognized by antd, using history.push, so the location props is available

import { Result } from 'antd';
import { useLocation } from 'react-router-dom';

const Notification = () => {

	const location: any = useLocation()

	console.log(location.state)
	return (
		<div>
			<Result status={location.state.status} title={location.state.title} subTitle={location.state.subTitle} />;
		</div>
	);
};

export default Notification;
