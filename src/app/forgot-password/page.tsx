"use client";
import * as React from 'react';
import { CardDefault, Col, P, Row, TextFieldCustom } from '@/components';
import { theme } from '@/const/theme';

export default function ForgotPassword({ }) {

    return (
        <Col container mt={spaceXXXL} mb={spaceXXXL}>
            <Col item lg={8} xl={8} sx={{ alignSelf: 'center', minWidth: '40%' }}>
                <CardDefault
                    headerText='Alterar senha'
                    footerButtons={{
                        confirm: {
                            text: 'ENVIAR',
                            onClick: () => location.href = '/recovery-password'
                        },
                        cancel: {
                            text: 'VOLTAR',
                            onClick: () => location.href = '/login'
                        }
                    }}>

                    <P bold mt={spaceL}>DIGITE O EMAIL VINCULADO À SUA CONTA</P>
                    <Col >
                        <TextFieldCustom label="Email" />
                    </Col>

                </CardDefault>
            </Col>
        </Col >
    );
};

const { spaces: { spaceL, spaceXXXL } } = theme;

