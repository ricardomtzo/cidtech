"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Col, FooterButtons, P } from '@/components';
import { theme } from '@/const/theme';
import { Paper } from '@mui/material';
Paper

export function CardDefault(props: any) {

    const { children, title, footerButtons, cardWidth } = props

    return (
        <Col>
            {title && <P fontWeight={600} fontSize={24} mb={spaceXL}>{title}</P>}
            <Paper>
                <Col p={spaceL}>
                    {children}
                </Col>
            </Paper>
            {footerButtons &&
                <FooterButtons
                    {...footerButtons}
                />}
        </Col>
    );
};

const { spaces: { spaceL, spaceXXXL, spaceXL } } = theme;


