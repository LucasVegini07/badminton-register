import React, { createContext, useContext, useEffect, useState } from 'react';
import { Text, ToastAlert } from '@develop-fapp/ui-kit-fapp';

interface IGeneral {
  setErrorMessage: (value: string) => void;
  setSuccessMessage: (value: string) => void;
}

const GeneralContext = createContext<IGeneral>({} as IGeneral);

export const useGeneralContext = () => useContext(GeneralContext);

export const GeneralContextProvider: React.FC = ({ children }) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    if (errorMessage) {
      setTimeout(() => {
        setErrorMessage('');
      }, 10000);
    }

    if (successMessage) {
      setTimeout(() => {
        setSuccessMessage('');
      }, 10000);
    }
  }, [errorMessage, successMessage]);

  return (
    <GeneralContext.Provider value={{ setErrorMessage, setSuccessMessage }}>
      {children}
      {errorMessage && (
        <ToastAlert type="error" title="Atenção!" subTitle={errorMessage} />
      )}

      {successMessage && (
        <ToastAlert type="sucess" title="Sucesso!" subTitle={successMessage} />
      )}
    </GeneralContext.Provider>
  );
};
