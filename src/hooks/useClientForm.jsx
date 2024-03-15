import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react'

import { ERROR_TYPE_FIELDS } from '../types/ErrorsTypes'

const useClientForm = ({customSchema, initValues, isAsync = true}) => {
    const [data, setData] = useState(null)

    const { register, setError, handleSubmit, clearErrors, reset, formState: {errors}, getValues, setValue } = useForm({ resolver: yupResolver(customSchema), mode: "onchange" })

    const resetValue = () => {
        reset(initValues, {
            keepErrors: false, 
            keepDirty: false,
            keepIsSubmitted: false,
            keepTouched: false,
            keepIsValid: false,
            keepSubmitCount: false,
        })
    }

    const setErrorsByFields = (fields) => {
        for (const key in fields) {
            const message = fields[key]

            setError(key, { type: 'custom', message });
        }
    }

    const setErrorsByErr = (err) => {
        if (err?.response) {
            const { data } = err.response

            if (data?.errType === ERROR_TYPE_FIELDS) setErrorsByFields(data.fields)
        }
    }

    const onSubmit = async (_data) => {
        if (isAsync) {

        }

        setData(_data)
        alert('TEST')
    }

    return {
        data,
        errors,
        register,
        resetValue,
        setErrorsByErr,
        setErrorsByFields,
        onSubmit: handleSubmit(onSubmit),
        getValues,
        setValue
    }
}

export default useClientForm