
import {
    Card,
    CardHeader,
    Divider,
    Typography,
    Stack,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import GradingIcon from '@mui/icons-material/Grading';

const sanitizeDimensionsFromProduct = (fields) => {

    delete fields.width
    delete fields.weight
    delete fields.height
    delete fields.volume
    delete fields.length
    delete fields.depth

    delete fields.package_width
    delete fields.package_weight
    delete fields.package_height
    delete fields.package_volume
    delete fields.package_length
    delete fields.package_depth

    return fields

}

const ColorField = ({ color }) => {
    return (
        <Stack direction={"row"} >
            <Typography
                variant="body2"
            >
                {color}
            </Typography>
            <div style={{ height: 10, width: 10, display: "flex", alignSelf: "center", marginLeft: "6px", backgroundColor: color }}></div>
        </Stack>
    );
}

export const ProductCustomFields = (props) => {
    const { product, title, notSanitizeDimensions } = props;
    const smDown = useMediaQuery((theme) => theme.breakpoints.down('sm'));
    const align = smDown ? 'vertical' : 'horizontal';
    let fields = Object.assign({}, product.fields);
    if (!notSanitizeDimensions)
        fields = sanitizeDimensionsFromProduct(fields);

    return (
        <>
            <Card sx={{ height: "100%" }}>
                <CardHeader
                    title={title || "Product Fields"}
                    avatar={<GradingIcon />}
                />
                <Divider />
                <PropertyList>
                    <Divider />
                    {Object.keys(fields).map(field => (
                        <>
                            <PropertyListItem
                                align={align}
                                label={field.toLocaleUpperCase()}
                                value={
                                    typeof fields[field] === "object"
                                        ? JSON.stringify(fields[field])
                                        : field.toLocaleUpperCase() === "COLOR"
                                            ? <ColorField color={fields[field]} />
                                            : fields[field].toString()
                                }
                            />
                            <Divider />
                        </>
                    ))}
                </PropertyList>
            </Card>
        </>
    );
};


