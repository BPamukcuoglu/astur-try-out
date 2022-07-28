import { useCallback, useState, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Tab,
  Tabs,
  Typography
} from '@mui/material';
import LabelIcon from '@mui/icons-material/Label';
import { useMounted } from '../orders/useMounted';
import { ChevronDown as ChevronDownIcon } from '../icons/chevron-down';
import { PencilAlt as PencilAltIcon } from '../icons/pencil-alt';
import { ProductDetailsTabs } from './product_details_tab';
import { getOneMockProduct } from './product_data';
import { VariantDetailsTabs } from './variants_tab';

const tabs = [
  { label: 'Details', value: 'details' },
  { label: 'Variants', value: 'variants' },
];

export const ProductDetails = () => {
  const isMounted = useMounted();

  const product = getOneMockProduct()
  const [currentTab, setCurrentTab] = useState('details');

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

  if (!product) {
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
                  {"Amazing Product From Future Pro Max"}
                </Typography>
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1,
                    mt: 1
                  }}
                >
                  <LabelIcon
                    color="action"
                    fontSize="small"
                    sx={{ ml: 1 }}
                  />
                  <Typography
                    color="textSecondary"
                    variant="body2"
                    sx={{ ml: 1 }}
                  >
                    SKU: {product.sku.sku}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ ml: 1 }}
                  >
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
            {currentTab === 'details' && <ProductDetailsTabs product={product} />}
            {currentTab === 'variants' && <VariantDetailsTabs product={product} />}
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ProductDetails;

