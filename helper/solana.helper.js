const bip39 =  require("bip39");
const { Keypair } =  require("@solana/web3.js");
const { derivePath } = require("ed25519-hd-key");
const bs58 = require("bs58");

const generateWalletAddress = async () => {
  const newMnemonic = bip39.generateMnemonic();
  console.log('newMnemonic', newMnemonic);
  const seed = await bip39.mnemonicToSeed(newMnemonic);
  console.log('seed', JSON.stringify(seed));
  console.log('see string', seed.toString('hex'));
  const derived = derivePath("m/44'/501'/0'/0'", seed.toString('hex')).key;
  const keypair = Keypair.fromSeed(derived);
  console.log('keypair', keypair.secretKey);
  const secretKey = bs58.encode(keypair.secretKey);
  console.log('secretPhrase', secretKey);
  const publicKey = keypair.publicKey.toBase58();

  return {
    privateKeyArr: keypair?.secretKey,
    secretPhrase: newMnemonic,
    privateKey: secretKey,
    publicKey: publicKey,
  };
};

const recoverWallet = async (secretPhrase)=> {
  console.log("got secret phrase : ",secretPhrase)
  if(secretPhrase){
    const seed = await bip39.mnemonicToSeed(secretPhrase.trim());
    console.log('seed',JSON.stringify(seed))
    console.log("see string",seed.toString("hex"))
    const derived = derivePath("m/44'/501'/0'/0'", seed.toString("hex")).key;
    const keypair = Keypair.fromSeed(derived);
    console.log('keypair',keypair.secretKey)
    const secretKey = bs58.encode(keypair.secretKey);
    console.log("secretPhrase",secretKey);
    const publicKey = keypair.publicKey.toBase58();
    return{
        privateKeyArr:keypair?.secretKey,
        secretPhrase:secretPhrase,
        privateKey:secretKey,
        publicKey:publicKey
      }
  }
  else{
    return;
  }
}

module.exports = {
  generateWalletAddress,
  recoverWallet
};
