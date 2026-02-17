import type { FileWithPath } from "@mantine/dropzone";

// @ts-expect-error error with erasableSyntaxOnly
export enum AddOn {
  allRaws = "ALLRAWS",
  rollOfFilm = "ROLL OF FILM",
  timeExtension = "30 MINS EXTENSION",
  additionalEdits = "ADDITIONAL EDITS",
  socialsVideo = "SOCIAL MEDIA VIDEO",
}

// @ts-expect-error error with erasableSyntaxOnly
export enum PreferredContactMethod {
  email = "EMAIL",
  text = "TEXT",
  call = "CALL",
  instagram = "INSTAGRAM",
}

// @ts-expect-error error with erasableSyntaxOnly
export enum PreferredPackage {
  digital = "DIGITAL",
  film = "FILM",
  complete = "COMPLETE",
  custom = "CUSTOM",
}

export interface Inclusion {
  name: string;
  rate: number;
}

export interface CustomPackage {
  duration: string;
  edits: string;
  video?: number;
  film?: number;
  raws: boolean;
  rate: number;
}

export interface ContactFormType {
  name: string;
  email?: string;
  phone?: string;
  instagram?: string;
  preferredContactMethod: PreferredContactMethod;
  preferredPackage?: PreferredPackage;
  message: string;
  addOns?: AddOn[];
  moodboardLink?: string;
  moodboardImages?: FileWithPath[];
  customPackage: CustomPackage;
}
