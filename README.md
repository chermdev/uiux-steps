## Steps animation example

[uiux-steps.vercel.app](https://uiux-steps.vercel.app/)

https://github.com/user-attachments/assets/b4d98c54-7ead-4deb-bf95-231d04db4608

Small project created with ReactJS and Tailwind to replicate these steps animation from this [tweet](https://twitter.com/zzerou_/status/1812509007648846300) created with figma.

https://github.com/user-attachments/assets/4d6e9e76-8c10-4d71-8809-2b5844509f76

## Installation

```bash
pnpm i
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<center>
<img src="./assets/banner.png" height="400px" />
</center>

<br/>

### page.tsx
> `useState` and `useContext` were used in `/components/Steps.tsx` file to manage steps state.
```typescript
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
```
