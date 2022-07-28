import { Grid } from '@mui/material';
import { ProductBasicDetails } from './product_basic_details';
import { ProductPricingDetails } from './product_pricing_details';
import { ProductCustomFields } from './product_custom_fields';
import { ProductImages } from './product_images';
import { ProductDimensions } from './product_dimensions';
import { PackageDimensions } from './package_dimensions';
import { ProductSalesChannels } from './product_sales_channels';
import { ProductWarehouses } from './product_warehouses';

export const ProductDetailsTabs = (props) => {

    const { product } = props;

    return (
        <Grid
            container
            spacing={3}
        >
            <Grid
                item
                xs={8}
            >
                <ProductBasicDetails product={product} />
            </Grid>
            <Grid
                item
                xs={4}
            >
                <ProductImages product={product} />
            </Grid>
            <Grid item xs={12}>
                <ProductSalesChannels />
            </Grid>
            <Grid
                item
                xs={6}
            >
                <ProductCustomFields product={product} />
            </Grid>
            <Grid
                item
                xs={6}
            >
                <ProductWarehouses />
            </Grid>
            <Grid
                item
                xs={4}
            >
                <ProductPricingDetails product={product} />
            </Grid>
            <Grid
                item
                xs={4}
            >
                <ProductDimensions product={product} />
            </Grid>
            <Grid
                item
                xs={4}
            >
                <PackageDimensions product={product} />
            </Grid>
        </Grid>
    );
}

export default ProductDetailsTabs;