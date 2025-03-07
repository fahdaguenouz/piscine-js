function replica(target, ...obj) {

  let res = { ...target };

  for (const k of obj) {
    for (const key of Object.keys(k)) {
      const kValue = k[key];
      if (
        typeof kValue === 'object' &&
        typeof res[key] === 'object' &&
        !Array.isArray(kValue) &&
        !Array.isArray(res[key])
      ) {
        res[key] = replica(res[key], kValue);
      } else {
        res[key] = kValue;
      }
    }
  }

  return res;
}