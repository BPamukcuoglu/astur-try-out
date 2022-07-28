import { useCallback, useEffect, useRef, useState } from 'react';
import {
  Box,
  Button,
  Divider,
  Grid,
  InputAdornment,
  Tab,
  Tabs,
  TextField,
  Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { OrderDrawer } from './order-drawer';
import { OrderListTable } from './order-list-table';
import { useMounted } from './useMounted';
import { Plus as PlusIcon } from '../icons/plus'
import { Search as SearchIcon } from '../icons/search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { WarehouseListFilters } from './order-list-filter';
import { getMockOrders, getOneOrder } from '../misc/order-data';

const tabs = [
  {
    label: 'All',
    value: 'all'
  },
  {
    label: 'Active',
    value: "active"
  },
  {
    label: 'Pending',
    value: 'pending'
  },
  {
    label: 'Completed',
    value: 'complete'
  },
  {
    label: 'Canceled',
    value: 'canceled'
  }
];

const sortOptions = [
  {
    label: 'Newest',
    value: 'desc'
  },
  {
    label: 'Oldest',
    value: 'asc'
  }
];

const applyFilters = (orders, filters) => orders.filter((order) => {
  if (filters.query) {
    // Checks only the order number, but can be extended to support other fields, such as customer
    // name, email, etc.
    const containsQuery = order.purchase_order.toLowerCase().includes(filters.query.toLowerCase());

    if (!containsQuery) {
      return false;
    }
  }

  if (filters.status) {
    const statusMatched = order.status === filters.status;
    if (!statusMatched) {
      return false;
    }
  }

  return true;
});


const OrderListInner = styled('div',
  { shouldForwardProp: (prop) => prop !== 'open' && prop !== 'openFilter' })(
    ({ theme, open, openFilter }) => ({
      flexGrow: 1,
      overflow: 'hidden',
      paddingBottom: theme.spacing(8),
      paddingTop: theme.spacing(8),
      zIndex: 1,
      [theme.breakpoints.up('lg')]: {
        marginRight: -500,
        marginLeft: -380
      },
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      ...(open && {
        [theme.breakpoints.up('lg')]: {
          marginRight: 0,
          marginLeft: -380
        },
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      }),
      ...(openFilter && {
        [theme.breakpoints.up('lg')]: {
          marginRight: -500,
          marginLeft: 0
        },
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen
        })
      })

    }));

