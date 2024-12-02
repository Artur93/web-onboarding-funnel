const COMPLETED_USERS_KEY = 'completedUsers';

export const getCompletedUsers = (): number => {
  return parseInt(localStorage.getItem(COMPLETED_USERS_KEY) || '0', 10);
};

export const recordStepCompletion = () => {
  const currentCount = getCompletedUsers();
  localStorage.setItem(COMPLETED_USERS_KEY, (currentCount + 1).toString());
};
