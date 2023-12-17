"use client";
import * as React from 'react';
import { CardDefault, Col, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { StepsRounded } from '@/components/steps/StepsRounded';

export default function RegisterStepOne({nextStep }: { nextStep: React.Dispatch<React.SetStateAction<number>> }) {

    return (
        <CardDefault
            headerText='Para um novo cadastro, preencha seus dados abaixo:'
            footerButtons={{
                confirm: {
                    text: 'AVANÇAR',
                    onClick: () => nextStep(steps => steps + 1)
                },
                cancel: {
                    text: 'VOLTAR',
                    onClick: () => nextStep(steps => steps - 1)
                }
            }}>

            <Col><StepsRounded step={1} /></Col>

            <P bold mt={spaceXXXL}>SEUS DADOS</P>
            <Row container spacing={spaceL}>
                {fieldsDados.map((field, i) => (
                    <Col key={'tkF' + i} lg={6} xl={6} item>
                        <TextFieldCustom {...field} />
                    </Col>
                ))}
            </Row>

            <P bold mt={spaceXXL}>SEU ENDEREÇO</P>
            <Row container spacing={spaceL}>
                {fieldsEndereco.map((field, i) => (
                    <Col key={'tkF' + i} lg={6} xl={6} item>
                        <TextFieldCustom {...field} />
                    </Col>
                ))}
            </Row>
        </CardDefault>
    );
};

const { spaces: { spaceL, spaceXXL, spaceXXXL } } = theme;


const fieldsDados = [
    {
        labelAdornment: 'Nome *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Sobrenome *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'CPF *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Telefone *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Data de nascimento *',
        placeholder: '',
        type: 'date',
    },
    {
        labelAdornment: 'Gênero *',
        placeholder: '',
        type: 'text',
    },
]

const fieldsEndereco = [
    {
        labelAdornment: 'País *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'CEP *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Endereço *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Número *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Complemento *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Bairro *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Cidade *',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Estado *',
        placeholder: '',
        type: 'select',
    },
]