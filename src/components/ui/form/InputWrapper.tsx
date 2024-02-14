import React, { FC, PropsWithChildren } from 'react';

const InputWrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="flex flex-col gap-1 items-start">{children}</div>;
};

export default InputWrapper;
