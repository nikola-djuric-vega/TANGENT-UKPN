import { useDictionaryItems } from '_context/dictionary-items'
import { useState, useCallback, useEffect } from 'react'
import ErrorMessage from '_atoms/ErrorMessage/FormError'
import Button from '_atoms/Button&Link/Button/Button'
import styles from './FileUpload.module.scss'
import { ButtonAppearance } from '_types/CMS'
import { useDropzone } from 'react-dropzone'
import { SUPPORTED_FORMATS } from '_utils'
import Loader from '_atoms/Loader/Loader'
import { IconNames } from '_types/local'
import Icon from '_atoms/Icon/Icon'
import { useField } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

export interface FileUploadComponentProps {
  helperText: string
  label: string
  name: string
  multiple: boolean
  isRequired: boolean
}

export interface FileUploadState {
  sessionId: string
  isLoading: boolean
  uploadedFiles: File[] | []
  error: string
}

export type FileUploadProps = FileUploadComponentProps &
  React.InputHTMLAttributes<HTMLInputElement>

const FileUpload = ({
  name,
  label,
  helperText,
  multiple,
  isRequired,
  ...props
}: FileUploadProps) => {
  const dictionary = useDictionaryItems()
  const fileUploadApiError = dictionary.fileUploadApiError.replace(
    /(<([^>]+)>)/gi,
    ''
  )
  const [field, meta, helpers] = useField(name)
  const [fileUpload, setfileUpload] = useState<FileUploadState>({
    sessionId: '',
    isLoading: true,
    uploadedFiles: [],
    error: '',
  })

  const checkPayloadSize = (value: File[] = []) => {
    const totalFileSizeUpload = [...value, ...fileUpload.uploadedFiles].reduce(
      (prev: number, cur: File) => prev + cur.size,
      0
    )
    return totalFileSizeUpload <= 26214400
  }

  useEffect(() => {
    axios.get('/api/file-upload').then((res) =>
      setfileUpload((prevState) => {
        return {
          ...prevState,
          isLoading: false,
          sessionId: res.data.returnObject,
        }
      })
    )
  }, [])

  const yupValidation = Yup.object().shape({
    files: Yup.mixed()
      .test('fileSize', 'The total upload size is too large', (value) =>
        checkPayloadSize(value)
      )
      .test('fileFormat', 'The uploaded file is not supported', (value) =>
        value.some((file: File) => {
          const fileExtension = '.' + file.name.split('.').pop()
          return SUPPORTED_FORMATS.some(
            (format) =>
              format.type === file?.type || format.ext === fileExtension
          )
        })
      )
      .test(
        'fileAmount',
        'Please select one file at a time',
        (value) => value.length <= 1
      )
      .test('file name', 'File name shall not contain a comma', (value) =>
        value.some((file: File) => !file.name.includes(','))
      ),
  })

  const onDrop = useCallback(
    (files: File[]) => {
      helpers.setTouched(true, false)
      if (files) {
        yupValidation
          .validate({ files: [...files] })
          .then((value) => {
            setfileUpload((prevState) => {
              return {
                ...prevState,
                isLoading: true,
                error: '',
              }
            })
            const filesToUpload = new FormData()

            value.files.map((file: File, i: number) =>
              filesToUpload.append(`file_${i}`, file, file.name)
            )

            if (!multiple && fileUpload.uploadedFiles.length > 0) {
              axios
                .delete(`/api/file-upload?sessionId=${fileUpload.sessionId}`)
                .then((res) => {
                  axios
                    .post(
                      `${process.env.NEXT_PUBLIC_UPLOAD_FILE_ENDPOINT}/${fileUpload.sessionId}/-1`,
                      filesToUpload,
                      {
                        params: {
                          sessionId: fileUpload.sessionId,
                        },
                      }
                    )
                    .then((res) => {
                      setfileUpload((prevState) => {
                        return {
                          ...prevState,
                          isLoading: false,
                        }
                      })
                    })
                    .catch((err) => {
                      setfileUpload((prevState) => {
                        return {
                          ...prevState,
                          isLoading: false,
                          error: fileUploadApiError,
                        }
                      })
                    })

                  helpers.setValue(value.files)

                  setfileUpload((prevState) => {
                    return {
                      ...prevState,
                      uploadedFiles: value.files,
                    }
                  })
                })
                .catch((err) => {
                  setfileUpload((prevState) => {
                    return {
                      ...prevState,
                      isLoading: false,
                      error: fileUploadApiError,
                    }
                  })
                })
            } else {
              axios
                .post(
                  `${process.env.NEXT_PUBLIC_UPLOAD_FILE_ENDPOINT}/${fileUpload.sessionId}/-1`,
                  filesToUpload
                )
                .then((res) => {
                  const newFiles = [
                    ...(multiple ? meta.value : []),
                    ...value.files,
                  ]

                  helpers.setValue(newFiles)

                  setfileUpload((prevState) => {
                    return {
                      ...prevState,
                      isLoading: false,
                      uploadedFiles: newFiles,
                    }
                  })
                })
                .catch((err) => {
                  setfileUpload((prevState) => {
                    return {
                      ...prevState,
                      isLoading: false,
                      error: fileUploadApiError,
                    }
                  })
                })
            }
          })
          .catch((err) => {
            if (multiple && fileUpload.uploadedFiles.length > 1) {
              setfileUpload((prevState) => {
                return {
                  ...prevState,
                  error: err.errors[0],
                }
              })
            } else {
              helpers.setError(err.errors[0])
            }
          })
      }
    },
    [helpers, yupValidation, multiple, fileUpload]
  )

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  const handleFileDelete = (name: string) => {
    setfileUpload((prevState) => {
      return {
        ...prevState,
        isLoading: true,
      }
    })

    axios
      .delete(`/api/file-upload?sessionId=${fileUpload.sessionId}`)
      .then((res) => {
        const filteredFiles =
          fileUpload.uploadedFiles?.filter?.((file: File) => {
            return file.name !== name
          }) || []
        helpers.setValue(filteredFiles)

        setfileUpload((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            uploadedFiles: filteredFiles,
            error: checkPayloadSize(filteredFiles) ? '' : prevState.error,
          }
        })
      })
      .catch((err) => {
        setfileUpload((prevState) => {
          return {
            ...prevState,
            isLoading: false,
            error: fileUploadApiError,
          }
        })
      })
  }

  return (
    <>
      <label
        className={styles.fileUploadLabel}
        {...getRootProps()}
        aria-label={label}
        htmlFor={name}
        id={name}
      >
        <p>
          {label}
          {isRequired && <span> *</span>}
        </p>
        <div className={styles.fileUploadBox}>
          {fileUpload.isLoading ? (
            <Loader />
          ) : (
            <Icon name={IconNames.ICO_UPLOAD} />
          )}
          <p>{helperText}</p>
          <p>{SUPPORTED_FORMATS.map((format) => format.ext).join(', ')}</p>
        </div>
      </label>
      <input
        className={styles.fileUploadInput}
        {...getInputProps()}
        type="file"
        name={name}
        id={name}
        autoComplete="off"
        disabled={fileUpload.isLoading}
        multiple={false}
        hidden
      />
      {meta.value.length > 0 && (
        <div className={styles.fileUploadFiles}>
          {meta.value?.map((file: File, i: number) => (
            <div className={styles.fileUploadSingleFile} key={i}>
              <p>{file.name}</p>
              <p>{`${(file.size / (1024 * 1024)).toFixed(2)}MB`}</p>
              <Button
                appearance={ButtonAppearance.BLANK}
                onClick={() => handleFileDelete(file.name)}
                type="button"
              >
                <Icon name={IconNames.ICO_CLOSE_SMALL} />
                Delete
              </Button>
            </div>
          ))}
        </div>
      )}
      {fileUpload.error && <ErrorMessage errorMessage={fileUpload.error} />}
    </>
  )
}

export default FileUpload
