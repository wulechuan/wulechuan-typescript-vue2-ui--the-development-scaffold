/// <reference types="vue" />

declare module '@wulechuan/vue2-ui--something' {
    // export type TCSSClassNamesConfig = null | string | Array<string> | {
    //     [cssClassName: string]: boolean | undefined;
    // };

    export default class Page extends Vue {
        public myProp1?: any;
        private something: number;
        private myGetter1: () => boolean;
    }
}
