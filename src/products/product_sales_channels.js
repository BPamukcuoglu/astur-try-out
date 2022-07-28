import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
    Card,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    Typography,
    Box,
    Avatar,
    TableHead,
    TableRow,
} from '@mui/material';
import { Scrollbar } from '../misc/scrollbar';
import DoneIcon from '@mui/icons-material/Done';
import { X } from '../icons/x';
import { salesChannelMap } from '../utils/sales-channels-map';
import StorefrontIcon from '@mui/icons-material/Storefront';

export const ProductSalesChannels = (props) => {
    const { salesChannels, product, ...other } = props;

    const mockData = [
        {
            salesChannelId: 1,
            item_name: "Amazing Product From Future - NEW",
            sku: "cr-pjatlakae",
            stock: 2897,
            orders: 295,
            price: 19.99,
            active: true
        },
        {
            salesChannelId: 2,
            item_name: "From Future Amazing Product",
            sku: "cr-pjatlakae",
            stock: 6687,
            orders: 256,
            price: 21.99,
            active: true
        },
        {
            salesChannelId: 3,
            item_name: "Amazing Product From Future",
            sku: "cr-pjatlakae",
            stock: 3267,
            orders: 987,
            price: 33.99,
            active: true
        },
        {
            salesChannelId: 1,
            item_name: "Amazing Product From Future",
            sku: "cr-pjatlakae",
            stock: 0,
            orders: 0,
            price: 14.99,
            active: false
        },
    ]


    return (
        <Card {...other}>
            <CardHeader
                title="Sales Channels"
                avatar={<StorefrontIcon />}
            />
            <Divider />
            <Scrollbar>
                <Table sx={{ minWidth: 400 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Channel
                            </TableCell>
                            <TableCell>
                                Item Name
                            </TableCell>
                            <TableCell>
                                SKU
                            </TableCell>
                            <TableCell>
                                Stock
                            </TableCell>
                            <TableCell>
                                Orders
                            </TableCell>
                            <TableCell>
                                Price
                            </TableCell>
                            <TableCell>
                                Active
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {mockData?.map((item) => (
                            <TableRow key={item.id}>
                                <TableCell
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex'
                                    }}
                                >
                                    <Avatar sx={{ width: 30, height: 30 }} variant="rounded" src={salesChannelMap[item.salesChannelId].logoUrl} />
                                    <Box sx={{ ml: 2 }}>
                                        <Typography variant="subtitle2">
                                            {salesChannelMap[item.salesChannelId].name}
                                        </Typography>
                                        {/* <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                Total of
                                                {" " + numeral(order.total).format("$0,0.00")}
                                            </Typography> */}
                                    </Box>
                                </TableCell>
                                <TableCell>
                                    {item.item_name || "Item Name"}
                                </TableCell>
                                <TableCell>
                                    {item.sku || "Item SKU"}
                                </TableCell>
                                <TableCell>
                                    {item.stock}
                                </TableCell>
                                <TableCell>
                                    {item.orders}
                                </TableCell>
                                <TableCell>
                                    {numeral(item.price).format("$0,0.00")}
                                </TableCell>
                                <TableCell>
                                    {item.active ? <DoneIcon /> : <X />}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Scrollbar>
        </Card>
    );
};


