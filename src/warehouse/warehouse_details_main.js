import { useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import { WarehouseDetailsDrawer } from './warehouse_details_drawer';
import { getOneMockWarehouse } from '../misc/order-data'

const WarehouseListInner = styled('div',
    { shouldForwardProp: (prop) => prop !== 'open' })(
        ({ theme, open }) => ({
            flexGrow: 1,
            overflow: 'hidden',
            paddingLeft: theme.spacing(3),
            paddingRight: theme.spacing(3),
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
            zIndex: 1,
            [theme.breakpoints.up('lg')]: {
                marginRight: 380
            },
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            ...(open && {
                [theme.breakpoints.up('lg')]: {
                    marginRight: 0
                },
                transition: theme.transitions.create('margin', {
                    easing: theme.transitions.easing.easeOut,
                    duration: theme.transitions.duration.enteringScreen
                })
            })
        }));

const warehouse = getOneMockWarehouse()

export const WarehouseDetails = () => {
    const containerRef = useRef(null);
    const [drawer, setDrawer] = useState({
        isOpen: false,
        warehouseId: 1
    });

    const handleOpenDrawer = async (orderId) => {
        setDrawer({
            ...drawer,
            isOpen: true
        })
    };

    const handleCloseDrawer = () => {
        setDrawer({
            ...drawer,
            isOpen: false,
        });
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <button style={{ marginLeft: "5em" }} onClick={handleOpenDrawer}>Open Drawer</button>
            <button style={{ marginLeft: "5em" }} onClick={handleCloseDrawer}>Close Drawer</button>
            <WarehouseListInner open={drawer.isOpen}  >
                <WarehouseDetailsDrawer warehouse={warehouse} open={drawer.isOpen} onClose={handleCloseDrawer} containerRef={containerRef} />
            </WarehouseListInner>
        </div>
    )

}

export default WarehouseDetails