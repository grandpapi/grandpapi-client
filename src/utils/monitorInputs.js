export default function monitorInputs(name, mdlSchema = {}) {
  if(name.includes(' ')) {
    window.alert('You cannot include spaces; try using camelCase, kabob-case, or snake_case');
    return false;
  }
  if(name.length > 14) {
    window.alert('One of your fields exceeds the maximum character length of 14');
    return false;
  }

  if(mdlSchema) {
    const monitorArray = Object.keys(mdlSchema).map(key => {
      if(key.includes(' ') || key.length > 14) {
        return false;
      }
      return true;
    });

    if(monitorArray.includes(false)) {
      window.alert('One of your fields includes a space or exceeds the maximum character length of 14');
      return false;
    }

    return true;
  }

}

