export type FormValues = Record<string, unknown>;

export type Validator<TValue, TValues extends FormValues> = (
  value: TValue,
  values: TValues,
) => string | undefined;

export type ValidationSchema<TValues extends FormValues> = {
  [Key in keyof TValues]?: Array<Validator<TValues[Key], TValues>>;
};

export type ValidationErrors<TValues extends FormValues> = Partial<
  Record<keyof TValues, string>
>;

function isEmpty(value: unknown): boolean {
  if (value === undefined || value === null) {
    return true;
  }

  if (typeof value === "string") {
    return value.trim().length === 0;
  }

  if (Array.isArray(value)) {
    return value.length === 0;
  }

  return false;
}

export function required<TValues extends FormValues>(
  message = "This field is required.",
): Validator<unknown, TValues> {
  return (value) => {
    return isEmpty(value) ? message : undefined;
  };
}

export function email<TValues extends FormValues>(
  message = "Enter a valid email address.",
): Validator<unknown, TValues> {
  return (value) => {
    if (isEmpty(value)) {
      return undefined;
    }

    if (typeof value !== "string") {
      return message;
    }

    const emailExpression = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailExpression.test(value.trim()) ? undefined : message;
  };
}

export function minLength<TValues extends FormValues>(
  minimum: number,
  message = `Enter at least ${minimum} characters.`,
): Validator<unknown, TValues> {
  return (value) => {
    if (isEmpty(value)) {
      return undefined;
    }

    if (typeof value !== "string" || value.length < minimum) {
      return message;
    }

    return undefined;
  };
}

export function maxLength<TValues extends FormValues>(
  maximum: number,
  message = `Enter no more than ${maximum} characters.`,
): Validator<unknown, TValues> {
  return (value) => {
    if (isEmpty(value)) {
      return undefined;
    }

    if (typeof value !== "string" || value.length > maximum) {
      return message;
    }

    return undefined;
  };
}

export function numeric<TValues extends FormValues>(
  message = "Enter a numeric value.",
): Validator<unknown, TValues> {
  return (value) => {
    if (isEmpty(value)) {
      return undefined;
    }

    const normalizedValue = typeof value === "number" ? value : Number(value);

    return Number.isFinite(normalizedValue) ? undefined : message;
  };
}

export function matchesField<TValues extends FormValues>(
  fieldName: keyof TValues,
  message = "Values do not match.",
): Validator<unknown, TValues> {
  return (value, values) => {
    return value === values[fieldName] ? undefined : message;
  };
}

export function validateForm<TValues extends FormValues>(
  values: TValues,
  schema: ValidationSchema<TValues>,
): ValidationErrors<TValues> {
  const errors: ValidationErrors<TValues> = {};

  const fields = Object.keys(schema) as Array<keyof TValues>;

  fields.forEach((field) => {
    const validators = schema[field] || [];

    for (const validator of validators) {
      const error = validator(values[field], values);

      if (error) {
        errors[field] = error;
        break;
      }
    }
  });

  return errors;
}
