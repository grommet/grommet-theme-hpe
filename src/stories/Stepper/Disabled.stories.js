// SPDX-FileCopyrightText: © Hewlett Packard Enterprise Development LP
// SPDX-License-Identifier: Apache-2.0
import React, { useState } from 'react';

import { Box, Stepper } from 'grommet';

const DisabledSteps = () => {
  const [currentStep, setCurrentStep] = useState('billing');
  const steps = [
    { id: 'account', title: 'Account', status: 'completed' },
    { id: 'billing', title: 'Billing', status: 'pending' },
    {
      id: 'confirm',
      title: 'Confirm',
      status: 'disabled',
      disabledReason: 'Complete billing first.',
    },
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
  title: 'Theme/Stepper/Disabled Steps',
};

export { DisabledSteps };
