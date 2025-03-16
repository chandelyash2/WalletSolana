import SelectToken from "./selecttoken";
import { useState } from "react";

interface StepType {
  id: number;
  value: number;
  Component: React.FC<{
    active: number;
    setActive: Function;
  }>;
}

const SendProps: StepType[] = [
  {
    id: 0,
    value: 1,
    Component: SelectToken,
  }
];

const Send: React.FC = () => {
  const [steps] = useState<StepType[]>(SendProps);
  const [active, setActive] = useState(0);

  return (
    <div>
      {steps.map((step) => {
        const { Component, id } = step;
        return (
          <>
            {active === id && (
              <Component
                active={active}
                setActive={setActive}
              />
            )}
          </>
        );
      })}
    </div>
  );
};

export default Send;


