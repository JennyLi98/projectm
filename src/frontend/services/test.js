import Socket from "../util/Socket";
import { testEPs } from "../Config.json";

const { testEP,  userEP, mdtoEP} = testEPs;

async function test() {
  return await Socket.GET(testEP);
}

async function user(email, age, gender) {
  const payLoad = {
    age: age,
    gender: gender,
    email: email
  };
  return await Socket.POST(userEP, payLoad);
}

async function getMDTO(uid) {
  const payLoad = {
    user_id: uid
  };
  return await Socket.POST(mdtoEP, payLoad);
}


export default {
  test, user, getMDTO
};
