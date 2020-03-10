import Socket from "../util/Socket";
import { testEPs } from "../Config.json";

const { testEP,  userEP, mdtoEP, mdtoPEP, resultEP} = testEPs;

async function test() {
  return await Socket.GET(testEP);
}

async function user(age, gender) {
  const payLoad = {
    age: age,
    gender: gender
  };
  return await Socket.POST(userEP, payLoad);
}

async function getMDTO() {
  return await Socket.POST(mdtoEP);
}


async function getPMDTO() {
  const payLoad = {
  };
  return await Socket.POST(mdtoPEP);
}

async function resultMDTO(skey, tkey, slist, tlist) {
  const payLoad = {
    results: {
      studyKey: skey,
      testKey: tkey,
      resp: [slist, tlist]
    }
  };
  console.log(payLoad);
  return await Socket.POST(resultEP, payLoad);
}

export default {
  test, user, getMDTO, getPMDTO, resultMDTO
};
