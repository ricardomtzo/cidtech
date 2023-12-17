"use client";
import * as React from 'react';

import { CardDefault, Col, Divider, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { Button } from '@mui/material';


export default function PurchsesResume({ nextStep }: { nextStep: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <Row container spacing={spaceL} xl={8} sx={{ alignItems: 'flex-start' }} item>
            <Col xs={12} md={6} lg={8} xl={8} item>
                <CardDefault>
                    {fields.map((field, i) => (
                        <Col>
                            {field?.title && <P bold mt={spaceXL}>{field.title}</P>}
                            <TextFieldCustom {...field} />
                        </Col>
                    ))}
                </CardDefault>

                <Col>
                    <TicketsList />
                </Col>

            </Col>

            <Col xs={12} md={4} lg={4} xl={4} item>
                <CardDefault>
                    <P fontWeight={600} fontSize={20} >Faturamento</P>
                    <P fontSize={14}>Forma de pagamento: Cartão de crédito final 0892</P>
                    <Divider />
                    {paymentTaxs.map((field, i) => (
                        <Row container my={spaceM} sx={{ justifyContent: 'space-between' }}>
                            <P>{field.title}</P>
                            <P>{field.value}</P>
                        </Row>
                    ))}
                    <Divider />

                    <Row container mt={spaceM} sx={{ justifyContent: 'flex-end' }}>
                        <Col mr={7} item>
                            <P size='medium' color={'grey'}>Subtotal</P>
                            <P bold size={'xlarge'}>Total</P>
                        </Col>
                        <Col item>
                            <P size='medium' textAlign={'right'} color={'grey'}>R$ 4.200,00</P>
                            <P bold size={'xlarge'}>R$ 4.208,23</P>
                        </Col>
                    </Row>
                    <Button
                        variant="contained"
                        sx={{ width: '100%', mt: spaceL }}
                        onClick={() => nextStep((nextStep: number) => nextStep + 1)}>EFETUAR PAGAMENTO</Button>
                    
                    <P bold color='#2196F3' size='small' center mt={spaceL} onClick={() => nextStep((nextStep: number) => nextStep - 1)} >VOLTAR</P>

                </CardDefault>
            </Col>

        </Row>
    );
};

const TicketsList = () => {

    return (
        <Col mt={spaceL}>
            <CardDefault>
                <P bold>INSCRITOS</P>
                {tickets.map((field, i) => (
                    <Col>
                        {field?.title && <P mt={spaceL} bold size='small'>{field.title}</P>}
                        {field?.subtitle && <P size='small' color={'grey'}>{field.subtitle}</P>}
                        <Divider />
                        {field.data.map((input, i) => (
                            <TextFieldCustom {...input} />
                        ))}
                    </Col>
                ))}
            </CardDefault>
        </Col>
    )
}

const { spaces: { spaceM, spaceS, spaceL, spaceXXL, spaceXXXL, spaceXL } } = theme;

const fields = [
    {
        title: 'RESPONSÁVEL  PELA INSCRIÇÃO',
        labelAdornment: 'Nome completo',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Empresa',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Email',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Endereço',
        placeholder: '',
        type: 'text',
        noBorder: true
    },
]

const tickets = [
    {
        title: 'Ingresso 1',
        subtitle: 'Título do ingresso lorem ipsum dolor',
        data: [
            {
                labelAdornment: 'Nome',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Empresa',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Email',
                placeholder: '',
                type: 'text',
            },

        ]
    },
    {
        title: 'Ingresso 3',
        subtitle: 'Título do ingresso lorem ipsum dolor',
        data: [
            {
                labelAdornment: 'Nome',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Empresa',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Email',
                placeholder: '',
                type: 'text',
            },

        ]
    },
    {
        title: 'Ingresso 3',
        subtitle: 'Título do ingresso lorem ipsum dolor',
        data: [
            {
                labelAdornment: 'Nome',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Empresa',
                placeholder: '',
                type: 'text',
            },
            {
                labelAdornment: 'Email',
                placeholder: '',
                type: 'text',
            },

        ]
    },

]

const paymentTaxs = [
    {
        title: 'ISS',
        value: 'R$ 0,32',
    },
    {
        title: 'IR',
        value: 'R$ 4,51',
    },
    {
        title: 'PIS',
        value: 'R$ 2,17',
    },
    {
        title: 'Cofis',
        value: 'R$ 0,32',
    },
    {
        title: 'CSLL',
        value: 'R$ 0,32',
    },
]
