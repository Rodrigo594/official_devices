//
// Copyright © 2019 PixelExperience Project
//
// SPDX-License-Identifier: GPL-3.0
//

let fs = require('fs');

try {
    console.log("Linting devices.json");
    let data = fs.readFileSync("devices.json");
    let _json = JSON.parse(data);
    let new_json = JSON.stringify(_json, null, 3);
    fs.writeFileSync("devices.json", new_json);
}
catch (e) {
    console.log("Lint Failure as devices.json has improper json format!")
    fs.writeFileSync("/tmp/failedfile","devices.json")
    process.exit(1);
  }

finally {
    console.log("Lint Success!")
}
