"use client";
import * as React from 'react';
import { CardDefault, Col, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { StepsRounded } from '@/components/steps/StepsRounded';

export default function RegisterStepTwo({ nextStep }: { nextStep: React.Dispatch<React.SetStateAction<number>> }) {

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

            <Col><StepsRounded step={2} /></Col>

            <P bold mt={spaceXXXL}>DADOS EMPRESARIAIS</P>
            <Row container spacing={spaceL}>
                {fieldsDados.map((field, i) => (
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
        labelAdornment: 'CNPJ',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Razão social',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Nome fantasia',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Site',
        placeholder: '',
        type: 'text',
    },
    {
        labelAdornment: 'Cargos',
        placeholder: '',
        type: 'select',
    },
    {
        labelAdornment: 'Área',
        placeholder: '',
        type: 'select',
    },
]
