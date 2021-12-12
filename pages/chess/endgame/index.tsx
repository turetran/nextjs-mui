import type { NextPage } from 'next'
import Link from 'next/link'
import MuiLink from '@mui/material/Link';
import { Box, Button, Typography } from '@mui/material';
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
    endGame: "Tàn cuộc",
    beginner: "Người mới",
    levels: "Các cấp độ",
    classE: "Lớp E",
    classD: "Lớp D",
  },
  en: {
    home: "Home",
    chess: "Chess",
    endGame: "End Game",
    beginner: "Beginner",
    levels: "Levels",
    classE: "Class E",
    classD: "Class D",
  }
}

const EndGame: NextPage = () => {
  const { locale } = useRouter()
  const _lc = locale || 'vn'
  return <Box display={'flex'}
    justifyContent={"center"}
    alignItems={"center"}
    style={{ border: "0px solid red", marginTop: 5 }}
  >
    <Box>

      <Breadcrumbs aria-label="breadcrumb">
        <Link href='/'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].home}</MuiLink></Link>
        <Link href='/chess'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].chess}</MuiLink></Link>
        <Link href='/chess/endgame'><MuiLink underline='hover' style={{ cursor: "pointer" }}>{texti18n[_lc].endGame}</MuiLink></Link>
      </Breadcrumbs>
      <div style={{ display: 'flex', justifyContent: "center", alignItems: "center", border: "0px solid red", marginTop: 15 }}>
        <Typography variant='h3'>
        {texti18n[_lc].levels}
        </Typography>
      </div>
      <div style={{ marginTop: 10 }}>
        <Link href='/chess/endgame/beginner'>
          <a>
            <MuiLink variant='h3' underline='hover'>
              {texti18n[_lc].beginner}
            </MuiLink>
          </a>
        </Link>
      </div>
      <div style={{ marginTop: 10 }}>
        <Link href='/chess/endgame/'>
          <a>
            <MuiLink variant='h3' underline='hover'>
              {texti18n[_lc].classE}
            </MuiLink>
          </a>
        </Link>
      </div>
      <div style={{ marginTop: 10 }}>
        <Link href='/chess/endgame/'>
          <a>
            <MuiLink variant='h3' underline='hover'>
              {texti18n[_lc].classD}
            </MuiLink>
          </a>
        </Link>
      </div>
    </Box>
  </Box>
}

export default EndGame
