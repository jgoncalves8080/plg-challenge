interface IPatch {
  small: string;
  large: string;
}

interface IReddit {
  campaign: string;
  launch: string;
  media: string;
  recovery: string;
}

interface IFlickr {
  small: string[];
  original: string[];
}

interface ILinks {
  patch: IPatch;
  reddit: IReddit;
  flickr: IFlickr;
  presskit: string;
  webcast: string;
  youtube_id: string;
  article: string;
  wikipedia: string;
}

interface ICores {
  core: string;
  flight: number;
  gridfins: boolean;
  legs: boolean;
  reused: boolean;
  landing_attempt: boolean;
  landing_success: boolean;
  landing_type: string;
  landpad: string;
}

export class Launch {
  public fairings: string;
  public links: ILinks;
  public static_fire_date_utc: string;
  public static_fire_date_unix: number;
  public tdb: boolean;
  public net: boolean;
  public window: number;
  public rocket: string;
  public success: boolean;
  public failures: string[];
  public details: string;
  public crew: string[];
  public ships: string[];
  public capsules: string[];
  public payloads: string[];
  public launchpad: string;
  public auto_update: boolean;
  public flight_number: number;
  public name: string;
  public date_utc: string;
  public date_unix: number;
  public date_local: string;
  public date_precision: string;
  public upcoming: string;
  public cores: ICores[];
  public id: string;

  constructor(props: Omit<Launch, "id">, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = id;
    }
  }
}
