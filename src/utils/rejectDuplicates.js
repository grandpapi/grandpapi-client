
export default function rejectDuplicateDbs(userDbs, input) {
  const lowerDbNames = userDbs.map(db => db.dbName.toLowerCase());
  if(lowerDbNames.includes(input.toLowerCase())) {
    window.alert('You already have a database by that name, choose another!');
    return false;
  }
  return true;

}

