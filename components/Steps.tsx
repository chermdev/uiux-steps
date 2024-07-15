"use client"
import { cn } from '@/lib/utils';
import {
  useState,
  createContext,
  useContext,
  type ReactNode,
  type ReactElement,
  useEffect
} from 'react';
import { Icons } from './Icons';

const StepsContext = createContext({
  index: 0,
  setIndex: (i: number) => { },
  maxSteps: 0,
  setMaxSteps: (i: number) => { },
  isFirstStep: true,
  isLastStep: false,
  clickNext: () => { },
  clickBack: () => { }
});

export function Step({ children, className }: {
  children: ReactNode,
  className?: string
}) {
  return (
    <div className={cn(
      'w-full h-full mb-6',
      className
    )}>
      {children}
    </div>
  )
}

export function Steps({ children }: {
  children: ReactElement[]
}) {
  const { index, setMaxSteps } = useContext(StepsContext);
  useEffect(() => {
    setMaxSteps(children.length);
  }, [children.length, setMaxSteps])

  return <div className='flex flex-col w-full h-full pb-6'>
    {
      children[index]
    }
    <div className='p-1 flex flex-row gap-4 mx-auto shrink relative'>
      <div className={cn(
        `absolute top-0 left-0 h-full bg-green-400 rounded-full z-10 transition-all duration-300`,
      )}
        style={{ width: `${1 + index * 1.5}rem` }}
      >
      </div>
      {
        children.map((child, i) => {
          return <div
            key={i}
            className={cn(
              'w-2 h-2 rounded-full bg-white z-20',
              {
                'bg-gray-300': i > index
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
  return <div className='flex flex-row gap-3 w-full relative'>
    {children}
  </div>
}

export function StepSection({ children, className }: {
  children: [
    ReactElement<{
      children: ReactElement[] | ReactElement
    }>,
    ReactElement<{
      children: ReactNode
    }>
  ],
  className?: string
}) {
  const [index, setIndex] = useState(0);
  const [maxSteps, setMaxSteps] = useState(0);
  const clickNext = () => {
    if (index < maxSteps) {
      setIndex(index + 1);
    }
  }
  const clickBack = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  const isFirstStep = index === 0;
  const isLastStep = index === maxSteps - 1;

  return <StepsContext.Provider value={{
    index,
    setIndex,
    maxSteps,
    setMaxSteps,
    isFirstStep,
    isLastStep,
    clickNext,
    clickBack
  }}>
    <div className={cn(
      'w-full flex flex-col justify-between items-center relative overflow-hidden',
      className
    )}>
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
        'px-6 py-3 rounded-full bg-gray-100 transition-all duration-300 animate-in animate-accordion-up absolute left-0',
        {
          '-translate-x-32': isFirstStep
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
    <button
      className={cn(
        'px-6 py-3 rounded-full bg-blue-500 text-white w-full transition-all duration-300 flex flex-row gap-1 items-center justify-center',
        {
          'ml-24': !isFirstStep
        }
      )}
      onClick={() => {
        if (isLastStep) {
          alert('Finish');
        } else {
          clickNext();
        }
      }}
    >
      {
        isLastStep &&
        <Icons.CircleCheckFilled className='inline w-4 h-4' />
      }
      {
        isLastStep ?
          'Finish'
          : children
      }
    </button>
  )
}