import store from "../store";

export async function generateSigningKeys() {
  try {
    const wasm = import("@wirt/wasm");
    const generateKeypair = (await wasm).generate_signature_keys;
    const pair = JSON.parse(generateKeypair());
    return pair;
  } catch (error) {
    console.error(error);
    throw `WebAssembly key generation: ${error}`;
  }
}

export async function sign(message) {
  try {
    const wasm = import("@wirt/wasm");
    const sign = (await wasm).sign_message;
    const keys = store.state.keys;
    const signature = sign(JSON.stringify(keys), message);
    return { signature, message };
  } catch (error) {
    console.error(error);
    throw `Error when signing message: ${error}`;
  }
}

export async function getKeys() {
  try {
    const wasm = import("@wirt/wasm");
    const generateKeypair = (await wasm).generate_key_pair;
    const pair = JSON.parse(generateKeypair());
    return { private: pair.private_key, public: pair.public_key };
  } catch (error) {
    throw `WebAssembly key generation: ${error}`;
  }
}