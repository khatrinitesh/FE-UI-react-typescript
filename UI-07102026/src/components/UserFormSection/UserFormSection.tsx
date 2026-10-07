import { useForm } from 'react-hook-form'

type FormValues = {
  name: string
  email: string
  age: number
}

export function UserFormSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormValues>({
    defaultValues: {
      name: '',
      email: '',
      age: 18,
    },
  })

  const onSubmit = (data: FormValues) => {
    console.log(data)

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4"
    >
      <div>
        <label className="mb-1 block text-sm font-medium">
          Name
        </label>

        <input
          {...register('name', {
            required: 'Name is required',
          })}
          className="w-full rounded-md border px-3 py-2"
          placeholder="John Doe"
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Email
        </label>

        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Invalid email address',
            },
          })}
          className="w-full rounded-md border px-3 py-2"
          placeholder="john@example.com"
        />

        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium">
          Age
        </label>

        <input
          type="number"
          {...register('age', {
            valueAsNumber: true,
            min: {
              value: 18,
              message: 'Minimum age is 18',
            },
          })}
          className="w-full rounded-md border px-3 py-2"
        />

        {errors.age && (
          <p className="mt-1 text-sm text-red-500">
            {errors.age.message}
          </p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-md bg-black px-4 py-2 text-white disabled:opacity-50"
      >
        Submit
      </button>
    </form>
  )
}