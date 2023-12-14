import React from 'react';
import { Table, TableBody, TableRow, TableCell, TableFooter } from '@mui/material';
import { P, Row } from '..';
import { ButtonAddRemove } from '../buttons';
import { theme } from '@/const/theme';



export function TicketTable() {
    return (
        <Table>
            {/*<TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell key={column.id}>
                {column.label === 'ID' ? <AirplaneTicket /> : <TableSortLabel>{column.label}</TableSortLabel>}
              </TableCell>
            ))}
          </TableRow>
            </TableHead>*/}
            <TableBody>
                {tickets.map((ticket: any) => (
                    <TableRow key={ticket.id}>
                        {columns.map((column) => (
                            <TableCell key={column.id}>
                                {column.id === 'add' ? <AddTicketButtons /> : null}
                                <P variant='h6'>
                                    {ticket[column.id]}
                                    {column.id === 'title' && <P variant='body2' color={'grey'}>Detalhes da opção nibh id duis</P>}
                                </P>
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
            <TableFooter>
                <TableRow>
                    <TableCell colSpan={1}>
                    </TableCell>
                    <TableCell colSpan={1}>
                        <P variant='body2' center color={'grey'}>Subtotal</P>
                        <P variant='h6' center bold>Total</P>
                    </TableCell>
                    <TableCell colSpan={1}>
                        <P center variant='body2' color={'grey'}>R$ 0,00</P>
                        <P center variant='h6' bold>R$ 0,00</P>
                    </TableCell>
                </TableRow>
            </TableFooter>
        </Table>
    );
}

const AddTicketButtons = () => {
    return (
        <Row container>
            <ButtonAddRemove action="remove" />
            <P mr={spaceL} variant='h6'>0</P>
            <ButtonAddRemove action="add" />
        </Row>

    )
}

const tickets: any = [
    {
        id: 1,
        title: 'Título do ingresso dolor sit',
        subTitle: 'Detalhes da opção nibh id duis',
        description: 'R$ 1600,00',
        add: '',
    },
    {
        id: 2,
        title: 'Título do ingresso dolor sit',
        subTitle: 'Detalhes da opção nibh id duis',
        description: 'R$ 1600,00',
        add: '',
    },
    {
        id: 2,
        title: 'Título do ingresso dolor sit',
        subTitle: 'Detalhes da opção nibh id duis',
        description: 'R$ 1600,00',
        add: '',
    },
    {
        id: 2,
        title: 'Título do ingresso dolor sit',
        subTitle: 'Detalhes da opção nibh id duis',
        description: 'R$ 1600,00',
        add: '',
    },
    // ... other tickets
];

const columns = [
    { id: 'title', label: 'Title' },
    { id: 'description', label: 'Description' },
    { id: 'add', label: 'Priority' },
];

const { spaces: { spaceL }, palette: { secondary } } = theme;
