import type { NextPage } from 'next'
import { createContext, useContext } from 'react';
import {AppContext} from './_app'
import { Button } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

const Chess: NextPage = () => {
  const ctx = useContext(AppContext)
  //console.log('context', ctx)

  return <div>
    <div>This is chess page</div>
    </div>
}

export default Chess