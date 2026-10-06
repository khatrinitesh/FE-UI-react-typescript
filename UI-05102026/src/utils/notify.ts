import { toast } from "sonner"

export function notifyMessage(message: string) {
  toast.message(message)
}

export function notifyAlert(message: string) {
  toast.warning(message)
}

export function notifyWarning(message: string) {
  toast.warning(message)
}

export function notifyInfo(message: string) {
  toast.info(message)
}

export function notifyDanger(message: string) {
  toast.error(message)
}

export function notifySuccess(message: string) {
  toast.success(message)
}