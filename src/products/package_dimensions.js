import {
    Card,
    CardHeader,
    Divider,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const handleUnitValue = (obj) => {
    if (obj)
        return obj.value + " " + obj.unit.toUpperCase()
    return null
}

export const PackageDimensions = (props) => {
    const { product } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    const align = smDown ? 'vertical' : 'horizontal';

    return (
        <>
            <Card sx={{}}>
                <CardHeader
                    title="Package Dimensions"
                    avatar={<CardGiftcardIcon />}
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Height"
                        value={handleUnitValue(product.fields.package_height) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Length"
                        value={handleUnitValue(product.fields.package_length) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Width"
                        value={handleUnitValue(product.fields.package_width) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Volume"
                        value={handleUnitValue(product.fields.package_volume) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Weight"
                        value={handleUnitValue(product.fields.package_weight) || ""}
                    />
                    <Divider />
                    <PropertyListItem
                        align={align}
                        label="Depth"
                        value={handleUnitValue(product.fields.package_depth) || ""}
                    />
                    <Divider />
                </PropertyList>
            </Card>
        </>
    );
};


