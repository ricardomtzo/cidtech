import * as React from 'react';
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import { Avatar } from '@mui/material';
import { Col, Divider, P, Row } from '..';
import { CardTravel, DocumentScannerSharp, Logout, PersonOutline, PlayLesson, Shop } from '@mui/icons-material';

export default function MenuProfile() {
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: Event | React.SyntheticEvent) => {
        if (
            anchorRef.current &&
            anchorRef.current.contains(event.target as HTMLElement)
        ) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        } else if (event.key === 'Escape') {
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const onClickMenu = (href: string) => {
        location.href = '/dashboard/' + href
    }

    return (
        <Stack direction="row" mr={10} spacing={2} zIndex={99999} >

            <div>
                <Row
                    ref={anchorRef}
                    id="composition-button"
                    aria-controls={open ? 'composition-menu' : undefined}
                    aria-expanded={open ? 'true' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={{ cursor: 'pointer', backgroundColor: '#fff', padding: 20, borderRadius: 4, borderBottomRightRadius: 4, borderBottomLeftRadius: 4, width: 200 }}>
                    <Avatar sx={{ width: 30, height: 30 }} src="/static/images/avatar/1.jpg" />
                    <P ml={1} >Maria da Silva</P>
                </Row>
               
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    role={undefined}
                    placement="bottom-start"
                    transition
                    disablePortal
                    style={{borderTop: '1px solid lightgray'}}
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                            }}
                        >
                            <Paper style={{borderRadius: '0 0px 5px 5px'}}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        style={{ width: 200 }}
                                        autoFocusItem={open}
                                        id="composition-menu"
                                        aria-labelledby="composition-button"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        <P size='xsmall' bold p={1} color={'#A0A8A3'}>Painel de controle</P>
                                        <MenuItem onClick={() => onClickMenu('tickets')}><CardTravel fontSize='small' /><P ml={2} size='small'>Novo pedido</P></MenuItem>
                                        <MenuItem onClick={() => onClickMenu('purchses')}><CardTravel fontSize='small' /><P ml={2} size='small'>Meus pedidos</P></MenuItem>
                                        <MenuItem onClick={() => onClickMenu('profile')}><PersonOutline fontSize='small' /><P ml={2} size='small'>Meus dados</P></MenuItem>
                                        <MenuItem onClick={() => onClickMenu('tickets')}><CardTravel fontSize='small' /><P ml={2} size='small'>Credencial</P></MenuItem>
                                        <Col style={{ width: '100%', height: 1, backgroundColor: '#E5E5E5', marginTop: 20 }} />
                                        <P size='xsmall' bold p={1} color={'#A0A8A3'}>Pós evento</P>
                                        <MenuItem onClick={() => onClickMenu('tickets')}><DocumentScannerSharp fontSize='small' /><P ml={2} size='small'>Certificado</P></MenuItem>
                                        <MenuItem onClick={() => onClickMenu('tickets')}><PlayLesson fontSize='small' /><P ml={2} size='small'>Apresentação</P></MenuItem>
                                        <MenuItem onClick={() => location.href = '/login'}><Logout fontSize='small' /><P ml={2} size='small'>Sair</P></MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </Stack>
    );
}