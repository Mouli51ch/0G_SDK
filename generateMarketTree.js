import pkg from 'zerog-da-sdk';
const { NHFile } = pkg;


const file = await NHFile.fromFilePath('path/to/file');
const [tree, err] = await file.merkleTree();
if (err === null) {
  console.log("File Root Hash: ", tree.rootHash());
}
await file.close();