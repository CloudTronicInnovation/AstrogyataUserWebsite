export const astroNotification = (data) => ({
  type: "SET_NOTIFICATION_DATA",
  payload: data,
});

export const removeNotification = () => ({
  type: "REMOVE_NOTIFICATION_DATA",
});
