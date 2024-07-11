import { IconButton } from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';

const SettingsDropdown = () => {
  return (
    <IconButton sx={{ bgcolor: 'background.paper' }}>
      <IconifyIcon
        icon="lucide:settings"
        color="text.secondary"
        sx={{ width: { md: 18, xl: 25 }, height: { md: 18, xl: 25 } }}
      />
    </IconButton>
  );
};

export default SettingsDropdown;
