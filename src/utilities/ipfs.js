import * as IPFS from "ipfs-core";

export const createFile = (data, name) => {
  // You can create File objects from a Blob of binary data
  // see: https://developer.mozilla.org/en-US/docs/Web/API/Blob
  // Here we're just storing a JSON object, but you can store images,
  // audio, or whatever you want!

  const blob = new Blob([data], { type: "application/json" });
  const files = [new File([blob], name)];
  return files;
};

export const createIpfsObj = async (file) => {
  try {
    const ipfs = await IPFS.create();
    const { cid } = await ipfs.add(file);
    console.info(cid);
    return cid;
  } catch (error) {
    console.error("Error uploading file: ", error);
  }
};
