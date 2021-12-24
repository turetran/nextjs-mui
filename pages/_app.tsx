import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { red, green} from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/router'
import { Drawer, Menu, MenuItem } from '@mui/material'
import Link from 'next/link'
import { createContext, useEffect, useState } from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Divider from '@mui/material/Divider';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewComfyIcon from '@mui/icons-material/ViewComfy';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import BatteryUnknownIcon from '@mui/icons-material/BatteryUnknown';
import LanguageIcon from '@mui/icons-material/Language';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {texti18n} from '../utils/i18nCommon'
import { styled } from '@mui/material/styles';

export const Main = styled('div')({
  maxWidth: 720,
  marginTop: 25,
  margin: 'auto',
})

export const CenterBox = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 25,
})

export const AppContext = createContext({
  menuShow: true,
  setShow: () => { }
});

const mytheme = createTheme({
  palette: {
    primary: {
      light: red[500],
      main: green[500],
      dark: green[300]
    },
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const [val, setVal] = useState(true)
  const router = useRouter()

  const handleClose = (code:string) => {
    if (code)
      router.push('#','#',{locale: code})
    setAnchorEl(null);
  };

  //console.log('route', router.locale)
  const { locale } = router;
  
  const _lc:string = locale || 'vn'

  return <AppContext.Provider value={{ menuShow: val, setShow: () => { setVal(!val) } }}>
    <ThemeProvider theme={mytheme}>
      <CssBaseline />
      <Drawer
        variant="persistent"
        anchor="left"
        open={val}
        style={{ display: 'flex' }}
      >
        <Link href='#'>
          <a>
            <div style={{ textAlign: 'right' }}>
              <IconButton onClick={() => setVal(false)}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
          </a>
        </Link>
        <Divider />
        <Link href='/'>
          <a>
            <div style={{ display: "flex", alignItems: "center", marginTop: 5, marginBottom: 5 }}>
              <DashboardIcon />
              <Typography variant="h6" noWrap component="div" style={{ marginLeft: 5 }}>{texti18n[_lc].dashboard}</Typography>
            </div>
          </a>
        </Link>
        <Divider />
        <Link href='/chess'>
          <a>
            <div style={{ width: '160px', alignItems: "center", display: "flex" }}>
              <ViewComfyIcon />
              <Typography variant="h6" noWrap component="div" style={{ marginLeft: 5 }}>{texti18n[_lc].chess}</Typography>
            </div>
          </a>
        </Link>
        <Link href='/chess/endgame'>
          <a>
            <div style={{ marginLeft: 6, alignItems: "center", display: "flex" }}>
              <PrecisionManufacturingIcon />
              <Typography variant="h6" noWrap component="div" style={{ marginLeft: 5 }}>{texti18n[_lc].endgame}</Typography>
            </div>
          </a>
        </Link>
        <Link href='/chess/endgame/beginner'>
          <a>
            <div style={{ marginLeft: 30, alignItems: "center", display: "flex" }}>
              <BatteryUnknownIcon />
              <Typography variant="h6" noWrap component="div">{texti18n[_lc].beginner}</Typography>
            </div>
          </a>
        </Link>
      </Drawer>
      <div style={{ marginLeft: (val ? 160 : 0), display: 'flex', alignItems: "center" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={{ display: (val ? 'none' : 'inline'), marginLeft: 0, marginTop: 4 }}
              onClick={() => setVal(!val)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>{texti18n[_lc].mainTitle}</Typography>
            <div style={{ flexGrow: 1, textAlign: 'right' }}>
              <span>
                <IconButton
                  onClick={handleClick}
                  >
                  <LanguageIcon />
                  <Typography>{texti18n[_lc].language}</Typography>
                  <KeyboardArrowDownIcon />
                </IconButton>
              </span>
              <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={(e) => handleClose('')}
                MenuListProps={{
                  'aria-labelledby': 'basic-button',
                }}
                PaperProps={{  
                  style: {  
                    width: 150,  
                    marginLeft: 20,
                  },  
               }} 
              >
                <MenuItem onClick={(e) => handleClose('vn')}><Typography>Tiếng Việt</Typography></MenuItem>
                <MenuItem onClick={(e) => handleClose('en')}><Typography>English</Typography></MenuItem>
              </Menu>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ marginLeft: (val ? 170 : 10) }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </AppContext.Provider>
}
export default MyApp

