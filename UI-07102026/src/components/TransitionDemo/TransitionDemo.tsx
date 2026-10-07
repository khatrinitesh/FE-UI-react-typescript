import { useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import './transition.css'

export function TransitionDemo() {
  const [show, setShow] = useState(false)
  const nodeRef = useRef<HTMLDivElement>(null)

  return (
    <div className="space-y-4">
      <button
        onClick={() => setShow((prev) => !prev)}
        className="rounded-md bg-black px-4 py-2 text-white"
      >
        Toggle
      </button>

      <CSSTransition
        in={show}
        timeout={300}
        classNames="fade"
        unmountOnExit
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          className="rounded-xl border p-6"
        >
          Hello React Transition Group
        </div>
      </CSSTransition>
    </div>
  )
}