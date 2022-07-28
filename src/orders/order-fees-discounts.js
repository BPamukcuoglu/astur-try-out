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
    Avatar,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import numeral from 'numeral';
import { calculateDaysLeft } from '../utils/calculate-days-left';
import ReceiptIcon from '@mui/icons-material/Receipt';

export const OrderFeesDiscounts = (props) => {

    const { order, ...other } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <Card {...other} >
            <CardHeader
                title="Fees & Discounts"
                avatar={<ReceiptIcon />}
            />
            <Divider />
            <PropertyList>
                <PropertyListItem
                    align={align}
                    label="Ship Fee"
                    value={numeral(order.shipping).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Ship Tax"
                    value={numeral(order.ship_tax).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Item Tax"
                    value={numeral(order.item_tax).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Tax Amount"
                    value={numeral(order.ship_tax + order.item_tax).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Item Discount"
                    value={numeral(order.total_item_discount).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Shipping Discount"
                    value={numeral(order.total_shipping_discount).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Total Discount"
                    value={numeral(order.total_item_discount + order.total_shipping_discount).format('$0,000.00')}
                />
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Total Amount"
                    value={numeral(order.total).format('$0,000.00')}
                />
            </PropertyList>
        </Card>
    );

}