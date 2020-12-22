import * as React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import { Box, Divider, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'row',
    padding: '16px 0 0',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  spacer: {
    flex: '1 1 auto',
  },
  instructions: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const defaultSteps = [
  { label: 'Select campaign settings', content: <h1>CONTENT</h1> },
  { label: 'Create an ad group', content: <h1>CONTENT</h1> },
  { label: 'Create an ad', content: <h1>CONTENT</h1> },
];

export default function ChristmasStepper({
  steps = defaultSteps,
  completed,
  finishedContent,
}) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <Box
      component={Paper}
      sx={{
        p: 2,
        width: 400,
      }}
    >
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map(({ label }) => {
          return (
            <Step key={label}>
              <StepLabel>{''}</StepLabel>
            </Step>
          );
        })}
      </Stepper>

      <Box
        sx={{
          my: 2,
          height: 600,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Divider flexItem />
        <Box sx={{ my: 1, flex: 1 }}>{steps[activeStep].content}</Box>
        <Divider flexItem />
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          className={classes.button}
        >
          Back
        </Button>

        <Button
          color="inherit"
          onClick={handleNext}
          disabled={activeStep === completed}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Box>
  );
}
