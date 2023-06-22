import React from 'react';
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

const RootDiv = styled('div')({
  width: '100%',
  '& > * + *': {
    marginTop: (theme) => theme.spacing(2),
  },
});

const Loader = () => {
  return (
    <RootDiv>
      <LinearProgress color="secondary" />
    </RootDiv>
  );
};

export default Loader;
