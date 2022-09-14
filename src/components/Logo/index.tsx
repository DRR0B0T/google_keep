import Link from "@mui/material/Link";
import * as React from "react";

export const Logo = <Link
    href="#"
    color="#5F658A"
    underline="none"
    fontSize={22}
    variant={'h2'}
    sx={{
      display: 'flex',
      alignItems: 'center'
    }}
><img
    style={{
      width: 40,
      height: 40
    }}
    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="icon"/>
  <span
      style={{
        color: '#5f6368',
        fontSize: 22,
        fontWeight: 400,
        marginLeft: 5
      }}
  >Keep</span>
</Link>