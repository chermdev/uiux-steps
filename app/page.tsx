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
    <main className="flex min-h-dvh w-full">
      <StepSection className="md:max-h-[50rem] md:max-w-[25rem] md:mx-auto p-6">
        <Steps>
          <Step className="rounded-xl bg-orange-300 flex items-center justify-center text-4xl font-semibold text-white">Step 1</Step>
          <Step className="rounded-xl bg-green-300 flex items-center justify-center text-4xl font-semibold text-white">Step 2</Step>
          <Step className="rounded-xl bg-purple-300 flex items-center justify-center text-4xl font-semibold text-white">Step 3</Step>
        </Steps>
        <StepsPagination>
          <StepBackButton>Back</StepBackButton>
          <StepNextButton>Continue</StepNextButton>
        </StepsPagination>
      </StepSection>
    </main>
  );
}
