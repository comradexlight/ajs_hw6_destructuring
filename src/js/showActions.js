export default function showActions(object) {
  const { special } = object;
  const infoAboutAction = [];
  for (const action in special) {
    if (!special[action].description) {
      const {
        id, name, icon, description = 'Описание недоступно',
      } = special[action];
      infoAboutAction.push({
        id, name, icon, description,
      });
    } else {
      infoAboutAction.push(special[action]);
    }
  }
  return infoAboutAction;
}
