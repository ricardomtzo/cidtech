"use client";
import * as React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

import { AlertDefault, CardDefault, Col, HeaderEvent, P } from '@/components';
import { theme } from '@/const/theme';
import logo from '../../assets/images/bg_card.png'
import RegisterStepOne from './stepOne';
import RegisterStepTwo from './stepTwo';
import RegisterStepThree from './stepThree';


export default function Register({ }) {

    const [steps, setSteps] = React.useState(0)

    return (
        <Col container>
            {steps === 0 && <AlertDefault
                top
                severity="info"
                title='Parece que você nunca comprou conosco'
                subtitle='Já realizou compra conosco? Tente outro E-mail' />}

            {steps === 0 &&
                <Col
                    item
                    xs={12} md={6} lg={6} xl={6}
                    sx={{ alignSelf: 'center' }} >
                    <EventImage src={logo.src} alt="logo" />

                    <Col p={spaceL}>
                        <HeaderEvent
                            title="Bienal do livro 2023"
                            day="9 ago 2023 a 11 ago 2023"
                            location="Rio de Janeiro - RJ" />
                    </Col>

                    <CardDefault
                        footerButtons={{
                            confirm: {
                                text: 'AVANÇAR',
                                onClick: () => setSteps(steps => steps + 1),
                            }
                        }}>
                        <Col p={spaceL} height={600} style={{ overflow: 'auto' }}>
                            <P bold>TERMOS DE USO</P>

                            <P mt={spaceXL}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae tincidunt mauris, nec maximus nunc. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam felis mauris, blandit quis enim quis, aliquet porttitor arcu. Nam hendrerit tincidunt lobortis. Nam sed nisi vestibulum, pharetra justo ac, blandit massa. Suspendisse ut nulla vehicula, blandit enim vel, laoreet arcu. Duis tellus nisl, lacinia id nibh nec, elementum bibendum metus. Integer faucibus ante non ultricies iaculis. Nulla tincidunt magna sapien, sit amet semper dolor hendrerit eu. Etiam dui ante, tempor eget pharetra ac, vehicula non nulla. Vestibulum ullamcorper erat a tortor egestas, ut pulvinar lorem pharetra. Nam mauris dolor, commodo et tincidunt ac, scelerisque quis quam. Vestibulum lacinia elementum luctus. Proin dapibus nulla nec massa consequat finibus. Etiam ac lobortis ante. Pellentesque quis ipsum sem.
                                Sed iaculis turpis erat. Integer at elementum nulla. Morbi a nulla dui. Sed eget orci in orci facilisis sagittis et sed diam. Curabitur vitae quam cursus, lacinia lorem id, vulputate nunc. Ut ut accumsan ante, eu condimentum mauris. Fusce aliquam ultrices dictum. Nunc commodo est eleifend aliquet vehicula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec tristique suscipit dui, sed congue nisl ultrices quis. Aenean lobortis pharetra neque, eu suscipit tortor efficitur vitae. Vivamus in risus sed ex pharetra fringilla sit amet in risus. Integer hendrerit metus pretium aliquet semper. Donec at condimentum est. Mauris tempus sollicitudin lacinia.
                                Nulla sit amet finibus quam. Vivamus imperdiet augue quis nisi fringilla, sed interdum lectus faucibus. Nunc auctor dui eu orci congue feugiat. Suspendisse ac justo in felis lobortis euismod ut quis purus. Praesent et feugiat ex. In interdum, dui ut convallis interdum, nibh libero pharetra nibh, pharetra consequat elit orci sit amet nulla. Suspendisse ac lectus commodo, feugiat mi eu, vulputate justo. Aliquam fringilla mi justo, ac pharetra lectus dictum condimentum. Pellentesque iaculis tincidunt ante, a fermentum erat facilisis ac. Duis id erat vel enim feugiat luctus. Vestibulum scelerisque orci quis dictum accumsan. Mauris accumsan, neque non laoreet facilisis, ex ex tincidunt nibh, ut ornare lectus eros ut lectus. Aenean tincidunt fermentum mauris, eget sagittis nisl feugiat.</P>
                        </Col>

                        <Col p={spaceL}>
                            <FormControlLabel required control={<Checkbox />} label="Eu li e aceito os termos" />
                        </Col>
                    </CardDefault>
                </Col>}

            <Col
                item
                mt={spaceXXXL}
                xs={12} md={8} lg={8} xl={8}
                sx={{ alignSelf: 'center' }}>

                {steps === 1 && <RegisterStepOne nextStep={setSteps} />}
                {steps === 2 && <RegisterStepTwo nextStep={setSteps} />}
                {steps === 3 && <RegisterStepThree nextStep={setSteps} />}

            </Col>


        </Col>
    );
};


const { spaces: { spaceL, spaceXL, spaceXXXL }, palette: { primary } } = theme;

const EventImage = ({ src, alt }: { src: string, alt: string }) => {

    return (
        <Col style={{ borderRadius: 10, height: 200 }}>
            <img
                height={200}
                src={src}
                alt={alt}
                style={{
                    borderRadius: 5,
                    objectFit: 'cover',
                }} />
        </Col>
    )
}