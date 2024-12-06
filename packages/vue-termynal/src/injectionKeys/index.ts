import type { InjectionKey } from "vue"

import type { TermynalState } from "../interfaces/termynalState"

export const termynalContext = Symbol() as InjectionKey<TermynalState>
