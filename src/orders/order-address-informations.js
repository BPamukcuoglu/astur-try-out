import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Divider,
    TextField,
    Typography,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import numeral from 'numeral';
import { calculateDaysLeft } from '../utils/calculate-days-left';
import RocketRoundedIcon from '@mui/icons-material/RocketRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';

export const OrderAddressInformations = (props) => {

    const { information, billing, ...others } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const title = billing ? "Billing Information" : "Shipping Information";
    const align = smDown ? 'vertical' : 'horizontal';
    const avatar = billing ? <CreditCardRoundedIcon /> : <RocketRoundedIcon />
    return (
        <Card>
            <CardHeader
                title={title}
                avatar={avatar}
            />
            <Divider />
            <PropertyList>
                <PropertyListItem
                    align={align}
                    label="Name"
                    value={information.first_name + " " + information.last_name}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Address"
                >
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {information.address_1}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {information.city}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {information.state + " / " + information.country}
                    </Typography>
                </PropertyListItem>
                <Divider />
                <PropertyListItem
                    align={align}
                    label="E-Mail"
                    value={information.email}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Phone Number"
                    value={information.phone_number}
                />
            </PropertyList>
        </Card>
    );

}