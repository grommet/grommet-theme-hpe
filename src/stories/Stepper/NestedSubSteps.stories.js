import React, { useState } from 'react';

import { Box, Text, Stepper } from 'grommet';

const NestedSubSteps = () => {
  const [currentStep, setCurrentStep] = useState('email');
  const steps = [
    {
      id: 'account',
      title: 'Account Setup',
      children: [
        { id: 'email', title: 'Email', status: 'completed' },
        {
          id: 'password',
          title: 'Password',
          status: 'pending',
        },
      ],
    },
    {
      id: 'profile',
      title: 'Profile Setup',
      children: [
        { id: 'name', title: 'Name', status: 'pending' },
        {
          id: 'photo',
          title: 'Photo',
          status: 'error',
          errorMessage: 'Please upload a valid photo.',
        },
      ],
    },
    { id: 'confirm', title: 'Confirm', status: 'pending' },
  ];
  return (
    <Box pad="large" gap="medium">
      <Stepper
        steps={steps}
        currentStep={currentStep}
        direction="vertical"
        aria-label="Account setup progress"
        onStepClick={(id) => setCurrentStep(id)}
      />
      <Text>
        Parent:{' '}
        {steps.find((s) => s.children?.some((c) => c.id === currentStep))
          ?.title || 'None'}
      </Text>
      <Text>Current Step: {currentStep}</Text>
    </Box>
  );
};

export default {
  title: 'Theme/Stepper/Nested Sub-Steps',
};

export { NestedSubSteps };
