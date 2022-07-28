import PropTypes from 'prop-types';
import { useState } from 'react';
import {
    Box,
    Card,
    CardHeader,
    Divider,
    Table,
    Grid,
    TableBody,
    TableCell,
    TableHead,
    LinearProgress,
    TableRow,
    Avatar,
    Paper,
    Typography
} from '@mui/material';
import { Scrollbar } from '../misc/scrollbar';
import DoneIcon from '@mui/icons-material/Done';
import { X } from '../icons/x';
import CategoryIcon from '@mui/icons-material/Category';
import { format } from 'date-fns';
import { salesChannelMap } from '../utils/sales-channels-map';
import { SeverityPill } from '../misc/severity-pill';
import StepperComponent from '../misc/stepper'
import { orderStatusOptions } from "../utils/order-status-options"

export const ShipAdvicesList = (props) => {
    const { shipAdvices, ...other } = props;

    return (<>
        {shipAdvices.map((shipAdvice, index) => (
            <Grid item xs={12}>
                <Card>
                    <CardHeader
                        title={<Box sx={{ display: "flex" }} justifyContent="space-between" >
                            {"Package " + (index + 1) + " of " + shipAdvices.length}
                            <SeverityPill align="right" color={orderStatusOptions[shipAdvice.status].severity} >
                                <Typography
                                    align="right"
                                    variant="subtitle1"
                                >
                                    {shipAdvice.status?.toUpperCase()}
                                </Typography>
                            </SeverityPill>
                        </Box>}
                        avatar={<CategoryIcon />}
                    />
                    <Divider />
                    <Paper {...other} key={index} >
                        <Box
                            sx={{
                                px: 3,
                            }}
                        >
                            <Box sx={{ my: 4 }}>
                                <Grid
                                    container
                                    justifyContent="space-between"
                                >
                                    <Grid item xs={4}>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle2"
                                        >
                                            Requested Ship Date
                                        </Typography>
                                        <Typography variant="body2">
                                            {format(new Date(shipAdvice.requested_ship_date), 'dd MMM yyyy')}
                                        </Typography>
                                        <br />
                                        <Typography
                                            gutterBottom
                                            variant="subtitle2"
                                        >
                                            Requested Delivery Date
                                        </Typography>
                                        <Typography variant="body2">
                                            {format(new Date(shipAdvice.requested_delivery_date), 'dd MMM yyyy')}
                                        </Typography>
                                    </Grid>
                                    <Grid item align="right" xs={8}>
                                        <Typography
                                            variant="subtitle2"
                                            pr={1}
                                        >
                                            Shipped via: USPS-189fas78943jeys78
                                        </Typography>
                                        <br />
                                        <StepperComponent activeStep={shipAdvice.step} showLabels={true} steps={["Accepted", "Shipped", "Delivered"]}></StepperComponent>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box sx={{ mx: -3 }}>
                                <Table>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                Item Name
                                            </TableCell>
                                            <TableCell />
                                            <TableCell align="center">
                                                Quantity
                                            </TableCell>
                                            <TableCell align="center">
                                                Original Quantity
                                            </TableCell>
                                            <TableCell align="center">
                                                Order Item ID
                                            </TableCell>
                                            <TableCell align="center">
                                                2-Day Ship
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {shipAdvice.ship_advice_items.map((item) => (
                                            <TableRow key={item.id}>
                                                <TableCell>
                                                    {item.name}
                                                </TableCell>
                                                <TableCell />
                                                <TableCell align="center">
                                                    {item.quantity}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.quantity_original}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.order_item_id}
                                                </TableCell>
                                                <TableCell align="center">
                                                    {item.is_two_day_ship ? <DoneIcon /> : <X />}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                                {shipAdvice.notes &&
                                    <Box p={3}>
                                        <Typography
                                            variant="subtitle1"
                                        >
                                            Notes
                                        </Typography>
                                        <Typography>
                                            {shipAdvice.notes}
                                        </Typography>
                                    </Box>
                                }
                            </Box>
                        </Box>
                    </Paper>
                </Card>
            </Grid>))}
    </>
    )
}

export default ShipAdvicesList



    // return (
    //     <Card>
    //         <CardHeader
    //             title={"Packages"}
    //             avatar={<CategoryIcon />}
    //         />
    //         <Divider />
    //         {shipAdvices.map((shipAdvice, index) => {
    //             if (openIds.includes(index)) {
    //                 return (<>
    //                     <Paper {...other} key={index} >
    //                         <Box
    //                             sx={{
    //                                 px: 3,
    //                                 pt: 3
    //                             }}
    //                         >
    //                             <Grid
    //                                 container
    //                                 justifyContent="space-between"
    //                                 sx={{ cursor: "pointer" }}
    //                                 onClick={() => { handleClickRow(index) }}
    //                             >
    //                                 <Grid item>
    //                                     <Typography variant="subtitle1">
    //                                         Package {index + 1} of {shipAdvices.length}
    //                                     </Typography>
    //                                 </Grid>
    //                                 <Grid item align="right">
    //                                     <SeverityPill align="right" color={orderStatusOptions[shipAdvice.status].severity} >
    //                                         <Typography
    //                                             align="right"
    //                                             variant="subtitle1"
    //                                         >
    //                                             {shipAdvice.status?.toUpperCase()}
    //                                         </Typography>
    //                                     </SeverityPill>
    //                                 </Grid>
    //                             </Grid>
    //                             <Divider sx={{ my: 3, mx: -4 }} />
    //                             <Box sx={{ my: 4 }}>
    //                                 <Grid
    //                                     container
    //                                     justifyContent="space-between"
    //                                 >
    //                                     <Grid item xs={4}>
    //                                         <Typography
    //                                             gutterBottom
    //                                             variant="subtitle2"
    //                                         >
    //                                             Requested Ship Date
    //                                         </Typography>
    //                                         <Typography variant="body2">
    //                                             {format(new Date(shipAdvice.requested_ship_date), 'dd MMM yyyy')}
    //                                         </Typography>
    //                                         <br />
    //                                         <Typography
    //                                             gutterBottom
    //                                             variant="subtitle2"
    //                                         >
    //                                             Requested Delivery Date
    //                                         </Typography>
    //                                         <Typography variant="body2">
    //                                             {format(new Date(shipAdvice.requested_delivery_date), 'dd MMM yyyy')}
    //                                         </Typography>
    //                                     </Grid>
    //                                     <Grid item align="right" xs={8}>
    //                                         <Typography
    //                                             variant="subtitle2"
    //                                             pr={1}
    //                                         >
    //                                             Shipped via: USPS-189fas78943jeys78
    //                                         </Typography>
    //                                         <br />
    //                                         <StepperComponent activeStep={shipAdvice.step} showLabels={true} steps={["Accepted", "Shipped", "Delivered"]}></StepperComponent>
    //                                     </Grid>
    //                                 </Grid>
    //                             </Box>
    //                             <Box sx={{ mx: -3 }}>
    //                                 <Table>
    //                                     <TableHead>
    //                                         <TableRow>
    //                                             <TableCell>
    //                                                 Item Name
    //                                             </TableCell>
    //                                             <TableCell />
    //                                             <TableCell align="center">
    //                                                 Quantity
    //                                             </TableCell>
    //                                             <TableCell align="center">
    //                                                 Original Quantity
    //                                             </TableCell>
    //                                             <TableCell align="center">
    //                                                 Order Item ID
    //                                             </TableCell>
    //                                             <TableCell align="center">
    //                                                 2-Day Ship
    //                                             </TableCell>
    //                                         </TableRow>
    //                                     </TableHead>
    //                                     <TableBody>
    //                                         {shipAdvice.ship_advice_items.map((item) => (
    //                                             <TableRow key={item.id}>
    //                                                 <TableCell>
    //                                                     {item.name}
    //                                                 </TableCell>
    //                                                 <TableCell />
    //                                                 <TableCell align="center">
    //                                                     {item.quantity}
    //                                                 </TableCell>
    //                                                 <TableCell align="center">
    //                                                     {item.quantity_original}
    //                                                 </TableCell>
    //                                                 <TableCell align="center">
    //                                                     {item.order_item_id}
    //                                                 </TableCell>
    //                                                 <TableCell align="center">
    //                                                     {item.is_two_day_ship ? <DoneIcon /> : <X />}
    //                                                 </TableCell>
    //                                             </TableRow>
    //                                         ))}
    //                                     </TableBody>
    //                                 </Table>
    //                                 {shipAdvice.notes &&
    //                                     <Box p={3}>
    //                                         <Typography
    //                                             variant="subtitle1"
    //                                         >
    //                                             Notes
    //                                         </Typography>
    //                                         <Typography>
    //                                             {shipAdvice.notes}
    //                                         </Typography>
    //                                     </Box>
    //                                 }
    //                             </Box>
    //                         </Box>
    //                     </Paper>
    //                     <Divider />
    //                 </>)
    //             }
    //             else {
    //                 return (<>
    //                     <Paper {...other} key={index}>
    //                         <Box
    //                             sx={{
    //                                 p: 3,
    //                             }}
    //                         >
    //                             <Grid
    //                                 container
    //                                 justifyContent="space-between"
    //                                 sx={{ cursor: "pointer" }}
    //                                 onClick={() => { handleClickRow(index) }}
    //                             >
    //                                 <Grid item sx={2}>
    //                                     <Typography variant="subtitle1">
    //                                         Package {index + 1} of {shipAdvices.length}
    //                                     </Typography>
    //                                 </Grid>
    //                                 <Grid item align="right" sx={2}>
    //                                     <SeverityPill align="right" color={orderStatusOptions[shipAdvice.status].severity} >
    //                                         <Typography
    //                                             align="right"
    //                                             variant="subtitle1"
    //                                         >
    //                                             {shipAdvice.status?.toUpperCase()}
    //                                         </Typography>
    //                                     </SeverityPill>
    //                                 </Grid>
    //                             </Grid>
    //                         </Box>
    //                     </Paper>
    //                     <Divider />
    //                 </>)
    //             }
    //         })}
    //     </Card>

    // );