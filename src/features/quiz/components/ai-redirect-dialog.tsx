import { useState, type ComponentType } from 'react'
import { AlertDialog } from '@base-ui/react/alert-dialog'

export type AiService = {
  name: string
  icon: ComponentType<{ className?: string }>
  bg: string
  /** Whether the service prefills the prompt from the opened URL (true) or requires a manual paste (false). */
  autoFill: boolean
}

type AiRedirectDialogProps = {
  /** The service the user picked, or `null` when the dialog is closed. */
  service: AiService | null
  onOpenChange: (open: boolean) => void
  /** Opens the service in a new tab. Must run inside the click handler so the popup isn't blocked. */
  onConfirm: () => void
}

const PASTE_HINT = 'Ctrl + V (⌘ + V på Mac)'

export function AiRedirectDialog({ service, onOpenChange, onConfirm }: AiRedirectDialogProps) {
  const open = service !== null
  // Retain the last service so its content stays visible during the close animation,
  // after `service` has already been reset to null. Adjusting state during render (rather
  // than in an effect) is React's recommended pattern for syncing to a changing prop.
  const [shownService, setShownService] = useState(service)
  if (service && service !== shownService) {
    setShownService(service)
  }

  return (
    <AlertDialog.Root open={open} onOpenChange={onOpenChange}>
      <AlertDialog.Portal keepMounted>
        <AlertDialog.Backdrop className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm transition-opacity duration-200 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0" />
        <AlertDialog.Popup className="fixed left-1/2 top-1/2 z-[201] w-[calc(100vw-2rem)] max-w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-black/10 bg-white p-7 shadow-[0_20px_60px_rgba(0,0,0,0.18)] outline-none transition-all duration-200 data-[ending-style]:scale-95 data-[ending-style]:opacity-0 data-[starting-style]:scale-95 data-[starting-style]:opacity-0">
          {shownService && (
            <>
              <div className="flex flex-col items-center text-center">
                <div
                  className="flex h-16 w-16 items-center justify-center rounded-2xl border border-black/10 shadow-md"
                  style={{ backgroundColor: shownService.bg }}
                >
                  <shownService.icon className="h-9 w-9" />
                </div>
                <AlertDialog.Title className="mt-4 text-lg font-black tracking-tight text-neutral-900">
                  Du skickas vidare till {shownService.name}
                </AlertDialog.Title>
                <AlertDialog.Description className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                  Din prompt är kopierad och {shownService.name} öppnas i en ny flik. Så här gör du
                  när du kommer dit:
                </AlertDialog.Description>
              </div>

              <ol className="mt-4 space-y-2.5">
                {[
                  `${shownService.name} öppnas automatiskt i en ny flik.`,
                  shownService.autoFill
                    ? `Prompten fylls i åt dig. Skulle den inte dyka upp klistrar du in den med ${PASTE_HINT}.`
                    : `Klistra in prompten i textrutan med ${PASTE_HINT}.`,
                  'Skicka prompten för att få dina personliga tips.',
                ].map((step, index) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-neutral-700">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                      style={{ backgroundColor: 'var(--page-accent)' }}
                    >
                      {index + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>

              <div className="mt-6 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={onConfirm}
                  className="w-full cursor-pointer rounded-2xl px-5 py-3 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0"
                  style={{ backgroundColor: 'var(--page-accent)' }}
                >
                  Öppna {shownService.name}
                </button>
                <AlertDialog.Close className="w-full cursor-pointer rounded-2xl px-5 py-3 text-sm font-semibold text-neutral-500 transition-colors duration-200 hover:bg-black/5 hover:text-neutral-700">
                  Avbryt
                </AlertDialog.Close>
              </div>
            </>
          )}
        </AlertDialog.Popup>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  )
}
