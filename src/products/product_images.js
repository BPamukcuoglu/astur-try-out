



import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {
    Card,
    CardHeader,
    CardActions,
    Divider,
    Typography,
    Stack,
    Avatar,
    useMediaQuery
} from '@mui/material';
import { PropertyList } from '../misc/property-list';
import { PropertyListItem } from '../misc/property-list-item';
import ImageIcon from '@mui/icons-material/Image';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export const ProductImages = (props) => {
    const { product } = props;
    const [activeStep, setActiveStep] = React.useState(0);
    const images = product.images.default
    const maxSteps = images.length;
    const theme = useTheme();
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <>
            <Card sx={{ height: "100%" }}>
                <CardHeader
                    title="Product Images"
                    avatar={<ImageIcon />}
                />
                <Divider />
                <Box sx={{ flexGrow: 1 }}>
                    <Paper
                        square
                        elevation={0}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            pl: 2,
                            bgcolor: 'background.default',
                        }}
                    >
                        <Typography>{images[activeStep].alt}</Typography>
                    </Paper>
                    <AutoPlaySwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            display: 'block',
                                            overflow: 'hidden',
                                            objectFit: "cover",
                                            width: "100%"
                                        }}
                                        src={step.url}
                                        alt={step.alt}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                </Box>
                <Divider />
                <CardActions sx={{ p: 0 }}  >
                    <MobileStepper
                        steps={maxSteps}
                        position="static"
                        sx={{ width: "100%", bgcolor: theme.palette.background.paper }}
                        activeStep={activeStep}
                        nextButton={
                            <Button
                                size="small"
                                onClick={handleNext}
                                disabled={activeStep === maxSteps - 1}
                            >
                                Next
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowLeft />
                                ) : (
                                    <KeyboardArrowRight />
                                )}
                            </Button>
                        }
                        backButton={
                            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                                {theme.direction === 'rtl' ? (
                                    <KeyboardArrowRight />
                                ) : (
                                    <KeyboardArrowLeft />
                                )}
                                Back
                            </Button>
                        }
                    />
                </CardActions>
            </Card>
        </>
    );
};

export default ProductImages


