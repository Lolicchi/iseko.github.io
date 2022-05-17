console.log(
  `Iseko {${Object.entries(Deno.version).map(
    ([key, value]) => ` ${key}: '${value}'`
  )} }`
)
