import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { recordStepCompletion } from './analytics';

const steps: { [key: number]: string } = {
  1: '/videos/step1.mp4',
  2: '/videos/step2.mp4',
  3: '/videos/step3.mp4',
};

const OnboardingStep = () => {
  const { id } = useParams<{ id: string }>();
  const stepId = parseInt(id || '1', 10);
  const navigate = useNavigate();

  const handleFinish = () => {
    recordStepCompletion();
    navigate('/dashboard');
  };

  return (
    <div className="container">
      <h2>Step {stepId}</h2>
      <video src={steps[stepId]} autoPlay muted loop className="video" />
      <div className="button-group">
        {stepId < 3 && (
          <button className="button" onClick={() => navigate(`/step/${stepId + 1}`)}>
            Next
          </button>
        )}
        {stepId === 3 && (
          <button className="button" onClick={handleFinish}>
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default OnboardingStep;
