import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import { Router } from 'next/navigation';
const MaterialUISwitch = styled(Switch)(({ theme }) => ({}));

export default function CustomizedSwitches() {
	const [isActive, setIsActive] = useState(false);

	const handleSwitchToggle = () => {
		setIsActive((prevState) => !prevState);
		if (!isActive) {
			//		document.body.classList.add('theme-alternative');
			document.body.classList.add('page-out');
		} else {
			document.body.classList.remove('page-out');
			//		document.body.classList.remove('theme-alternative');
		}
	};

	return (
		<>
			<div className="toggler absolute z-50 pl-4">
				<FormGroup>
					<FormControlLabel control={<MaterialUISwitch checked={isActive} onChange={handleSwitchToggle} sx={{ m: 1 }} />} />
					<div className={isActive ? 'active' : ''}></div>
				</FormGroup>
			</div>
		</>
	);
}
