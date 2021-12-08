import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { red, green, purple, yellow } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useRouter } from 'next/router'
import { Drawer } from '@mui/material'
import Link from 'next/link'
import { createContext, useContext, useState } from 'react';
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
  const [val, setVal] = useState(true)
  const router = useRouter()
  //console.log('route', router.asPath)

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
              <Typography variant="h6" noWrap component="div" style={{ marginLeft: 5 }}>Dashboard</Typography>
            </div>
          </a>
        </Link>
        <Divider />
        <Link href='/chess'>
          <a>
            <div style={{ width: '160px', alignItems: "center", display: "flex" }}>
              <ViewComfyIcon />
              <Typography variant="h6" noWrap component="div" style={{ marginLeft: 5 }}>Cờ Vua</Typography>
            </div>
          </a>
        </Link>
        <Link href='/endgame'>
          <a>
            <div style={{marginLeft : 6, alignItems: "center", display: "flex" }}>
              <PrecisionManufacturingIcon />
              <Typography variant="h6" noWrap component="div" style={{ marginLeft: 5 }}>Tàn cuộc</Typography>
            </div>
          </a>
        </Link>
        <Link href='/endgame/beginner'>
          <a>
            <div style={{marginLeft : 30, alignItems: "center", display: "flex" }}>
              <BatteryUnknownIcon/>
              <Typography variant="h6" noWrap component="div">Beginner</Typography>
            </div>
          </a>
        </Link>
      </Drawer>
      <div style={{ marginLeft: (val ? 150 : 0), display: 'flex', alignItems: "center" }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton style={{ display: (val ? 'none' : 'inline'), marginLeft: 0, marginTop: 4 }}
              onClick={() => setVal(!val)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>Document</Typography>
            <div style={{ flexGrow: 1, textAlign: 'right' }}>
              <IconButton>
                <SearchIcon />
              </IconButton>
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
      <div style={{ marginLeft: (val ? 160 : 10) }}>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  </AppContext.Provider>
}
export default MyApp

