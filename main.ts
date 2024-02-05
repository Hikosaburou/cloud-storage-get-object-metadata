import { Storage } from 'npm:@google-cloud/storage';

const projectId = Deno.args[0];
const bucketName = Deno.args[1];
const objectKey = Deno.args[2];

// Google Cloud Storageクライアントを初期化します
const storage = new Storage({
  projectId,
});

async function getFileContentType() {
  try {
    // ファイルオブジェクトを取得します
    const file = storage.bucket(bucketName).file(objectKey);

    // ファイルのメタデータを取得します
    const [metadata] = await file.getMetadata();

    // Content-Typeをログに出力します
    console.log(`Content-Type: ${metadata.contentType}`);
  } catch (error) {
    console.error('Error getting file metadata:', error);
  }
}

// 関数を実行します
getFileContentType();