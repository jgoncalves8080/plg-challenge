export type CardReleaseProps = {
  id?: string
  name: string
  links: ILinks
  details: string
}

type IPatch {
  small: string
  large: string
}

type ILinks {
  patch: IPatch
}
