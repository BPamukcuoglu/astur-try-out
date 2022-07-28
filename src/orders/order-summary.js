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
import { calculateDaysLeft } from '../utils/calculate-days-left';
import { salesChannelMap } from '../utils/sales-channels-map';

const statusOptions = ['Canceled', 'Complete', 'Rejected'];

export const OrderSummary = (props) => {
    const { order, ...other } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const [status, setStatus] = useState(statusOptions[0]);

    order.customer = {};

    const handleChange = (event) => {
        setStatus(event.target.value);
    };

    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <>
            <Card {...other}>
                <CardHeader
                    title="Order Info"
                    avatar={
                        <Avatar sx={{ height: "1.8em", width: "1.8em" }} variant='rounded' src={salesChannelMap[order.sales_channel_id].logoUrl} ></Avatar>
                    }
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Customer"
                        value={order.shipping_information?.first_name + " " + order.shipping_information?.last_name}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Sales Channel"
                    >
                        <Stack direction="row" spacing={1} >
                            <Typography
                                variant="subtitle2"
                                color="textSecondary"
                            >
                                {salesChannelMap[order.sales_channel_id].name || "Unknown sales channel"}
                            </Typography>
                        </Stack>
                    </PropertyListItem>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Sales Channel Type"
                        value={order.sales_channel_type || "Default"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="External Order ID"
                        value={order.external_order_id}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Expected Shipping Date"
                        value={format(new Date(order.requested_ship_date), 'dd/MM/yyyy') + " (" + calculateDaysLeft(order.requested_ship_date) > 0 ? calculateDaysLeft(order.requested_ship_date) + " days left)" : (calculateDaysLeft(order.requested_ship_date) * -1) + " Days Overdue" || "Not provided!"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Expected Delivery Date"
                        value={format(new Date(order.requested_delivery_date), 'dd/MM/yyyy') + " (" + calculateDaysLeft(order.requested_delivery_date) > 0 ? calculateDaysLeft(order.requested_delivery_date) + " days left)" :(calculateDaysLeft(order.requested_ship_date) * -1) + " Days Overdue" || "Not provided!"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Promotion Code"
                        value={order.promotion_code || "-"}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Status"
                        value={order.status.toLocaleUpperCase()}
                    />
                </PropertyList>
            </Card>
        </>
    );
};

OrderSummary.propTypes = {
    order: PropTypes.object.isRequired
};
