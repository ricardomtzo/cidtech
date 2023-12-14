"use client";
import * as React from 'react';

import { Col, P, TablePurchses } from '@/components';
import { theme } from '@/const/theme';

export default function Purchses({ }) {

    return (
        <Col container py={spaceXXXL} sx={{ alignItems: 'center' }}>
            <Col>
                <P fontWeight={600} fontSize={24} mb={spaceXL}>Meus pedidos</P>
                <TablePurchses headers={headers} items={items} />
            </Col>
        </Col>
    );
};


const { spaces: { spaceL, spaceXXXL, spaceXL } } = theme;

const headers = [
    'Data',
    'Pedido N.º',
    'Valor',
    'Pagamento',
    'Status',
    '',
    ''
]

const items = [
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
    {
        date: '10/10/2022',
        pedido: '#220830',
        price: 'R$ 1.000,00',
        paymentType: 'Boleto',
        status: 'Pago',
        view: '',
        delete: ''
    },
]

