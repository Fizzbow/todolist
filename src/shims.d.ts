import * as React from 'react'

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
        flex?: string
        relative?: boolean
        absolute?: boolean
        text?: string
        grid?: boolean
        before?: string
        after?: string
        shadow?: boolean
        w?: string
        h?: string
        bg?: string
        rounded?: string
        fixed?: boolean
        b?: string
        z?: string
        block?: boolean
        focus?: string
        'focus:shadow'?: boolean
    }
    interface SVGProps<T> extends SVGAttributes<T>, ClassAttributes<T> {
        w?: string
        h?: string
    }
}
