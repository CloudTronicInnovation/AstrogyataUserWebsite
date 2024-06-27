// export const SET_KUNDLI_DATA = 'SET_KUNDLI_DATA';

export const setKundliData = (data) => ({
  type: "SET_KUNDLI_DATA",
  payload: data,
});

export const resetData = () => ({
  type: "RESET_DATA",
});
