import fs from "fs";

const name = "skele";
const raw = fs.readFileSync("skele.json");
const {
  data: { token: skeles },
} = JSON.parse(raw);

const optimized = skeles.map(({ id, display_uri, token_attributes: attrs }) => {
  const a = attrs.map((attr) => attr.attribute.value);

  return {
    a,
    i: id,
    u: display_uri.substring(7),
  };
});

fs.writeFile(`min/${name}_min.json`, JSON.stringify(optimized), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
