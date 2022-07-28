import { useEffect, useState, ReactDOM } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import { X as XIcon } from '../icons/x';
import { DocumentText as Document } from '../icons/document-text';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import { Scrollbar } from '../misc/scrollbar';
import { salesChannelMap } from '../utils/sales-channels-map';
import { orderStatusOptions } from '../utils/order-status-options';
import { FulfillmentBar } from '../misc/fulfillment_bar';


const OrderPreview = (props) => {
  const { lgUp, onApprove, onEdit, onReject, order } = props;
  const align = lgUp ? 'horizontal' : 'vertical';
  const [orderActions, setOrderActions] = useState([]);

  const handleOrderAction = (orderAction) => {
    alert(orderAction + " will be executed on order " + order.id)
  }


  useEffect(() => {
    (() => {
      let orderActions = [];
      switch (order.status) {
        case 'active':
          orderActions = ["Send", "Cancel", "More Details"]
          break;
        case 'pending':
          orderActions = ["Send", "Cancel", "More Details"]
          break;
        case 'canceled':
          orderActions = ["Delete", "More Details"]
          break;
        case 'rejected':
          orderActions = ["Delete", "More Details"]
          break;
        case 'complete':
          orderActions = ["Delete", "More Details"]
          break;
        default:

      }
      setOrderActions(orderActions)
    })()
  }, [order])


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
        <Box align="right">
          {orderActions.map(orderAction => (
            <Button key={orderAction} onClick={() => { handleOrderAction(orderAction) }}>
              {orderAction}
            </Button>
          ))}
        </Box>
      </Stack>
      <PropertyList>
        <PropertyListItem
          align={align}
          disableGutters
          label="Name"
          value={"ABC Inc."}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Number"
          value={order.purchase_order}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Sales Channel"
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }} >
            <Avatar sx={{ height: "1.8em", width: "1.8em" }} variant='rounded' src={salesChannelMap[order.sales_channel_id].logoUrl} ></Avatar>
            <Typography
              disableGutters
              sx={{ minWidth: align === 'vertical' ? 'inherit' : 180 }}
              variant="subtitle2"
              color="textSecondary"
            >
              {salesChannelMap[order.sales_channel_id].name || "Unknown sales channel"}
            </Typography>
          </Stack>
        </PropertyListItem>
        <PropertyListItem
          align={align}
          disableGutters
          label="Customer"
        >
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.shipping_information?.first_name + " " + order.shipping_information?.last_name}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.shipping_information?.address_1 + " " + order.shipping_information?.address_2}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.shipping_information?.city}
          </Typography>
          <Typography
            color="textSecondary"
            variant="body2"
          >
            {order.shipping_information?.state + " / " + order.shipping_information?.country}
          </Typography>
        </PropertyListItem>
        <PropertyListItem
          align={align}
          disableGutters
          label="Order Date"
          value={format(new Date(order.created_at), 'dd/MM/yyyy HH:mm')}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Total Amount"
          value={numeral(order.total).format("$0,0.00")}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Total Tax Amount"
          value={numeral(order.item_tax + order.ship_tax).format("$0,0.00")}
        />
        <PropertyListItem
          align={align}
          disableGutters
          label="Status"
          value={orderStatusOptions[order.status]?.label || order.status?.toLocaleUpperCase()}
        />
        {order.requested_ship_date &&
          <PropertyListItem
            align={align}
            disableGutters
            label="Requested Ship Date"
            value={format(new Date(order.requested_ship_date), 'dd/MM/yyyy HH:mm')}
          />}
        {order.requested_delivery_date &&
          <PropertyListItem
            align={align}
            disableGutters
            label="Requested Delivery Date"
            value={format(new Date(order.requested_delivery_date), 'dd/MM/yyyy HH:mm')}
          />}
        <PropertyListItem align={align} disableGutters>
          <FulfillmentBar order={order} />
        </PropertyListItem>
      </PropertyList>
      <Divider sx={{ my: 3 }} />
      <Typography
        sx={{ my: 3 }}
        variant="h6"
      >
        Line items
      </Typography>
      <Scrollbar>
        <Table sx={{ minWidth: 400 }}>
          <TableHead>
            <TableRow>
              <TableCell>
                Description
              </TableCell>
              <TableCell>
                Amount
              </TableCell>
              <TableCell>
                Line Items
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {order.order_item?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {item.name || "Item Name"}
                  {' '}
                  x
                  {' '}
                  {item.quantity}
                </TableCell>
                <TableCell>
                  {numeral(item.total_price).format("$0,0.00")}
                </TableCell>
                <TableCell>
                  <FulfillmentBar orderItem={item} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Scrollbar>
    </>
  );
};

