"use client";
import { createTheme, ThemeProvider, } from '@mui/material/styles';
import { theme as themeConstants } from '@/const/theme';

import { Container } from '@/components/'
import { DesktopFooter } from '@/components/'
import { DesktopHeader } from '@/components/'
import { Inter } from 'next/font/google'
import logo from '../../assets/images/logo_invertida.png'
import '../globals.css'


const theme = createTheme({
  palette: {
    primary: themeConstants.palette.primary,
    secondary: themeConstants.palette.secondary,
  },
});

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <DesktopHeader logo={logo.src} />
        <div className={inter.className}>{children}</div>
        <DesktopFooter logo={logo.src} />
      </Container>
    </ThemeProvider>
  )
}