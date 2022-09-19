import * as React from 'react';
import Box from '@mui/material/Box';
import {Card} from "../Card";
import { Input } from '../Input';
import AppContext from '../../App'


export const Workspace: React.FC= () => {
  const {changeArea}:{changeArea:boolean} = React.useContext(AppContext)

  return (
    <Box
      component="form"
      sx={{
        m: '16px auto 32px auto',
        p: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 600,
      }}
    >
      {changeArea
        ? <Card/>
        : <Input/>
      }
    </Box>
  );
}
