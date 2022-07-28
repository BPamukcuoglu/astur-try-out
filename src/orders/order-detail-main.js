import { useCallback, useState, useEffect } from 'react';
import {
  Avatar,
  Box,
  Button,
  Chip,
  Container,
  Divider,
  Grid,
  Link,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import CalendarIcon from '@mui/icons-material/CalendarMonth';
import { useMounted } from './useMounted';
import { ChevronDown as ChevronDownIcon } from '../icons/chevron-down';
import { PencilAlt as PencilAltIcon } from '../icons/pencil-alt';
import { allShipAdvices, getOneOrder } from '../misc/order-data';
import { format } from 'date-fns'
import { OrderDetailsTab } from './order_details_tab';
import PropTypes from 'prop-types';
import { ShipAdvices } from './ship_advices';
const tabs = [
  { label: 'Details', value: 'details' },
  { label: 'Ship Advices', value: 'ship_advices' },
  { label: 'Return', value: 'return' }
];

export const OrderDetails = () => {
  const isMounted = useMounted();

  const order = getOneOrder(1)
  const [currentTab, setCurrentTab] = useState('details');
  const shipAdvices = allShipAdvices().result

  const getOrder = useCallback(async () => {
    try {
      // const data = await customerApi.getCustomer();

      // if (isMounted()) {
      //   setOrder(data);
      // }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getOrder();
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
  };

  if (!order) {
    return null;
  }

  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="md">
          <div>
            <Box sx={{ mb: 4 }}>
              {/* <NextLink
                href="/dashboard/customers"
                passHref
              >
                <Link
                  color="textPrimary"
                  component="a"
                  sx={{
                    alignItems: 'center',
                    display: 'flex'
                  }}
                >
                  <ArrowBackIcon
                    fontSize="small"
                    sx={{ mr: 1 }}
                  />
                  <Typography variant="subtitle2">
                    Customers
                  </Typography>
                </Link>
              </NextLink> */}
            </Box>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">
                  {"ABC Inc - " + order.purchase_order}
                </Typography>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                    mt: 1
                  }}
                >
                  <CalendarIcon
                    color="action"
                    fontSize="small"
                    sx={{ ml: 1 }}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    sx={{ ml: 1 }}
                  >
                    Placed on
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ ml: 1 }}
                  >
                    {format(order.created_at ? new Date(order.created_at) : Date.now(), 'dd/MM/yyyy HH:mm')}
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                sx={{ ml: -2 }}
              >
                <Button
                  endIcon={(
                    <PencilAltIcon fontSize="small" />
                  )}
                  variant="outlined"
                  sx={{ ml: 2 }}
                >
                  Edit
                </Button>
                <Button
                  endIcon={(
                    <ChevronDownIcon fontSize="small" />
                  )}
                  variant="contained"
                  sx={{ ml: 2 }}
                >
                  Action
                </Button>
              </Grid>
            </Grid>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              sx={{ mt: 3 }}
              textColor="primary"
              value={currentTab}
              variant="scrollable"
            >
              {tabs.map((tab) => (
                <Tab
                  key={tab.value}
                  label={tab.label}
                  value={tab.value}
                />
              ))}
            </Tabs>
          </div>
          <Divider />
          <Box sx={{ mt: 3 }}>
            {currentTab === 'details' && <OrderDetailsTab order={order} />}
            {currentTab === 'ship_advices' && <ShipAdvices shipAdvices={shipAdvices} order={order} />}
            {/* {currentTab === 'logs' && <CustomerLogs />} */}
          </Box>
        </Container>
      </Box>
    </>
  );
};

OrderDetails.propTypes = {
};

export default OrderDetails;

