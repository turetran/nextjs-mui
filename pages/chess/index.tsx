import type { NextPage } from 'next'
import { createContext, useContext } from 'react';
import { AppContext } from '../_app'
import { Box, Button, Typography } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link'
import MuiLink from '@mui/material/Link';
import { useRouter } from 'next/router';
import Breadcrumbs from '@mui/material/Breadcrumbs';

type FieldIf = {
  [key: string]: string
}

type Texti18nIf = {
  [key: string]: FieldIf
}

const texti18n: Texti18nIf = {
  vn: {
    home: "Trang chủ",
    chess: "Cờ vua",
    endGame: "Cờ tàn",
  },
  en: {
    home: "Home",
    chess: "Chess",
    endGame: "End Game",
  }
}

const Chess: NextPage = () => {
  const { locale } = useRouter()
  const _lc = locale || 'vn'

  return <Box display={'flex'}
    justifyContent={"center"}
    alignItems={"center"}
    style={{ marginTop: 5 }}
  >
    <Box
      maxWidth={720}
      style={{ border: "0px solid blue", marginRight: 5 }}
      >
      <div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link href='/'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].home}</MuiLink></Link>
          <Link href='/chess'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].chess}</MuiLink></Link>
        </Breadcrumbs>
      </div>
      <Link href='/chess/endgame'><a><MuiLink variant='h3' underline='hover'>{texti18n[_lc].endGame}</MuiLink></a></Link>
    </Box>
  </Box>
}

export default Chess