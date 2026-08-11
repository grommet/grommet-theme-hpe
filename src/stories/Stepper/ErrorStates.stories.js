import React, { useState } from 'react';

import { Box, Stepper } from 'grommet';

const ErrorStates = () => {
  const [currentStep, setCurrentStep] = useState('billing');
  const steps = [
    { id: 'account', title: 'Account', status: 'completed' },
    {
      id: 'billing',
      title: 'Billing',
      status: 'error',
      errorMessage: 'Card number is invalid.',
    },
    { id: 'review', title: 'Review', status: 'pending' },
  ];
  return (
    <Box pad="large">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepClick={(id) => setCurrentStep(id)}
      />
    </Box>
  );
};

export default {
  title: 'Theme/Stepper/Error States',
};

export { ErrorStates };
