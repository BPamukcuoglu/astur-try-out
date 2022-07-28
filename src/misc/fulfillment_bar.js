import PropTypes from "prop-types";
import {
    LinearProgress,
    Typography
} from '@mui/material'


const calculateFulfilledItems = (order) => {
    let fulfilledCount = 0;
    order.order_item?.map(item => {
        fulfilledCount += item.shipped
    })
    return fulfilledCount
}

const calculateOrderItems = (order) => {
    let orderItems = 0;
    order.order_item?.map(item => {
        orderItems += item.quantity
    })
    return orderItems
}

export const FulfillmentBar = (props) => {

    let { fulfilled, total, order, orderItem } = props

    if (!fulfilled && !total) {
        if (order) {
            fulfilled = calculateFulfilledItems(order)
            total = calculateOrderItems(order)
        } else if (orderItem) {
            fulfilled = orderItem.shipped
            total = orderItem.quantity
        } else {
            throw Error("Nothing provided!")
        }
    }

    return (
        <>
            <LinearProgress
                value={(fulfilled / total) * 100}
                variant="determinate"
                color={
                    fulfilled == total ? 'primary'
                        : fulfilled >= total / 2 ? 'warning'
                            : 'error'}
                sx={{
                    height: 8,
                    width: "100%"
                }}
            />
            <Typography
                color="textSecondary"
                variant="body2"
                textOverflow="ellipsis"
            >
                {fulfilled}
                {' of '}
                {total}
                {' fulfilled.'}
            </Typography>
        </>

    )

}

FulfillmentBar.propTypes = {
    fulfilledCount: PropTypes.number,
    total: PropTypes.number,
    order: PropTypes.object,
    orderItem: PropTypes.object
}

export default FulfillmentBar;