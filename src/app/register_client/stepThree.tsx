"use client";
import * as React from 'react';
import { CardDefault, Col, P, Row, SelectInput, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';
import { StepsRounded } from '@/components/steps/StepsRounded';
import { Checkbox, Divider, FormControlLabel } from '@mui/material';

export default function RegisterStepThree({ nextStep }: { nextStep: React.Dispatch<React.SetStateAction<number>> }) {

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

            <Col><StepsRounded step={3} /></Col>

            <P bold mt={spaceXXXL}>DADOS EMPRESARIAIS</P>
            <Row container spacing={spaceL}>
                {fieldsDados.map((field, i) => (
                    <Col key={'tkF' + i} lg={field.size} xl={field.size} item>
                        <TextFieldCustom
                            labelAdornment={field.labelAdornment}
                            type={field.type} />
                    </Col>
                ))}
            </Row>

            <Divider sx={{ my: spaceXL }} />

            <Col px={spaceL}>
                <Row sx={{ justifyContent: 'space-between', mb: spaceL }}>
                    <P>Eu autorizo lorem ipsum dolor sit amet consectuer amad it</P>
                    <SelectInput label={'Selecione'} />
                </Row>

                <FormControlLabel required control={<Checkbox />} label="Eu autorizo lorem ipsum dolor sit amet consectuer amad it" />
            </Col>
        </CardDefault>
    );
};

const { spaces: { spaceL, spaceXL, spaceXXXL } } = theme;


const fieldsDados = [
    {
        labelAdornment: 'E-mail',
        placeholder: '',
        type: 'text',
        size: 12
    },
    {
        labelAdornment: 'Confirme seu e-mail',
        placeholder: '',
        type: 'text',
        size: 12
    },
    {
        labelAdornment: 'Crie uma senha',
        placeholder: '',
        type: 'text',
        size: 6
    },
    {
        labelAdornment: 'Confirme sua senha',
        placeholder: '',
        type: 'text',
        size: 6
    },
]
