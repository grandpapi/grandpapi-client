export default function monitorInputs(name, mdlSchema = {}) {
  const pattern = /^(\w|-)*$/;

  if(!pattern.test(name)) {
    window.alert('You cannot include non alphaNumeric characters; try using camelCase, kabob-case, or snake_case');
    return false;
  }
  if(name.length > 14) {
    window.alert('One of your fields exceeds the maximum character length of 14');
    return false;
  }

  if(mdlSchema) {
    const monitorArray = Object.keys(mdlSchema).map(key => {
      if(!pattern.test(key) || key.length > 14) {
        return false;
      }
      return true;
    });

    if(monitorArray.includes(false)) {
      window.alert('One of your fields includes improper characters or exceeds the maximum character length of 14');
      return false;
    }

    return true;
  }

}

