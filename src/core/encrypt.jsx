import CryptoJS from "crypto-js";

const secretKey = process.env.REACT_APP_KEY; // 32자리 비밀키
const iv = "abcdefghijklmnop"; // 16자리 iv

export const encrypt = (text) => {
  const cipher = CryptoJS.AES.encrypt(
    text,
    CryptoJS.enc.Utf8.parse(secretKey),
    {
      iv: CryptoJS.enc.Utf8.parse(iv),
      padding: CryptoJS.pad.Pkcs7,
      mode: CryptoJS.mode.CBC,
    }
  );

  return cipher.toString();
};
