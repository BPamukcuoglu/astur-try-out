import { Grid } from '@mui/material';
import { OrderSummary } from './order-summary';
import { OrderFeesDiscounts } from './order-fees-discounts';
import { OrderAddressInformations } from './order-address-informations'
import { OrderItems } from './order-items';
import PropTypes from 'prop-types'
import { allShipAdvices } from '../misc/order-data'
import { ShipAdvicesList } from './ship_advices_list';

export const OrderDetailsTab = (props) => {

    const { order, ...others } = props;

    return (
        <Grid
            container
            spacing={3}
        >
            <Grid
                item
                xs={8}
            >
                <OrderSummary order={order} key={order.id} />
            </Grid>
            <Grid
                item
                xs={4}
            >
                <OrderFeesDiscounts order={order} key={order.id} />
            </Grid>
            <Grid
                item
                xs={12}
            >
                <OrderItems orderItems={order.order_item} />
            </Grid>
            <ShipAdvicesList shipAdvices={allShipAdvices().result} />
            <Grid
                item
                xs={6}
            >
                <OrderAddressInformations information={order.shipping_information} billing />
            </Grid>
            <Grid
                item
                xs={6}
            >
                <OrderAddressInformations information={order.billing_information} />
            </Grid>

        </Grid>
    );
}


OrderDetailsTab.propTypes = {
    order: PropTypes.object.isRequired
}

export default OrderDetailsTab;