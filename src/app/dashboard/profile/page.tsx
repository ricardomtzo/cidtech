"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { Avatar, Box, InputAdornment } from '@mui/material';
import TextField from '@mui/material/TextField';

import { Col, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import logo from '../../../assets/images/logo.png'

export default function Login({ }) {


    return (
        <Row container pt={20}>
            <Col xs={12} md={2} lg={2} xl={2}>
                <Col style={{ position: 'absolute', top: 190, left: '28%' }}>
                    <P variant="h6" vTitle mb={spaceL}>Meus dados</P>
                    <Avatar alt="Remy Sharp" src={logo.src} sx={{ width: 150, height: 150 }} />
                    <Col mt={spaceL}>
                        <Button variant="outlined">EDITAR FOTO</Button>
                    </Col>
                </Col>

            </Col>

            <Col xs={12} md={5} lg={5} xl={5} margin={'0 auto'}>
                <Card>
                    <CardContent>
                        <Col px={spaceL}>
                            {fields.map((field, i) => (
                                <Col>
                                    {field?.title && <P variant="h6" vTitle mt={spaceXL}>{field.title}</P>}
                                   <TextFieldCustom {...field} />
                                </Col>
                            ))}

                        </Col>
                    </CardContent>
                </Card>
                <Col marginY={2} mb={12} width={150} alignSelf={'flex-end'}>
                    <Button 
                    variant="outlined"
                    onClick={() => {
                        window.location.href = '/dashboard/edit-profile'
                    }}
                    >EDITAR DADOS</Button>
                </Col>
            </Col>

        </Row>
    );
};


const { spaces: { spaceS, spaceM, spaceL, spaceXL, spaceXXXL } } = theme;


const fields = [
    {
        title: 'DADOS PESSOAIS',
        labelAdornment: 'Nome completo',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'CPF',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Telefone',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Data de nascimento',
        placeholder: '',
        type: 'date',
    },
    {
        labelAdornment: 'Gênero',
        placeholder: '',
        type: 'text',
    },
    {
        title: 'DADOS DE ENDEREÇAMENTO',
        labelAdornment: 'País',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'CEP',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Endereço',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Complemento',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Bairro',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Cidade',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Estado',
        placeholder: '',
        type: 'text',
    },
]

