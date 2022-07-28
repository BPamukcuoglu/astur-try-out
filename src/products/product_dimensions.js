
import {
    Card,
    CardHeader,
    Divider,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import StraightenIcon from '@mui/icons-material/Straighten';

const handleUnitValue = (obj) => {
    if (obj)
        return obj.value + " " + obj.unit.toUpperCase()
    return null
}

export const ProductDimensions = (props) => {
    const { product } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <>
            <Card sx={{}}>
                <CardHeader
                    title="Product Dimensions"
                    avatar={<StraightenIcon />}
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Height"
                        value={handleUnitValue(product.fields.height) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Length"
                        value={handleUnitValue(product.fields.length) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Width"
                        value={handleUnitValue(product.fields.width) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Volume"
                        value={handleUnitValue(product.fields.volume) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Weight"
                        value={handleUnitValue(product.fields.weight) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Depth"
                        value={handleUnitValue(product.fields.depth) || ""}
                    />
                    <Divider />
                </PropertyList>
            </Card>
        </>
    );
};


