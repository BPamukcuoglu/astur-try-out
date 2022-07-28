import PropTypes from 'prop-types';
import {
    Box,
    Drawer,
    IconButton,
    Stack,
    Typography,
    useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import DoneIcon from '@mui/icons-material/Done';
import { X } from '../icons/x';

const WarehousePreview = (props) => {
    const { lgUp, warehouse } = props;
    const align = lgUp ? 'horizontal' : 'vertical';

    return (
        <>
            <Stack direction="row" alignItems="center" justifyContent='space-between' >
                <Typography
                    sx={{ my: 3 }}
                    variant="h6"
                    align='left'
                >
                    Details
                </Typography>
            </Stack>
            <PropertyList>
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="Name"
                    value={warehouse.name}
                />
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="ID"
                    value={warehouse.id}
                />
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="External ID"
                    value={warehouse.external_id}
                />
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="Fulfillment Provider"
                >
                    <Typography
                        disableGutters
                        sx={{ minWidth: align === 'vertical' ? 'inherit' : 180 }}
                        variant="subtitle2"
                        color="textSecondary"
                    >
                        {"Amazon Fulfillment Services"}
                    </Typography>
                </PropertyListItem>
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="Address"
                >
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {warehouse.address.address_1}
                    </Typography>
                    {warehouse.address.address_2 && <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {warehouse.address.address_1}
                    </Typography>}
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {warehouse.address.city}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {warehouse.address.postal_code}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {warehouse.address.state + " / " + warehouse.address.country}
                    </Typography>
                </PropertyListItem>
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="Inventory Tracking"
                    value={warehouse.inventory_tracking}
                />
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="Respect Allocations"
                    value={warehouse.respect_allocations ? <DoneIcon /> : <X />}
                />
                <PropertyListItem
                    align={align}
                    disableGutters
                    label="Type"
                    value={warehouse.type}
                />
            </PropertyList>
        </>
    );
};


const WarehouseDrawerDesktop = styled(Drawer)({
    width: 500,
    flexShrink: 0,
    '& .MuiDrawer-paper': {
        position: 'relative',
        width: 500
    }
});

const WarehouseDetailsDrawerMobile = styled(Drawer)({
    flexShrink: 0,
    maxWidth: '100%',
    height: 'calc(100% - 64px)',
    width: 500,
    '& .MuiDrawer-paper': {
        height: 'calc(100% - 64px)',
        maxWidth: '100%',
        top: 64,
        width: 500
    }
});

export const WarehouseDetailsDrawer = (props) => {
    const { containerRef, onClose, open, warehouse, ...other } = props;
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));


    // The reason for doing this, is that the persistent drawer has to be rendered, but not it's
    // content if an warehouse is not passed.
    const content = warehouse
        ? (
            <>
                <Box
                    sx={{
                        alignItems: 'center',
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        display: 'flex',
                        justifyContent: 'space-between',
                        px: 3,
                        py: 2
                    }}
                >
                    <Typography
                        color="inherit"
                        variant="h6"
                    >
                        {warehouse.name}
                    </Typography>
                    <Box
                        sx={{
                            alignItems: 'center',
                            display: 'flex',
                            flexWrap: 'wrap',
                            m: -1,
                            '& > button': {
                                m: 1
                            }
                        }}
                    >
                        <IconButton
                            color="inherit"
                            onClick={onClose}
                        >
                            <X fontSize="small" />
                        </IconButton>
                    </Box>
                </Box>
                <Box
                    sx={{
                        px: 3,
                        py: 4
                    }}
                >
                    <WarehousePreview
                        warehouse={warehouse}
                        lgUp={lgUp}
                    />
                </Box>
            </>
        )
        : null;

    if (lgUp) {
        return (
            <WarehouseDrawerDesktop
                anchor="left"
                open={open}
                SlideProps={{ container: containerRef?.current }}
                variant="temporary"
                {...other}>
                {content}
            </WarehouseDrawerDesktop>
        );
    }

    return (
        <WarehouseDetailsDrawerMobile
            anchor="left"
            ModalProps={{ container: containerRef?.current }}
            onClose={onClose}
            open={open}
            SlideProps={{ container: containerRef?.current }}
            variant="temporary"
            {...other}>
            {content}
        </WarehouseDetailsDrawerMobile>
    );
};

WarehouseDetailsDrawer.propTypes = {
    containerRef: PropTypes.any,
    onClose: PropTypes.func,
    open: PropTypes.bool,
    warehouse: PropTypes.object
};
