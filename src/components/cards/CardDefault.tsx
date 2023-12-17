"use client";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Col, FooterButtons, P } from '@/components';
import { theme } from '@/const/theme';
import { GridProps, Paper, PaperProps } from '@mui/material';

export function CardDefault(props: FooterButtonsProps) {

    const { children, title, footerButtons, containerProps, paperProps, headerText } = props

    return (
        <Col {...containerProps}>
            {title && <P bold size='large' mb={spaceXL}>{title}</P>}
            <Paper sx={{ boxShadow: '0px 0px 15px 0px rgba(0, 0, 0, 0.05);' }} {...paperProps}>
                {headerText && <HeaderPaper text={headerText} />}
                <Col p={spaceXL}>
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

const HeaderPaper = ({text}: any) => {

    return (
        <Col
            height={150}
            width={'100%'}
            alignItems={'center'}
            justifyContent={'center'}
            style={{ backgroundColor: theme.palette.primary.default, height: 84, borderTopLeftRadius: 4, borderTopRightRadius: 4 }} >
            <P color='white' size='large' center>{text}</P>
        </Col>
    )
}

const { spaces: { spaceL, spaceXXXL, spaceXL } } = theme;

type FooterButtonsProps = {
    children?: React.ReactNode
    headerText?: string
    title?: string
    footerButtons?: any
    containerProps?: GridProps
    paperProps?: PaperProps
}
