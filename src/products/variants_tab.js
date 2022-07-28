import { Grid } from '@mui/material';
import { VariantDetails } from './variant_details'
export const VariantDetailsTabs = (props) => {

    const { product } = props;

    return (
        <Grid
            container
            spacing={3}
        >
            {product.variants.map((variant, index) => (
                <Grid item xs={6}>
                    <VariantDetails variant={variant} key={index} />
                </Grid>
            ))}
        </Grid>
    );
}

export default VariantDetailsTabs;