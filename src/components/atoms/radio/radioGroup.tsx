"use client";
import { RadioGroupState, useRadioGroupState } from "react-stately";
import {
  AriaRadioGroupProps,
  AriaRadioProps,
  useRadio,
  useRadioGroup,
  VisuallyHidden,
} from "react-aria";
import { createContext, ReactNode, useContext, useRef } from "react";

const RadioContext = createContext<RadioGroupState | null>(null);

interface RadioGroupProps extends AriaRadioGroupProps {
  children: ReactNode;
}

interface RadioProps extends AriaRadioProps {}

function RadioGroup(props: RadioGroupProps) {
  const { children, label } = props;
  const state = useRadioGroupState(props);
  const { radioGroupProps, labelProps, descriptionProps, errorMessageProps } =
    useRadioGroup(props, state);

  return (
    <div {...radioGroupProps}>
      <span {...labelProps}>{label}</span>
      <RadioContext.Provider value={state}>{children}</RadioContext.Provider>
    </div>
  );
}

function IconRadio(props: RadioProps & {}) {
  const { children } = props;
  const state = useContext(RadioContext);
  const ref = useRef(null);
  const { inputProps } = useRadio(props, state!, ref);

  return (
    <label style={{ display: "block" }}>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
}
function TextRadio(props: RadioProps) {
  const { children } = props;
  const state = useContext(RadioContext);
  const ref = useRef(null);
  const { inputProps } = useRadio(props, state!, ref);

  return (
    <label style={{ display: "block" }}>
      <VisuallyHidden>
        <input {...inputProps} ref={ref} />
      </VisuallyHidden>
      {children}
    </label>
  );
}

export default RadioGroup;
