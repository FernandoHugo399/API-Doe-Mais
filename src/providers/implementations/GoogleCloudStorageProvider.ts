import { IGoogleCLoudStorageProvider } from './../IGoogleCloudStorage'
import { Bucket, Storage } from '@google-cloud/storage'
import path from 'path'
import internal from 'stream'

export class GoogleCloudProvider implements IGoogleCLoudStorageProvider {
  private bucket: Bucket
  private projectId = process.env.GCLOUD_ID
  private bucketName = this.projectId + '.appspot.com'

  constructor () {
    const gcs = new Storage({
      projectId: this.projectId,
      keyFilename: path.join(__dirname, '..', '..', 'config', 'service-account.json')
    })
    this.bucket = gcs.bucket(this.bucketName)
  }

  public getBlobStream (file: Express.Multer.File): internal.Writable {
    const now = Date.now().toString().substring(0, 10)
    const blob = this.bucket.file(now + file.originalname)
    const blobStream = blob.createWriteStream()
    return blobStream
  }
}
