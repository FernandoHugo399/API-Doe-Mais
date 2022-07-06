import internal from 'stream'

export interface IGoogleCLoudStorageProvider {
    getBlobStream(file: Express.Multer.File): internal.Writable
}
