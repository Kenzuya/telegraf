import { InputFile } from './core/types/typegram'

/**
 * The local file specified by path will be uploaded to Telegram using multipart/form-data.
 *
 * 10 MB max size for photos, 50 MB for other files.
 */
export const fromLocalFile = (path: string): InputFile => ({ source: path })

/**
 * The buffer will be uploaded as file to Telegram using multipart/form-data.
 *
 * 10 MB max size for photos, 50 MB for other files.
 */
export const fromBuffer = (buffer: Buffer): InputFile => ({ source: buffer })

/**
 * Contents of the stream will be uploaded as file to Telegram using multipart/form-data.
 *
 * 10 MB max size for photos, 50 MB for other files.
 */
// prettier-ignore
export const fromReadableStream = (stream: NodeJS.ReadableStream): InputFile => ({ source: stream })

/**
 * Provide Telegram with an HTTP URL for the file to be sent.
 * Telegram will download and send the file.
 *
 * * The target file must have the correct MIME type (e.g., audio/mpeg for `sendAudio`, etc.).
 * * `sendDocument` with URL will currently only work for GIF, PDF and ZIP files.
 * * To use `sendVoice`, the file must have the type audio/ogg and be no more than 1MB in size.
 * 1-20MB voice notes will be sent as files.
 *
 * 5 MB max size for photos and 20 MB max for other types of content.
 */
// prettier-ignore
export const fromURL = (url: string, filename?: string): InputFile => ({ url, filename })

/**
 * If the file is already stored somewhere on the Telegram servers, you don't need to reupload it:
 * each file object has a file_id field, simply pass this file_id as a parameter instead of uploading.
 *
 * It is not possible to change the file type when resending by file_id.
 *
 * It is not possible to resend thumbnails using file_id.
 * They have to be uploaded using one of the other Input methods.
 *
 * There are no limits for files sent this way.
 */
export const fromFileId = (fileId: string): string => fileId
