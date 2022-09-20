import * as React from 'react';
import Box from '@mui/material/Box';
import {Card} from "../Card";
import { Input } from '../Input';



export const Workspace: React.FC= () => {
  const [changeArea, setChangeArea] = React.useState(false)

  const sortRef = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      const path = (event.composedPath && event.composedPath()) //type of path clicked by mouse
      if (!path.includes(sortRef.current as HTMLDivElement)) {
        setChangeArea(false)
      }
    }
    document.body.addEventListener('click', handleOutsideClick)

    return () => {
      document.body.removeEventListener('click', handleOutsideClick)
    }
  }, [])


  return (
    <Box
      ref={sortRef}
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
        ? <Card setChangeArea={setChangeArea}
        />
        : <Input setChangeArea={setChangeArea}
        />
      }
    </Box>
  );
}
