const express = require("express");
const axios = require("axios");
const { json } = require("express");
const app = express();
const multer = require("multer");
const Blob = require("fetch-blob");
//this pack is installed with bloba pack
const fetch = require("node-fetch");
console.log(Blob)
app.use(express.json());

app.use(express.urlencoded({extended: false}));

var upload = multer({ dest: __dirname + "/" });
var type = upload.single("audio");

const keys = [
  {
    app_id: 508336334759738,
    client_token: "PFH6DN63O6KVIP5KYM2FNSY4YS2PL3WH",
    bearer: "TVRLKJUNLLQHIAUVLIP3RCV2DPTZOIKG",
  },
  {
    app_id: 579385920726285,
    client_token: "BDNRGCSHFNYOALK3MDY5LAGX6E4FN7CV",
    bearer: "QK2D44CVENOMG65N7DF63JVA6UK7ZCX5",
  },
  {
    app_id: 1218776919142474,
    client_token: "2Q4K6K2EWY3E3NOMUGCC5PLHNCW5S4P6",
    bearer: "UNV5CDPMWMQ4N6HLJ5EP6N5JEET5HNMY",
  },
  {
    app_id: 915407876303211,
    client_token: "U4KWDONJ5Y5LZKBPCNVE7SYURUUCSVCO",
    bearer: "A3YLWISVOYHZS7LJBW7HXYXR3VMB3GTP",
  },
  {
    app_id: 855128392370149,
    client_token: "UXQS4RK3IHER7ZGNL77IBGDJP4J6XWNB",
    bearer: "RAOZ2M56XV2RE57ZBWXB4WDC53XL6DWM",
  },
  {
    app_id: 943457886682390,
    client_token: "BJTTHYWDWZTVUHXFSSOUWKN6JSOI55Q2",
    bearer: "5IVT6IGOEL3H3CMX7RS6RIOHCTC6W4S4",
  },
  {
    app_id: 1330061957843371,
    client_token: "DQB2SULUXJMGYHTEBM6JDKXCXYNIMTSJ",
    bearer: "JC2VT2YBUWKUHWRQQPZXALKPAOQLUCRD",
  },
  {
    app_id: 721695223004051,
    client_token: "63EEC36INGLF7F357BDTL5MTHJBWHSZ3",
    bearer: " IGBN2W3PJ6PYGVZR4PC7PH5B72S27RGF",
  },
  {
    app_id: 872411340544118,
    client_token: "QI3GCYLXVEI357VN2NKXGW3A56I534EB",
    bearer: "SLEGGSKHX5ULWPXOULI7BOMNXKH66UZF",
  },
  {
    app_id: 691340222481282,
    client_token: "RSODJA3PG5RMK2QYKFWNU6C3BBMHXEQV",
    bearer: "KVI3O6RUJQZ4ZWUQBCCI2CK5Q5CG6KHY",
  },
  {
    app_id: 1578836205872718,
    client_token: "XNJHVMUM5H2W7G5D72N6CG6ZYEQY5TKH",
    bearer: "5JPGH2OHTCJWHYLXLL4F64X6OZ46VERN",
  },
  {
    app_id: 896998324666540,
    client_token: "PETACGLTNUVYNYAFC4U777LJRJBBZVVL",
    bearer: "7MWMNC2ULYIBY26VJXYYZKSNL7MXKUOD",
  },
  {
    app_id: 592705779365652,
    client_token: "DYCOY2BJC6N2MOVZYRTCWFFMVQSYANPA",
    bearer: "YE7YJ5TJLG5EKGFXBX4VSVSTO5YUYJVG",
  },

  {
    app_id: 1928098187532547,
    client_token: "RTIRWKE77LAKE72BDJGSQG6ZXVDV3K3B",
    bearer: "6MKDADRMEY45X6ENWJIGJNG4V3EKBNL3",
  },
  {
    app_id: 569830321673113,
    client_token: "NXSLQGR5VADWFOUPSFYV5BYVDV2Y3MT6",
    bearer: "UJSEKEGVWT6QCLUNUP2Z7D2YE5L5XHHZ",
  },
  {
    app_id: 1335163960608810,
    client_token: "Y2ZMTTTTZKBK4ZTTAIJSATTLSYF5DUUP",
    bearer: "I5N5WTWEXLNDJONGWZR4DCWQV6FPUSYU",
  },
];

//change the key every 40s
let n = 0;
let key = keys[n];
const keyInterval = setInterval(() => {
  if (n == keys.length) {
    n = 0;
  }
  n++;
  key = keys[n];
}, 40000);

//sending the key and language
app.get("/key", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(
    JSON.stringify({
      english: key.client_token,
    })
  );
});
//get the audio buufer and convert to blob then send it to wit.ai then back the result to the tool
app.post("/", type, async (req, res, next) => {
  let result = {};
  const { audio } = req.body;
  try {
    //https://api.wit.ai/message?v=20230126
    result = await fetch("https://api.wit.ai/speech?v=20221114", {
      mode: "cors",
      method: "POST",
      headers: { Authorization: "Bearer " + key.client_token },
      body: new Blob([audio], { type: "audio/wav" })
    })
  } catch (err) {
    result = null
    console.log(err)
  }
  result = (result) ? await result.json() : {};
  console.log(result)
  res.setHeader('Content-Type', 'application/json');
  res.status(200).send(result);
});

app.listen(3000);
