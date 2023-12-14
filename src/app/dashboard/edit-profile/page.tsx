"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Col, FooterButtons, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';

export default function EditProfile({ }) {

    return (
        <Col container pt={spaceXXXL} p={spaceL} alignItems={'center'} >
            <Col xs={12} md={12} lg={12} xl={12} margin={'0 auto'}>
                <P fontWeight={600} fontSize={24} mb={spaceXL}>EDITAR DADOS PESSOAIS</P>
                <Card sx={{ maxWidth: 800 }}>
                    <CardContent>
                        <Row px={spaceL} container sx={{ justifyContent: 'space-between' }} spacing={2}>
                            {fields.map((field, i) => (
                                <>
                                    {field.title &&
                                        <Col xs={12} md={6} lg={6} xl={12} item>
                                            <P vTitle mt={spaceL}>{field.title}</P>
                                        </Col>}
                                    <Col xs={12} md={6} lg={6} xl={6} item>
                                        <TextFieldCustom
                                            fullWidth
                                            label={field.label}
                                            margin='none'
                                        />
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </CardContent>
                </Card>
                <FooterButtons
                    confirm={{
                        text: 'Salvar',
                        onClick: () => {
                            window.location.href = '/dashboard/profile'
                        }
                    }}
                    cancel={{
                        text: 'Cancelar'
                    }}
                />
            </Col>

        </Col>
    );
};


const { spaces: { spaceL, spaceXXXL, spaceXL } } = theme;


const fields = [
    {
        title: 'DADOS PESSOAIS',
        label: 'Nome',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Sobrenome',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'CPF',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Telefone',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Data de nascimento',
        placeholder: '',
        type: 'date',
    },
    {
        label: 'Gênero',
        placeholder: '',
        type: 'text',
    },
    {
        title: 'DADOS DE ENDEREÇAMENTO',
        label: 'País',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'CEP',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Endereço',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Número',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Complemento',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Bairro',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Cidade',
        placeholder: '',
        type: 'text',
    },
    {
        label: 'Estado',
        placeholder: '',
        type: 'text',
    },
]

