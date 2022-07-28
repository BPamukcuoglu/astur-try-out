
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
import InfoIcon from '@mui/icons-material/Info';


export const ProductBasicDetails = (props) => {
    const { product } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <>
            <Card sx={{ height: "100%" }}>
                <CardHeader
                    title="Product Information"
                    avatar={<InfoIcon />}
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Name"
                        value={"Amazing Product From Future Pro Max"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="ID"
                        value={product.id}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="GTIN"
                    >
                        <Typography
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            {product.sku.gtin || "Unknown"}
                        </Typography>
                    </PropertyListItem>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Inventory ID"
                        value={product.sku.inventory_id || "Unknown"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="ISBN"
                        value={product.sku.isbn || "Unknown"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="SKU"
                        value={product.sku.sku}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Number of Variants"
                        value={product.variants.length || 0}
                    />
                    <Divider />
                </PropertyList>
            </Card>
        </>
    );
};


