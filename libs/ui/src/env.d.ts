import { Env, ImportMeta } from '@runmates/ui/types';

declare interface Env {
  readonly NG_APP_RUNMATES_BACK: string;
};

declare interface ImportMeta {
 readonly env: Env
};