const { NHFile, NHProvider } = require('zerog-da-sdk');

// ZeroG Storage RPC endpoint
const nhRpc = 'https://rpc-storage-testnet.0g.ai';
const nhProvider = new NHProvider(nhRpc);

async function storeTranscript(filePath) {
  try {
    // Create an NHFile object from a file path
    const file = await NHFile.fromFilePath(filePath);

    // Upload the file to ZeroG Storage
    await nhProvider.uploadFile(file);

    console.log(Transcript stored successfully: ${filePath});
  } catch (error) {
    console.error('Error storing transcript:', error);
  }
}

// Usage example: node storeTranscript.js path/to/podcast_transcript.txt
const filePath = process.argv[2];
if (filePath) {
  storeTranscript(filePath);
} else {
  console.error('Usage: node storeTranscript.js <path_to_transcript_file>');
}