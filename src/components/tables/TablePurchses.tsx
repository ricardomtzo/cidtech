import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { P } from '..';
import { theme } from '@/const/theme';

type TablePurchsesProps = {
    headers: string[],
    items?: any[],
}


export function TablePurchses(props: TablePurchsesProps) {
    const { headers, items } = props;
  return (
    <TableContainer sx={{ minWidth: 650, width: 850, maxWidth: 1200, padding: 2 }} component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            {headers.map((header) => (
              <TableCell style={{fontWeight: 600 }} key={header}>{header}</TableCell>
            ))}
            {/*<TableCell align="right">Calories</TableCell>*/}
          </TableRow>
        </TableHead>
        <TableBody>
          {items?.map((row) => (
            <TableRow
              key={row.pedido}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.date}
              </TableCell>
              <TableCell >{row.pedido}</TableCell>
              <TableCell >{row.price}</TableCell>
              <TableCell >{row.paymentType}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell><a href='#'><P fontSize={14} color={theme.palette.primary.main}>Visualizar</P></a></TableCell>
              <TableCell><a href='#'><P fontSize={14} color={theme.palette.primary.main}>Excluir</P></a></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}