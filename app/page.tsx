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
    <main className="w-full h-full flex flex-col">
      <StepSection className="h-full p-6 md:max-h-[50rem] md:m-auto">
        <Steps>
          <Step className="w-full md:min-w-[30rem] rounded-xl bg-orange-300 flex items-center justify-center text-4xl font-semibold text-white">Step 1</Step>
          <Step className="w-full md:min-w-[30rem] rounded-xl bg-green-300 flex items-center justify-center text-4xl font-semibold text-white">Step 2</Step>
          <Step className="w-full md:min-w-[30rem] rounded-xl bg-purple-300 flex items-center justify-center text-4xl font-semibold text-white">Step 3</Step>
        </Steps>
        <StepsPagination>
          <StepBackButton>Back</StepBackButton>
          <StepNextButton>Continue</StepNextButton>
        </StepsPagination>
      </StepSection>
    </main>
  );
}
