import PropTypes from 'prop-types';
import numeral from 'numeral';
import {
  Box,
  Card,
  CardHeader,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  LinearProgress,
  TableRow,
  Avatar,
  Typography
} from '@mui/material';
import { Scrollbar } from '../misc/scrollbar';
import DoneIcon from '@mui/icons-material/Done';
import { X } from '../icons/x';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import FulfillmentBar from '../misc/fulfillment_bar';

export const OrderItems = (props) => {
  const { orderItems, ...other } = props;

  return (
    <Card {...other}>
      <CardHeader 
      title="Order Items" 
      avatar={<ShoppingCartRoundedIcon />}
      />
      <Divider />
      <Scrollbar>
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
                Status
              </TableCell>
              <TableCell>
                Amount
              </TableCell>
              <TableCell>
                Unit Price
              </TableCell>
              <TableCell>
                Gift Wrap
              </TableCell>
              <TableCell>
                Shipped
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orderItems?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.name || "Item Name"}
                </TableCell>
                <TableCell>
                  {item.sku || "Item SKU"}
                </TableCell>
                <TableCell>
                  {item.status || "Item Status"}
                </TableCell>
                <TableCell>
                  {numeral(item.total_price).format("$0,0.00")}
                </TableCell>
                <TableCell>
                  {numeral(item.unit_price).format("$0,0.00")}
                </TableCell>
                <TableCell>
                  {item.giftwrap ? <DoneIcon /> : <X />}
                </TableCell>
                <TableCell>
                  <FulfillmentBar orderItem={item} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </Card>
  );
};

OrderItems.propTypes = {
  orderItems: PropTypes.array.isRequired
};
