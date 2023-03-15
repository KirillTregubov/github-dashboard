// Source: https://dev.to/gugaguichard/replace-clsx-classnames-or-classcat-with-your-own-little-helper-3bf

type Cx = (...a: Array<undefined | null | string | boolean>) => string

const cx: Cx = (...args) =>
  args
    .flat()
    .filter((x) => x !== null && x !== undefined && typeof x !== 'boolean')
    .join(' ')

export default cx
