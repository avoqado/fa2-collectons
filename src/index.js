import fs from "fs";
import { ranks } from "./moments.js";

const optimized = {};
const name = "moments";

for (const [key, value] of Object.entries(ranks)) {
  optimized[key] = {
    r: value.rank,
    u: value.displayUri,
    a: value.attributes.length - 1,
  };
}

fs.writeFile(`${name}_min.json`, JSON.stringify(optimized), (err) => {
  if (err) {
    console.error(err);
    return;
  }
});
