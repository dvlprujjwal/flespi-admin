import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Tooltip } from '@material-ui/core';
import Brightness6OutlinedIcon from '@mui/icons-material/Brightness6Outlined';
import Brightness6Icon from '@mui/icons-material/Brightness6';
import * as actionTypes from '../../../store/actions';

const Customization = () => {
  const customization = useSelector((state) => state.customization);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(customization.navType === 'light');

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    dispatch({ type: actionTypes.MENU_TYPE, navType: open ? 'light' : 'dark' });
  }, [dispatch, open]);

  return (
    <Tooltip title={open ? 'Dark Layout' : 'Light Layout'}>
      <Button onClick={handleToggle} color="inherit">
        {!open && <Brightness6Icon fontSize="medium" />}
        {open && <Brightness6OutlinedIcon fontSize="medium" />}
      </Button>
    </Tooltip>
  );
};

export default Customization;
