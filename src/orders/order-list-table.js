import PropTypes from 'prop-types';
import { format } from 'date-fns';
import numeral from 'numeral';
import {
  Box,
  Table,
  TableBody,
  TableCell,
  TablePagination,
  TableRow,
  Typography,
  TableHead,
  Avatar,
  LinearProgress
} from '@mui/material';
import { SeverityPill } from '../misc/severity-pill';
import { calculateDaysLeft } from '../utils/calculate-days-left';
import DoneIcon from '@mui/icons-material/Done';
import { X } from '../icons/x';
import { salesChannelMap } from '../utils/sales-channels-map';
import { orderStatusOptions } from '../utils/order-status-options';


export const OrderListTable = (props) => {
  const {
    onOpenDrawer,
    onPageChange,
    onRowsPerPageChange,
    orders,
    ordersCount,
    page,
    rowsPerPage,
    loading,
    loadingDrawer,
    isDrawerOpen,
    ...other
  } = props;


  if (loading) {
    return (<LinearProgress />)
  }

  return (
    <div {...other}>
      <Table>
        <TableHead>
          <TableCell></TableCell>
          {!isDrawerOpen && <TableCell align='center'>Product</TableCell>}
          {!isDrawerOpen && <TableCell align='center'>Customer</TableCell>}
          <TableCell align='center'>Service</TableCell>
          <TableCell align='center'>Requested Delivery</TableCell>
          <TableCell align='center'>Create Routings</TableCell>
          <TableCell align='right'>Status</TableCell>
        </TableHead>
        <TableBody>
          {orders.map((order, index) => (
            <TableRow
              hover
              key={order.id}
              onClick={() => onOpenDrawer(order.id)}
              sx={{ cursor: loadingDrawer ? 'wait' : 'pointer' }}
            >
              <TableCell
                sx={{
                  alignItems: 'center',
                  display: 'flex'
                }}
              >
                <Avatar sx={{ width: 30, height: 30 }} variant="rounded" src={salesChannelMap[order.sales_channel_id].logoUrl} />
                <Box
                  sx={{
                    backgroundColor: (theme) => theme.palette.mode === 'dark'
                      ? 'neutral.800'
                      : 'neutral.200',
                    borderRadius: 2,
                    maxWidth: 'fit-content',
                    ml: 3,
                    p: 1
                  }}
                >
                  <Typography
                    align="center"
                    variant="subtitle2"
                  >
                    {format(new Date(order.created_at), 'LLL').toUpperCase()}
                  </Typography>
                  <Typography
                    align="center"
                    variant="h6"
                  >
                    {format(new Date(order.created_at), 'd')}
                  </Typography>
                </Box>
                <Box sx={{ ml: 2 }}>
                  <Typography variant="subtitle2">
                    {"ABC Inc. " + order.purchase_order}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="body2"
                  >
                    Total of
                    {" " + numeral(order.total).format("$0,0.00")}
                  </Typography>
                </Box>
              </TableCell>
              {!isDrawerOpen &&
                <>
                  <TableCell align='center'>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="subtitle2">
                        {order.order_item.length > 1 ? "Multiple SKUs" : order.order_item[0].sku.toUpperCase()}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {order.order_item.length > 1 ? order.order_item.length + " items" : ""}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align='center'>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      <Typography variant="subtitle2">
                        {order.shipping_information?.first_name + " " + order.shipping_information?.last_name}
                      </Typography>
                      <Typography
                        color="textSecondary"
                        variant="body2"
                      >
                        {order.shipping_information?.state + " / " + order.shipping_information?.country}
                      </Typography>
                    </Box>
                  </TableCell>
                </>
              }
              <TableCell align='center'>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography variant="subtitle2">
                    {order.sales_channel_name || salesChannelMap[order.sales_channel_id].name}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Typography
                    variant="subtitle2"
                  >
                    {format((new Date(order.requested_delivery_date)), 'dd/MM/yyyy')}
                  </Typography>
                  <Typography variant="body2" color={calculateDaysLeft(order.requested_delivery_date) <= 2 ? 'error' : 'textSecondary'}>
                    {calculateDaysLeft(order.requested_delivery_date) < 0 ? "Overdue" : calculateDaysLeft(order.requested_delivery_date) <= 5 && calculateDaysLeft(order.requested_delivery_date) + " Days Left"}
                  </Typography>
                </Box>
              </TableCell>
              <TableCell align='center'>
                <Typography variant="subtitle2">
                  {order.create_routings ? <DoneIcon /> : <X />}
                </Typography>
              </TableCell>
              <TableCell align="right">
                <SeverityPill color={orderStatusOptions[order.status]?.severity || 'warning'}>
                  {orderStatusOptions[order.status]?.label || order.status}
                </SeverityPill>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        count={ordersCount}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 20]}
      />
    </div>
  );
};

OrderListTable.propTypes = {
  onOpenDrawer: PropTypes.func,
  onPageChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  orders: PropTypes.array.isRequired,
  ordersCount: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
  loadingDrawer: PropTypes.bool
};
