
//TODO: It might be better to have a gneral environment and the extend from it
declare interface Env {
 readonly NG_APP_RUNMATES_BACK: string;
};

declare interface ImportMeta {
 env: Env
};