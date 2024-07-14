import {
  StepSection,
  Step,
  Steps,
  StepsPagination,
  StepBackButton,
  StepNextButton,
} from "../components/Steps";


export default function Home() {
  return (
    <main className="flex min-h-dvh w-full p-6">
      <StepSection>
        <Steps>
          <Step>
            <h1>Enter your details</h1>
          </Step>
          <Step>
            <h1>Select your appointment</h1>
          </Step>
          <Step>
            <h1>Confirm your appointment</h1>
          </Step>
        </Steps>
        <StepsPagination>
          <StepBackButton>Back</StepBackButton>
          <StepNextButton>Continue</StepNextButton>
        </StepsPagination>
      </StepSection>
    </main>
  );
}
