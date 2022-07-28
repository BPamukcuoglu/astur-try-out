import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
    Card,
    CardHeader,
    Divider,
    Grid,
    Typography,
    Stack,
    useMediaQuery,
    Avatar,
    Table,
    TableCell,
    TableHead,
    TableBody,
    TableRow,
    LinearProgress
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import AltRouteIcon from '@mui/icons-material/AltRoute';
import { salesChannelMap } from '../utils/sales-channels-map';
import DoneIcon from '@mui/icons-material/Done';
import { X } from '../icons/x';


const ShipAdviceItemsList = (props) => {

    const { shipAdvice } = props

    return (
        <Table sx={{ minWidth: 400 }}>
            <TableHead>
                <TableRow>
                    <TableCell>
                        Item Name
                    </TableCell>
                    <TableCell>
                        SKU
                    </TableCell>
                    <TableCell>
                        Amount
                    </TableCell>
                    <TableCell>
                        Gift Wrap
                    </TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {shipAdvice.ship_advice_items?.map((item) => (
                    <TableRow key={item.id}>
                        <TableCell>
                            {item.name || "Item Name"}
                        </TableCell>
                        <TableCell>
                            {item.sku || "Item SKU"}
                        </TableCell>
                        <TableCell>
                            {numeral(item.total_price).format("$0,0.00")}
                        </TableCell>
                        <TableCell>
                            {item.giftwrap ? <DoneIcon /> : <X />}
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}


const ShipAdviceCard = (props) => {

    const { shipAdvice } = props
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <Card>
            <CardHeader
                title={"Ship Advice"}
                avatar={<AltRouteIcon />}
            />
            <Divider />
            <PropertyList>
                <PropertyListItem
                    align={align}
                    label="Status"
                    value={shipAdvice.status.toLocaleUpperCase()}
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
                            {salesChannelMap[shipAdvice.sales_channel_id].name || "Unknown sales channel"}
                        </Typography>
                        {/* <Avatar sx={{ height: "1.8em", width: "1.8em" }} variant='rounded' src={salesChannelMap[shipAdvice.sales_channel_id].logoUrl} ></Avatar> */}
                    </Stack>
                </PropertyListItem>
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Warehouse"
                >
                    <Stack direction="row" spacing={1} >
                        <Typography
                            variant="subtitle2"
                            color="textSecondary"
                        >
                            {"Unknown warehouse"}
                        </Typography>
                    </Stack>
                </PropertyListItem>
                <Divider />
                <PropertyListItem
                    align={align}
                    label="Routing Status"
                    value={shipAdvice.order_routing_status?.toLocaleUpperCase() || "None"}
                />
                <Divider />
                {/* <PropertyListItem
                    align={align}
                    label="Address"
                >
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {shipAdvice.delivery_information.address_1}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {shipAdvice.delivery_information.city}
                    </Typography>
                    <Typography
                        color="textSecondary"
                        variant="body2"
                    >
                        {shipAdvice.delivery_information.state + " / " + shipAdvice.delivery_information.country}
                    </Typography>
                </PropertyListItem>
                <Divider /> */}
                <ShipAdviceItemsList shipAdvice={shipAdvice} />
                <Divider />
            </PropertyList>
        </Card>
    );


}


ShipAdviceCard.propTypes = {
    shipAdvice: PropTypes.object.isRequired
}

export const ShipAdvices = (props) => {

    const { order, shipAdvices, ...others } = props;

    return (
        <Grid
            container
            spacing={3}
        >
            {shipAdvices.map((shipAdvice, index) => (
                <Grid
                    item
                    xs={6}>
                    <ShipAdviceCard key={index} shipAdvice={shipAdvice} />
                </Grid>
            ))}

        </Grid>
    );

}


ShipAdvices.propTypes = {
    order: PropTypes.object.isRequired,
    shipAdvices: PropTypes.object.isRequired
}

export default ShipAdvices