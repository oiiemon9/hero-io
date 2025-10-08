const getLocalInstallData = () => {
  const localID = localStorage.getItem('installedID');
  const jsonParse = JSON.parse(localID);
  if (jsonParse) {
    return jsonParse;
  } else {
    return [];
  }
};

const addLocalInstallData = (id) => {
  const oldData = getLocalInstallData();
  const newData = [...oldData, id];
  localStorage.setItem('installedID', JSON.stringify(newData));
};
const removeLocalInstallData = (id) => {
  const oldData = getLocalInstallData();
  const newRemoveData = oldData.filter((data) => parseInt(data) !== id);
  localStorage.setItem('installedID', JSON.stringify(newRemoveData));
};

export { getLocalInstallData, addLocalInstallData, removeLocalInstallData };
