import translations from "./nl.json";

export const translate = (
  key: string,
  replacements?: Record<string, string>
) => {
  const keys = key.split(".");
  const translationsObject = JSON.parse(JSON.stringify(translations));
  let result = translationsObject;
  for (const k of keys) {
    if (result[k] === undefined) return key;
    result = result[k];
  }
  return replacements
    ? result.replace(
        /%\{(\w+)\}/g,
        (_: any, replacementKey: string) =>
          replacements[replacementKey] ?? `%{${key}}`
      )
    : result;
  // return result;
};
