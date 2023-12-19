"use client";
import * as React from 'react';
import { CardDefault, Col, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';

export default function RecoverytPassword({ }) {

    return (
        <Col container mt={spaceXXXL} mb={spaceXXXL}>
            <Col item lg={8} xl={8} sx={{ alignSelf: 'center', minWidth: '40%' }}>
                <CardDefault
                    headerText='Alterar senha'
                    footerButtons={{
                        confirm: {
                            text: 'SALVAR',
                            onClick: () => location.href = '/login'
                        },
                    }}>

                    <P bold mt={spaceL}>DADOS DE ACESSO</P>
                    <Col>
                        <TextFieldCustom label="Email" />
                    </Col>

                    <Row container  sx={{ justifyContent: 'space-between' }}>
                        <Col xl={6} item>
                            <TextFieldCustom label="Nova Senha" />
                        </Col>
                        <Col xl={5} item>
                            <TextFieldCustom label="Confirme a nova senha" />
                        </Col>
                    </Row>

                </CardDefault>
            </Col>
        </Col >
    );
};

const { spaces: { spaceL, spaceXXXL } } = theme;

