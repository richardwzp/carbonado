import PeopleIcon from '@mui/icons-material/People';
import ImageIcon from '@mui/icons-material/Image';
import PublicIcon from '@mui/icons-material/Public';
import SettingEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

import DnsIcon from '@mui/icons-material/Dns';

export const mainNavBarItems = [
    {
	id: 1,
	icon: <PeopleIcon />, 
	label: 'Authentication',
	route: 'authentication'
    },
    {
	id: 2,
	icon: <DnsIcon />,
	label: 'Database',
	route: 'database'
    },
    {
	id: 3,
	icon: <ImageIcon />,
	label: 'Storage',
	route: 'storage'
    },
    {
	id: 4,
	icon: <PublicIcon />,
	label: 'Hosting',
	route: 'hosting'
    },
    {
	id: 5,
	icon: <SettingEthernetIcon />,
	label: 'Functions',
	route: 'functions'
    },
    {
	id: 6,
	icon: <SettingsInputComponentIcon />, 
	label: 'Machine learning',
	route: 'machineLearning'
    }

];
