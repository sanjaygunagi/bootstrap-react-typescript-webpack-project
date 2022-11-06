declare namespace StylesappScssNamespace {
  export interface IStylesappScss {
    container: string
  }
}

declare const StylesappScssModule: StylesappScssNamespace.IStylesappScss & {
  /** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
  locals: StylesappScssNamespace.IStylesappScss
}

export = StylesappScssModule
