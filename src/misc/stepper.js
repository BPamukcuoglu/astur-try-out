import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import PropTypes from 'prop-types';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { styled } from '@mui/material/styles';

const QontoConnector = styled(StepConnector)(({ theme }) => {
    return ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
      top: 10,
      left: 'calc(-50% + 16px)',
      right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.primary.dark,
      },
    },
    [`&.${stepConnectorClasses.completed}`]: {
      [`& .${stepConnectorClasses.line}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : theme.palette.primary.light,
      },
    },
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
      borderTopWidth: 3,
      borderRadius: 1,
    },
  })});

const StepperComponent = (props) => {
    const { steps, showLabels, activeStep, ...other } = props

    if (showLabels) {
        return (
            <Box sx={{ py: 1, mx: -12 }}>
                <Stepper activeStep={activeStep} alternativeLabel connector={<QontoConnector />}>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Box>
        );
    } else {
        return (
            <Box sx={{ py: 0, mx: -6 }}>
                <Stepper activeStep={activeStep} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{""}</StepLabel>
                        </Step>
                    ))} 
                </Stepper>
            </Box>
        );
    }
}


StepperComponent.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default StepperComponent