const OrderForm = (props) => {
  const { onCancel, onSave, order } = props;

  return (
    <>
      <Typography
        sx={{ my: 3 }}
        variant="h6"
      >
        Details
      </Typography>
      <TextField
        disabled
        fullWidth
        label="ID"
        margin="normal"
        name="id"
        value={order.id}
      />
      <TextField
        disabled
        fullWidth
        label="Number"
        margin="normal"
        name="number"
        value={order.number}
      />
      <TextField
        disabled
        fullWidth
        label="Customer name"
        margin="normal"
        name="customer_name"
        value={order.customer}
      />
      <TextField
        disabled
        fullWidth
        label="Date"
        margin="normal"
        name="date"
        value={format(new Date(order.created_at), 'dd/MM/yyyy HH:mm')}
      />
      <TextField
        fullWidth
        label="Address"
        margin="normal"
        name="address"
        value={order.customer}
      />
      <TextField
        fullWidth
        label="Country"
        margin="normal"
        name="country"
        value={order.customer}
      />
      <TextField
        fullWidth
        label="State/Region"
        margin="normal"
        name="state_region"
        value={order.customer}
      />
      <TextField
        fullWidth
        label="Total Amount"
        margin="normal"
        name="amount"
        value={order.totalAmount}
      />
      <TextField
        fullWidth
        label="Status"
        margin="normal"
        name="status"
        select
        SelectProps={{ native: true }}
        value={order.status}
      >
        {Object.keys(orderStatusOptions).map((statusOption) => (
          <option
            key={orderStatusOptions[statusOption].value}
            value={orderStatusOptions[statusOption].value}
          >
            {orderStatusOptions[statusOption].value}
          </option>
        ))}
      </TextField>
      <Box
        sx={{
          alignItems: 'center',
          pt: 2,
          justifyContent: 'space-between',
          display: 'flex',
          m: -1,
          '& > button': {
            m: 1
          }
        }}
      >
        <Button
          color="error"
          variant='contained'
          sx={{ mt: 3 }}
        >
          Delete Order
        </Button>

        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 3 }}
        >
          Save Changes
        </Button>
      </Box>
    </>
  );
};

const OrderDrawerDesktop = styled(Drawer)({
  width: 500,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    position: 'relative',
    width: 500
  }
});

const OrderDrawerMobile = styled(Drawer)({
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

export const OrderDrawer = (props) => {
  const { containerRef, onClose, open, order, ...other } = props;
  const [isEditing, setIsEditing] = useState(false);
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  // The reason for doing this, is that the persistent drawer has to be rendered, but not it's
  // content if an order is not passed.
  const content = order
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
            {"ABC Inc." + " " + order.purchase_order}
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
              onClick={handleEdit}
            >
              {isEditing ? <Document fontSize='small' /> : <EditIcon fontSize="small" />}
            </IconButton>

            <IconButton
              color="inherit"
              onClick={onClose}
            >
              <XIcon fontSize="small" />
            </IconButton>
          </Box>
        </Box>
        <Box
          sx={{
            px: 3,
            py: 4
          }}
        >
          {!isEditing
            ? (
              <OrderPreview
                onApprove={onClose}
                onEdit={handleEdit}
                onReject={onClose}
                order={order}
                lgUp={lgUp}
              />
            )
            : (
              <OrderForm
                onCancel={handleCancel}
                onSave={handleCancel}
                order={order}
              />
            )}
        </Box>
      </>
    )
    : null;

  if (lgUp) {
    return (
      <OrderDrawerDesktop
        anchor="right"
        open={open}
        SlideProps={{ container: containerRef?.current }}
        variant="persistent"
        {...other}>
        {content}
      </OrderDrawerDesktop>
    );
  }

  return (
    <OrderDrawerMobile
      anchor="right"
      ModalProps={{ container: containerRef?.current }}
      onClose={onClose}
      open={open}
      SlideProps={{ container: containerRef?.current }}
      variant="temporary"
      {...other}>
      {content}
    </OrderDrawerMobile>
  );
};

OrderDrawer.propTypes = {
  containerRef: PropTypes.any,
  onClose: PropTypes.func,
  open: PropTypes.bool,
  order: PropTypes.object
};