const OrderList = () => {

  const isMounted = useMounted();
  const rootRef = useRef(null);
  const queryRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [currentTab, setCurrentTab] = useState('all');
  const [sort, setSort] = useState('desc');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count, setCount] = useState(100);
  const [orders, setOrders] = useState([]);
  const [loadingDrawer, setLoadingDrawer] = useState(false);
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: '',
    country: null,
    state: null,
    providers: [],
    respect_allocations: null,
    active: null,
    physical: null,
    inventort_tracking: null,
    status: null,
    query: null
  });
  const [drawer, setDrawer] = useState({
    isOpen: false,
    orderId: null
  });

  const getOrders = useCallback(async (page, rowsPerPage, sort) => {
    try {
      // let ordersData = await api.get("order", { limit: rowsPerPage, page: (page + 1) })
      //   .then(response => response.json())
      //   .then(data => {
      //     if (page == 0)
      //       setCount(data.num_results || 100)
      //     return data.result || []
      //   })

      let ordersData = getMockOrders();
      if (sort == "asc") {
        ordersData = ordersData.sort((a, b) => a.requested_delivery_date > b.requested_delivery_date ? 1 : -1)
      }
      setOrders(ordersData);
      setLoading(false)
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    // setLoading(true)
    getOrders(page, rowsPerPage, sort);
  },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [page, rowsPerPage, sort]);

  const handleTabsChange = (event, value) => {
    setCurrentTab(value);
    setFilters((prevState) => ({
      ...prevState,
      status: value === 'all' ? undefined : value
    }));
  };

  const handleQueryChange = (event) => {
    event.preventDefault();
    setFilters((prevState) => ({
      ...prevState,
      query: queryRef.current?.value
    }));
  };

  const handleSortChange = (event) => {
    const value = event.target.value;
    setSort(value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleRowsPerPageChange = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
  };

  const handleOpenDrawer = async (orderId) => {
    setLoadingDrawer(true)
    if (orderId) {
      if (orderId == drawer.orderId) {
        !drawer.isOpen && setIsFiltersOpen(false);
        setDrawer({
          ...drawer,
          isOpen: !drawer.isOpen,
        });
        setLoadingDrawer(false)
      } else {
        // let order = await api.get("order/" + orderId)
        //   .then(response => response.json())
        //   .then(data => {
        //     setLoadingDrawer(false)
        //     return data.result
        //   })

        let order = getOneOrder(orderId)
        setLoadingDrawer(false)
        setIsFiltersOpen(false);
        setDrawer({
          order: order,
          isOpen: true,
          orderId: order.id
        });
      }
    }
  };

  const handleCloseDrawer = () => {
    setDrawer({
      ...drawer,
      isOpen: false,
    });
  };

  const handleOpenFilters = () => {
    if (!isFiltersOpen) {
      handleCloseDrawer()
      setIsFiltersOpen(true)
    } else {
      handleCloseFilters()
    }
  }

  const handleCloseFilters = () => {
    setIsFiltersOpen(false)
  }

  // Usually query is done on backend with indexing solutions
  const filteredOrders = applyFilters(orders, filters);



  return (
    <>
      <Box
        component="main"
        ref={rootRef}
        sx={{
          backgroundColor: 'background.paper',
          display: 'flex',
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        <WarehouseListFilters
          containerRef={rootRef}
          filters={filters}
          open={isFiltersOpen}
          onClose={handleCloseFilters}
          providers={[]}
        />
        <OrderListInner open={drawer.isOpen} openFilter={isFiltersOpen}>
          <Box sx={{ px: 3 }}>
            <Grid
              container
              justifyContent="space-between"
              spacing={3}
            >
              <Grid item>
                <Typography variant="h4">
                  Orders
                </Typography>
              </Grid>
              <Grid item sx={{ m: -1 }}>
                <Button
                  startIcon={<FilterAltIcon fontSize="small" />}
                  variant="outlined"
                  sx={{ m: 1 }}
                  onClick={handleOpenFilters}
                >
                  Filters
                </Button>
                <Button
                  startIcon={<PlusIcon fontSize="small" />}
                  variant="contained"
                  sx={{ m: 1 }}
                >
                  Add
                </Button>
              </Grid>
            </Grid>
            <Tabs
              indicatorColor="primary"
              onChange={handleTabsChange}
              scrollButtons="auto"
              textColor="primary"
              value={currentTab}
              sx={{ mt: 3 }}
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
          </Box>
          <Divider />
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexWrap: 'wrap',
              m: -1.5,
              p: 3
            }}
          >
            <Box
              component="form"
              onSubmit={handleQueryChange}
              sx={{
                flexGrow: 1,
                m: 1.5
              }}
            >
              <TextField
                defaultValue=""
                fullWidth
                inputProps={{ ref: queryRef }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon fontSize="small" />
                    </InputAdornment>
                  )
                }}
                placeholder="Search by order number"
              />
            </Box>
            <TextField
              label="Sort By"
              name="order"
              onChange={handleSortChange}
              select
              SelectProps={{ native: true }}
              sx={{ m: 1.5 }}
              value={sort}
            >
              {sortOptions.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </TextField>
          </Box>
          <Divider />
          <OrderListTable
            onOpenDrawer={handleOpenDrawer}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleRowsPerPageChange}
            orders={filteredOrders}
            ordersCount={count}
            page={page}
            rowsPerPage={rowsPerPage}
            loading={loading}
            loadingDrawer={loadingDrawer}
            isDrawerOpen={drawer.isOpen || isFiltersOpen}
          />
        </OrderListInner>
        <OrderDrawer
          containerRef={rootRef}
          onClose={handleCloseDrawer}
          open={drawer.isOpen}
          order={drawer.order}
        />
      </Box>
    </>
  );
};


export default OrderList;
