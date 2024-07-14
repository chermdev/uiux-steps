"use client"
import { cn } from '@/lib/utils';
import {
  useState,
  createContext,
  useContext,
  type ReactNode,
  type ReactElement
} from 'react';

const StepsContext = createContext({
  index: 0,
  maxSteps: 0,
  isFirstStep: true,
  isLastStep: false,
  clickNext: () => { },
  clickBack: () => { }
});

export function Step({ children }: {
  children: ReactNode
}) {
  return (
    <div>
      {children}
    </div>
  )
}

export function Steps({ children }: {
  children: ReactElement[]
}) {
  const { index, maxSteps } = useContext(StepsContext);
  return <div className='w-full h-full flex flex-col justify-between'>
    <div>
      {
        children[index]
      }
    </div>
    <div className='p-2 w-fit flex flex-row gap-6 transition-all delay-100 mx-auto relative'>
      <div className={cn(
        'absolute top-0 left-0 h-full bg-green-400 rounded-full -z-10 py-3 px-3',
        `w-[${0.5 + 0.5 + 0.5 + index * 2}rem]`,
      )}>
      </div>
      {
        children.map((child, i) => {
          return <div
            key={i}
            className={cn(
              'w-2 h-2 rounded-full bg-white',
              {
                'bg-gray-100': i > index
              }
            )}>
          </div>
        })
      }
    </div>
  </div>
}

export function StepsPagination({ children }: {
  children: ReactNode
}) {
  return <div className='flex flex-row gap-3 w-full'>
    {children}
  </div>
}

export function StepSection({ children }: {
  children: [
    ReactElement<{
      children: ReactElement[] | ReactElement
    }>,
    ReactElement<{
      children: ReactNode
    }>
  ]
}) {
  const [index, setIndex] = useState(0);
  const maxSteps = children.length;
  const clickNext = () => {
    if (index < maxSteps) {
      setIndex(index + 1);
      console.log(index + 1);
    }
  }
  const clickBack = () => {
    if (index > 0) {
      setIndex(index - 1);
      console.log(index - 1);
    }
  }
  const isFirstStep = index === 0;
  const isLastStep = index === maxSteps;

  return <StepsContext.Provider value={{
    index,
    maxSteps,
    isFirstStep,
    isLastStep,
    clickNext,
    clickBack
  }}>
    <div className='w-full space-y-4 flex flex-col justify-between items-center'>
      {children}
    </div>
  </StepsContext.Provider>
}

export function StepBackButton({ children }: {
  children: ReactNode
}) {
  const { isFirstStep, clickBack } = useContext(StepsContext);
  return <button
    className={
      cn(
        'px-6 py-3 rounded-full bg-gray-100 transition-all delay-50',
        {
          '-translate-x-32 absolute': isFirstStep
        }
      )
    }
    onClick={clickBack}
  >
    {children}
  </button>
}

export function StepNextButton({ children }: {
  children: ReactNode
}) {
  const { isFirstStep, isLastStep, clickNext } = useContext(StepsContext);
  return (
    isLastStep ? (
      (
        <button
          className='px-6 py-3 rounded-full bg-blue-500 text-white w-full transition-all delay-100'
        >
          ✅ Finish
        </button>
      )
    ) : (
      <button
        className={cn(
          'px-6 py-3 rounded-full bg-blue-500 text-white w-full transition-all delay-100 relative'
        )}
        onClick={clickNext}
      >
        {children}
      </button>
    )
  )
}