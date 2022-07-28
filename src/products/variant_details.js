
import {
    Card,
    CardHeader,
    Divider,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import { ProductCustomFields } from './product_custom_fields';
import InfoIcon from '@mui/icons-material/Info';
import { ProductDimensions } from './product_dimensions';
import { PackageDimensions } from './package_dimensions';

export const VariantDetails = (props) => {
    const { variant } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const align = smDown ? 'vertical' : 'horizontal';
    let fields = Object.assign({}, variant);

    return (
        <>
            <Card sx={{ height: "100%" }}>
                <CardHeader
                    title="Variant Details"
                    avatar={<InfoIcon />}
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    {Object.keys(fields).map(field => {
                        if (typeof fields[field] != "object") {
                            return (
                                <>
                                    <PropertyListItem
                                        align={align}
                                        label={field.toLocaleUpperCase()}
                                        value={fields[field].toString()}
                                    />
                                    <Divider />
                                </>
                            )
                        } else {
                            return null
                        }
                    }
                    )}
                </PropertyList>
                <ProductDimensions product={variant} />
                <PackageDimensions product={variant} />
                <ProductCustomFields title="Variant Custom Fields" product={variant} />
            </Card>
        </>
    );
};


