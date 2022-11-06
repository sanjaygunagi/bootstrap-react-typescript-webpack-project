declare namespace TeststylesScssNamespace {
  export interface ITeststylesScss {
    box: string;
    boxTitle: string;
  }
}

declare const TeststylesScssModule: TeststylesScssNamespace.ITeststylesScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: TeststylesScssNamespace.ITeststylesScss;
};

export = TeststylesScssModule;
