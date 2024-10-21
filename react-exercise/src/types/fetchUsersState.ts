export type ProgressState = {
    type: "progress";
  };

  export type SuccessState = {
    type: "success";
  };
  
  export type FailureState = {
    type: "failure";
    errorMessage: string;
  };
  
  export type FetchState = ProgressState | SuccessState | FailureState;
  