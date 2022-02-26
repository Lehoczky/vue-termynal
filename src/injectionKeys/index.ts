import { InjectionKey } from "vue"
import { TermynalState } from "../interfaces/termynalState"

export const termynalContext = Symbol() as InjectionKey<TermynalState>
