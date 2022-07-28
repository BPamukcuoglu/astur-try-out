
import { useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
    Card,
    CardHeader,
    Divider,
    Typography,
    Stack,
    Avatar,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import PriceChangeIcon from '@mui/icons-material/PriceChange';

export const ProductPricingDetails = (props) => {
    const { product } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <>
            <Card sx={{}}>
                <CardHeader
                    title="Pricing Details"
                    avatar={<PriceChangeIcon />}
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Price"
                        value={"$" + product.pricing_item.price.amount}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Presentation"
                        value={product.pricing_item.price.presentation.currency + product.pricing_item.price.presentation.amount}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="MSRP Price"
                        value={product.pricing_item.price.presentation.currency + product.pricing_item.price.presentation.amount}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="MSRP Representation"
                        value={product.pricing_item.price.presentation.currency + product.pricing_item.price.presentation.amount}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="MAPP Price"
                        value={product.pricing_item.price.presentation.currency + product.pricing_item.price.presentation.amount}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="MAPP Representation"
                        value={product.pricing_item.price.presentation.currency + product.pricing_item.price.presentation.amount}
                    />
                    <Divider />
                </PropertyList>
            </Card>
        </>
    );
};


